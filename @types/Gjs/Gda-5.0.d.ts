/**
 * Gda-5.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum BatchError {
    BATCH_CONFLICTING_PARAMETER_ERROR,
}
export enum ConfigError {
    DSN_NOT_FOUND_ERROR,
    PERMISSION_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_CREATION_ERROR,
}
export enum ConnectionError {
    DSN_NOT_FOUND_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_ERROR,
    NO_CNC_SPEC_ERROR,
    NO_PROVIDER_SPEC_ERROR,
    OPEN_ERROR,
    STATEMENT_TYPE_ERROR,
    CANT_LOCK_ERROR,
    TASK_NOT_FOUND_ERROR,
    UNSUPPORTED_THREADS_ERROR,
    CLOSED_ERROR,
    META_DATA_CONTEXT_ERROR,
    UNSUPPORTED_ASYNC_EXEC_ERROR,
}
export enum ConnectionEventCode {
    CONSTRAINT_VIOLATION,
    RESTRICT_VIOLATION,
    NOT_NULL_VIOLATION,
    FOREIGN_KEY_VIOLATION,
    UNIQUE_VIOLATION,
    CHECK_VIOLATION,
    INSUFFICIENT_PRIVILEGES,
    UNDEFINED_COLUMN,
    UNDEFINED_FUNCTION,
    UNDEFINED_TABLE,
    DUPLICATE_COLUMN,
    DUPLICATE_DATABASE,
    DUPLICATE_FUNCTION,
    DUPLICATE_SCHEMA,
    DUPLICATE_TABLE,
    DUPLICATE_ALIAS,
    DUPLICATE_OBJECT,
    SYNTAX_ERROR,
    UNKNOWN,
}
export enum ConnectionEventType {
    NOTICE,
    WARNING,
    ERROR,
    COMMAND,
}
export enum ConnectionFeature {
    AGGREGATES,
    BLOBS,
    INDEXES,
    INHERITANCE,
    NAMESPACES,
    PROCEDURES,
    SEQUENCES,
    SQL,
    TRANSACTIONS,
    SAVEPOINTS,
    SAVEPOINTS_REMOVE,
    TRIGGERS,
    UPDATABLE_CURSOR,
    USERS,
    VIEWS,
    XA_TRANSACTIONS,
    MULTI_THREADING,
    ASYNC_EXEC,
    LAST,
}
export enum ConnectionMetaType {
    NAMESPACES,
    TYPES,
    TABLES,
    VIEWS,
    FIELDS,
    INDEXES,
}
export enum DataComparatorError {
    MISSING_DATA_MODEL_ERROR,
    COLUMN_TYPES_MISMATCH_ERROR,
    MODEL_ACCESS_ERROR,
    USER_CANCELLED_ERROR,
}
export enum DataModelError {
    ROW_OUT_OF_RANGE_ERROR,
    COLUMN_OUT_OF_RANGE_ERROR,
    VALUES_LIST_ERROR,
    VALUE_TYPE_ERROR,
    ROW_NOT_FOUND_ERROR,
    ACCESS_ERROR,
    FEATURE_NON_SUPPORTED_ERROR,
    FILE_EXIST_ERROR,
    XML_FORMAT_ERROR,
    TRUNCATED_ERROR,
    OTHER_ERROR,
}
export enum DataModelHint {
    START_BATCH_UPDATE,
    END_BATCH_UPDATE,
    REFRESH,
}
export enum DataModelIOFormat {
    DATA_ARRAY_XML,
    TEXT_SEPARATED,
    TEXT_TABLE,
}
export enum DataModelIterError {
    DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR,
}
export enum DataPivotAggregate {
    AVG,
    COUNT,
    MAX,
    MIN,
    SUM,
}
export enum DataPivotError {
    INTERNAL_ERROR,
    SOURCE_MODEL_ERROR,
    FIELD_FORMAT_ERROR,
    USAGE_ERROR,
    OVERFLOW_ERROR,
}
export enum DataPivotFieldType {
    ROW,
    COLUMN,
}
export enum DataProxyError {
    COMMIT_ERROR,
    COMMIT_CANCELLED,
    READ_ONLY_VALUE,
    READ_ONLY_ROW,
    FILTER_ERROR,
}
export enum DataSelectConditionType {
    PK,
    ALL_COLUMNS,
}
export enum DataSelectError {
    MODIFICATION_STATEMENT_ERROR,
    MISSING_MODIFICATION_STATEMENT_ERROR,
    CONNECTION_ERROR,
    ACCESS_ERROR,
    SQL_ERROR,
    SAFETY_LOCKED_ERROR,
}
export enum DiffType {
    ADD_ROW,
    REMOVE_ROW,
    MODIFY_ROW,
}
export enum HolderError {
    STRING_CONVERSION_ERROR,
    VALUE_TYPE_ERROR,
    VALUE_NULL_ERROR,
}
export enum LdapSearchScope {
    BASE,
    ONELEVEL,
    SUBTREE,
}
export enum MetaDbObjectType {
    UNKNOWN,
    TABLE,
    VIEW,
}
export enum MetaForeignKeyPolicy {
    UNKNOWN,
    NONE,
    NO_ACTION,
    RESTRICT,
    CASCADE,
    SET_NULL,
    SET_DEFAULT,
}
export enum MetaSortType {
    ALHAPETICAL,
    DEPENDENCIES,
}
export enum MetaStoreChangeType {
    ADD,
    REMOVE,
    MODIFY,
}
export enum MetaStoreError {
    INCORRECT_SCHEMA_ERROR,
    UNSUPPORTED_PROVIDER_ERROR,
    INTERNAL_ERROR,
    META_CONTEXT_ERROR,
    MODIFY_CONTENTS_ERROR,
    EXTRACT_SQL_ERROR,
    ATTRIBUTE_NOT_FOUND_ERROR,
    ATTRIBUTE_ERROR,
    SCHEMA_OBJECT_NOT_FOUND_ERROR,
    SCHEMA_OBJECT_CONFLICT_ERROR,
    SCHEMA_OBJECT_DESCR_ERROR,
    TRANSACTION_ALREADY_STARTED_ERROR,
}
export enum MetaStructError {
    UNKNOWN_OBJECT_ERROR,
    DUPLICATE_OBJECT_ERROR,
    INCOHERENCE_ERROR,
    XML_ERROR,
}
export enum ServerOperationError {
    OBJECT_NAME_ERROR,
    INCORRECT_VALUE_ERROR,
    XML_ERROR,
}
export enum ServerOperationNodeStatus {
    OPTIONAL,
    REQUIRED,
    UNKNOWN,
}
export enum ServerOperationNodeType {
    PARAMLIST,
    DATA_MODEL,
    PARAM,
    SEQUENCE,
    SEQUENCE_ITEM,
    DATA_MODEL_COLUMN,
    UNKNOWN,
}
export enum ServerOperationType {
    CREATE_DB,
    DROP_DB,
    CREATE_TABLE,
    DROP_TABLE,
    RENAME_TABLE,
    ADD_COLUMN,
    DROP_COLUMN,
    CREATE_INDEX,
    DROP_INDEX,
    CREATE_VIEW,
    DROP_VIEW,
    COMMENT_TABLE,
    COMMENT_COLUMN,
    CREATE_USER,
    ALTER_USER,
    DROP_USER,
    LAST,
}
export enum ServerProviderError {
    METHOD_NON_IMPLEMENTED_ERROR,
    PREPARE_STMT_ERROR,
    EMPTY_STMT_ERROR,
    MISSING_PARAM_ERROR,
    STATEMENT_EXEC_ERROR,
    OPERATION_ERROR,
    INTERNAL_ERROR,
    BUSY_ERROR,
    NON_SUPPORTED_ERROR,
    SERVER_VERSION_ERROR,
    DATA_ERROR,
    DEFAULT_VALUE_HANDLING_ERROR,
    MISUSE_ERROR,
    FILE_NOT_FOUND_ERROR,
}
export enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
export enum SqlBuilderError {
    WRONG_TYPE_ERROR,
    MISUSE_ERROR,
}
export enum SqlError {
    STRUCTURE_CONTENTS_ERROR,
    MALFORMED_IDENTIFIER_ERROR,
    MISSING_IDENTIFIER_ERROR,
    VALIDATION_ERROR,
}
export enum SqlOperatorType {
    AND,
    OR,
    EQ,
    IS,
    LIKE,
    BETWEEN,
    GT,
    LT,
    GEQ,
    LEQ,
    DIFF,
    REGEXP,
    REGEXP_CI,
    NOT_REGEXP,
    NOT_REGEXP_CI,
    SIMILAR,
    ISNULL,
    ISNOTNULL,
    NOT,
    IN,
    NOTIN,
    CONCAT,
    PLUS,
    MINUS,
    STAR,
    DIV,
    REM,
    BITAND,
    BITOR,
    BITNOT,
    ILIKE,
    NOTLIKE,
    NOTILIKE,
    GLOB,
}
export enum SqlParserError {
    SYNTAX_ERROR,
    OVERFLOW_ERROR,
    EMPTY_SQL_ERROR,
}
export enum SqlParserFlavour {
    STANDARD,
    SQLITE,
    MYSQL,
    ORACLE,
    POSTGRESQL,
}
export enum SqlParserMode {
    PARSE,
    DELIMIT,
}
export enum SqlSelectJoinType {
    CROSS,
    NATURAL,
    INNER,
    LEFT,
    RIGHT,
    FULL,
}
export enum SqlStatementCompoundType {
    UNION,
    UNION_ALL,
    INTERSECT,
    INTERSECT_ALL,
    EXCEPT,
    EXCEPT_ALL,
}
export enum SqlStatementType {
    SELECT,
    INSERT,
    UPDATE,
    DELETE,
    COMPOUND,
    BEGIN,
    ROLLBACK,
    COMMIT,
    SAVEPOINT,
    ROLLBACK_SAVEPOINT,
    DELETE_SAVEPOINT,
    UNKNOWN,
    NONE,
}
export enum StatementError {
    PARSE_ERROR,
    SYNTAX_ERROR,
    NO_CNC_ERROR,
    CNC_CLOSED_ERROR,
    EXEC_ERROR,
    PARAM_TYPE_ERROR,
    PARAM_ERROR,
}
export enum ThreadNotificationType {
    JOB,
    SIGNAL,
}
export enum ThreadWrapperError {
    THREAD_WRAPPER_UNKNOWN_ERROR,
}
export enum TransactionIsolation {
    UNKNOWN,
    READ_COMMITTED,
    READ_UNCOMMITTED,
    REPEATABLE_READ,
    SERIALIZABLE,
}
export enum TransactionStatusEventType {
    SAVEPOINT,
    SQL,
    SUB_TRANSACTION,
}
export enum TransactionStatusState {
    OK,
    FAILED,
}
export enum TreeError {
    TREE_UNKNOWN_ERROR,
}
export enum TreeManagerError {
    TREE_MANAGER_UNKNOWN_ERROR,
}
export enum TreeNodeError {
    TREE_NODE_UNKNOWN_ERROR,
}
export enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
export enum ConnectionOptions {
    NONE,
    READ_ONLY,
    SQL_IDENTIFIERS_CASE_SENSITIVE,
    THREAD_SAFE,
    THREAD_ISOLATED,
    AUTO_META_DATA,
}
export enum DataModelAccessFlags {
    RANDOM,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    INSERT,
    UPDATE,
    DELETE,
    WRITE,
}
export enum MetaGraphInfo {
    META_GRAPH_COLUMNS,
}
export enum MetaStructFeature {
    NONE,
    FOREIGN_KEYS,
    VIEW_DEPENDENCIES,
    ALL,
}
export enum ServerOperationCreateTableFlag {
    NOTHING_FLAG,
    PKEY_FLAG,
    NOT_NULL_FLAG,
    UNIQUE_FLAG,
    AUTOINC_FLAG,
    FKEY_FLAG,
    PKEY_AUTOINC_FLAG,
}
export enum SqlIdentifierStyle {
    LOWER_CASE,
    UPPER_CASE,
}
export enum StatementModelUsage {
    RANDOM_ACCESS,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    ALLOW_NOPARAM,
    OFFLINE,
}
export enum StatementSqlFlag {
    PARAMS_AS_VALUES,
    PRETTY,
    PARAMS_LONG,
    PARAMS_SHORT,
    PARAMS_AS_COLON,
    PARAMS_AS_DOLLAR,
    PARAMS_AS_QMARK,
    PARAMS_AS_UQMARK,
    TIMEZONE_TO_GMT,
}
export enum ValueAttribute {
    NONE,
    IS_NULL,
    CAN_BE_NULL,
    IS_DEFAULT,
    CAN_BE_DEFAULT,
    IS_UNCHANGED,
    ACTIONS_SHOWN,
    DATA_NON_VALID,
    HAS_VALUE_ORIG,
    NO_MODIF,
    UNUSED,
}
export const ATTRIBUTE_AUTO_INCREMENT: string
export const ATTRIBUTE_DESCRIPTION: string
export const ATTRIBUTE_IS_DEFAULT: string
export const ATTRIBUTE_NAME: string
export const ATTRIBUTE_NUMERIC_PRECISION: string
export const ATTRIBUTE_NUMERIC_SCALE: string
export const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string
export const EXTRA_AUTO_INCREMENT: string
export const SQLSTATE_GENERAL_ERROR: string
export const SQLSTATE_NO_ERROR: string
export const TIMEZONE_INVALID: number
export function alphanum_to_text(text: string): string
export function binary_copy(boxed?: object | null): object | null
export function binary_free(boxed?: object | null): void
export function blob_copy(boxed?: object | null): object | null
export function blob_free(boxed?: object | null): void
export function completion_list_get(cnc: Connection, sql: string, start: number, end: number): string[] | null
export function compute_dml_statements(cnc: Connection, select_stmt: Statement, require_pk: boolean, insert_stmt?: Statement | null, update_stmt?: Statement | null, delete_stmt?: Statement | null): boolean
export function data_handler_get_default(for_type: GObject.Type): DataHandler
export function data_model_error_quark(): GLib.Quark
export function default_escape_string(string: string): string
export function default_unescape_string(string: string): string
export function dsn_split(string: string, out_dsn: string, out_username: string, out_password: string): void
export function g_type_from_string(str: string): GObject.Type
export function g_type_to_string(type: GObject.Type): string
export function geometricpoint_copy(boxed?: object | null): object | null
export function geometricpoint_free(boxed?: object | null): void
export function get_application_exec_path(app_name: string): string
export function identifier_equal(id1: string, id2: string): boolean
export function identifier_hash(id: string): number
export function init(): void
export function locale_changed(): void
export function log_disable(): void
export function log_enable(): void
export function log_is_enabled(): boolean
export function mutex_free(mutex: Mutex): void
export function mutex_lock(mutex: Mutex): void
export function mutex_trylock(mutex: Mutex): boolean
export function mutex_unlock(mutex: Mutex): void
export function parse_formatted_date(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
export function parse_formatted_time(timegda: Time, value: string, sep: number): boolean
export function parse_formatted_timestamp(timestamp: Timestamp, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
export function parse_iso8601_date(gdate: GLib.Date, value: string): boolean
export function parse_iso8601_time(timegda: Time, value: string): boolean
export function parse_iso8601_timestamp(timestamp: Timestamp, value: string): boolean
export function rewrite_statement_for_null_parameters(stmt: Statement, params: Set, out_stmt?: Statement | null): boolean
export function rfc1738_decode(string: string): boolean
export function rfc1738_encode(string: string): string
export function select_alter_select_for_empty(stmt: Statement): Statement
export function sql_error_quark(): GLib.Quark
export function sql_identifier_quote(id: string, cnc: Connection | null, prov: ServerProvider | null, meta_store_convention: boolean, force_quotes: boolean): string
export function sql_identifier_split(id: string): string[] | null
export function sql_operation_operator_from_string(op: string): SqlOperatorType
export function sql_operation_operator_to_string(op: SqlOperatorType): string
export function sql_select_join_type_to_string(type: SqlSelectJoinType): string
export function string_to_binary(str?: string | null): Binary
export function string_to_blob(str: string): Blob
export function text_to_alphanum(text: string): string
export function time_copy(boxed?: object | null): object | null
export function time_free(boxed?: object | null): void
export function timestamp_copy(boxed?: object | null): object | null
export function timestamp_free(boxed?: object | null): void
export function utility_check_data_model(model: DataModel, types: GObject.Type[]): boolean
export function utility_data_model_dump_data_to_xml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, use_col_ids: boolean): boolean
export function utility_data_model_find_column_description(model: DataSelect, field_name: string): string
export function utility_holder_load_attributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[]): boolean
export function value_compare(value1: any, value2: any): number
export function value_differ(value1: any, value2: any): number
export function value_stringify(value: any): string
export interface AttributesManagerFunc {
    (att_name: string, value: any, data?: object | null): void
}
export interface AttributesManagerSignal {
    (obj: GObject.Object, att_name: string, value: any, data?: object | null): void
}
export interface ServerProviderAsyncCallback {
    (provider: ServerProvider, cnc: Connection, task_id: number, result_status: boolean, error: GLib.Error, data?: object | null): void
}
export interface ServerProviderExecCallback {
    (provider: ServerProvider, cnc: Connection, task_id: number, result_obj: GObject.Object, error: GLib.Error, data?: object | null): void
}
export interface SqlRenderingValue {
    (value: any, context: SqlRenderingContext): string
}
export interface SqlReservedKeywordsFunc {
    (word: string): boolean
}
export interface ThreadWrapperCallback {
    (wrapper: ThreadWrapper, instance: object | null, signame: string, n_param_values: number, param_values: any, gda_reserved?: object | null, data?: object | null): void
}
export interface ThreadWrapperFunc {
    (arg?: object | null): object | null
}
export interface ThreadWrapperVoidFunc {
    (arg?: object | null): void
}
export class DataHandler {
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.DataHandler */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    static name: string
    /* Static methods and pseudo-constructors */
    static get_default(for_type: GObject.Type): DataHandler
}
export class DataModel {
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModel */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModel) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataModel) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModel) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataModel) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModel) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataModel) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModel, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataModel, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModel, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataModel, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModel, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataModel, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export class Lockable {
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.Lockable */
    vfunc_i_lock(): void
    vfunc_i_trylock(): boolean
    vfunc_i_unlock(): void
    static name: string
}
export interface Batch_ConstructProps extends GObject.Object_ConstructProps {
}
export class Batch {
    /* Fields of Gda.Batch */
    object: GObject.Object
    priv: BatchPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Batch */
    add_statement(stmt: Statement): void
    copy(): Batch
    get_parameters(): [ /* returnType */ boolean, /* out_params */ Set | null ]
    get_statements(): Statement[]
    remove_statement(stmt: Statement): void
    serialize(): string
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
    /* Virtual methods of Gda.Batch */
    vfunc_changed(changed_stmt: Statement): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Batch */
    connect(sigName: "changed", callback: (($obj: Batch, changed_stmt: GObject.Object) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Batch, changed_stmt: GObject.Object) => void)): number
    emit(sigName: "changed", changed_stmt: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Batch
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface BlobOp_ConstructProps extends GObject.Object_ConstructProps {
}
export class BlobOp {
    /* Fields of Gda.BlobOp */
    object: GObject.Object
    _gda_reserved1: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.BlobOp */
    get_length(): number
    read(blob: Blob, offset: number, size: number): number
    read_all(blob: Blob): boolean
    write(blob: Blob, offset: number): number
    write_all(blob: Blob): boolean
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
    /* Virtual methods of Gda.BlobOp */
    vfunc_get_length(): number
    vfunc_read(blob: Blob, offset: number, size: number): number
    vfunc_write(blob: Blob, offset: number): number
    vfunc_write_all(blob: Blob): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlobOp_ConstructProps)
    _init (config?: BlobOp_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Column_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
}
export class Column {
    /* Properties of Gda.Column */
    id: string
    /* Fields of Gda.Column */
    object: GObject.Object
    priv: ColumnPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Column */
    copy(): Column
    get_allow_null(): boolean
    get_attribute(attribute: string): any
    get_auto_increment(): boolean
    get_dbms_type(): string
    get_default_value(): any | null
    get_description(): string
    get_g_type(): GObject.Type
    get_name(): string
    get_position(): number
    set_allow_null(allow: boolean): void
    set_attribute(attribute: string, value?: any | null, destroy?: GLib.DestroyNotify | null): void
    set_auto_increment(is_auto: boolean): void
    set_dbms_type(dbms_type: string): void
    set_default_value(default_value?: any | null): void
    set_description(title: string): void
    set_g_type(type: GObject.Type): void
    set_name(name: string): void
    set_position(position: number): void
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
    /* Virtual methods of Gda.Column */
    vfunc_g_type_changed(old_type: GObject.Type, new_type: GObject.Type): void
    vfunc_name_changed(old_name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Column */
    connect(sigName: "g-type-changed", callback: (($obj: Column, old_type: GObject.Type, new_type: GObject.Type) => void)): number
    connect_after(sigName: "g-type-changed", callback: (($obj: Column, old_type: GObject.Type, new_type: GObject.Type) => void)): number
    emit(sigName: "g-type-changed", old_type: GObject.Type, new_type: GObject.Type): void
    connect(sigName: "name-changed", callback: (($obj: Column, old_name: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Column, old_name: string) => void)): number
    emit(sigName: "name-changed", old_name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Column
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
    system_filename?: string
    user_filename?: string
}
export class Config {
    /* Properties of Gda.Config */
    system_filename: string
    user_filename: string
    /* Fields of Gda.Config */
    object: GObject.Object
    priv: ConfigPrivate
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
    /* Virtual methods of Gda.Config */
    vfunc_dsn_added(new_dsn: DsnInfo): void
    vfunc_dsn_changed(dsn: DsnInfo): void
    vfunc_dsn_removed(old_dsn: DsnInfo): void
    vfunc_dsn_to_be_removed(old_dsn: DsnInfo): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Config */
    connect(sigName: "dsn-added", callback: (($obj: Config, new_dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-added", callback: (($obj: Config, new_dsn?: object | null) => void)): number
    emit(sigName: "dsn-added", new_dsn?: object | null): void
    connect(sigName: "dsn-changed", callback: (($obj: Config, dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-changed", callback: (($obj: Config, dsn?: object | null) => void)): number
    emit(sigName: "dsn-changed", dsn?: object | null): void
    connect(sigName: "dsn-removed", callback: (($obj: Config, old_dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-removed", callback: (($obj: Config, old_dsn?: object | null) => void)): number
    emit(sigName: "dsn-removed", old_dsn?: object | null): void
    connect(sigName: "dsn-to-be-removed", callback: (($obj: Config, old_dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-to-be-removed", callback: (($obj: Config, old_dsn?: object | null) => void)): number
    emit(sigName: "dsn-to-be-removed", old_dsn?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::system-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static can_modify_system_config(): boolean
    static define_dsn(info: DsnInfo): boolean
    static dsn_needs_authentication(dsn_name: string): boolean
    static error_quark(): GLib.Quark
    static get(): Config
    static get_dsn_info(dsn_name: string): DsnInfo
    static get_dsn_info_at_index(index: number): DsnInfo
    static get_dsn_info_index(dsn_name: string): number
    static get_nb_dsn(): number
    static get_provider(provider_name: string): ServerProvider
    static get_provider_info(provider_name: string): ProviderInfo
    static list_dsn(): DataModel
    static list_providers(): DataModel
    static remove_dsn(dsn_name: string): boolean
    static $gtype: GObject.Type
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    auth_string?: string
    cnc_string?: string
    dsn?: string
    events_history_size?: number
    execution_slowdown?: number
    execution_timer?: boolean
    is_wrapper?: boolean
    meta_store?: MetaStore
    monitor_wrapped_in_mainloop?: boolean
    provider?: ServerProvider
    thread_owner?: object
}
export class Connection {
    /* Properties of Gda.Connection */
    auth_string: string
    cnc_string: string
    dsn: string
    events_history_size: number
    execution_slowdown: number
    execution_timer: boolean
    is_wrapper: boolean
    meta_store: MetaStore
    monitor_wrapped_in_mainloop: boolean
    provider: ServerProvider
    thread_owner: object
    /* Fields of Gda.Connection */
    object: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Connection */
    add_event(event: ConnectionEvent): void
    add_prepared_statement(gda_stmt: Statement, prepared_stmt: PStmt): void
    add_savepoint(name?: string | null): boolean
    async_cancel(task_id: number): boolean
    async_fetch_result(task_id: number): [ /* returnType */ GObject.Object, /* last_insert_row */ Set | null ]
    async_statement_execute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage, col_types: GObject.Type[] | null, need_last_insert_row: boolean): number
    batch_execute(batch: Batch, params: Set | null, model_usage: StatementModelUsage): GObject.Object[]
    begin_transaction(name: string | null, level: TransactionIsolation): boolean
    clear_events_list(): void
    close(): void
    close_no_warning(): void
    commit_transaction(name?: string | null): boolean
    create_operation(type: ServerOperationType, options?: Set | null): ServerOperation
    create_parser(): SqlParser
    del_prepared_statement(gda_stmt: Statement): void
    delete_row_from_table(table: string, condition_column_name: string, condition_value: any): boolean
    delete_savepoint(name?: string | null): boolean
    execute_non_select_command(sql: string): number
    execute_select_command(sql: string): DataModel
    get_authentication(): string
    get_cnc_string(): string
    get_date_format(): [ /* returnType */ boolean, /* out_first */ GLib.DateDMY | null, /* out_second */ GLib.DateDMY | null, /* out_third */ GLib.DateDMY | null, /* out_sep */ string | null ]
    get_dsn(): string
    get_events(): ConnectionEvent[]
    get_meta_store(): MetaStore
    get_meta_store_data_v(meta_type: ConnectionMetaType, filters: Holder[]): DataModel
    get_options(): ConnectionOptions
    get_prepared_statement(gda_stmt: Statement): PStmt
    get_provider(): ServerProvider
    get_provider_name(): string
    get_transaction_status(): TransactionStatus
    insert_row_into_table_v(table: string, col_names: string[], values: any[]): boolean
    is_opened(): boolean
    open(): boolean
    parse_sql_string(sql: string): [ /* returnType */ Statement, /* params */ Set | null ]
    perform_operation(op: ServerOperation): boolean
    point_available_event(type: ConnectionEventType): ConnectionEvent
    quote_sql_identifier(id: string): string
    repetitive_statement_execute(rstmt: RepetitiveStatement, model_usage: StatementModelUsage, col_types: GObject.Type[] | null, stop_on_error: boolean): GObject.Object[]
    rollback_savepoint(name?: string | null): boolean
    rollback_transaction(name?: string | null): boolean
    statement_execute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage): [ /* returnType */ GObject.Object, /* last_insert_row */ Set | null ]
    statement_execute_non_select(stmt: Statement, params?: Set | null): [ /* returnType */ number, /* last_insert_row */ Set | null ]
    statement_execute_select(stmt: Statement, params?: Set | null): DataModel
    statement_execute_select_full(stmt: Statement, params: Set | null, model_usage: StatementModelUsage, col_types?: GObject.Type[] | null): DataModel
    statement_prepare(stmt: Statement): boolean
    statement_to_sql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
    supports_feature(feature: ConnectionFeature): boolean
    update_meta_store(context?: MetaContext | null): boolean
    update_row_in_table_v(table: string, condition_column_name: string, condition_value: any, col_names: string[], values: any[]): boolean
    value_to_sql_string(from: any): string
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
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.Connection */
    vfunc_conn_closed(): void
    vfunc_conn_opened(): void
    vfunc_conn_to_close(): void
    vfunc_dsn_changed(): void
    vfunc_error(error: ConnectionEvent): void
    vfunc_transaction_status_changed(): void
    vfunc_i_lock(): void
    vfunc_i_trylock(): boolean
    vfunc_i_unlock(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Connection */
    connect(sigName: "conn-closed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "conn-closed", callback: (($obj: Connection) => void)): number
    emit(sigName: "conn-closed"): void
    connect(sigName: "conn-opened", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "conn-opened", callback: (($obj: Connection) => void)): number
    emit(sigName: "conn-opened"): void
    connect(sigName: "conn-to-close", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "conn-to-close", callback: (($obj: Connection) => void)): number
    emit(sigName: "conn-to-close"): void
    connect(sigName: "dsn-changed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "dsn-changed", callback: (($obj: Connection) => void)): number
    emit(sigName: "dsn-changed"): void
    connect(sigName: "error", callback: (($obj: Connection, event: ConnectionEvent) => void)): number
    connect_after(sigName: "error", callback: (($obj: Connection, event: ConnectionEvent) => void)): number
    emit(sigName: "error", event: ConnectionEvent): void
    connect(sigName: "transaction-status-changed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "transaction-status-changed", callback: (($obj: Connection) => void)): number
    emit(sigName: "transaction-status-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cnc-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dsn", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dsn", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events-history-size", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events-history-size", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::execution-slowdown", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-slowdown", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::execution-timer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-timer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-wrapper", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-wrapper", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitor-wrapped-in-mainloop", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-wrapped-in-mainloop", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thread-owner", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread-owner", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_dsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection
    static new_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    static error_quark(): GLib.Quark
    static open_from_dsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection
    static open_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    static open_sqlite(directory: string | null, filename: string, auto_unlink: boolean): Connection
    static string_split(string: string, out_cnc_params: string, out_provider: string, out_username: string, out_password?: string | null): void
    static $gtype: GObject.Type
}
export interface ConnectionEvent_ConstructProps extends GObject.Object_ConstructProps {
    type?: number
}
export class ConnectionEvent {
    /* Properties of Gda.ConnectionEvent */
    type: number
    /* Fields of Gda.ConnectionEvent */
    object: GObject.Object
    priv: ConnectionEventPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.ConnectionEvent */
    get_code(): number
    get_description(): string
    get_event_type(): ConnectionEventType
    get_gda_code(): ConnectionEventCode
    get_source(): string
    get_sqlstate(): string
    set_code(code: number): void
    set_description(description?: string | null): void
    set_event_type(type: ConnectionEventType): void
    set_gda_code(code: ConnectionEventCode): void
    set_source(source: string): void
    set_sqlstate(sqlstate: string): void
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
    connect(sigName: "notify", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConnectionEvent_ConstructProps)
    _init (config?: ConnectionEvent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataAccessWrapper_ConstructProps extends GObject.Object_ConstructProps {
    model?: DataModel
}
export class DataAccessWrapper {
    /* Fields of Gda.DataAccessWrapper */
    object: GObject.Object
    priv: DataAccessWrapperPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataAccessWrapper */
    set_mapping(mapping: number[] | null): boolean
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataAccessWrapper */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataAccessWrapper) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataAccessWrapper) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataAccessWrapper) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataAccessWrapper) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataAccessWrapper) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataAccessWrapper) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataAccessWrapper_ConstructProps)
    _init (config?: DataAccessWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataComparator_ConstructProps extends GObject.Object_ConstructProps {
    new_model?: DataModel
    old_model?: DataModel
}
export class DataComparator {
    /* Properties of Gda.DataComparator */
    new_model: DataModel
    old_model: DataModel
    /* Fields of Gda.DataComparator */
    object: GObject.Object
    priv: DataComparatorPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataComparator */
    compute_diff(): boolean
    get_diff(pos: number): Diff
    get_n_diffs(): number
    set_key_columns(col_numbers: number[]): void
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
    /* Virtual methods of Gda.DataComparator */
    vfunc_diff_computed(diff: Diff): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataComparator */
    connect(sigName: "diff-computed", callback: (($obj: DataComparator, object?: object | null) => boolean)): number
    connect_after(sigName: "diff-computed", callback: (($obj: DataComparator, object?: object | null) => boolean)): number
    emit(sigName: "diff-computed", object?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::new-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::old-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataComparator_ConstructProps)
    _init (config?: DataComparator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(old_model: DataModel, new_model: DataModel): DataComparator
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelArray_ConstructProps extends GObject.Object_ConstructProps {
    n_columns?: number
    read_only?: boolean
}
export class DataModelArray {
    /* Properties of Gda.DataModelArray */
    n_columns: number
    read_only: boolean
    /* Fields of Gda.DataModelArray */
    object: GObject.Object
    priv: DataModelArrayPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelArray */
    clear(): void
    get_row(row: number): Row
    set_n_columns(cols: number): void
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModelArray */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelArray) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataModelArray) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelArray) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataModelArray) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelArray) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataModelArray) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelArray, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataModelArray, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelArray, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataModelArray, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelArray, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataModelArray, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::n-columns", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelArray_ConstructProps)
    _init (config?: DataModelArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelDir_ConstructProps extends GObject.Object_ConstructProps {
    basedir?: string
}
export class DataModelDir {
    /* Fields of Gda.DataModelDir */
    object: GObject.Object
    priv: DataModelDirPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelDir */
    clean_errors(): void
    get_errors(): GLib.Error[]
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModelDir */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelDir) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataModelDir) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelDir) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataModelDir) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelDir) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataModelDir) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelDir, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataModelDir, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelDir, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataModelDir, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelDir, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataModelDir, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelDir_ConstructProps)
    _init (config?: DataModelDir_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelImport_ConstructProps extends GObject.Object_ConstructProps {
    data_string?: string
    filename?: string
    options?: Set
    random_access?: boolean
    strict?: boolean
    xml_node?: object
}
export class DataModelImport {
    /* Properties of Gda.DataModelImport */
    strict: boolean
    /* Fields of Gda.DataModelImport */
    object: GObject.Object
    priv: DataModelImportPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelImport */
    clean_errors(): void
    get_errors(): GLib.Error[]
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModelImport */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelImport) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataModelImport) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelImport) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataModelImport) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelImport) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataModelImport) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelImport, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataModelImport, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelImport, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataModelImport, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelImport, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataModelImport, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::strict", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strict", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelImport_ConstructProps)
    _init (config?: DataModelImport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_file(filename: string, random_access: boolean, options?: Set | null): DataModel
    static new_mem(data: string, random_access: boolean, options?: Set | null): DataModel
    static new_xml_node(node: libxml2.NodePtr): DataModel
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelIter_ConstructProps extends Set_ConstructProps {
    current_row?: number
    data_model?: DataModel
    forced_model?: DataModel
    update_model?: boolean
}
export class DataModelIter {
    /* Properties of Gda.DataModelIter */
    current_row: number
    data_model: DataModel
    forced_model: DataModel
    update_model: boolean
    /* Properties of Gda.Set */
    description: string
    id: string
    name: string
    validate_changes: boolean
    /* Fields of Gda.DataModelIter */
    object: Set
    priv: DataModelIterPrivate
    /* Fields of Gda.Set */
    holders: Holder[]
    nodes_list: SetNode[]
    sources_list: SetSource[]
    groups_list: SetGroup[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelIter */
    get_column_for_param(param: Holder): number
    get_holder_for_field(col: number): Holder
    get_row(): number
    get_value_at(col: number): any | null
    get_value_at_e(col: number): any | null
    get_value_for_field(field_name: string): any | null
    invalidate_contents(): void
    is_valid(): boolean
    move_next(): boolean
    move_prev(): boolean
    move_to_row(row: number): boolean
    set_value_at(col: number, value: any): boolean
    /* Methods of Gda.Set */
    add_holder(holder: Holder): boolean
    copy(): Set
    get_group(holder: Holder): SetGroup
    get_holder(holder_id: string): Holder
    get_holder_value(holder_id: string): any | null
    get_node(holder: Holder): SetNode
    get_nth_holder(pos: number): Holder
    get_source(holder: Holder): SetSource
    get_source_for_model(model: DataModel): SetSource
    merge_with_set(set_to_merge: Set): void
    remove_holder(holder: Holder): void
    replace_source_model(source: SetSource, model: DataModel): void
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
    /* Virtual methods of Gda.DataModelIter */
    vfunc_end_of_data(): void
    vfunc_row_changed(row: number): void
    /* Virtual methods of Gda.Set */
    vfunc_holder_attr_changed(holder: Holder, attr_name: string, attr_value: any): void
    vfunc_holder_changed(holder: Holder): void
    vfunc_holder_type_set(holder: Holder): void
    vfunc_public_data_changed(): void
    vfunc_source_model_changed(source: SetSource): void
    vfunc_validate_holder_change(holder: Holder, new_value: any): GLib.Error
    vfunc_validate_set(): GLib.Error
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModelIter */
    connect(sigName: "end-of-data", callback: (($obj: DataModelIter) => void)): number
    connect_after(sigName: "end-of-data", callback: (($obj: DataModelIter) => void)): number
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: (($obj: DataModelIter, row: number) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: DataModelIter, row: number) => void)): number
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: DataModelIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    connect_after(sigName: "holder-attr-changed", callback: (($obj: DataModelIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any): void
    connect(sigName: "holder-changed", callback: (($obj: DataModelIter, object: Holder) => void)): number
    connect_after(sigName: "holder-changed", callback: (($obj: DataModelIter, object: Holder) => void)): number
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: DataModelIter, holder: Holder) => void)): number
    connect_after(sigName: "holder-type-set", callback: (($obj: DataModelIter, holder: Holder) => void)): number
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: DataModelIter) => void)): number
    connect_after(sigName: "public-data-changed", callback: (($obj: DataModelIter) => void)): number
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: DataModelIter, source?: object | null) => void)): number
    connect_after(sigName: "source-model-changed", callback: (($obj: DataModelIter, source?: object | null) => void)): number
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: DataModelIter, holder: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-holder-change", callback: (($obj: DataModelIter, holder: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any): void
    connect(sigName: "validate-set", callback: (($obj: DataModelIter) => GLib.Error)): number
    connect_after(sigName: "validate-set", callback: (($obj: DataModelIter) => GLib.Error)): number
    emit(sigName: "validate-set"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forced-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forced-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelIter_ConstructProps)
    _init (config?: DataModelIter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelLdap_ConstructProps extends GObject.Object_ConstructProps {
    attributes?: string
    base?: string
    cnc?: Connection
    filter?: string
    scope?: number
}
export class DataModelLdap {
    /* Fields of Gda.DataModelLdap */
    object: GObject.Object
    priv: DataModelLdapPrivate
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModelLdap */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelLdap) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataModelLdap) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelLdap) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataModelLdap) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelLdap) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataModelLdap) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelLdap, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataModelLdap, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelLdap, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataModelLdap, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelLdap, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataModelLdap, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelLdap_ConstructProps)
    _init (config?: DataModelLdap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_config(cnc: Connection, base_dn: string | null, filter: string | null, attributes: string | null, scope: LdapSearchScope): DataModelLdap
    static compute_columns(cnc: Connection, attributes?: string | null): Column[]
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataPivot_ConstructProps extends GObject.Object_ConstructProps {
    model?: DataModel
}
export class DataPivot {
    /* Properties of Gda.DataPivot */
    model: DataModel
    /* Fields of Gda.DataPivot */
    object: GObject.Object
    priv: DataPivotPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataPivot */
    add_data(aggregate_type: DataPivotAggregate, field: string, alias?: string | null): boolean
    add_field(field_type: DataPivotFieldType, field: string, alias?: string | null): boolean
    populate(): boolean
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataPivot */
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataPivot) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataPivot) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataPivot) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataPivot) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataPivot) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataPivot) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataPivot, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataPivot, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataPivot, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataPivot, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataPivot, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataPivot, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataPivot_ConstructProps)
    _init (config?: DataPivot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataProxy_ConstructProps extends GObject.Object_ConstructProps {
    cache_changes?: boolean
    defer_sync?: boolean
    model?: DataModel
    prepend_null_entry?: boolean
    sample_size?: number
}
export class DataProxy {
    /* Properties of Gda.DataProxy */
    cache_changes: boolean
    defer_sync: boolean
    model: DataModel
    prepend_null_entry: boolean
    sample_size: number
    /* Fields of Gda.DataProxy */
    object: GObject.Object
    priv: DataProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataProxy */
    alter_value_attributes(proxy_row: number, col: number, alter_flags: ValueAttribute): void
    apply_all_changes(): boolean
    apply_row_changes(proxy_row: number): boolean
    cancel_all_changes(): boolean
    cancel_row_changes(proxy_row: number, col: number): void
    delete(proxy_row: number): void
    get_filter_expr(): string
    get_filtered_n_rows(): number
    get_n_modified_rows(): number
    get_n_new_rows(): number
    get_proxied_model(): DataModel
    get_proxied_model_n_cols(): number
    get_proxied_model_n_rows(): number
    get_proxied_model_row(proxy_row: number): number
    get_sample_end(): number
    get_sample_size(): number
    get_sample_start(): number
    get_value_attributes(proxy_row: number, col: number): ValueAttribute
    get_values(proxy_row: number, cols_index: number[]): any[]
    has_changed(): boolean
    is_read_only(): boolean
    row_has_changed(proxy_row: number): boolean
    row_is_deleted(proxy_row: number): boolean
    row_is_inserted(proxy_row: number): boolean
    set_filter_expr(filter_expr?: string | null): boolean
    set_ordering_column(col: number): boolean
    set_sample_size(sample_size: number): void
    set_sample_start(sample_start: number): void
    undelete(proxy_row: number): void
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataProxy */
    vfunc_filter_changed(): void
    vfunc_row_changes_applied(row: number, proxied_row: number): void
    vfunc_row_delete_changed(row: number, to_be_deleted: boolean): void
    vfunc_sample_changed(sample_start: number, sample_end: number): void
    vfunc_sample_size_changed(sample_size: number): void
    vfunc_validate_row_changes(row: number, proxied_row: number): GLib.Error
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataProxy */
    connect(sigName: "filter-changed", callback: (($obj: DataProxy) => void)): number
    connect_after(sigName: "filter-changed", callback: (($obj: DataProxy) => void)): number
    emit(sigName: "filter-changed"): void
    connect(sigName: "row-changes-applied", callback: (($obj: DataProxy, row: number, proxied_row: number) => void)): number
    connect_after(sigName: "row-changes-applied", callback: (($obj: DataProxy, row: number, proxied_row: number) => void)): number
    emit(sigName: "row-changes-applied", row: number, proxied_row: number): void
    connect(sigName: "row-delete-changed", callback: (($obj: DataProxy, row: number, to_be_deleted: boolean) => void)): number
    connect_after(sigName: "row-delete-changed", callback: (($obj: DataProxy, row: number, to_be_deleted: boolean) => void)): number
    emit(sigName: "row-delete-changed", row: number, to_be_deleted: boolean): void
    connect(sigName: "sample-changed", callback: (($obj: DataProxy, sample_start: number, sample_end: number) => void)): number
    connect_after(sigName: "sample-changed", callback: (($obj: DataProxy, sample_start: number, sample_end: number) => void)): number
    emit(sigName: "sample-changed", sample_start: number, sample_end: number): void
    connect(sigName: "sample-size-changed", callback: (($obj: DataProxy, sample_size: number) => void)): number
    connect_after(sigName: "sample-size-changed", callback: (($obj: DataProxy, sample_size: number) => void)): number
    emit(sigName: "sample-size-changed", sample_size: number): void
    connect(sigName: "validate-row-changes", callback: (($obj: DataProxy, row: number, proxied_row: number) => GLib.Error)): number
    connect_after(sigName: "validate-row-changes", callback: (($obj: DataProxy, row: number, proxied_row: number) => GLib.Error)): number
    emit(sigName: "validate-row-changes", row: number, proxied_row: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataProxy) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataProxy) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataProxy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataProxy) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataProxy) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataProxy) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataProxy, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataProxy, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataProxy, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataProxy, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataProxy, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataProxy, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::cache-changes", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-changes", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::defer-sync", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defer-sync", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prepend-null-entry", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepend-null-entry", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-size", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-size", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataProxy_ConstructProps)
    _init (config?: DataProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: DataModel): DataProxy
    static new_with_data_model(model: DataModel): DataProxy
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataSelect_ConstructProps extends GObject.Object_ConstructProps {
    auto_reset?: boolean
    connection?: Connection
    delete_stmt?: Statement
    exec_params?: Set
    execution_delay?: number
    insert_stmt?: Statement
    model_usage?: number
    prepared_stmt?: PStmt
    store_all_rows?: boolean
    update_stmt?: Statement
}
export class DataSelect {
    /* Properties of Gda.DataSelect */
    auto_reset: boolean
    delete_stmt: Statement
    execution_delay: number
    insert_stmt: Statement
    prepared_stmt: PStmt
    readonly select_stmt: Statement
    store_all_rows: boolean
    update_stmt: Statement
    /* Fields of Gda.DataSelect */
    object: GObject.Object
    priv: DataSelectPrivate
    prep_stmt: PStmt
    nb_stored_rows: number
    advertized_nrows: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataSelect */
    compute_columns_attributes(): boolean
    compute_modification_statements(): boolean
    compute_modification_statements_ext(cond_type: DataSelectConditionType): boolean
    compute_row_selection_condition(): boolean
    get_connection(): Connection
    prepare_for_offline(): boolean
    rerun(): boolean
    set_modification_statement(mod_stmt: Statement): boolean
    set_modification_statement_sql(sql: string): boolean
    set_row_selection_condition_sql(sql_where: string): boolean
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
    /* Methods of Gda.DataModel */
    add_data_from_xml_node(node: libxml2.NodePtr): boolean
    append_row(): number
    append_values(values?: any[] | null): number
    array_copy_model(): DataModelArray | null
    array_copy_model_ext(cols: number[]): DataModelArray | null
    create_iter(): DataModelIter
    describe_column(col: number): Column | null
    dump(to_stream?: object | null): void
    dump_as_string(): string
    export_to_file(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    get_access_flags(): DataModelAccessFlags
    get_attributes_at(col: number, row: number): ValueAttribute
    get_column_index(name: string): number
    get_column_name(col: number): string
    get_column_title(col: number): string
    get_exceptions(): GLib.Error[]
    get_n_columns(): number
    get_n_rows(): number
    get_notify(): boolean
    get_row_from_values(values: any[], cols_index: number[]): number
    get_typed_value_at(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any | null
    get_value_at(col: number, row: number): any | null
    import_from_file(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    import_from_string(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iter_at_row(iter: DataModelIter, row: number): boolean
    iter_next(iter: DataModelIter): boolean
    iter_prev(iter: DataModelIter): boolean
    iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_notify(do_notify_changes: boolean): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataSelect */
    vfunc_fetch_at(prow: Row, rownum: number): boolean
    vfunc_fetch_nb_rows(): number
    vfunc_fetch_next(prow: Row, rownum: number): boolean
    vfunc_fetch_prev(prow: Row, rownum: number): boolean
    vfunc_fetch_random(prow: Row, rownum: number): boolean
    vfunc_store_all(): boolean
    vfunc_access_changed(): void
    vfunc_changed(): void
    vfunc_i_append_row(): number
    vfunc_i_append_values(values?: any[] | null): number
    vfunc_i_create_iter(): DataModelIter
    vfunc_i_describe_column(col: number): Column | null
    vfunc_i_find_row(values: any[], cols_index: number[]): number
    vfunc_i_get_access_flags(): DataModelAccessFlags
    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute
    vfunc_i_get_exceptions(): GLib.Error[]
    vfunc_i_get_n_columns(): number
    vfunc_i_get_n_rows(): number
    vfunc_i_get_notify(): boolean
    vfunc_i_get_value_at(col: number, row: number): any | null
    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean
    vfunc_i_iter_next(iter: DataModelIter): boolean
    vfunc_i_iter_prev(iter: DataModelIter): boolean
    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean
    vfunc_i_remove_row(row: number): boolean
    vfunc_i_send_hint(hint: DataModelHint, hint_value?: any | null): void
    vfunc_i_set_notify(do_notify_changes: boolean): void
    vfunc_i_set_value_at(col: number, row: number, value: any): boolean
    vfunc_i_set_values(row: number, values?: any[] | null): boolean
    vfunc_reset(): void
    vfunc_row_inserted(row: number): void
    vfunc_row_removed(row: number): void
    vfunc_row_updated(row: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataSelect) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataSelect) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataSelect) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataSelect) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataSelect) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataSelect) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataSelect, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataSelect, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataSelect, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataSelect, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataSelect, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataSelect, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::auto-reset", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reset", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delete-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::execution-delay", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-delay", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insert-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prepared-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepared-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::select-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-all-rows", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-all-rows", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSelect_ConstructProps)
    _init (config?: DataSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface HandlerBin_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerBin {
    /* Fields of Gda.HandlerBin */
    object: GObject.Object
    priv: HandlerBinPriv
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerBin */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerBin_ConstructProps)
    _init (config?: HandlerBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerBoolean_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerBoolean {
    /* Fields of Gda.HandlerBoolean */
    object: GObject.Object
    priv: HandlerBooleanPriv
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerBoolean */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerBoolean_ConstructProps)
    _init (config?: HandlerBoolean_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerNumerical_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerNumerical {
    /* Fields of Gda.HandlerNumerical */
    object: GObject.Object
    priv: HandlerNumericalPriv
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerNumerical */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerNumerical, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerNumerical, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerNumerical_ConstructProps)
    _init (config?: HandlerNumerical_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerString_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerString {
    /* Fields of Gda.HandlerString */
    object: GObject.Object
    priv: HandlerStringPriv
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerString */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerString_ConstructProps)
    _init (config?: HandlerString_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_provider(prov: ServerProvider, cnc?: Connection | null): DataHandler
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerTime_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerTime {
    /* Fields of Gda.HandlerTime */
    object: GObject.Object
    priv: HandlerTimePriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.HandlerTime */
    get_format(type: GObject.Type): string
    get_no_locale_str_from_value(value: any): string
    set_sql_spec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean): void
    set_str_spec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean): void
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerTime */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerTime_ConstructProps)
    _init (config?: HandlerTime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_no_locale(): DataHandler
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerType_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerType {
    /* Fields of Gda.HandlerType */
    object: GObject.Object
    priv: HandlerTypePriv
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerType */
    vfunc_accepts_g_type(type: GObject.Type): boolean
    vfunc_get_descr(): string
    vfunc_get_sane_init_value(type: GObject.Type): any | null
    vfunc_get_sql_from_value(value?: any | null): string
    vfunc_get_str_from_value(value?: any | null): string
    vfunc_get_value_from_sql(sql: string | null, type: GObject.Type): any
    vfunc_get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerType_ConstructProps)
    _init (config?: HandlerType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface Holder_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    full_bind?: Holder
    g_type?: GObject.Type
    id?: string
    name?: string
    not_null?: boolean
    simple_bind?: Holder
    source_column?: number
    source_model?: DataModel
    validate_changes?: boolean
}
export class Holder {
    /* Properties of Gda.Holder */
    description: string
    full_bind: Holder
    g_type: GObject.Type
    id: string
    name: string
    not_null: boolean
    simple_bind: Holder
    source_column: number
    source_model: DataModel
    validate_changes: boolean
    /* Fields of Gda.Holder */
    object: GObject.Object
    priv: HolderPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Holder */
    copy(): Holder
    force_invalid(): void
    force_invalid_e(error?: GLib.Error | null): void
    get_alphanum_id(): string
    get_attribute(attribute: string): any
    get_bind(): Holder
    get_default_value(): any
    get_g_type(): GObject.Type
    get_id(): string
    get_not_null(): boolean
    get_source_model(col: number): DataModel
    get_value(): any | null
    get_value_str(dh?: DataHandler | null): string
    is_valid(): boolean
    is_valid_e(): boolean
    set_attribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    set_bind(bind_to: Holder): boolean
    set_default_value(value: any): void
    set_not_null(not_null: boolean): void
    set_source_model(model: DataModel, col: number): boolean
    set_value(value?: any | null): boolean
    set_value_str(dh: DataHandler, value: string): boolean
    set_value_to_default(): boolean
    take_static_value(value: any, value_changed: boolean): any
    take_value(value: any): boolean
    value_is_default(): boolean
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
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.Holder */
    vfunc_att_changed(att_name: string, att_value: any): void
    vfunc_changed(): void
    vfunc_source_changed(): void
    vfunc_validate_change(new_value: any): GLib.Error
    vfunc_i_lock(): void
    vfunc_i_trylock(): boolean
    vfunc_i_unlock(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Holder */
    connect(sigName: "attribute-changed", callback: (($obj: Holder, att_name: string, att_value: any) => void)): number
    connect_after(sigName: "attribute-changed", callback: (($obj: Holder, att_name: string, att_value: any) => void)): number
    emit(sigName: "attribute-changed", att_name: string, att_value: any): void
    connect(sigName: "changed", callback: (($obj: Holder) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Holder) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "source-changed", callback: (($obj: Holder) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: Holder) => void)): number
    emit(sigName: "source-changed"): void
    connect(sigName: "validate-change", callback: (($obj: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-change", callback: (($obj: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-change", new_value: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-type", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::not-null", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-null", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::simple-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-column", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-column", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-model", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-model", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Holder_ConstructProps)
    _init (config?: Holder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type): Holder
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface MetaStore_ConstructProps extends GObject.Object_ConstructProps {
    catalog?: string
    cnc?: Connection
    cnc_string?: string
    schema?: string
}
export class MetaStore {
    /* Fields of Gda.MetaStore */
    object: GObject.Object
    priv: MetaStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.MetaStore */
    create_modify_data_model(table_name: string): DataModel
    declare_foreign_key(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string, colnames: string[], ref_colnames: string[]): boolean
    extract(select_sql: string, vars?: GLib.HashTable | null): DataModel
    get_attribute_value(att_name: string): [ /* returnType */ boolean, /* att_value */ string ]
    get_internal_connection(): Connection
    get_version(): number
    modify(table_name: string, new_data: DataModel | null, condition: string | null, value_names: string[], values: any[]): boolean
    modify_with_context(context: MetaContext, new_data?: DataModel | null): boolean
    schema_add_custom_object(xml_description: string): boolean
    schema_get_all_tables(): string[]
    schema_get_depend_tables(table_name: string): string[]
    schema_get_structure(): MetaStruct
    schema_remove_custom_object(obj_name: string): boolean
    set_attribute_value(att_name: string, att_value?: string | null): boolean
    set_identifiers_style(style: SqlIdentifierStyle): void
    set_reserved_keywords_func(func?: SqlReservedKeywordsFunc | null): void
    undeclare_foreign_key(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string): boolean
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
    /* Virtual methods of Gda.MetaStore */
    vfunc_meta_reset(): void
    vfunc_suggest_update(suggest: MetaContext): GLib.Error
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.MetaStore */
    connect(sigName: "meta-changed", callback: (($obj: MetaStore, changes: MetaStoreChange[]) => void)): number
    connect_after(sigName: "meta-changed", callback: (($obj: MetaStore, changes: MetaStoreChange[]) => void)): number
    emit(sigName: "meta-changed", changes: MetaStoreChange[]): void
    connect(sigName: "meta-reset", callback: (($obj: MetaStore) => void)): number
    connect_after(sigName: "meta-reset", callback: (($obj: MetaStore) => void)): number
    emit(sigName: "meta-reset"): void
    connect(sigName: "suggest-update", callback: (($obj: MetaStore, suggest: MetaContext) => GLib.Error)): number
    connect_after(sigName: "suggest-update", callback: (($obj: MetaStore, suggest: MetaContext) => GLib.Error)): number
    emit(sigName: "suggest-update", suggest: MetaContext): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetaStore_ConstructProps)
    _init (config?: MetaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc_string?: string | null): MetaStore
    static new_with_file(file_name: string): MetaStore
    static error_quark(): GLib.Quark
    static sql_identifier_quote(id: string, cnc: Connection): string
    static $gtype: GObject.Type
}
export interface MetaStruct_ConstructProps extends GObject.Object_ConstructProps {
    features?: number
    meta_store?: MetaStore
}
export class MetaStruct {
    /* Fields of Gda.MetaStruct */
    object: GObject.Object
    priv: MetaStructPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.MetaStruct */
    complement(type: MetaDbObjectType, catalog: any | null, schema: any | null, name: any): MetaDbObject
    complement_all(): boolean
    complement_default(): boolean
    complement_depend(dbo: MetaDbObject): boolean
    complement_schema(catalog?: any | null, schema?: any | null): boolean
    dump_as_graph(info: MetaGraphInfo): string
    get_all_db_objects(): MetaDbObject[]
    get_db_object(catalog: any | null, schema: any | null, name: any): MetaDbObject
    load_from_xml_file(catalog: string | null, schema: string | null, xml_spec_file: string): boolean
    sort_db_objects(sort_type: MetaSortType): boolean
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
    connect(sigName: "notify", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetaStruct_ConstructProps)
    _init (config?: MetaStruct_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(store: MetaStore, features: MetaStructFeature): MetaStruct
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface PStmt_ConstructProps extends GObject.Object_ConstructProps {
}
export class PStmt {
    /* Fields of Gda.PStmt */
    object: GObject.Object
    priv: PStmtPrivate
    sql: string
    param_ids: string[]
    ncols: number
    types: GObject.Type
    tmpl_columns: Column[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.PStmt */
    copy_contents(dest: PStmt): void
    get_gda_statement(): Statement
    set_gda_statement(stmt?: Statement | null): void
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
    connect(sigName: "notify", callback: (($obj: PStmt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PStmt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PStmt_ConstructProps)
    _init (config?: PStmt_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RepetitiveStatement_ConstructProps extends GObject.Object_ConstructProps {
    statement?: Statement
}
export class RepetitiveStatement {
    /* Fields of Gda.RepetitiveStatement */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.RepetitiveStatement */
    append_set(values: Set, make_copy: boolean): boolean
    get_all_sets(): Set[]
    get_template_set(set: Set): boolean
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
    connect(sigName: "notify", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepetitiveStatement_ConstructProps)
    _init (config?: RepetitiveStatement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stmt: Statement): RepetitiveStatement
    static $gtype: GObject.Type
}
export interface Row_ConstructProps extends GObject.Object_ConstructProps {
    nb_values?: number
}
export class Row {
    /* Properties of Gda.Row */
    nb_values: number
    /* Fields of Gda.Row */
    object: GObject.Object
    priv: RowPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Row */
    get_length(): number
    get_value(num: number): any | null
    invalidate_value(value: any): void
    invalidate_value_e(value: any, error?: GLib.Error | null): void
    value_is_valid(value: any): boolean
    value_is_valid_e(value: any): boolean
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
    connect(sigName: "notify", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::nb-values", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nb-values", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Row_ConstructProps)
    _init (config?: Row_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(count: number): Row
    static $gtype: GObject.Type
}
export interface ServerOperation_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
    op_type?: number
    provider?: ServerProvider
    spec_filename?: string
}
export class ServerOperation {
    /* Fields of Gda.ServerOperation */
    object: GObject.Object
    priv: ServerOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.ServerOperation */
    add_item_to_sequence(seq_path: string): number
    del_item_from_sequence(item_path: string): boolean
    get_node_parent(path: string): string
    get_node_path_portion(path: string): string
    get_node_type(path: string, status?: ServerOperationNodeStatus | null): ServerOperationNodeType
    get_op_type(): ServerOperationType
    get_root_nodes(): string[]
    get_sequence_item_names(path: string): string[]
    get_sequence_max_size(path: string): number
    get_sequence_min_size(path: string): number
    get_sequence_name(path: string): string
    get_sequence_size(path: string): number
    get_sql_identifier_at(cnc: Connection | null, prov: ServerProvider | null, path: string): string
    get_value_at(path: string): any | null
    is_valid(xml_file?: string | null): boolean
    load_data_from_xml(node: libxml2.NodePtr): boolean
    perform_create_database(provider?: string | null): boolean
    perform_create_table(): boolean
    perform_drop_database(provider?: string | null): boolean
    perform_drop_table(): boolean
    set_value_at(value: string | null, path: string): boolean
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
    /* Virtual methods of Gda.ServerOperation */
    vfunc_seq_item_added(seq_path: string, item_index: number): void
    vfunc_seq_item_remove(seq_path: string, item_index: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.ServerOperation */
    connect(sigName: "sequence-item-added", callback: (($obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    connect_after(sigName: "sequence-item-added", callback: (($obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    emit(sigName: "sequence-item-added", seq_path: string, item_index: number): void
    connect(sigName: "sequence-item-remove", callback: (($obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    connect_after(sigName: "sequence-item-remove", callback: (($obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    emit(sigName: "sequence-item-remove", seq_path: string, item_index: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerOperation_ConstructProps)
    _init (config?: ServerOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(op_type: ServerOperationType, xml_file: string): ServerOperation
    static error_quark(): GLib.Quark
    static op_type_to_string(type: ServerOperationType): string
    static prepare_create_database(provider: string, db_name?: string | null): ServerOperation | null
    static prepare_drop_database(provider: string, db_name?: string | null): ServerOperation | null
    static prepare_drop_table(cnc: Connection, table_name: string): ServerOperation | null
    static string_to_op_type(str: string): ServerOperationType
    static $gtype: GObject.Type
}
export interface ServerProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class ServerProvider {
    /* Fields of Gda.ServerProvider */
    object: GObject.Object
    priv: ServerProviderPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.ServerProvider */
    create_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    create_parser(cnc?: Connection | null): SqlParser
    escape_string(cnc: Connection | null, str: string): string
    find_file(inst_dir: string, filename: string): string
    get_data_handler_dbms(cnc: Connection | null, for_type: string): DataHandler
    get_data_handler_default(cnc: Connection | null, type: GObject.Type, dbms_type: string): DataHandler
    get_data_handler_g_type(cnc: Connection | null, for_type: GObject.Type): DataHandler
    get_default_dbms_type(cnc: Connection | null, type: GObject.Type): string | null
    get_name(): string
    get_server_version(cnc: Connection): string
    get_version(): string
    handler_declare(dh: DataHandler, cnc: Connection, g_type: GObject.Type, dbms_type: string): void
    handler_find(cnc: Connection | null, g_type: GObject.Type, dbms_type?: string | null): DataHandler
    internal_get_parser(): SqlParser
    perform_operation(cnc: Connection | null, op: ServerOperation): boolean
    perform_operation_default(cnc: Connection | null, op: ServerOperation): boolean
    render_operation(cnc: Connection | null, op: ServerOperation): string | null
    string_to_value(cnc: Connection | null, string: string, preferred_type: GObject.Type, dbms_type?: string | null): any
    supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean
    supports_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean
    unescape_string(cnc: Connection | null, str: string): string
    value_to_sql_string(cnc: Connection | null, from: any): string
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
    /* Virtual methods of Gda.ServerProvider */
    vfunc_add_savepoint(cnc: Connection, name: string): boolean
    vfunc_begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    vfunc_cancel(cnc: Connection, task_id: number): boolean
    vfunc_close_connection(cnc: Connection): boolean
    vfunc_commit_transaction(cnc: Connection, name: string): boolean
    vfunc_create_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    vfunc_create_parser(cnc?: Connection | null): SqlParser
    vfunc_delete_savepoint(cnc: Connection, name: string): boolean
    vfunc_escape_string(cnc: Connection | null, str: string): string
    vfunc_get_database(cnc: Connection): string
    vfunc_get_def_dbms_type(cnc: Connection, g_type: GObject.Type): string
    vfunc_get_name(): string
    vfunc_get_server_version(cnc: Connection): string
    vfunc_get_version(): string
    vfunc_handle_async(cnc: Connection): boolean
    vfunc_identifier_quote(cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean): string
    vfunc_is_busy(cnc: Connection): boolean
    vfunc_render_operation(cnc: Connection | null, op: ServerOperation): string | null
    vfunc_rollback_savepoint(cnc: Connection, name: string): boolean
    vfunc_rollback_transaction(cnc: Connection, name: string): boolean
    vfunc_statement_prepare(cnc: Connection, stmt: Statement): boolean
    vfunc_supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean
    vfunc_supports_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean
    vfunc_unescape_string(cnc: Connection | null, str: string): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerProvider_ConstructProps)
    _init (config?: ServerProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static load_file_contents(inst_dir: string, data_dir: string, filename: string): string
    static $gtype: GObject.Type
}
export interface Set_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    holders?: object
    id?: string
    name?: string
    validate_changes?: boolean
}
export class Set {
    /* Properties of Gda.Set */
    description: string
    id: string
    name: string
    validate_changes: boolean
    /* Fields of Gda.Set */
    object: GObject.Object
    priv: SetPrivate
    holders: Holder[]
    nodes_list: SetNode[]
    sources_list: SetSource[]
    groups_list: SetGroup[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Set */
    add_holder(holder: Holder): boolean
    copy(): Set
    get_group(holder: Holder): SetGroup
    get_holder(holder_id: string): Holder
    get_holder_value(holder_id: string): any | null
    get_node(holder: Holder): SetNode
    get_nth_holder(pos: number): Holder
    get_source(holder: Holder): SetSource
    get_source_for_model(model: DataModel): SetSource
    is_valid(): boolean
    merge_with_set(set_to_merge: Set): void
    remove_holder(holder: Holder): void
    replace_source_model(source: SetSource, model: DataModel): void
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
    /* Virtual methods of Gda.Set */
    vfunc_holder_attr_changed(holder: Holder, attr_name: string, attr_value: any): void
    vfunc_holder_changed(holder: Holder): void
    vfunc_holder_type_set(holder: Holder): void
    vfunc_public_data_changed(): void
    vfunc_source_model_changed(source: SetSource): void
    vfunc_validate_holder_change(holder: Holder, new_value: any): GLib.Error
    vfunc_validate_set(): GLib.Error
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: Set, holder: Holder, attr_name: string, attr_value: any) => void)): number
    connect_after(sigName: "holder-attr-changed", callback: (($obj: Set, holder: Holder, attr_name: string, attr_value: any) => void)): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any): void
    connect(sigName: "holder-changed", callback: (($obj: Set, object: Holder) => void)): number
    connect_after(sigName: "holder-changed", callback: (($obj: Set, object: Holder) => void)): number
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: Set, holder: Holder) => void)): number
    connect_after(sigName: "holder-type-set", callback: (($obj: Set, holder: Holder) => void)): number
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: Set) => void)): number
    connect_after(sigName: "public-data-changed", callback: (($obj: Set) => void)): number
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: Set, source?: object | null) => void)): number
    connect_after(sigName: "source-model-changed", callback: (($obj: Set, source?: object | null) => void)): number
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: Set, holder: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-holder-change", callback: (($obj: Set, holder: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any): void
    connect(sigName: "validate-set", callback: (($obj: Set) => GLib.Error)): number
    connect_after(sigName: "validate-set", callback: (($obj: Set) => GLib.Error)): number
    emit(sigName: "validate-set"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(holders: Holder[]): Set
    static new_from_spec_node(xml_spec: libxml2.NodePtr): Set
    static new_from_spec_string(xml_spec: string): Set
    static new_read_only(holders: Holder[]): Set
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export class Short {
    static name: string
}
export interface SqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
}
export class SqlBuilder {
    /* Fields of Gda.SqlBuilder */
    object: GObject.Object
    priv: SqlBuilderPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.SqlBuilder */
    add_case(test_expr: SqlBuilderId, else_expr: SqlBuilderId, when_array: SqlBuilderId[], then_array: SqlBuilderId[]): SqlBuilderId
    add_cond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    add_cond_v(op: SqlOperatorType, op_ids: SqlBuilderId[]): SqlBuilderId
    add_expr_value(dh?: DataHandler | null, value?: any | null): SqlBuilderId
    add_field_id(field_name: string, table_name?: string | null): SqlBuilderId
    add_field_value_as_gvalue(field_name: string, value?: any | null): void
    add_field_value_id(field_id: SqlBuilderId, value_id: SqlBuilderId): void
    add_function(func_name: string, args: SqlBuilderId[]): SqlBuilderId
    add_id(str: string): SqlBuilderId
    add_param(param_name: string, type: GObject.Type, nullok: boolean): SqlBuilderId
    compound_add_sub_select_from_builder(subselect: SqlBuilder): void
    compound_set_type(compound_type: SqlStatementCompoundType): void
    get_statement(): Statement
    import_expression_from_builder(query: SqlBuilder, expr_id: SqlBuilderId): SqlBuilderId
    join_add_field(join_id: SqlBuilderId, field_name: string): void
    select_add_field(field_name: string, table_name?: string | null, alias?: string | null): SqlBuilderId
    select_add_target(table_name: string, alias?: string | null): SqlBuilderId
    select_add_target_id(table_id: SqlBuilderId, alias?: string | null): SqlBuilderId
    select_group_by(expr_id: SqlBuilderId): void
    select_order_by(expr_id: SqlBuilderId, asc: boolean, collation_name?: string | null): void
    select_set_distinct(distinct: boolean, expr_id: SqlBuilderId): void
    select_set_having(cond_id: SqlBuilderId): void
    select_set_limit(limit_count_expr_id: SqlBuilderId, limit_offset_expr_id: SqlBuilderId): void
    set_table(table_name: string): void
    set_where(cond_id: SqlBuilderId): void
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
    connect(sigName: "notify", callback: (($obj: SqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SqlBuilder_ConstructProps)
    _init (config?: SqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stmt_type: SqlStatementType): SqlBuilder
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface SqlParser_ConstructProps extends GObject.Object_ConstructProps {
    mode?: number
    tokenizer_flavour?: number
}
export class SqlParser {
    /* Properties of Gda.SqlParser */
    readonly column_error: number
    readonly line_error: number
    mode: number
    tokenizer_flavour: number
    /* Fields of Gda.SqlParser */
    object: GObject.Object
    priv: SqlParserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.SqlParser */
    parse_file_as_batch(filename: string): Batch | null
    parse_string(sql: string): [ /* returnType */ Statement | null, /* remain */ string | null ]
    parse_string_as_batch(sql: string): [ /* returnType */ Batch | null, /* remain */ string | null ]
    set_overflow_error(): void
    set_syntax_error(): void
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
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.SqlParser */
    vfunc_i_lock(): void
    vfunc_i_trylock(): boolean
    vfunc_i_unlock(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tokenizer-flavour", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tokenizer-flavour", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SqlParser_ConstructProps)
    _init (config?: SqlParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SqlParser
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Statement_ConstructProps extends GObject.Object_ConstructProps {
    structure?: object
}
export class Statement {
    /* Properties of Gda.Statement */
    structure: object
    /* Fields of Gda.Statement */
    object: GObject.Object
    priv: StatementPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Statement */
    check_structure(): boolean
    check_validity(cnc?: Connection | null): boolean
    copy(): Statement
    get_parameters(): [ /* returnType */ boolean, /* out_params */ Set | null ]
    get_statement_type(): SqlStatementType
    is_useless(): boolean
    normalize(cnc: Connection): boolean
    serialize(): string
    to_sql_extended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
    to_sql_real(context: SqlRenderingContext): string
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
    /* Virtual methods of Gda.Statement */
    vfunc_checked(cnc: Connection, checked: boolean): void
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Statement */
    connect(sigName: "checked", callback: (($obj: Statement, object: Connection, p0: boolean) => void)): number
    connect_after(sigName: "checked", callback: (($obj: Statement, object: Connection, p0: boolean) => void)): number
    emit(sigName: "checked", object: Connection, p0: boolean): void
    connect(sigName: "reset", callback: (($obj: Statement) => void)): number
    connect_after(sigName: "reset", callback: (($obj: Statement) => void)): number
    emit(sigName: "reset"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Statement_ConstructProps)
    _init (config?: Statement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Statement
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface ThreadWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
export class ThreadWrapper {
    /* Fields of Gda.ThreadWrapper */
    object: GObject.Object
    priv: ThreadWrapperPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.ThreadWrapper */
    cancel(id: number): boolean
    connect_raw(instance: object | null, sig_name: string, private_thread: boolean, private_job: boolean, callback: ThreadWrapperCallback): number
    disconnect(id: number): void
    execute(func: ThreadWrapperFunc, arg?: object | null): number
    execute_void(func: ThreadWrapperVoidFunc, arg?: object | null): number
    fetch_result(may_lock: boolean, exp_id: number): object | null
    get_io_channel(): GLib.IOChannel
    get_waiting_size(): number
    iterate(may_block: boolean): void
    steal_signal(id: number): void
    unset_io_channel(): void
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
    connect(sigName: "notify", callback: (($obj: ThreadWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThreadWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThreadWrapper_ConstructProps)
    _init (config?: ThreadWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ThreadWrapper
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TransactionStatus_ConstructProps extends GObject.Object_ConstructProps {
}
export class TransactionStatus {
    /* Fields of Gda.TransactionStatus */
    object: GObject.Object
    name: string
    isolation_level: TransactionIsolation
    state: TransactionStatusState
    events: TransactionStatusEvent[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TransactionStatus */
    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    find_current(destev: TransactionStatusEvent, unnamed_only: boolean): TransactionStatus | null
    free_events(event: TransactionStatusEvent, free_after: boolean): void
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
    connect(sigName: "notify", callback: (($obj: TransactionStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransactionStatus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransactionStatus_ConstructProps)
    _init (config?: TransactionStatus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): TransactionStatus
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends GObject.Object_ConstructProps {
}
export class Tree {
    /* Properties of Gda.Tree */
    readonly is_list: boolean
    /* Fields of Gda.Tree */
    object: GObject.Object
    priv: TreePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Tree */
    add_manager(manager: TreeManager): void
    clean(): void
    dump(node?: TreeNode | null, stream?: object | null): void
    get_node(tree_path: string, use_names: boolean): TreeNode | null
    get_node_manager(node: TreeNode): TreeManager
    get_node_path(node: TreeNode): string
    get_nodes_in_path(tree_path: string | null, use_names: boolean): TreeNode[]
    set_attribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    update_all(): boolean
    update_children(node?: TreeNode | null): boolean
    update_part(node: TreeNode): boolean
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
    /* Virtual methods of Gda.Tree */
    vfunc_node_changed(node: TreeNode): void
    vfunc_node_deleted(node_path: string): void
    vfunc_node_has_child_toggled(node: TreeNode): void
    vfunc_node_inserted(node: TreeNode): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Tree */
    connect(sigName: "node-changed", callback: (($obj: Tree, node: TreeNode) => void)): number
    connect_after(sigName: "node-changed", callback: (($obj: Tree, node: TreeNode) => void)): number
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: (($obj: Tree, node_path: string) => void)): number
    connect_after(sigName: "node-deleted", callback: (($obj: Tree, node_path: string) => void)): number
    emit(sigName: "node-deleted", node_path: string): void
    connect(sigName: "node-has-child-toggled", callback: (($obj: Tree, node: TreeNode) => void)): number
    connect_after(sigName: "node-has-child-toggled", callback: (($obj: Tree, node: TreeNode) => void)): number
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: (($obj: Tree, node: TreeNode) => void)): number
    connect_after(sigName: "node-inserted", callback: (($obj: Tree, node: TreeNode) => void)): number
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tree
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeManager_ConstructProps extends GObject.Object_ConstructProps {
    func?: object
    recursive?: boolean
}
export class TreeManager {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeManager */
    object: GObject.Object
    priv: TreeManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeManager_ConstructProps)
    _init (config?: TreeManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeMgrColumns_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    meta_store?: MetaStore
    schema?: string
    table_name?: string
}
export class TreeMgrColumns {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeMgrColumns */
    object: TreeManager
    priv: TreeMgrColumnsPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrColumns_ConstructProps)
    _init (config?: TreeMgrColumns_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, schema: string, table_name: string): TreeMgrColumns
    static $gtype: GObject.Type
}
export interface TreeMgrLabel_ConstructProps extends TreeManager_ConstructProps {
    label?: string
}
export class TreeMgrLabel {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeMgrLabel */
    object: TreeManager
    priv: TreeMgrLabelPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrLabel_ConstructProps)
    _init (config?: TreeMgrLabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label: string): TreeMgrLabel
    static $gtype: GObject.Type
}
export interface TreeMgrLdap_ConstructProps extends TreeManager_ConstructProps {
    dn?: string
}
export class TreeMgrLdap {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeMgrLdap */
    object: TreeManager
    priv: TreeMgrLdapPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrLdap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrLdap_ConstructProps)
    _init (config?: TreeMgrLdap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, dn?: string | null): TreeMgrLdap
    static $gtype: GObject.Type
}
export interface TreeMgrSchemas_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    meta_store?: MetaStore
}
export class TreeMgrSchemas {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeMgrSchemas */
    object: TreeManager
    priv: TreeMgrSchemasPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrSchemas_ConstructProps)
    _init (config?: TreeMgrSchemas_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection): TreeMgrSchemas
    static $gtype: GObject.Type
}
export interface TreeMgrSelect_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    params?: Set
    statement?: Statement
}
export class TreeMgrSelect {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeMgrSelect */
    object: TreeManager
    priv: TreeMgrSelectPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrSelect_ConstructProps)
    _init (config?: TreeMgrSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect
    static $gtype: GObject.Type
}
export interface TreeMgrTables_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    meta_store?: MetaStore
    schema?: string
}
export class TreeMgrTables {
    /* Properties of Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda.TreeMgrTables */
    object: TreeManager
    priv: TreeMgrTablesPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
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
    connect(sigName: "notify", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrTables_ConstructProps)
    _init (config?: TreeMgrTables_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, schema?: string | null): TreeMgrTables
    static $gtype: GObject.Type
}
export interface TreeNode_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
export class TreeNode {
    /* Properties of Gda.TreeNode */
    name: string
    /* Fields of Gda.TreeNode */
    object: GObject.Object
    priv: TreeNodePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeNode */
    fetch_attribute(attribute: string): any
    get_child_index(index: number): TreeNode
    get_child_name(name: string): TreeNode
    get_children(): TreeNode[]
    get_node_attribute(attribute: string): any
    get_parent(): TreeNode
    set_node_attribute(attribute: string, value: any | null, destroy: GLib.DestroyNotify): void
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
    /* Virtual methods of Gda.TreeNode */
    vfunc_dump_children(prefix: string, in_string: GLib.String): void
    vfunc_dump_header(): string
    vfunc_node_changed(node: TreeNode): void
    vfunc_node_deleted(relative_path: string): void
    vfunc_node_has_child_toggled(node: TreeNode): void
    vfunc_node_inserted(node: TreeNode): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.TreeNode */
    connect(sigName: "node-changed", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    connect_after(sigName: "node-changed", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: (($obj: TreeNode, relative_path: string) => void)): number
    connect_after(sigName: "node-deleted", callback: (($obj: TreeNode, relative_path: string) => void)): number
    emit(sigName: "node-deleted", relative_path: string): void
    connect(sigName: "node-has-child-toggled", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    connect_after(sigName: "node-has-child-toggled", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    connect_after(sigName: "node-inserted", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeNode_ConstructProps)
    _init (config?: TreeNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): TreeNode
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export class UShort {
    static name: string
}
export interface XaTransaction_ConstructProps extends GObject.Object_ConstructProps {
    format_id?: number
    transaction_id?: string
}
export class XaTransaction {
    /* Fields of Gda.XaTransaction */
    object: GObject.Object
    priv: XaTransactionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.XaTransaction */
    begin(): boolean
    commit(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] | null ]
    commit_recovered(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] | null ]
    register_connection(cnc: Connection, branch: string): boolean
    rollback(): boolean
    unregister_connection(cnc: Connection): void
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
    connect(sigName: "notify", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XaTransaction_ConstructProps)
    _init (config?: XaTransaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: number, global_transaction_id: string): XaTransaction
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export class AttributesManager {
    /* Methods of Gda.AttributesManager */
    clear(ptr?: object | null): void
    foreach(ptr: object | null, func: AttributesManagerFunc): void
    free(): void
    get(ptr: object | null, att_name: string): any
    set(ptr: object | null, att_name: string, value: any): void
    set_full(ptr: object | null, att_name: string, value: any, destroy: GLib.DestroyNotify): void
    static name: string
}
export abstract class BatchClass {
    /* Fields of Gda.BatchClass */
    parent_class: GObject.ObjectClass
    changed: (batch: Batch, changed_stmt: Statement) => void
    static name: string
}
export class BatchPrivate {
    static name: string
}
export class Binary {
    /* Fields of Gda.Binary */
    data: Uint8Array[]
    binary_length: number
    /* Methods of Gda.Binary */
    to_string(maxlen: number): string
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class Blob {
    /* Fields of Gda.Blob */
    data: Binary
    op: BlobOp
    /* Methods of Gda.Blob */
    set_op(op?: BlobOp | null): void
    to_string(maxlen: number): string
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export abstract class BlobOpClass {
    /* Fields of Gda.BlobOpClass */
    parent_class: GObject.ObjectClass
    get_length: (op: BlobOp) => number
    read: (op: BlobOp, blob: Blob, offset: number, size: number) => number
    write: (op: BlobOp, blob: Blob, offset: number) => number
    write_all: (op: BlobOp, blob: Blob) => boolean
    static name: string
}
export abstract class ColumnClass {
    /* Fields of Gda.ColumnClass */
    parent_class: GObject.ObjectClass
    name_changed: (column: Column, old_name: string) => void
    g_type_changed: (column: Column, old_type: GObject.Type, new_type: GObject.Type) => void
    static name: string
}
export class ColumnPrivate {
    static name: string
}
export abstract class ConfigClass {
    /* Fields of Gda.ConfigClass */
    object_class: GObject.ObjectClass
    dsn_added: (conf: Config, new_dsn: DsnInfo) => void
    dsn_to_be_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_changed: (conf: Config, dsn: DsnInfo) => void
    static name: string
}
export class ConfigPrivate {
    static name: string
}
export abstract class ConnectionClass {
    /* Fields of Gda.ConnectionClass */
    object_class: GObject.ObjectClass
    error: (cnc: Connection, error: ConnectionEvent) => void
    conn_opened: (obj: Connection) => void
    conn_to_close: (obj: Connection) => void
    conn_closed: (obj: Connection) => void
    dsn_changed: (obj: Connection) => void
    transaction_status_changed: (obj: Connection) => void
    static name: string
}
export abstract class ConnectionEventClass {
    /* Fields of Gda.ConnectionEventClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ConnectionEventPrivate {
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export abstract class DataAccessWrapperClass {
    /* Fields of Gda.DataAccessWrapperClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataAccessWrapperPrivate {
    static name: string
}
export abstract class DataComparatorClass {
    /* Fields of Gda.DataComparatorClass */
    parent_class: GObject.ObjectClass
    diff_computed: (comp: DataComparator, diff: Diff) => boolean
    static name: string
}
export class DataComparatorPrivate {
    static name: string
}
export abstract class DataHandlerIface {
    /* Fields of Gda.DataHandlerIface */
    g_iface: GObject.TypeInterface
    get_sql_from_value: (dh: DataHandler, value?: any | null) => string
    get_str_from_value: (dh: DataHandler, value?: any | null) => string
    get_value_from_sql: (dh: DataHandler, sql: string | null, type: GObject.Type) => any
    get_value_from_str: (dh: DataHandler, str: string | null, type: GObject.Type) => any
    get_sane_init_value: (dh: DataHandler, type: GObject.Type) => any | null
    accepts_g_type: (dh: DataHandler, type: GObject.Type) => boolean
    get_descr: (dh: DataHandler) => string
    static name: string
}
export abstract class DataModelArrayClass {
    /* Fields of Gda.DataModelArrayClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataModelArrayPrivate {
    static name: string
}
export abstract class DataModelDirClass {
    /* Fields of Gda.DataModelDirClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataModelDirPrivate {
    static name: string
}
export abstract class DataModelIface {
    /* Fields of Gda.DataModelIface */
    g_iface: GObject.TypeInterface
    i_get_n_rows: (model: DataModel) => number
    i_get_n_columns: (model: DataModel) => number
    i_describe_column: (model: DataModel, col: number) => Column | null
    i_get_access_flags: (model: DataModel) => DataModelAccessFlags
    i_get_value_at: (model: DataModel, col: number, row: number) => any | null
    i_get_attributes_at: (model: DataModel, col: number, row: number) => ValueAttribute
    i_create_iter: (model: DataModel) => DataModelIter
    i_iter_at_row: (model: DataModel, iter: DataModelIter, row: number) => boolean
    i_iter_next: (model: DataModel, iter: DataModelIter) => boolean
    i_iter_prev: (model: DataModel, iter: DataModelIter) => boolean
    i_set_value_at: (model: DataModel, col: number, row: number, value: any) => boolean
    i_iter_set_value: (model: DataModel, iter: DataModelIter, col: number, value: any) => boolean
    i_set_values: (model: DataModel, row: number, values?: any[] | null) => boolean
    i_append_values: (model: DataModel, values?: any[] | null) => number
    i_append_row: (model: DataModel) => number
    i_remove_row: (model: DataModel, row: number) => boolean
    i_find_row: (model: DataModel, values: any[], cols_index: number[]) => number
    i_set_notify: (model: DataModel, do_notify_changes: boolean) => void
    i_get_notify: (model: DataModel) => boolean
    i_send_hint: (model: DataModel, hint: DataModelHint, hint_value?: any | null) => void
    row_inserted: (model: DataModel, row: number) => void
    row_updated: (model: DataModel, row: number) => void
    row_removed: (model: DataModel, row: number) => void
    changed: (model: DataModel) => void
    reset: (model: DataModel) => void
    access_changed: (model: DataModel) => void
    i_get_exceptions: (model: DataModel) => GLib.Error[]
    static name: string
}
export abstract class DataModelImportClass {
    /* Fields of Gda.DataModelImportClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataModelImportPrivate {
    static name: string
}
export abstract class DataModelIterClass {
    /* Fields of Gda.DataModelIterClass */
    parent_class: SetClass
    row_changed: (iter: DataModelIter, row: number) => void
    end_of_data: (iter: DataModelIter) => void
    static name: string
}
export class DataModelIterPrivate {
    static name: string
}
export abstract class DataModelLdapClass {
    /* Fields of Gda.DataModelLdapClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataModelLdapPrivate {
    static name: string
}
export abstract class DataPivotClass {
    /* Fields of Gda.DataPivotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DataPivotPrivate {
    static name: string
}
export abstract class DataProxyClass {
    /* Fields of Gda.DataProxyClass */
    parent_class: GObject.ObjectClass
    row_delete_changed: (proxy: DataProxy, row: number, to_be_deleted: boolean) => void
    sample_size_changed: (proxy: DataProxy, sample_size: number) => void
    sample_changed: (proxy: DataProxy, sample_start: number, sample_end: number) => void
    validate_row_changes: (proxy: DataProxy, row: number, proxied_row: number) => GLib.Error
    row_changes_applied: (proxy: DataProxy, row: number, proxied_row: number) => void
    filter_changed: (proxy: DataProxy) => void
    static name: string
}
export class DataProxyPrivate {
    static name: string
}
export abstract class DataSelectClass {
    /* Fields of Gda.DataSelectClass */
    parent_class: GObject.ObjectClass
    fetch_nb_rows: (model: DataSelect) => number
    fetch_random: (model: DataSelect, prow: Row, rownum: number) => boolean
    store_all: (model: DataSelect) => boolean
    fetch_next: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetch_prev: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetch_at: (model: DataSelect, prow: Row, rownum: number) => boolean
    static name: string
}
export class DataSelectPrivate {
    static name: string
}
export class Diff {
    /* Fields of Gda.Diff */
    type: DiffType
    old_row: number
    new_row: number
    values: GLib.HashTable
    static name: string
}
export class DsnInfo {
    /* Fields of Gda.DsnInfo */
    name: string
    provider: string
    description: string
    cnc_string: string
    auth_string: string
    is_system: boolean
    /* Methods of Gda.DsnInfo */
    copy(): DsnInfo
    free(): void
    static name: string
    static new(): DsnInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DsnInfo
}
export class GeometricPoint {
    /* Fields of Gda.GeometricPoint */
    x: number
    y: number
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export abstract class HandlerBinClass {
    /* Fields of Gda.HandlerBinClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HandlerBinPriv {
    static name: string
}
export abstract class HandlerBooleanClass {
    /* Fields of Gda.HandlerBooleanClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HandlerBooleanPriv {
    static name: string
}
export abstract class HandlerNumericalClass {
    /* Fields of Gda.HandlerNumericalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HandlerNumericalPriv {
    static name: string
}
export abstract class HandlerStringClass {
    /* Fields of Gda.HandlerStringClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HandlerStringPriv {
    static name: string
}
export abstract class HandlerTimeClass {
    /* Fields of Gda.HandlerTimeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HandlerTimePriv {
    static name: string
}
export abstract class HandlerTypeClass {
    /* Fields of Gda.HandlerTypeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HandlerTypePriv {
    static name: string
}
export abstract class HolderClass {
    /* Fields of Gda.HolderClass */
    parent_class: GObject.ObjectClass
    changed: (holder: Holder) => void
    source_changed: (holder: Holder) => void
    validate_change: (holder: Holder, new_value: any) => GLib.Error
    att_changed: (holder: Holder, att_name: string, att_value: any) => void
    static name: string
}
export class HolderPrivate {
    static name: string
}
export abstract class LockableIface {
    /* Fields of Gda.LockableIface */
    g_iface: GObject.TypeInterface
    i_lock: (lock: Lockable) => void
    i_trylock: (lock: Lockable) => boolean
    i_unlock: (lock: Lockable) => void
    static name: string
}
export class MetaContext {
    /* Fields of Gda.MetaContext */
    table_name: string
    size: number
    column_names: string[]
    column_values: any[]
    columns: GLib.HashTable
    /* Methods of Gda.MetaContext */
    copy(): MetaContext
    free(): void
    get_table(): string
    set_column(column: string, value: any, cnc?: Connection | null): void
    set_columns(columns: GLib.HashTable, cnc?: Connection | null): void
    set_table(table: string): void
    static name: string
    static new(): MetaContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MetaContext
}
export class MetaDbObject {
    /* Fields of Gda.MetaDbObject */
    obj_type: MetaDbObjectType
    outdated: boolean
    obj_catalog: string
    obj_schema: string
    obj_name: string
    obj_short_name: string
    obj_full_name: string
    obj_owner: string
    depend_list: MetaDbObject[]
    static name: string
}
export class MetaStoreChange {
    /* Fields of Gda.MetaStoreChange */
    c_type: MetaStoreChangeType
    table_name: string
    keys: GLib.HashTable
    static name: string
}
export abstract class MetaStoreClass {
    /* Fields of Gda.MetaStoreClass */
    parent_class: GObject.ObjectClass
    cpriv: MetaStoreClassPrivate
    meta_reset: (store: MetaStore) => void
    suggest_update: (store: MetaStore, suggest: MetaContext) => GLib.Error
    static name: string
}
export class MetaStoreClassPrivate {
    static name: string
}
export class MetaStorePrivate {
    static name: string
}
export abstract class MetaStructClass {
    /* Fields of Gda.MetaStructClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MetaStructPrivate {
    static name: string
}
export class MetaTable {
    /* Fields of Gda.MetaTable */
    columns: MetaTableColumn[]
    pk_cols_array: number
    pk_cols_nb: number
    reverse_fk_list: MetaTableForeignKey[]
    fk_list: MetaTableForeignKey[]
    static name: string
}
export class MetaTableColumn {
    /* Fields of Gda.MetaTableColumn */
    column_name: string
    column_type: string
    gtype: GObject.Type
    pkey: boolean
    nullok: boolean
    default_value: string
    /* Methods of Gda.MetaTableColumn */
    foreach_attribute(func: AttributesManagerFunc): void
    get_attribute(attribute: string): any
    set_attribute(attribute: string, value?: any | null, destroy?: GLib.DestroyNotify | null): void
    static name: string
}
export class MetaTableForeignKey {
    /* Fields of Gda.MetaTableForeignKey */
    meta_table: MetaDbObject
    depend_on: MetaDbObject
    cols_nb: number
    fk_cols_array: number
    fk_names_array: string
    ref_pk_cols_array: number
    ref_pk_names_array: string
    fk_name: string
    static name: string
}
export class MetaView {
    /* Fields of Gda.MetaView */
    table: MetaTable
    view_def: string
    is_updatable: boolean
    static name: string
}
export class Numeric {
    /* Fields of Gda.Numeric */
    number: string
    precision: number
    width: number
    /* Methods of Gda.Numeric */
    copy(): Numeric
    free(): void
    get_double(): number
    get_precision(): number
    get_string(): string | null
    get_width(): number
    set_double(number: number): void
    set_from_string(str: string): void
    set_precision(precision: number): void
    set_width(width: number): void
    static name: string
    static new(): Numeric
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Numeric
}
export abstract class PStmtClass {
    /* Fields of Gda.PStmtClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PStmtPrivate {
    static name: string
}
export class ProviderInfo {
    /* Fields of Gda.ProviderInfo */
    id: string
    location: string
    description: string
    dsn_params: Set
    auth_params: Set
    static name: string
}
export class QuarkList {
    /* Methods of Gda.QuarkList */
    add_from_string(string: string, cleanup: boolean): void
    clear(): void
    copy(): QuarkList
    find(name: string): string
    foreach(func: GLib.HFunc): void
    free(): void
    protect_values(): void
    remove(name: string): void
    static name: string
    static new(): QuarkList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): QuarkList
    static new_from_string(string: string): QuarkList
}
export abstract class RepetitiveStatementClass {
    /* Fields of Gda.RepetitiveStatementClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RowClass {
    /* Fields of Gda.RowClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RowPrivate {
    static name: string
}
export abstract class ServerOperationClass {
    /* Fields of Gda.ServerOperationClass */
    parent_class: GObject.ObjectClass
    seq_item_added: (op: ServerOperation, seq_path: string, item_index: number) => void
    seq_item_remove: (op: ServerOperation, seq_path: string, item_index: number) => void
    static name: string
}
export class ServerOperationNode {
    /* Fields of Gda.ServerOperationNode */
    type: ServerOperationNodeType
    status: ServerOperationNodeStatus
    plist: Set
    model: DataModel
    column: Column
    param: Holder
    priv: object
    static name: string
}
export class ServerOperationPrivate {
    static name: string
}
export abstract class ServerProviderClass {
    /* Fields of Gda.ServerProviderClass */
    parent_class: GObject.ObjectClass
    limiting_thread: GLib.Thread
    get_name: (provider: ServerProvider) => string
    get_version: (provider: ServerProvider) => string
    get_server_version: (provider: ServerProvider, cnc: Connection) => string
    supports_feature: (provider: ServerProvider, cnc: Connection | null, feature: ConnectionFeature) => boolean
    get_def_dbms_type: (provider: ServerProvider, cnc: Connection, g_type: GObject.Type) => string
    escape_string: (provider: ServerProvider, cnc: Connection | null, str: string) => string
    unescape_string: (provider: ServerProvider, cnc: Connection | null, str: string) => string
    close_connection: (provider: ServerProvider, cnc: Connection) => boolean
    get_database: (provider: ServerProvider, cnc: Connection) => string
    supports_operation: (provider: ServerProvider, cnc: Connection | null, type: ServerOperationType, options?: Set | null) => boolean
    create_operation: (provider: ServerProvider, cnc: Connection | null, type: ServerOperationType, options?: Set | null) => ServerOperation | null
    render_operation: (provider: ServerProvider, cnc: Connection | null, op: ServerOperation) => string | null
    begin_transaction: (provider: ServerProvider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commit_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    add_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    delete_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    create_parser: (provider: ServerProvider, cnc?: Connection | null) => SqlParser
    statement_prepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
    is_busy: (provider: ServerProvider, cnc: Connection) => boolean
    cancel: (provider: ServerProvider, cnc: Connection, task_id: number) => boolean
    meta_funcs: ServerProviderMeta
    xa_funcs: ServerProviderXa
    identifier_quote: (provider: ServerProvider, cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean) => string
    handle_async: (provider: ServerProvider, cnc: Connection) => boolean
    static name: string
}
export class ServerProviderHandlerInfo {
    /* Fields of Gda.ServerProviderHandlerInfo */
    cnc: Connection
    g_type: GObject.Type
    dbms_type: string
    static name: string
}
export class ServerProviderInfo {
    static name: string
}
export class ServerProviderMeta {
    /* Fields of Gda.ServerProviderMeta */
    udt: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udt_catalog: any, udt_schema: any) => boolean
    udt_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udt_catalog: any, udt_schema: any, udt_name: any) => boolean
    enums: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udt_catalog: any, udt_schema: any, udt_name: any) => boolean
    domains: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domain_catalog: any, domain_schema: any) => boolean
    constraints_dom: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domain_catalog: any, domain_schema: any, domain_name: any) => boolean
    el_types: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, specific_name: any) => boolean
    collations: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, collation_catalog: any, collation_schema: any, collation_name_n: any) => boolean
    character_sets: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, chset_catalog: any, chset_schema: any, chset_name_n: any) => boolean
    schemata: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, catalog_name: any, schema_name_n: any) => boolean
    tables_views: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name_n: any) => boolean
    columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any) => boolean
    view_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, view_catalog: any, view_schema: any, view_name: any) => boolean
    constraints_tab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name_n: any) => boolean
    constraints_ref: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name: any) => boolean
    key_columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name: any) => boolean
    check_columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, constraint_name: any) => boolean
    triggers: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any) => boolean
    routines: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routine_catalog: any, routine_schema: any, routine_name_n: any) => boolean
    routine_col: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any) => boolean
    routine_par: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any) => boolean
    indexes_tab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, index_name_n: any) => boolean
    index_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, index_name: any) => boolean
    static name: string
}
export class ServerProviderPrivate {
    /* Fields of Gda.ServerProviderPrivate */
    data_handlers: GLib.HashTable
    parser: SqlParser
    static name: string
}
export class ServerProviderXa {
    /* Fields of Gda.ServerProviderXa */
    xa_start: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_end: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_prepare: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_commit: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xa_rollback: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    static name: string
}
export abstract class SetClass {
    /* Fields of Gda.SetClass */
    parent_class: GObject.ObjectClass
    validate_holder_change: (set: Set, holder: Holder, new_value: any) => GLib.Error
    validate_set: (set: Set) => GLib.Error
    holder_changed: (set: Set, holder: Holder) => void
    holder_attr_changed: (set: Set, holder: Holder, attr_name: string, attr_value: any) => void
    public_data_changed: (set: Set) => void
    holder_type_set: (set: Set, holder: Holder) => void
    source_model_changed: (set: Set, source: SetSource) => void
    static name: string
}
export class SetGroup {
    /* Fields of Gda.SetGroup */
    nodes: SetNode[]
    nodes_source: SetSource
    /* Methods of Gda.SetGroup */
    add_node(node: SetNode): void
    copy(): SetGroup
    free(): void
    get_n_nodes(): number
    get_node(): SetNode
    get_nodes(): SetNode[]
    get_source(): SetSource
    set_source(source: SetSource): void
    static name: string
    static new(node: SetNode): SetGroup
    constructor(node: SetNode)
    /* Static methods and pseudo-constructors */
    static new(node: SetNode): SetGroup
}
export class SetNode {
    /* Fields of Gda.SetNode */
    holder: Holder
    source_model: DataModel
    source_column: number
    /* Methods of Gda.SetNode */
    copy(): SetNode
    free(): void
    get_data_model(): DataModel
    get_holder(): Holder
    get_source_column(): number
    set_data_model(model?: DataModel | null): void
    set_holder(holder: Holder): void
    set_source_column(column: number): void
    static name: string
    static new(holder: Holder): SetNode
    constructor(holder: Holder)
    /* Static methods and pseudo-constructors */
    static new(holder: Holder): SetNode
}
export class SetPrivate {
    static name: string
}
export class SetSource {
    /* Fields of Gda.SetSource */
    data_model: DataModel
    nodes: SetNode[]
    /* Methods of Gda.SetSource */
    add_node(node: SetNode): void
    copy(): SetSource
    free(): void
    get_data_model(): DataModel
    get_n_nodes(): number
    get_nodes(): SetNode[]
    set_data_model(model: DataModel): void
    static name: string
    static new(model: DataModel): SetSource
    constructor(model: DataModel)
    /* Static methods and pseudo-constructors */
    static new(model: DataModel): SetSource
}
export class SqlAnyPart {
    /* Fields of Gda.SqlAnyPart */
    type: any
    parent: any
    /* Methods of Gda.SqlAnyPart */
    check_structure(): boolean
    static name: string
}
export abstract class SqlBuilderClass {
    /* Fields of Gda.SqlBuilderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SqlBuilderPrivate {
    static name: string
}
export class SqlCase {
    /* Fields of Gda.SqlCase */
    any: any
    base_expr: any
    when_expr_list: object[]
    then_expr_list: object[]
    else_expr: any
    /* Methods of Gda.SqlCase */
    free(): void
    serialize(): string
    static name: string
}
export class SqlExpr {
    /* Fields of Gda.SqlExpr */
    any: any
    value: any
    param_spec: any
    func: any
    cond: any
    select: any
    case_s: any
    cast_as: string
    value_is_ident: boolean
    /* Methods of Gda.SqlExpr */
    free(): void
    serialize(): string
    take_select(stmt: SqlStatement): void
    static name: string
}
export class SqlField {
    /* Fields of Gda.SqlField */
    any: any
    field_name: string
    validity_meta_table_column: MetaTableColumn
    /* Methods of Gda.SqlField */
    free(): void
    serialize(): string
    take_name(value: any): void
    static name: string
}
export class SqlFunction {
    /* Fields of Gda.SqlFunction */
    any: any
    function_name: string
    args_list: object[]
    /* Methods of Gda.SqlFunction */
    check_clean(): void
    free(): void
    serialize(): string
    take_args_list(args: object[]): void
    take_name(value: any): void
    static name: string
}
export class SqlOperation {
    /* Fields of Gda.SqlOperation */
    any: any
    operator_type: SqlOperatorType
    operands: object[]
    /* Methods of Gda.SqlOperation */
    free(): void
    serialize(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static operator_from_string(op: string): SqlOperatorType
    static operator_to_string(op: SqlOperatorType): string
}
export abstract class SqlParserClass {
    /* Fields of Gda.SqlParserClass */
    parent_class: GObject.ObjectClass
    delim_alloc: (f: object) => object
    delim_free: (d: object, f: object) => void
    delim_trace: (d: object, s: string) => void
    delim_parse: (d: object, i: number, v: any, iface: SqlParserIface) => void
    delim_tokens_trans: number
    parser_alloc: (f: object) => object
    parser_free: (p: object, f: object) => void
    parser_trace: (p: object, s: string) => void
    parser_parse: (p: object, i: number, v: any, iface: SqlParserIface) => void
    parser_tokens_trans: number
    static name: string
}
export class SqlParserIface {
    /* Fields of Gda.SqlParserIface */
    parser: SqlParser
    parsed_statement: SqlStatement
    static name: string
}
export class SqlParserPrivate {
    static name: string
}
export class SqlRenderingContext {
    /* Fields of Gda.SqlRenderingContext */
    flags: StatementSqlFlag
    params: Set
    params_used: Holder[]
    provider: ServerProvider
    cnc: Connection
    render_value: SqlRenderingValue
    static name: string
}
export class SqlSelectField {
    /* Fields of Gda.SqlSelectField */
    any: any
    expr: any
    field_name: string
    table_name: string
    as: string
    validity_meta_object: MetaDbObject
    validity_meta_table_column: MetaTableColumn
    /* Methods of Gda.SqlSelectField */
    free(): void
    serialize(): string
    take_alias(alias: any): void
    take_star_value(value: any): void
    static name: string
}
export class SqlSelectFrom {
    /* Fields of Gda.SqlSelectFrom */
    any: any
    targets: any[]
    joins: any[]
    /* Methods of Gda.SqlSelectFrom */
    free(): void
    serialize(): string
    static name: string
}
export class SqlSelectJoin {
    /* Fields of Gda.SqlSelectJoin */
    any: any
    type: SqlSelectJoinType
    position: number
    expr: any
    use: object[]
    /* Methods of Gda.SqlSelectJoin */
    free(): void
    serialize(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static type_to_string(type: SqlSelectJoinType): string
}
export class SqlSelectOrder {
    /* Fields of Gda.SqlSelectOrder */
    any: any
    expr: any
    asc: boolean
    collation_name: string
    /* Methods of Gda.SqlSelectOrder */
    free(): void
    serialize(): string
    static name: string
}
export class SqlSelectTarget {
    /* Fields of Gda.SqlSelectTarget */
    any: any
    expr: any
    table_name: string
    as: string
    validity_meta_object: MetaDbObject
    /* Methods of Gda.SqlSelectTarget */
    free(): void
    serialize(): string
    take_alias(alias: any): void
    take_select(stmt: SqlStatement): void
    take_table_name(value: any): void
    static name: string
}
export class SqlStatement {
    /* Methods of Gda.SqlStatement */
    compound_set_type(type: SqlStatementCompoundType): void
    compound_take_stmt(s: SqlStatement): void
    static name: string
}
export class SqlStatementCheckValidityData {
    /* Fields of Gda.SqlStatementCheckValidityData */
    cnc: Connection
    store: MetaStore
    mstruct: MetaStruct
    static name: string
}
export class SqlStatementCompound {
    /* Fields of Gda.SqlStatementCompound */
    any: any
    compound_type: SqlStatementCompoundType
    stmt_list: object[]
    static name: string
}
export class SqlStatementContentsInfo {
    /* Fields of Gda.SqlStatementContentsInfo */
    type: SqlStatementType
    name: string
    construct: () => object
    free: (stm: object) => void
    copy: (stm: object) => object
    serialize: (stm: object) => string
    check_structure_func: any
    check_validity_func: any
    static name: string
}
export class SqlStatementDelete {
    static name: string
}
export class SqlStatementInsert {
    static name: string
}
export class SqlStatementSelect {
    static name: string
}
export class SqlStatementTransaction {
    static name: string
}
export class SqlStatementUnknown {
    static name: string
}
export class SqlStatementUpdate {
    static name: string
}
export class SqlTable {
    /* Fields of Gda.SqlTable */
    any: any
    table_name: string
    validity_meta_object: MetaDbObject
    /* Methods of Gda.SqlTable */
    free(): void
    serialize(): string
    take_name(value: any): void
    static name: string
}
export abstract class StatementClass {
    /* Fields of Gda.StatementClass */
    parent_class: GObject.ObjectClass
    checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    reset: (stmt: Statement) => void
    static name: string
}
export class StatementPrivate {
    static name: string
}
export class ThreadNotification {
    /* Fields of Gda.ThreadNotification */
    type: ThreadNotificationType
    job_id: number
    static name: string
}
export abstract class ThreadWrapperClass {
    /* Fields of Gda.ThreadWrapperClass */
    object_class: GObject.ObjectClass
    static name: string
}
export class ThreadWrapperPrivate {
    static name: string
}
export class Time {
    /* Fields of Gda.Time */
    hour: number
    minute: number
    second: number
    fraction: number
    timezone: number
    /* Methods of Gda.Time */
    change_timezone(ntz: number): void
    valid(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class Timestamp {
    /* Fields of Gda.Timestamp */
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    fraction: number
    timezone: number
    /* Methods of Gda.Timestamp */
    change_timezone(ntz: number): void
    valid(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export abstract class TransactionStatusClass {
    /* Fields of Gda.TransactionStatusClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TransactionStatusEvent {
    /* Fields of Gda.TransactionStatusEvent */
    trans: TransactionStatus
    type: TransactionStatusEventType
    conn_event: ConnectionEvent
    static name: string
}
export abstract class TreeClass {
    /* Fields of Gda.TreeClass */
    object_class: GObject.ObjectClass
    node_changed: (tree: Tree, node: TreeNode) => void
    node_inserted: (tree: Tree, node: TreeNode) => void
    node_has_child_toggled: (tree: Tree, node: TreeNode) => void
    node_deleted: (tree: Tree, node_path: string) => void
    static name: string
}
export abstract class TreeManagerClass {
    /* Fields of Gda.TreeManagerClass */
    object_class: GObject.ObjectClass
    static name: string
}
export class TreeManagerPrivate {
    static name: string
}
export abstract class TreeMgrColumnsClass {
    /* Fields of Gda.TreeMgrColumnsClass */
    object_class: TreeManagerClass
    static name: string
}
export class TreeMgrColumnsPriv {
    static name: string
}
export abstract class TreeMgrLabelClass {
    /* Fields of Gda.TreeMgrLabelClass */
    object_class: TreeManagerClass
    static name: string
}
export class TreeMgrLabelPriv {
    static name: string
}
export abstract class TreeMgrLdapClass {
    /* Fields of Gda.TreeMgrLdapClass */
    object_class: TreeManagerClass
    static name: string
}
export class TreeMgrLdapPriv {
    static name: string
}
export abstract class TreeMgrSchemasClass {
    /* Fields of Gda.TreeMgrSchemasClass */
    object_class: TreeManagerClass
    static name: string
}
export class TreeMgrSchemasPriv {
    static name: string
}
export abstract class TreeMgrSelectClass {
    /* Fields of Gda.TreeMgrSelectClass */
    object_class: TreeManagerClass
    static name: string
}
export class TreeMgrSelectPriv {
    static name: string
}
export abstract class TreeMgrTablesClass {
    /* Fields of Gda.TreeMgrTablesClass */
    object_class: TreeManagerClass
    static name: string
}
export class TreeMgrTablesPriv {
    static name: string
}
export abstract class TreeNodeClass {
    /* Fields of Gda.TreeNodeClass */
    object_class: GObject.ObjectClass
    node_changed: (reporting: TreeNode, node: TreeNode) => void
    node_inserted: (reporting: TreeNode, node: TreeNode) => void
    node_has_child_toggled: (reporting: TreeNode, node: TreeNode) => void
    node_deleted: (reporting: TreeNode, relative_path: string) => void
    dump_header: (node: TreeNode) => string
    dump_children: (node: TreeNode, prefix: string, in_string: GLib.String) => void
    static name: string
}
export class TreeNodePrivate {
    static name: string
}
export class TreePrivate {
    static name: string
}
export abstract class XaTransactionClass {
    /* Fields of Gda.XaTransactionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XaTransactionId {
    /* Fields of Gda.XaTransactionId */
    format: number
    gtrid_length: number
    bqual_length: number
    data: number[]
    /* Methods of Gda.XaTransactionId */
    to_string(): string
    static name: string
}
export class XaTransactionPrivate {
    static name: string
}
export type Mutex = GLib.RecMutex
export type SqlBuilderId = number
export type SqlErrorType = SqlError