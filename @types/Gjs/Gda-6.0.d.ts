/**
 * Gda-6.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gio from './Gio-2.0';
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
    ALREADY_OPENED_ERROR,
    STATEMENT_TYPE_ERROR,
    CANT_LOCK_ERROR,
    TASK_NOT_FOUND_ERROR,
    CLOSED_ERROR,
    META_DATA_CONTEXT_ERROR,
    NO_MAIN_CONTEXT_ERROR,
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
    TRANSACTION_ISOLATION_READ_COMMITTED,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED,
    TRANSACTION_ISOLATION_REPEATABLE_READ,
    TRANSACTION_ISOLATION_SERIALIZABLE,
    XA_TRANSACTIONS,
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
export enum ConnectionStatus {
    CLOSED,
    OPENING,
    IDLE,
    BUSY,
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
    INVALID,
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
export enum DbCatalogError {
    CONTEXT_NULL,
    DOC_NULL,
    INVALID_XML,
    INVALID_SCHEMA,
    SERVER_OPERATION,
    FILE_READ,
    PARSE_CONTEXT,
    PARSE,
    PARSE_CHUNK,
    CONNECTION_CLOSED,
}
export enum DbColumnError {
    TYPE,
    WRONG_OPERATION,
}
export enum DbFkeyReferenceAction {
    NO_ACTION,
    SET_NULL,
    RESTRICT,
    SET_DEFAULT,
    CASCADE,
}
export enum DbIndexError {
    CONNECTION_NOT_OPENED,
    SERVER_OPERATION,
}
export enum DbIndexSortOrder {
    ASC,
    DESC,
}
export enum DbTableError {
    COLUMN_EMPTY,
    CONNECTION_NOT_OPENED,
    SERVER_OPERATION,
}
export enum DbViewRefAction {
    RESTRICT,
    CASCADE,
}
export enum DdlModifiableError {
    NOT_IMPLEMENTED,
    CONNECTION_NOT_OPENED,
    MISSED_DATA,
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
    VALUE_CHANGE_ERROR,
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
export enum ProviderMetaError {
    NO_CONNECTION_ERROR,
    QUERY_ERROR,
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
    RENAME_COLUMN,
    CREATE_INDEX,
    DROP_INDEX,
    RENAME_INDEX,
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
export enum ServerProviderFunctionsType {
    BASE,
    META,
    XA,
    MAX,
}
export enum ServerProviderMetaType {
    _INFO,
    _BTYPES,
    _UDT,
    UDT,
    _UDT_COLS,
    UDT_COLS,
    _ENUMS,
    ENUMS,
    _DOMAINS,
    DOMAINS,
    _CONSTRAINTS_DOM,
    CONSTRAINTS_DOM,
    _EL_TYPES,
    EL_TYPES,
    _COLLATIONS,
    COLLATIONS,
    _CHARACTER_SETS,
    CHARACTER_SETS,
    _SCHEMATA,
    SCHEMATA,
    _TABLES_VIEWS,
    TABLES_VIEWS,
    _COLUMNS,
    COLUMNS,
    _VIEW_COLS,
    VIEW_COLS,
    _CONSTRAINTS_TAB,
    CONSTRAINTS_TAB,
    _CONSTRAINTS_REF,
    CONSTRAINTS_REF,
    _KEY_COLUMNS,
    KEY_COLUMNS,
    _CHECK_COLUMNS,
    CHECK_COLUMNS,
    _TRIGGERS,
    TRIGGERS,
    _ROUTINES,
    ROUTINES,
    _ROUTINE_COL,
    ROUTINE_COL,
    _ROUTINE_PAR,
    ROUTINE_PAR,
    _INDEXES_TAB,
    INDEXES_TAB,
    _INDEX_COLS,
    INDEX_COLS,
}
export enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
export enum SqlAnyPartType {
    STMT_SELECT,
    STMT_INSERT,
    STMT_UPDATE,
    STMT_DELETE,
    STMT_COMPOUND,
    STMT_BEGIN,
    STMT_ROLLBACK,
    STMT_COMMIT,
    STMT_SAVEPOINT,
    STMT_ROLLBACK_SAVEPOINT,
    STMT_DELETE_SAVEPOINT,
    STMT_UNKNOWN,
    EXPR,
    SQL_FIELD,
    SQL_TABLE,
    SQL_FUNCTION,
    SQL_OPERATION,
    SQL_CASE,
    SQL_SELECT_FIELD,
    SQL_SELECT_TARGET,
    SQL_SELECT_JOIN,
    SQL_SELECT_FROM,
    SQL_SELECT_ORDER,
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
export enum TransactionIsolation {
    SERVER_DEFAULT,
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
export enum WorkerError {
    INTER_THREAD_ERROR,
    JOB_NOT_FOUND_ERROR,
    JOB_QUEUED_ERROR,
    JOB_BEING_PROCESSED_ERROR,
    JOB_PROCESSED_ERROR,
    JOB_CANCELLED_ERROR,
    THREAD_KILLED,
}
export enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
export enum XaType {
    START,
    END,
    PREPARE,
    COMMIT,
    ROLLBACK,
    RECOVER,
}
export enum ConnectionOptions {
    NONE,
    READ_ONLY,
    SQL_IDENTIFIERS_CASE_SENSITIVE,
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
    DATA_NON_VALID,
    HAS_VALUE_ORIG,
    NO_MODIF,
    READ_ONLY,
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
export function alphanum_to_text(text: string): string | null
export function completion_list_get(cnc: Connection, sql: string, start: number, end: number): string[] | null
export function compute_dml_statements(cnc: Connection, select_stmt: Statement, require_pk: boolean): [ /* returnType */ boolean, /* insert_stmt */ Statement | null, /* update_stmt */ Statement | null, /* delete_stmt */ Statement | null ]
export function compute_select_statement_from_update(update_stmt: Statement): SqlStatement | null
export function compute_unique_table_row_condition(stsel: SqlStatementSelect, mtable: MetaTable, require_pk: boolean): SqlExpr | null
export function compute_unique_table_row_condition_with_cnc(cnc: Connection | null, stsel: SqlStatementSelect, mtable: MetaTable, require_pk: boolean): SqlExpr | null
export function data_handler_get_default(for_type: GObject.Type): DataHandler
export function data_model_error_quark(): GLib.Quark
export function date_time_copy(ts: GLib.DateTime): GLib.DateTime
export function ddl_modifiable_error_quark(): GLib.Quark
export function default_escape_string(string: string): string | null
export function default_unescape_string(string: string): string | null
export function dsn_split(string: string, out_dsn: string, out_username: string, out_password: string): void
export function g_type_from_string(str: string): GObject.Type
export function g_type_to_string(type: GObject.Type): string
export function identifier_equal(id1: string, id2: string): boolean
export function identifier_hash(id: string): number
export function log_disable(): void
export function log_enable(): void
export function log_is_enabled(): boolean
export function parse_formatted_date(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
export function parse_formatted_time(value: string, sep: number): Time
export function parse_formatted_timestamp(value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): GLib.DateTime | null
export function parse_iso8601_date(gdate: GLib.Date, value: string): boolean
export function parse_iso8601_time(value: string): Time
export function provider_meta_error_quark(): GLib.Quark
export function rewrite_sql_statement_for_null_parameters(sqlst: SqlStatement, params: Set): [ /* returnType */ SqlStatement | null, /* out_modified */ boolean | null ]
export function rewrite_statement_for_null_parameters(stmt: Statement, params: Set): [ /* returnType */ boolean, /* out_stmt */ Statement | null ]
export function rfc1738_decode(string: string): boolean
export function rfc1738_encode(string: string): string | null
export function select_alter_select_for_empty(stmt: Statement): Statement
export function server_operation_create_table_arg_get_fkey_ref_field_get_type(): GObject.Type
export function sql_error_quark(): GLib.Quark
export function sql_identifier_force_quotes(str: string): string
export function sql_identifier_prepare_for_compare(str: string): string
export function sql_identifier_quote(id: string, cnc: Connection | null, prov: ServerProvider | null, meta_store_convention: boolean, force_quotes: boolean): string | null
export function sql_identifier_split(id: string): string[] | null
export function sql_operation_operator_from_string(op: string): SqlOperatorType
export function sql_operation_operator_to_string(op: SqlOperatorType): string
export function sql_select_join_type_to_string(type: SqlSelectJoinType): string
export function sql_statement_get_contents_infos(type: SqlStatementType): SqlStatementContentsInfo
export function sql_statement_string_to_type(type: string): SqlStatementType
export function sql_statement_type_to_string(type: SqlStatementType): string
export function sql_value_stringify(value: any): string
export function string_to_binary(str?: string | null): Binary
export function string_to_blob(str: string): Blob
export function text_to_alphanum(text: string): string
export function utility_check_data_model(model: DataModel, types: GObject.Type[]): boolean
export function utility_data_model_dump_data_to_xml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, use_col_ids: boolean): boolean
export function utility_data_model_find_column_description(model: DataSelect, field_name: string): string | null
export function utility_holder_load_attributes(holder: Holder, node: libxml2.NodePtr, sources?: DataModel[] | null): boolean
export function value_compare(value1: any, value2: any): number
export function value_copy(value: any): any
export function value_differ(value1: any, value2: any): number
export function value_free(value?: any | null): void
export function value_get_binary(value: any): Binary
export function value_get_blob(value: any): Blob
export function value_get_geometric_point(value: any): GeometricPoint
export function value_get_meta_store_change(value: any): MetaStoreChange
export function value_get_numeric(value: any): Numeric
export function value_get_short(value: any): number
export function value_get_time(value: any): Time
export function value_get_ushort(value: any): number
export function value_is_null(value: any): boolean
export function value_is_number(value: any): boolean
export function value_new(type: GObject.Type): any
export function value_new_binary(val: number, size: number): any
export function value_new_blob(val: number, size: number): any
export function value_new_blob_from_file(filename: string): any
export function value_new_date_time_from_timet(val: number): any
export function value_new_default(default_val?: string | null): any
export function value_new_from_string(as_string: string, type: GObject.Type): any
export function value_new_from_xml(node: libxml2.NodePtr): any
export function value_new_null(): any
export function value_new_time_from_timet(val: number): any
export function value_reset_with_type(value: any, type: GObject.Type): void
export function value_set_binary(value: any, binary: Binary): void
export function value_set_blob(value: any, blob: Blob): void
export function value_set_from_string(value: any, as_string: string, type: GObject.Type): boolean
export function value_set_from_value(value: any, from: any): boolean
export function value_set_geometric_point(value: any, val: GeometricPoint): void
export function value_set_meta_store_change(value: any, change: MetaStoreChange): void
export function value_set_null(value: any): void
export function value_set_numeric(value: any, val: Numeric): void
export function value_set_short(value: any, val: number): void
export function value_set_time(value: any, val: Time): void
export function value_set_ushort(value: any, val: number): void
export function value_stringify(value: any): string
export function value_take_binary(value: any, binary: Binary): void
export function value_take_blob(value: any, blob: Blob): void
export function value_to_xml_string(value: any): string
export function worker_error_quark(): GLib.Quark
export function worker_new_unique(location: Worker, allow_destroy: boolean): Worker
export interface ConnectionOpenFunc {
    (cnc: Connection, job_id: number, result: boolean, error: GLib.Error, data?: object | null): void
}
export interface SqlForeachFunc {
    (part: SqlAnyPart, data?: object | null): boolean
}
export interface SqlReservedKeywordsFunc {
    (word: string): boolean
}
export interface TreeManagerNodeFunc {
    (manager: TreeManager, parent?: TreeNode | null, name?: string | null): TreeNode
}
export interface TreeManagerNodesFunc {
    (manager: TreeManager, node: TreeNode | null, children_nodes: TreeNode[]): TreeNode[]
}
export interface WorkerCallback {
    (worker: Worker, job_id: number, result_data: object | null, error: GLib.Error): void
}
export interface WorkerFunc {
    (): object | null
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
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
export class DbBuildable {
    /* Methods of Gda.DbBuildable */
    parse_node(node: libxml2.NodePtr): boolean
    write_node(node: libxml2.NodePtr): boolean
    /* Virtual methods of Gda.DbBuildable */
    vfunc_parse_node(node: libxml2.NodePtr): boolean
    vfunc_write_node(node: libxml2.NodePtr): boolean
    static name: string
}
export class DdlModifiable {
    /* Methods of Gda.DdlModifiable */
    create(cnc: Connection, user_data?: object | null): boolean
    drop(cnc: Connection, user_data?: object | null): boolean
    rename(cnc: Connection, user_data?: object | null): boolean
    /* Virtual methods of Gda.DdlModifiable */
    vfunc_create(cnc: Connection): boolean
    vfunc_drop(cnc: Connection): boolean
    vfunc_rename(cnc: Connection): boolean
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
    vfunc_lock(): void
    vfunc_trylock(): boolean
    vfunc_unlock(): void
    static name: string
}
export class Provider {
    /* Methods of Gda.Provider */
    add_savepoint(cnc: Connection, name: string): boolean
    begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    close_connection(cnc: Connection): boolean
    commit_transaction(cnc: Connection, name: string): boolean
    create_connection(): Connection
    create_operation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    create_parser(cnc: Connection): SqlParser
    delete_savepoint(cnc: Connection, name: string): boolean
    escape_string(cnc: Connection, str: string): string
    get_data_handler(cnc: Connection, g_type: GObject.Type, dbms_type: string): DataHandler
    get_def_dbms_type(cnc: Connection, g_type: GObject.Type): string
    get_last_inserted(cnc: Connection): Set
    get_name(): string
    get_server_version(cnc: Connection): string
    get_version(): string
    identifier_quote(cnc: Connection | null, id: string, for_meta_store: boolean, force_quotes: boolean): string
    open_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    perform_operation(cnc: Connection, op: ServerOperation): boolean
    prepare_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    render_operation(cnc: Connection, op: ServerOperation): string
    rollback_savepoint(cnc: Connection, name: string): boolean
    rollback_transaction(cnc: Connection, name: string): boolean
    statement_execute(cnc: Connection, stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: GObject.Type, last_inserted_row: Set): GObject.Object
    statement_prepare(cnc: Connection, stmt: Statement): boolean
    statement_rewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    statement_to_sql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
    supports_feature(cnc: Connection, feature: ConnectionFeature): boolean
    supports_operation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    unescape_string(cnc: Connection, str: string): string
    /* Virtual methods of Gda.Provider */
    vfunc_add_savepoint(cnc: Connection, name: string): boolean
    vfunc_begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    vfunc_close_connection(cnc: Connection): boolean
    vfunc_commit_transaction(cnc: Connection, name: string): boolean
    vfunc_create_connection(): Connection
    vfunc_create_operation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    vfunc_create_parser(cnc: Connection): SqlParser
    vfunc_delete_savepoint(cnc: Connection, name: string): boolean
    vfunc_escape_string(cnc: Connection, str: string): string
    vfunc_get_data_handler(cnc: Connection, g_type: GObject.Type, dbms_type: string): DataHandler
    vfunc_get_def_dbms_type(cnc: Connection, g_type: GObject.Type): string
    vfunc_get_last_inserted(cnc: Connection): Set
    vfunc_get_name(): string
    vfunc_get_server_version(cnc: Connection): string
    vfunc_get_version(): string
    vfunc_identifier_quote(cnc: Connection | null, id: string, for_meta_store: boolean, force_quotes: boolean): string
    vfunc_open_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    vfunc_perform_operation(cnc: Connection, op: ServerOperation): boolean
    vfunc_prepare_connection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    vfunc_render_operation(cnc: Connection, op: ServerOperation): string
    vfunc_rollback_savepoint(cnc: Connection, name: string): boolean
    vfunc_rollback_transaction(cnc: Connection, name: string): boolean
    vfunc_statement_execute(cnc: Connection, stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: GObject.Type, last_inserted_row: Set): GObject.Object
    vfunc_statement_prepare(cnc: Connection, stmt: Statement): boolean
    vfunc_statement_rewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    vfunc_statement_to_sql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
    vfunc_supports_feature(cnc: Connection, feature: ConnectionFeature): boolean
    vfunc_supports_operation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    vfunc_unescape_string(cnc: Connection, str: string): string
    static name: string
}
export class ProviderMeta {
    /* Methods of Gda.ProviderMeta */
    btypes(): DataModel
    character_set(chset_catalog: string, chset_schema: string, chset_name_n: string): Row
    character_sets(): DataModel
    check_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    check_columns(): DataModel
    collation(collation_catalog: string, collation_schema: string, collation_name_n: string): Row
    collations(): DataModel
    columns(): DataModel
    constraint_ref(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    constraint_table(table_catalog: string, table_schema: string, table_name: string, constraint_name_n: string): Row
    constraints_ref(): DataModel
    constraints_ref_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    constraints_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    constraints_tables(): DataModel
    domain(domain_catalog: string, domain_schema: string): Row
    domain_constraint(domain_catalog: string, domain_schema: string, domain_name: string, contraint_name: string): Row
    domain_constraints(domain_catalog: string, domain_schema: string, domain_name: string): DataModel
    domains(): DataModel
    domains_constraints(): DataModel
    element_type(specific_name: string): Row
    element_types(): DataModel
    enum_type(udt_catalog: string, udt_schema: string, udt_name: string): Row
    enums_type(): DataModel
    execute_query(sql: string, params?: Set | null): DataModel | null
    execute_query_row(sql: string, params: Set): Row | null
    get_connection(): Connection
    index_col(table_catalog: string, table_schema: string, table_name: string, index_name: string): Row
    index_cols(): DataModel
    index_table(table_catalog: string, table_schema: string, table_name: string, index_name_n: string): Row
    indexes_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    indexes_tables(): DataModel
    key_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    key_columns(): DataModel
    routine(routine_catalog: string, routine_schema: string, routine_name_n: string): Row
    routine_col(rout_catalog: string, rout_schema: string, rout_name: string): Row
    routine_pars(rout_catalog: string, rout_schema: string, rout_name: string): Row
    routines(): DataModel
    routines_col(): DataModel
    routines_pars(): DataModel
    schemata(catalog_name: string, schema_name_n: string): Row
    schematas(): DataModel
    table(table_catalog: string, table_schema: string, table_name_n: string): Row
    table_column(table_catalog: string, table_schema: string, table_name: string, column_name: string): Row
    table_columns(table_catalog: string, table_schema: string, table_name: string): DataModel
    tables(): DataModel
    tables_columns(): DataModel
    trigger(table_catalog: string, table_schema: string, table_name: string): Row
    triggers(): DataModel
    udt(udt_catalog: string, udt_schema: string): Row
    udt_col(udt_catalog: string, udt_schema: string, udt_name: string): Row
    udt_cols(): DataModel
    udts(): DataModel
    view(view_catalog: string, view_schema: string, view_name_n: string): Row
    view_column(view_catalog: string, view_schema: string, view_name: string, column_name: string): Row
    view_columns(view_catalog: string, view_schema: string, view_name: string): DataModel
    views(): DataModel
    views_columns(): DataModel
    /* Virtual methods of Gda.ProviderMeta */
    vfunc_btypes(): DataModel
    vfunc_character_set(chset_catalog: string, chset_schema: string, chset_name_n: string): Row
    vfunc_character_sets(): DataModel
    vfunc_check_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    vfunc_check_columns(): DataModel
    vfunc_collation(collation_catalog: string, collation_schema: string, collation_name_n: string): Row
    vfunc_collations(): DataModel
    vfunc_columns(): DataModel
    vfunc_constraint_ref(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    vfunc_constraint_table(table_catalog: string, table_schema: string, table_name: string, constraint_name_n: string): Row
    vfunc_constraints_ref(): DataModel
    vfunc_constraints_ref_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_constraints_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_constraints_tables(): DataModel
    vfunc_domain(domain_catalog: string, domain_schema: string): Row
    vfunc_domain_constraint(domain_catalog: string, domain_schema: string, domain_name: string, constraint_name: string): Row
    vfunc_domain_constraints(domain_catalog: string, domain_schema: string, domain_name: string): DataModel
    vfunc_domains(): DataModel
    vfunc_domains_constraints(): DataModel
    vfunc_element_type(specific_name: string): Row
    vfunc_element_types(): DataModel
    vfunc_enum_type(udt_catalog: string, udt_schema: string, udt_name: string): Row
    vfunc_enums_type(): DataModel
    vfunc_index_col(table_catalog: string, table_schema: string, table_name: string, index_name: string): Row
    vfunc_index_cols(): DataModel
    vfunc_index_table(table_catalog: string, table_schema: string, table_name: string, index_name_n: string): Row
    vfunc_indexes_table(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_indexes_tables(): DataModel
    vfunc_key_column(table_catalog: string, table_schema: string, table_name: string, constraint_name: string): Row
    vfunc_key_columns(): DataModel
    vfunc_routine(routine_catalog: string, routine_schema: string, routine_name_n: string): Row
    vfunc_routine_col(rout_catalog: string, rout_schema: string, rout_name: string): Row
    vfunc_routine_pars(rout_catalog: string, rout_schema: string, rout_name: string): Row
    vfunc_routines(): DataModel
    vfunc_routines_col(): DataModel
    vfunc_routines_pars(): DataModel
    vfunc_schemata(catalog_name: string, schema_name_n: string): Row
    vfunc_schematas(): DataModel
    vfunc_table(table_catalog: string, table_schema: string, table_name_n: string): Row
    vfunc_table_column(table_catalog: string, table_schema: string, table_name: string, column_name: string): Row
    vfunc_table_columns(table_catalog: string, table_schema: string, table_name: string): DataModel
    vfunc_tables(): DataModel
    vfunc_tables_columns(): DataModel
    vfunc_trigger(table_catalog: string, table_schema: string, table_name: string): Row
    vfunc_triggers(): DataModel
    vfunc_udt(udt_catalog: string, udt_schema: string): Row
    vfunc_udt_col(udt_catalog: string, udt_schema: string, udt_name: string): Row
    vfunc_udt_cols(): DataModel
    vfunc_udts(): DataModel
    vfunc_view(view_catalog: string, view_schema: string, view_name_n: string): Row
    vfunc_view_column(view_catalog: string, view_schema: string, view_name: string, column_name: string): Row
    vfunc_view_columns(view_catalog: string, view_schema: string, view_name: string): DataModel
    vfunc_views(): DataModel
    vfunc_views_columns(): DataModel
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
export interface Batch_ConstructProps extends GObject.Object_ConstructProps {
}
export class Batch {
    /* Fields of Gda.Batch */
    parent_instance: GObject.Object
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
    connection?: Connection
}
export class BlobOp {
    /* Fields of Gda.BlobOp */
    parent_instance: GObject.Object
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
    desc?: string
    id?: string
    name?: string
}
export class Column {
    /* Properties of Gda.Column */
    desc: string
    id: string
    name: string
    /* Fields of Gda.Column */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Column */
    copy(): Column
    get_allow_null(): boolean
    get_auto_increment(): boolean
    get_dbms_type(): string
    get_default_value(): any | null
    get_description(): string
    get_g_type(): GObject.Type
    get_name(): string
    get_position(): number
    set_allow_null(allow: boolean): void
    set_auto_increment(is_auto: boolean): void
    set_dbms_type(dbms_type: string): void
    set_default_value(default_value?: any | null): void
    set_description(descr: string): void
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
    connect(sigName: "notify::desc", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
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
    meta_store?: MetaStore
    provider?: ServerProvider
}
export class Connection {
    /* Properties of Gda.Connection */
    auth_string: string
    cnc_string: string
    dsn: string
    events_history_size: number
    execution_slowdown: number
    execution_timer: boolean
    meta_store: MetaStore
    provider: ServerProvider
    /* Fields of Gda.Connection */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Connection */
    add_event(event: ConnectionEvent): void
    add_prepared_statement(gda_stmt: Statement, prepared_stmt: PStmt): void
    add_savepoint(name?: string | null): boolean
    batch_execute(batch: Batch, params: Set | null, model_usage: StatementModelUsage): GObject.Object[]
    begin_transaction(name: string | null, level: TransactionIsolation): boolean
    clear_events_list(): void
    close(): boolean
    commit_transaction(name?: string | null): boolean
    create_db_catalog(): DbCatalog
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
    get_main_context(thread?: GLib.Thread | null): GLib.MainContext
    get_meta_store(): MetaStore
    get_meta_store_data(meta_type: ConnectionMetaType, filters: Holder[]): DataModel
    get_options(): ConnectionOptions
    get_prepared_statement(gda_stmt: Statement): PStmt
    get_provider(): ServerProvider
    get_provider_name(): string
    get_status(): ConnectionStatus
    get_transaction_status(): TransactionStatus
    insert_row_into_table_v(table: string, col_names: string[], values: any[]): boolean
    internal_change_transaction_state(newstate: TransactionStatusState): void
    internal_get_provider_data_error(): ServerProviderConnectionData | null
    internal_reset_transaction_status(): void
    internal_savepoint_added(parent_trans: string | null, svp_name: string): void
    internal_savepoint_removed(svp_name?: string | null): void
    internal_savepoint_rolledback(svp_name?: string | null): void
    internal_set_provider_data(data: ServerProviderConnectionData, destroy_func: GLib.DestroyNotify): void
    internal_statement_executed(stmt: Statement, params: Set | null, error: ConnectionEvent): void
    internal_transaction_committed(trans_name?: string | null): void
    internal_transaction_rolledback(trans_name?: string | null): void
    internal_transaction_started(parent_trans: string | null, trans_name: string, isol_level: TransactionIsolation): void
    is_opened(): boolean
    open(): boolean
    open_async(callback: ConnectionOpenFunc): number
    operation_get_sql_identifier_at_path(op: ServerOperation, path: string): string | null
    parse_sql_string(sql: string): [ /* returnType */ Statement, /* params */ Set | null ]
    perform_operation(op: ServerOperation): boolean
    point_available_event(type: ConnectionEventType): ConnectionEvent
    prepare_operation_create_table(table_name: string, arguments_: ServerOperationCreateTableArg[]): ServerOperation | null
    prepare_operation_drop_table(table_name: string): ServerOperation | null
    quote_sql_identifier(id: string): string
    repetitive_statement_execute(rstmt: RepetitiveStatement, model_usage: StatementModelUsage, col_types: GObject.Type[] | null, stop_on_error: boolean): GObject.Object[]
    rollback_savepoint(name?: string | null): boolean
    rollback_transaction(name?: string | null): boolean
    set_main_context(thread?: GLib.Thread | null, context?: GLib.MainContext | null): void
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
    vfunc_closed(): void
    vfunc_dsn_changed(): void
    vfunc_error(error: ConnectionEvent): void
    vfunc_opened(): void
    vfunc_status_changed(status: ConnectionStatus): void
    vfunc_transaction_status_changed(): void
    vfunc_lock(): void
    vfunc_trylock(): boolean
    vfunc_unlock(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Connection */
    connect(sigName: "closed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Connection) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "dsn-changed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "dsn-changed", callback: (($obj: Connection) => void)): number
    emit(sigName: "dsn-changed"): void
    connect(sigName: "error", callback: (($obj: Connection, event: ConnectionEvent) => void)): number
    connect_after(sigName: "error", callback: (($obj: Connection, event: ConnectionEvent) => void)): number
    emit(sigName: "error", event: ConnectionEvent): void
    connect(sigName: "opened", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Connection) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "status-changed", callback: (($obj: Connection, status: ConnectionStatus) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Connection, status: ConnectionStatus) => void)): number
    emit(sigName: "status-changed", status: ConnectionStatus): void
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
    connect(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_dsn(dsn: DsnInfo, auth_string: string | null, options: ConnectionOptions): Connection
    static new_from_dsn_name(dsn_name: string, auth_string: string | null, options: ConnectionOptions): Connection
    static new_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    static error_quark(): GLib.Quark
    static internal_get_worker(data?: ServerProviderConnectionData | null): Worker
    static open_from_dsn(dsn: DsnInfo, auth_string: string | null, options: ConnectionOptions): Connection
    static open_from_dsn_name(dsn_name: string, auth_string: string | null, options: ConnectionOptions): Connection
    static open_from_string(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    static open_sqlite(directory: string | null, filename: string, auto_unlink: boolean): Connection
    static string_split(string: string): [ /* out_cnc_params */ string, /* out_provider */ string, /* out_username */ string, /* out_password */ string ]
    static $gtype: GObject.Type
}
export interface ConnectionEvent_ConstructProps extends GObject.Object_ConstructProps {
    type?: number
}
export class ConnectionEvent {
    /* Properties of Gda.ConnectionEvent */
    type: number
    /* Fields of Gda.ConnectionEvent */
    parent_instance: GObject.Object
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
    parent_instance: GObject.Object
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
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
    parent_instance: GObject.Object
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
    parent_instance: GObject.Object
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
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
    static new_with_g_types(cols: number, types: GObject.Type[]): DataModel
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelDir_ConstructProps extends GObject.Object_ConstructProps {
    basedir?: string
}
export class DataModelDir {
    /* Fields of Gda.DataModelDir */
    parent_instance: GObject.Object
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
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
    parent_instance: GObject.Object
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
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
export interface DataModelImportIter_ConstructProps extends DataModelIter_ConstructProps {
}
export class DataModelImportIter {
    /* Properties of Gda.DataModelIter */
    current_row: number
    data_model: DataModel
    update_model: boolean
    /* Properties of Gda.Set */
    description: string
    id: string
    name: string
    validate_changes: boolean
    /* Fields of Gda.DataModelImportIter */
    parent_instance: DataModelIter
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelIter */
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
    get_groups(): SetGroup[]
    get_holder(holder_id: string): Holder
    get_holder_value(holder_id: string): any | null
    get_holders(): Holder[]
    get_node(holder: Holder): SetNode
    get_nodes(): SetNode[]
    get_nth_holder(pos: number): Holder
    get_source(holder: Holder): SetSource
    get_source_for_model(model: DataModel): SetSource
    get_sources(): SetSource[]
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
    vfunc_move_next(): boolean
    vfunc_move_prev(): boolean
    vfunc_move_to_row(row: number): boolean
    vfunc_row_changed(row: number): void
    vfunc_set_value_at(col: number, value: any): boolean
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
    connect(sigName: "end-of-data", callback: (($obj: DataModelImportIter) => void)): number
    connect_after(sigName: "end-of-data", callback: (($obj: DataModelImportIter) => void)): number
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: (($obj: DataModelImportIter, row: number) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: DataModelImportIter, row: number) => void)): number
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: DataModelImportIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    connect_after(sigName: "holder-attr-changed", callback: (($obj: DataModelImportIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any): void
    connect(sigName: "holder-changed", callback: (($obj: DataModelImportIter, object: Holder) => void)): number
    connect_after(sigName: "holder-changed", callback: (($obj: DataModelImportIter, object: Holder) => void)): number
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: DataModelImportIter, holder: Holder) => void)): number
    connect_after(sigName: "holder-type-set", callback: (($obj: DataModelImportIter, holder: Holder) => void)): number
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: DataModelImportIter) => void)): number
    connect_after(sigName: "public-data-changed", callback: (($obj: DataModelImportIter) => void)): number
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: DataModelImportIter, source?: object | null) => void)): number
    connect_after(sigName: "source-model-changed", callback: (($obj: DataModelImportIter, source?: object | null) => void)): number
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: DataModelImportIter, holder: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-holder-change", callback: (($obj: DataModelImportIter, holder: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any): void
    connect(sigName: "validate-set", callback: (($obj: DataModelImportIter) => GLib.Error)): number
    connect_after(sigName: "validate-set", callback: (($obj: DataModelImportIter) => GLib.Error)): number
    emit(sigName: "validate-set"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelImportIter_ConstructProps)
    _init (config?: DataModelImportIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataModelIter_ConstructProps extends Set_ConstructProps {
    current_row?: number
    data_model?: DataModel
    update_model?: boolean
}
export class DataModelIter {
    /* Properties of Gda.DataModelIter */
    current_row: number
    data_model: DataModel
    update_model: boolean
    /* Properties of Gda.Set */
    description: string
    id: string
    name: string
    validate_changes: boolean
    /* Fields of Gda.DataModelIter */
    parent_instance: Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelIter */
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
    get_groups(): SetGroup[]
    get_holder(holder_id: string): Holder
    get_holder_value(holder_id: string): any | null
    get_holders(): Holder[]
    get_node(holder: Holder): SetNode
    get_nodes(): SetNode[]
    get_nth_holder(pos: number): Holder
    get_source(holder: Holder): SetSource
    get_source_for_model(model: DataModel): SetSource
    get_sources(): SetSource[]
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
    vfunc_move_next(): boolean
    vfunc_move_prev(): boolean
    vfunc_move_to_row(row: number): boolean
    vfunc_row_changed(row: number): void
    vfunc_set_value_at(col: number, value: any): boolean
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
export interface DataModelSelect_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataModelSelect {
    /* Properties of Gda.DataModelSelect */
    readonly valid: boolean
    /* Fields of Gda.DataModelSelect */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelSelect */
    get_parameters(): Set
    is_valid(): boolean
    set_parameters(params: Set): void
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModelSelect */
    vfunc_updated(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModelSelect */
    connect(sigName: "updated", callback: (($obj: DataModelSelect) => void)): number
    connect_after(sigName: "updated", callback: (($obj: DataModelSelect) => void)): number
    emit(sigName: "updated"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelSelect) => void)): number
    connect_after(sigName: "access-changed", callback: (($obj: DataModelSelect) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelSelect) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DataModelSelect) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelSelect) => void)): number
    connect_after(sigName: "reset", callback: (($obj: DataModelSelect) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelSelect, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: DataModelSelect, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelSelect, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: DataModelSelect, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelSelect, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: (($obj: DataModelSelect, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::valid", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelSelect_ConstructProps)
    _init (config?: DataModelSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, stm: Statement, params?: Set | null): DataModelSelect
    static new_from_string(cnc: Connection, sql: string): DataModelSelect
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
    parent_instance: GObject.Object
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
    set_value_at(col: number, row: number, value: any): boolean
    set_values(row: number, values?: any[] | null): boolean
    thaw(): void
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
    parent_instance: GObject.Object
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
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
    delete_stmt: Statement
    execution_delay: number
    insert_stmt: Statement
    prepared_stmt: PStmt
    readonly select_stmt: Statement
    store_all_rows: boolean
    update_stmt: Statement
    /* Fields of Gda.DataSelect */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataSelect */
    compute_columns_attributes(): boolean
    compute_modification_statements(): boolean
    compute_modification_statements_ext(cond_type: DataSelectConditionType): boolean
    compute_row_selection_condition(): boolean
    get_advertized_nrows(): number
    get_connection(): Connection
    get_nb_stored_rows(): number
    get_prep_stmt(): PStmt
    prepare_for_offline(): boolean
    set_advertized_nrows(n: number): void
    set_modification_statement(mod_stmt: Statement): boolean
    set_modification_statement_sql(sql: string): boolean
    set_row_selection_condition(expr: SqlExpr): boolean
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
    iter_move_next_default(iter: DataModelIter): boolean
    iter_move_prev_default(iter: DataModelIter): boolean
    iter_move_to_row_default(iter: DataModelIter, row: number): boolean
    remove_row(row: number): boolean
    reset(): void
    row_inserted(row: number): void
    row_removed(row: number): void
    row_updated(row: number): void
    send_hint(hint: DataModelHint, hint_value?: any | null): void
    set_column_name(col: number, name: string): void
    set_column_title(col: number, title: string): void
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
export interface DataSelectIter_ConstructProps extends DataModelIter_ConstructProps {
}
export class DataSelectIter {
    /* Properties of Gda.DataModelIter */
    current_row: number
    data_model: DataModel
    update_model: boolean
    /* Properties of Gda.Set */
    description: string
    id: string
    name: string
    validate_changes: boolean
    /* Fields of Gda.DataSelectIter */
    parent_instance: DataModelIter
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DataModelIter */
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
    get_groups(): SetGroup[]
    get_holder(holder_id: string): Holder
    get_holder_value(holder_id: string): any | null
    get_holders(): Holder[]
    get_node(holder: Holder): SetNode
    get_nodes(): SetNode[]
    get_nth_holder(pos: number): Holder
    get_source(holder: Holder): SetSource
    get_source_for_model(model: DataModel): SetSource
    get_sources(): SetSource[]
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
    vfunc_move_next(): boolean
    vfunc_move_prev(): boolean
    vfunc_move_to_row(row: number): boolean
    vfunc_row_changed(row: number): void
    vfunc_set_value_at(col: number, value: any): boolean
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
    connect(sigName: "end-of-data", callback: (($obj: DataSelectIter) => void)): number
    connect_after(sigName: "end-of-data", callback: (($obj: DataSelectIter) => void)): number
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: (($obj: DataSelectIter, row: number) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: DataSelectIter, row: number) => void)): number
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: DataSelectIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    connect_after(sigName: "holder-attr-changed", callback: (($obj: DataSelectIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any): void
    connect(sigName: "holder-changed", callback: (($obj: DataSelectIter, object: Holder) => void)): number
    connect_after(sigName: "holder-changed", callback: (($obj: DataSelectIter, object: Holder) => void)): number
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: DataSelectIter, holder: Holder) => void)): number
    connect_after(sigName: "holder-type-set", callback: (($obj: DataSelectIter, holder: Holder) => void)): number
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: DataSelectIter) => void)): number
    connect_after(sigName: "public-data-changed", callback: (($obj: DataSelectIter) => void)): number
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: DataSelectIter, source?: object | null) => void)): number
    connect_after(sigName: "source-model-changed", callback: (($obj: DataSelectIter, source?: object | null) => void)): number
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: DataSelectIter, holder: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-holder-change", callback: (($obj: DataSelectIter, holder: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any): void
    connect(sigName: "validate-set", callback: (($obj: DataSelectIter) => GLib.Error)): number
    connect_after(sigName: "validate-set", callback: (($obj: DataSelectIter) => GLib.Error)): number
    emit(sigName: "validate-set"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSelectIter_ConstructProps)
    _init (config?: DataSelectIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DbBase_ConstructProps extends GObject.Object_ConstructProps {
}
export class DbBase {
    /* Fields of Gda.DbBase */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbBase */
    compare(b: DbBase): number
    get_catalog(): string
    get_full_name(): string
    get_name(): string
    get_schema(): string
    set_catalog(catalog: string): void
    set_name(name: string): void
    set_names(catalog: string | null, schema: string | null, name: string): void
    set_schema(schema: string): void
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
    connect(sigName: "notify", callback: (($obj: DbBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbBase_ConstructProps)
    _init (config?: DbBase_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbBase
    static $gtype: GObject.Type
}
export interface DbCatalog_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
    schema_name?: string
}
export class DbCatalog {
    /* Properties of Gda.DbCatalog */
    connection: Connection
    schema_name: string
    /* Fields of Gda.DbCatalog */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbCatalog */
    append_table(table: DbTable): void
    append_view(view: DbView): void
    get_tables(): DbTable[]
    get_views(): DbView[]
    parse_cnc(): boolean
    parse_file(xmlfile: Gio.File): boolean
    parse_file_from_path(xmlfile: string): boolean
    perform_operation(): boolean
    write_to_file(file: Gio.File): boolean
    write_to_path(path: string): boolean
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
    connect(sigName: "notify", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema-name", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema-name", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbCatalog_ConstructProps)
    _init (config?: DbCatalog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbCatalog
    static error_quark(): GLib.Quark
    static validate_file_from_path(xmlfile: string): boolean
    static $gtype: GObject.Type
}
export interface DbColumn_ConstructProps extends GObject.Object_ConstructProps {
    autoinc?: boolean
    check?: string
    comment?: string
    "default"?: string
    name?: string
    nnul?: boolean
    pkey?: boolean
    scale?: number
    size?: number
    table?: DbTable
    unique?: boolean
}
export class DbColumn {
    /* Properties of Gda.DbColumn */
    autoinc: boolean
    check: string
    comment: string
    "default": string
    name: string
    nnul: boolean
    pkey: boolean
    scale: number
    size: number
    table: DbTable
    unique: boolean
    /* Fields of Gda.DbColumn */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbColumn */
    get_autoinc(): boolean
    get_check(): string
    get_comment(): string
    get_ctype(): string
    get_default(): string
    get_gtype(): GObject.Type
    get_name(): string
    get_nnul(): boolean
    get_pkey(): boolean
    get_scale(): number
    get_size(): number
    get_unique(): boolean
    prepare_add(op: ServerOperation): boolean
    prepare_create(op: ServerOperation, order: number): boolean
    set_autoinc(autoinc: boolean): void
    set_check(value: string): void
    set_comment(comnt: string): void
    set_default(value: string): void
    set_name(name: string): void
    set_nnul(nnul: boolean): void
    set_pkey(pkey: boolean): void
    set_scale(scale: number): void
    set_size(size: number): void
    set_type(type: GObject.Type): void
    set_unique(unique: boolean): void
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
    /* Methods of Gda.DbBuildable */
    parse_node(node: libxml2.NodePtr): boolean
    write_node(node: libxml2.NodePtr): boolean
    /* Methods of Gda.DdlModifiable */
    create(cnc: Connection, user_data?: object | null): boolean
    drop(cnc: Connection, user_data?: object | null): boolean
    rename(cnc: Connection, user_data?: object | null): boolean
    /* Virtual methods of Gda.DbColumn */
    vfunc_parse_node(node: libxml2.NodePtr): boolean
    vfunc_write_node(node: libxml2.NodePtr): boolean
    vfunc_create(cnc: Connection): boolean
    vfunc_drop(cnc: Connection): boolean
    vfunc_rename(cnc: Connection): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoinc", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoinc", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::check", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::comment", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nnul", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nnul", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pkey", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkey", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::table", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unique", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbColumn_ConstructProps)
    _init (config?: DbColumn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbColumn
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DbFkey_ConstructProps extends GObject.Object_ConstructProps {
}
export class DbFkey {
    /* Fields of Gda.DbFkey */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbFkey */
    get_field_name(): string[]
    get_ondelete(): string
    get_ondelete_id(): DbFkeyReferenceAction
    get_onupdate(): string
    get_onupdate_id(): DbFkeyReferenceAction
    get_ref_field(): string[]
    get_ref_table(): string
    prepare_create(op: ServerOperation, i: number): boolean
    set_field(field: string, reffield: string): void
    set_ondelete(id: DbFkeyReferenceAction): void
    set_onupdate(id: DbFkeyReferenceAction): void
    set_ref_table(rtable: string): void
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
    /* Methods of Gda.DbBuildable */
    parse_node(node: libxml2.NodePtr): boolean
    write_node(node: libxml2.NodePtr): boolean
    /* Virtual methods of Gda.DbFkey */
    vfunc_parse_node(node: libxml2.NodePtr): boolean
    vfunc_write_node(node: libxml2.NodePtr): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbFkey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbFkey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbFkey_ConstructProps)
    _init (config?: DbFkey_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbFkey
    static $gtype: GObject.Type
}
export interface DbIndex_ConstructProps extends DbBase_ConstructProps {
    table?: DbTable
}
export class DbIndex {
    /* Properties of Gda.DbIndex */
    table: DbTable
    /* Fields of Gda.DbIndex */
    parent_instance: DbBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbIndex */
    append_field(field: DbIndexField): void
    get_fields(): DbIndexField[] | null
    get_unique(): boolean
    remove_field(name: string): void
    set_unique(val: boolean): void
    /* Methods of Gda.DbBase */
    compare(b: DbBase): number
    get_catalog(): string
    get_full_name(): string
    get_name(): string
    get_schema(): string
    set_catalog(catalog: string): void
    set_name(name: string): void
    set_names(catalog: string | null, schema: string | null, name: string): void
    set_schema(schema: string): void
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
    /* Methods of Gda.DdlModifiable */
    create(cnc: Connection, user_data?: object | null): boolean
    drop(cnc: Connection, user_data?: object | null): boolean
    rename(cnc: Connection, user_data?: object | null): boolean
    /* Virtual methods of Gda.DbIndex */
    vfunc_create(cnc: Connection): boolean
    vfunc_drop(cnc: Connection): boolean
    vfunc_rename(cnc: Connection): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::table", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbIndex_ConstructProps)
    _init (config?: DbIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbIndex
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DbIndexField_ConstructProps extends GObject.Object_ConstructProps {
}
export class DbIndexField {
    /* Fields of Gda.DbIndexField */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbIndexField */
    get_collate(): string
    get_column(): DbColumn
    get_sort_order(): DbIndexSortOrder
    get_sort_order_str(): string
    set_collate(collate: string): void
    set_column(column: DbColumn): void
    set_sort_order(sorder: DbIndexSortOrder): void
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
    connect(sigName: "notify", callback: (($obj: DbIndexField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbIndexField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbIndexField_ConstructProps)
    _init (config?: DbIndexField_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbIndexField
    static $gtype: GObject.Type
}
export interface DbTable_ConstructProps extends DbBase_ConstructProps {
    comment?: string
    istemp?: string
}
export class DbTable {
    /* Properties of Gda.DbTable */
    comment: string
    istemp: string
    /* Fields of Gda.DbTable */
    parent_instance: DbBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbTable */
    append_column(column: DbColumn): void
    append_constraint(constr: string): void
    append_fkey(fkey: DbFkey): void
    get_columns(): DbColumn[]
    get_fkeys(): DbFkey[]
    get_is_temp(): boolean
    is_valid(): boolean
    prepare_create(op: ServerOperation, ifnotexists: boolean): boolean
    set_is_temp(istemp: boolean): void
    update(obj: MetaTable, cnc: Connection): boolean
    /* Methods of Gda.DbBase */
    compare(b: DbBase): number
    get_catalog(): string
    get_full_name(): string
    get_name(): string
    get_schema(): string
    set_catalog(catalog: string): void
    set_name(name: string): void
    set_names(catalog: string | null, schema: string | null, name: string): void
    set_schema(schema: string): void
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
    /* Methods of Gda.DbBuildable */
    parse_node(node: libxml2.NodePtr): boolean
    write_node(node: libxml2.NodePtr): boolean
    /* Methods of Gda.DdlModifiable */
    create(cnc: Connection, user_data?: object | null): boolean
    drop(cnc: Connection, user_data?: object | null): boolean
    rename(cnc: Connection, user_data?: object | null): boolean
    /* Virtual methods of Gda.DbTable */
    vfunc_parse_node(node: libxml2.NodePtr): boolean
    vfunc_write_node(node: libxml2.NodePtr): boolean
    vfunc_create(cnc: Connection): boolean
    vfunc_drop(cnc: Connection): boolean
    vfunc_rename(cnc: Connection): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::comment", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::istemp", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::istemp", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbTable_ConstructProps)
    _init (config?: DbTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbTable
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DbView_ConstructProps extends DbBase_ConstructProps {
    defstring?: string
    ifnoexist?: boolean
    istemp?: boolean
    replace?: boolean
}
export class DbView {
    /* Properties of Gda.DbView */
    defstring: string
    ifnoexist: boolean
    istemp: boolean
    replace: boolean
    /* Fields of Gda.DbView */
    parent_instance: DbBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.DbView */
    get_defstring(): string
    get_ifnoexist(): boolean
    get_istemp(): boolean
    get_replace(): boolean
    prepare_create(op: ServerOperation): boolean
    set_defstring(str: string): void
    set_ifnoexist(noexist: boolean): void
    set_istemp(temp: boolean): void
    set_replace(replace: boolean): void
    /* Methods of Gda.DbBase */
    compare(b: DbBase): number
    get_catalog(): string
    get_full_name(): string
    get_name(): string
    get_schema(): string
    set_catalog(catalog: string): void
    set_name(name: string): void
    set_names(catalog: string | null, schema: string | null, name: string): void
    set_schema(schema: string): void
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
    /* Methods of Gda.DbBuildable */
    parse_node(node: libxml2.NodePtr): boolean
    write_node(node: libxml2.NodePtr): boolean
    /* Methods of Gda.DdlModifiable */
    create(cnc: Connection, user_data?: object | null): boolean
    drop(cnc: Connection, user_data?: object | null): boolean
    rename(cnc: Connection, user_data?: object | null): boolean
    /* Virtual methods of Gda.DbView */
    vfunc_parse_node(node: libxml2.NodePtr): boolean
    vfunc_write_node(node: libxml2.NodePtr): boolean
    vfunc_create(cnc: Connection): boolean
    vfunc_drop(cnc: Connection): boolean
    vfunc_rename(cnc: Connection): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::defstring", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defstring", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ifnoexist", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ifnoexist", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::istemp", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::istemp", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::replace", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::replace", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DbView_ConstructProps)
    _init (config?: DbView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbView
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface HandlerBin_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerBin {
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
    static new(): HandlerBin
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerBoolean_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerBoolean {
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
    static new(): HandlerBoolean
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerNumerical_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerNumerical {
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
    static new(): HandlerNumerical
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerString_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerString {
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
    static new(): HandlerString
    static new_with_provider(prov: ServerProvider, cnc?: Connection | null): HandlerString
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerText_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerText {
    /* Fields of Gda.HandlerText */
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
    /* Methods of Gda.DataHandler */
    accepts_g_type(type: GObject.Type): boolean
    get_descr(): string
    get_sane_init_value(type: GObject.Type): any | null
    get_sql_from_value(value?: any | null): string
    get_str_from_value(value?: any | null): string
    get_value_from_sql(sql: string | null, type: GObject.Type): any
    get_value_from_str(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.HandlerText */
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
    connect(sigName: "notify", callback: (($obj: HandlerText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HandlerText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerText_ConstructProps)
    _init (config?: HandlerText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_connection(cnc?: Connection | null): HandlerText
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerTime_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerTime {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.HandlerTime */
    get_format(type: GObject.Type): string
    get_hint(type: GObject.Type): string
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
    static new(): HandlerTime
    static new_no_locale(): HandlerTime
    static get_default(for_type: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerType_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerType {
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
    static new(): HandlerType
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
    plugin?: string
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
    plugin: string
    simple_bind: Holder
    source_column: number
    source_model: DataModel
    validate_changes: boolean
    /* Fields of Gda.Holder */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Holder */
    copy(): Holder
    force_invalid(): void
    force_invalid_e(error?: GLib.Error | null): void
    get_alphanum_id(): string
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
    vfunc_changed(): void
    vfunc_source_changed(): void
    vfunc_to_default(): void
    vfunc_validate_change(new_value: any): GLib.Error
    vfunc_lock(): void
    vfunc_trylock(): boolean
    vfunc_unlock(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Holder */
    connect(sigName: "changed", callback: (($obj: Holder) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Holder) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "source-changed", callback: (($obj: Holder) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: Holder) => void)): number
    emit(sigName: "source-changed"): void
    connect(sigName: "to-default", callback: (($obj: Holder) => void)): number
    connect_after(sigName: "to-default", callback: (($obj: Holder) => void)): number
    emit(sigName: "to-default"): void
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
    connect(sigName: "notify::plugin", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
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
    static new(type: GObject.Type, id: string): Holder
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.MetaStore */
    create_modify_data_model(table_name: string): DataModel
    create_struct(features: MetaStructFeature): MetaStruct
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.MetaStruct */
    complement(type: MetaDbObjectType, catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    complement_all(): boolean
    complement_default(): boolean
    complement_depend(dbo: MetaDbObject): boolean
    complement_schema(catalog?: any | null, schema?: any | null): boolean
    dump_as_graph(info: MetaGraphInfo): string | null
    get_all_db_objects(): MetaDbObject[] | null
    get_db_object(catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    get_table_column(table: MetaTable, col_name: any): MetaTableColumn | null
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
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface PStmt_ConstructProps extends GObject.Object_ConstructProps {
}
export class PStmt {
    /* Fields of Gda.PStmt */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.PStmt */
    copy_contents(dest: PStmt): void
    get_gda_statement(): Statement
    get_ncols(): number
    get_param_ids(): string[]
    get_sql(): string
    get_tmpl_columns(): Column[]
    get_types(): GObject.Type[]
    set_cols(types: GObject.Type[]): void
    set_gda_statement(stmt?: Statement | null): void
    set_param_ids(params: string[]): void
    set_sql(sql: string): void
    set_tmpl_columns(columns: Column[]): void
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
    model?: DataModel
    model_row?: number
    nb_values?: number
}
export class Row {
    /* Fields of Gda.Row */
    parent_instance: GObject.Object
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Row_ConstructProps)
    _init (config?: Row_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(count: number): Row
    static new_from_data_model(model: DataModel, row: number): Row
    static $gtype: GObject.Type
}
export interface ServerOperation_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
    op_type?: number
    provider?: ServerProvider
    spec_filename?: string
    spec_resource?: string
}
export class ServerOperation {
    /* Fields of Gda.ServerOperation */
    parent_instance: GObject.Object
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
    get_sql_identifier_at_path(path: string): string
    get_value_at(path: string): any | null
    is_valid(xml_file?: string | null): boolean
    is_valid_from_resource(resource?: string | null): boolean
    load_data_from_xml(node: libxml2.NodePtr): boolean
    perform_create_database(provider?: string | null): boolean
    perform_drop_database(provider?: string | null): boolean
    render(): string | null
    save_data_to_xml_string(): string
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
    static string_to_op_type(str: string): ServerOperationType
    static $gtype: GObject.Type
}
export interface ServerProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class ServerProvider {
    /* Fields of Gda.ServerProvider */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.ServerProvider */
    create_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    create_parser(cnc?: Connection | null): SqlParser
    escape_string(cnc: Connection | null, str: string): string
    get_data_handler_dbms(cnc: Connection | null, for_type: string): DataHandler
    get_data_handler_g_type(cnc: Connection | null, for_type: GObject.Type): DataHandler
    get_default_dbms_type(cnc: Connection | null, type: GObject.Type): string | null
    get_name(): string
    get_server_version(cnc: Connection): string
    get_version(): string
    handler_declare(dh: DataHandler, cnc: Connection, g_type: GObject.Type, dbms_type: string): void
    handler_find(cnc: Connection | null, g_type: GObject.Type, dbms_type?: string | null): DataHandler
    handler_use_default(type: GObject.Type): DataHandler
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
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.ServerProvider */
    vfunc_lock(): void
    vfunc_trylock(): boolean
    vfunc_unlock(): void
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
    static get_impl_functions_for_class(klass: GObject.ObjectClass, type: ServerProviderFunctionsType): object | null
    static get_real_main_context(cnc?: Connection | null): GLib.MainContext
    static load_resource_contents(prov_name: string, resource: string): string
    static set_impl_functions(klass: ServerProviderClass, type: ServerProviderFunctionsType, functions_set?: object | null): void
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.Set */
    add_holder(holder: Holder): boolean
    copy(): Set
    get_group(holder: Holder): SetGroup
    get_groups(): SetGroup[]
    get_holder(holder_id: string): Holder
    get_holder_value(holder_id: string): any | null
    get_holders(): Holder[]
    get_node(holder: Holder): SetNode
    get_nodes(): SetNode[]
    get_nth_holder(pos: number): Holder
    get_source(holder: Holder): SetSource
    get_source_for_model(model: DataModel): SetSource
    get_sources(): SetSource[]
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
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.SqlBuilder */
    add_case(test_expr: SqlBuilderId, else_expr: SqlBuilderId, when_array: SqlBuilderId[], then_array: SqlBuilderId[]): SqlBuilderId
    add_cond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    add_cond_v(op: SqlOperatorType, op_ids: SqlBuilderId[]): SqlBuilderId
    add_expr_value(value?: any | null): SqlBuilderId
    add_field_id(field_name: string, table_name?: string | null): SqlBuilderId
    add_field_value_as_gvalue(field_name: string, value?: any | null): void
    add_field_value_id(field_id: SqlBuilderId, value_id: SqlBuilderId): void
    add_function(func_name: string, args: SqlBuilderId[]): SqlBuilderId
    add_id(str: string): SqlBuilderId
    add_param(param_name: string, type: GObject.Type, nullok: boolean): SqlBuilderId
    add_sub_select(sqlst: SqlStatement): SqlBuilderId
    compound_add_sub_select(sqlst: SqlStatement): void
    compound_add_sub_select_from_builder(subselect: SqlBuilder): void
    compound_set_type(compound_type: SqlStatementCompoundType): void
    export_expression(id: SqlBuilderId): SqlExpr
    get_sql_statement(): SqlStatement | null
    get_statement(): Statement
    import_expression(expr: SqlExpr): SqlBuilderId
    import_expression_from_builder(query: SqlBuilder, expr_id: SqlBuilderId): SqlBuilderId
    join_add_field(join_id: SqlBuilderId, field_name: string): void
    select_add_field(field_name: string, table_name?: string | null, alias?: string | null): SqlBuilderId
    select_add_target(table_name: string, alias?: string | null): SqlBuilderId
    select_add_target_id(table_id: SqlBuilderId, alias?: string | null): SqlBuilderId
    select_group_by(expr_id: SqlBuilderId): void
    select_join_targets(left_target_id: SqlBuilderId, right_target_id: SqlBuilderId, join_type: SqlSelectJoinType, join_expr: SqlBuilderId): SqlBuilderId
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
    debug?: boolean
    mode?: number
    tokenizer_flavour?: number
}
export class SqlParser {
    /* Properties of Gda.SqlParser */
    readonly column_error: number
    debug: boolean
    readonly line_error: number
    mode: number
    tokenizer_flavour: number
    /* Fields of Gda.SqlParser */
    parent_instance: GObject.Object
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
    vfunc_lock(): void
    vfunc_trylock(): boolean
    vfunc_unlock(): void
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
    connect(sigName: "notify::debug", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
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
    structure?: SqlStatement
}
export class Statement {
    /* Properties of Gda.Statement */
    structure: SqlStatement
    /* Fields of Gda.Statement */
    parent_instance: GObject.Object
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
    rewrite_for_default_values(params: Set, remove: boolean): SqlStatement | null
    serialize(): string
    to_sql_extended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
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
    connect(sigName: "checked", callback: (($obj: Statement, cnc: Connection, checked: boolean) => void)): number
    connect_after(sigName: "checked", callback: (($obj: Statement, cnc: Connection, checked: boolean) => void)): number
    emit(sigName: "checked", cnc: Connection, checked: boolean): void
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
export interface TransactionStatus_ConstructProps extends GObject.Object_ConstructProps {
}
export class TransactionStatus {
    /* Fields of Gda.TransactionStatus */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TransactionStatus */
    add_event_sql(sql: string, conn_event: ConnectionEvent): TransactionStatusEvent
    add_event_sub(sub_trans: TransactionStatus): TransactionStatusEvent
    add_event_svp(svp_name: string): TransactionStatusEvent
    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    find_current(destev: TransactionStatusEvent, unnamed_only: boolean): TransactionStatus | null
    free_events(event: TransactionStatusEvent, free_after: boolean): void
    get_isolation_level(): TransactionIsolation
    get_state(): TransactionStatusState
    set_isolation_level(il: TransactionIsolation): void
    set_state(state: TransactionStatusState): void
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
    parent_instance: GObject.Object
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
    func?: TreeManagerNodesFunc
    recursive?: boolean
}
export class TreeManager {
    /* Properties of Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda.TreeManager */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
    set_node_create_func(func?: TreeManagerNodeFunc | null): void
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
    static new_with_func(update_func: TreeManagerNodesFunc): TreeManager
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
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda.TreeMgrColumns */
    parent_instance: TreeManager
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
    set_node_create_func(func?: TreeManagerNodeFunc | null): void
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
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda.TreeMgrLabel */
    parent_instance: TreeManager
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
    set_node_create_func(func?: TreeManagerNodeFunc | null): void
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
export interface TreeMgrSchemas_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    meta_store?: MetaStore
}
export class TreeMgrSchemas {
    /* Properties of Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda.TreeMgrSchemas */
    parent_instance: TreeManager
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
    set_node_create_func(func?: TreeManagerNodeFunc | null): void
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
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda.TreeMgrSelect */
    parent_instance: TreeManager
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
    set_node_create_func(func?: TreeManagerNodeFunc | null): void
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
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda.TreeMgrTables */
    parent_instance: TreeManager
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    add_manager(sub: TreeManager): void
    add_new_node_attribute(attribute: string, value?: any | null): void
    create_node(parent?: TreeNode | null, name?: string | null): TreeNode
    get_managers(): TreeManager[]
    set_node_create_func(func?: TreeManagerNodeFunc | null): void
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
    parent_instance: GObject.Object
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
    parent_instance: GObject.Object
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
    static string_to_id(str: string): XaTransactionId
    static $gtype: GObject.Type
}
export abstract class BatchClass {
    /* Fields of Gda.BatchClass */
    parent_class: GObject.ObjectClass
    changed: (batch: Batch, changed_stmt: Statement) => void
    static name: string
}
export class Binary {
    /* Methods of Gda.Binary */
    copy(): Binary
    free(): void
    get_data(): object | null
    get_size(): number
    reset_data(): void
    set_data(val: Uint8Array[]): void
    take_data(val: Uint8Array[]): void
    to_string(maxlen: number): string
    static name: string
    static new(): Binary
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Binary
}
export class Blob {
    /* Methods of Gda.Blob */
    copy(): Blob
    free(): void
    get_binary(): Binary
    get_op(): BlobOp
    set_op(op?: BlobOp | null): void
    to_string(maxlen: number): string
    static name: string
    static new(): Blob
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Blob
}
export abstract class BlobOpClass {
    /* Fields of Gda.BlobOpClass */
    parent_class: GObject.ObjectClass
    functions: object
    padding: object[]
    static name: string
}
export class BlobOpFunctions {
    /* Fields of Gda.BlobOpFunctions */
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
export abstract class ConfigClass {
    /* Fields of Gda.ConfigClass */
    parent_class: GObject.ObjectClass
    dsn_added: (conf: Config, new_dsn: DsnInfo) => void
    dsn_to_be_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_removed: (conf: Config, old_dsn: DsnInfo) => void
    dsn_changed: (conf: Config, dsn: DsnInfo) => void
    static name: string
}
export abstract class ConnectionClass {
    /* Fields of Gda.ConnectionClass */
    object_class: GObject.ObjectClass
    status_changed: (obj: Connection, status: ConnectionStatus) => void
    error: (cnc: Connection, error: ConnectionEvent) => void
    opened: (obj: Connection) => void
    closed: (obj: Connection) => void
    dsn_changed: (obj: Connection) => void
    transaction_status_changed: (obj: Connection) => void
    static name: string
}
export abstract class ConnectionEventClass {
    /* Fields of Gda.ConnectionEventClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
export abstract class DataAccessWrapperClass {
    /* Fields of Gda.DataAccessWrapperClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DataComparatorClass {
    /* Fields of Gda.DataComparatorClass */
    parent_class: GObject.ObjectClass
    diff_computed: (comp: DataComparator, diff: Diff) => boolean
    static name: string
}
export abstract class DataHandlerInterface {
    /* Fields of Gda.DataHandlerInterface */
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
export abstract class DataModelDirClass {
    /* Fields of Gda.DataModelDirClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DataModelIface {
    static name: string
}
export abstract class DataModelImportClass {
    /* Fields of Gda.DataModelImportClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DataModelImportIterClass {
    /* Fields of Gda.DataModelImportIterClass */
    parent_class: DataModelIterClass
    static name: string
}
export class DataModelInterface {
    /* Fields of Gda.DataModelInterface */
    g_iface: GObject.TypeInterface
    get_n_rows: (model: DataModel) => number
    get_n_columns: (model: DataModel) => number
    get_access_flags: (model: DataModel) => DataModelAccessFlags
    get_value_at: (model: DataModel, col: number, row: number) => any
    get_attributes_at: (model: DataModel, col: number, row: number) => ValueAttribute
    set_value_at: (model: DataModel, col: number, row: number, value: any) => boolean
    append_row: (model: DataModel) => number
    remove_row: (model: DataModel, row: number) => boolean
    freeze: (model: DataModel) => void
    thaw: (model: DataModel) => void
    get_notify: (model: DataModel) => boolean
    send_hint: (model: DataModel, hint: DataModelHint, hint_value: any) => void
    get_exceptions: (model: DataModel) => GLib.Error
    row_inserted: (model: DataModel, row: number) => void
    row_updated: (model: DataModel, row: number) => void
    row_removed: (model: DataModel, row: number) => void
    changed: (model: DataModel) => void
    reset: (model: DataModel) => void
    access_changed: (model: DataModel) => void
    static name: string
}
export abstract class DataModelIterClass {
    /* Fields of Gda.DataModelIterClass */
    parent_class: SetClass
    move_to_row: (iter: DataModelIter, row: number) => boolean
    move_next: (iter: DataModelIter) => boolean
    move_prev: (iter: DataModelIter) => boolean
    set_value_at: (iter: DataModelIter, col: number, value: any) => boolean
    row_changed: (iter: DataModelIter, row: number) => void
    end_of_data: (iter: DataModelIter) => void
    static name: string
}
export abstract class DataModelSelectClass {
    /* Fields of Gda.DataModelSelectClass */
    parent_class: GObject.ObjectClass
    updated: (model: DataModelSelect) => void
    static name: string
}
export abstract class DataPivotClass {
    /* Fields of Gda.DataPivotClass */
    parent_class: GObject.ObjectClass
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
export abstract class DataSelectIterClass {
    /* Fields of Gda.DataSelectIterClass */
    parent_class: DataModelIterClass
    static name: string
}
export abstract class DbBaseClass {
    /* Fields of Gda.DbBaseClass */
    parent: GObject.ObjectClass
    static name: string
}
export abstract class DbBuildableInterface {
    /* Fields of Gda.DbBuildableInterface */
    parent_iface: GObject.TypeInterface
    parse_node: (self: DbBuildable, node: libxml2.NodePtr) => boolean
    write_node: (self: DbBuildable, node: libxml2.NodePtr) => boolean
    static name: string
}
export abstract class DbCatalogClass {
    /* Fields of Gda.DbCatalogClass */
    parent: GObject.ObjectClass
    static name: string
}
export abstract class DbColumnClass {
    /* Fields of Gda.DbColumnClass */
    parent: GObject.ObjectClass
    static name: string
}
export abstract class DbFkeyClass {
    /* Fields of Gda.DbFkeyClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DbIndexClass {
    /* Fields of Gda.DbIndexClass */
    parent_class: DbBaseClass
    static name: string
}
export abstract class DbIndexFieldClass {
    /* Fields of Gda.DbIndexFieldClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DbTableClass {
    /* Fields of Gda.DbTableClass */
    parent_class: DbBaseClass
    static name: string
}
export abstract class DbViewClass {
    /* Fields of Gda.DbViewClass */
    parent_class: DbBaseClass
    static name: string
}
export abstract class DdlModifiableInterface {
    /* Fields of Gda.DdlModifiableInterface */
    parent_iface: GObject.TypeInterface
    create: (self: DdlModifiable, cnc: Connection) => boolean
    drop: (self: DdlModifiable, cnc: Connection) => boolean
    rename: (self: DdlModifiable, cnc: Connection) => boolean
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
    equal(dsn2?: DsnInfo | null): boolean
    free(): void
    static name: string
    static new(): DsnInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DsnInfo
}
export class GeometricPoint {
    /* Methods of Gda.GeometricPoint */
    copy(): GeometricPoint
    free(): void
    get_x(): number
    get_y(): number
    set_x(x: number): void
    set_y(y: number): void
    static name: string
    static new(): GeometricPoint
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GeometricPoint
}
export abstract class HandlerBinClass {
    /* Fields of Gda.HandlerBinClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HandlerBooleanClass {
    /* Fields of Gda.HandlerBooleanClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HandlerNumericalClass {
    /* Fields of Gda.HandlerNumericalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HandlerStringClass {
    /* Fields of Gda.HandlerStringClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HandlerTextClass {
    /* Fields of Gda.HandlerTextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HandlerTimeClass {
    /* Fields of Gda.HandlerTimeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HandlerTypeClass {
    /* Fields of Gda.HandlerTypeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HolderClass {
    /* Fields of Gda.HolderClass */
    parent_class: GObject.ObjectClass
    changed: (holder: Holder) => void
    source_changed: (holder: Holder) => void
    validate_change: (holder: Holder, new_value: any) => GLib.Error
    to_default: (holder: Holder) => void
    static name: string
}
export abstract class LockableInterface {
    /* Fields of Gda.LockableInterface */
    g_iface: GObject.TypeInterface
    lock: (lockable: Lockable) => void
    trylock: (lockable: Lockable) => boolean
    unlock: (lockable: Lockable) => void
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
    get_n_columns(): number
    get_table(): string
    set_column(column: string, value: any, cnc?: Connection | null): void
    set_columns(columns: GLib.HashTable, cnc?: Connection | null): void
    set_table(table: string): void
    stringify(): string
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
    /* Methods of Gda.MetaStoreChange */
    copy(): MetaStoreChange
    free(): void
    get_change_type(): MetaStoreChangeType
    get_keys(): GLib.HashTable
    get_table_name(): string
    set_change_type(ctype: MetaStoreChangeType): void
    set_table_name(table_name: string): void
    static name: string
    static new(): MetaStoreChange
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MetaStoreChange
}
export abstract class MetaStoreClass {
    /* Fields of Gda.MetaStoreClass */
    parent_class: GObject.ObjectClass
    meta_reset: (store: MetaStore) => void
    suggest_update: (store: MetaStore, suggest: MetaContext) => GLib.Error
    static name: string
}
export abstract class MetaStructClass {
    /* Fields of Gda.MetaStructClass */
    parent_class: GObject.ObjectClass
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
    auto_incement: boolean
    desc: string
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
export class ProviderInfo {
    /* Fields of Gda.ProviderInfo */
    id: string
    location: string
    description: string
    dsn_params: Set
    auth_params: Set
    icon_id: string
    static name: string
}
export abstract class ProviderInterface {
    /* Fields of Gda.ProviderInterface */
    g_iface: GObject.TypeInterface
    get_name: (provider: Provider) => string
    get_version: (provider: Provider) => string
    get_server_version: (provider: Provider, cnc: Connection) => string
    supports_feature: (provider: Provider, cnc: Connection, feature: ConnectionFeature) => boolean
    create_connection: (provider: Provider) => Connection
    create_parser: (provider: Provider, cnc: Connection) => SqlParser
    get_data_handler: (provider: Provider, cnc: Connection, g_type: GObject.Type, dbms_type: string) => DataHandler
    get_def_dbms_type: (provider: Provider, cnc: Connection, g_type: GObject.Type) => string
    supports_operation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    create_operation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => ServerOperation
    render_operation: (provider: Provider, cnc: Connection, op: ServerOperation) => string
    statement_to_sql: (provider: Provider, cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag) => [ /* returnType */ string, /* params_used */ Holder[] | null ]
    identifier_quote: (provider: Provider, cnc: Connection | null, id: string, for_meta_store: boolean, force_quotes: boolean) => string
    statement_rewrite: (provider: Provider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    open_connection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepare_connection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    close_connection: (provider: Provider, cnc: Connection) => boolean
    escape_string: (provider: Provider, cnc: Connection, str: string) => string
    unescape_string: (provider: Provider, cnc: Connection, str: string) => string
    perform_operation: (provider: Provider, cnc: Connection, op: ServerOperation) => boolean
    begin_transaction: (provider: Provider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commit_transaction: (provider: Provider, cnc: Connection, name: string) => boolean
    rollback_transaction: (provider: Provider, cnc: Connection, name: string) => boolean
    add_savepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    rollback_savepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    delete_savepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    statement_prepare: (provider: Provider, cnc: Connection, stmt: Statement) => boolean
    statement_execute: (provider: Provider, cnc: Connection, stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: GObject.Type, last_inserted_row: Set) => GObject.Object
    get_last_inserted: (provider: Provider, cnc: Connection) => Set
    padding: object[]
    static name: string
}
export abstract class ProviderMetaInterface {
    /* Fields of Gda.ProviderMetaInterface */
    g_iface: GObject.TypeInterface
    btypes: (prov: ProviderMeta) => DataModel
    udts: (prov: ProviderMeta) => DataModel
    udt: (prov: ProviderMeta, udt_catalog: string, udt_schema: string) => Row
    udt_cols: (prov: ProviderMeta) => DataModel
    udt_col: (prov: ProviderMeta, udt_catalog: string, udt_schema: string, udt_name: string) => Row
    enums_type: (prov: ProviderMeta) => DataModel
    enum_type: (prov: ProviderMeta, udt_catalog: string, udt_schema: string, udt_name: string) => Row
    domains: (prov: ProviderMeta) => DataModel
    domain: (prov: ProviderMeta, domain_catalog: string, domain_schema: string) => Row
    domains_constraints: (prov: ProviderMeta) => DataModel
    domain_constraints: (prov: ProviderMeta, domain_catalog: string, domain_schema: string, domain_name: string) => DataModel
    domain_constraint: (prov: ProviderMeta, domain_catalog: string, domain_schema: string, domain_name: string, constraint_name: string) => Row
    element_types: (prov: ProviderMeta) => DataModel
    element_type: (prov: ProviderMeta, specific_name: string) => Row
    collations: (prov: ProviderMeta) => DataModel
    collation: (prov: ProviderMeta, collation_catalog: string, collation_schema: string, collation_name_n: string) => Row
    character_sets: (prov: ProviderMeta) => DataModel
    character_set: (prov: ProviderMeta, chset_catalog: string, chset_schema: string, chset_name_n: string) => Row
    schematas: (prov: ProviderMeta) => DataModel
    schemata: (prov: ProviderMeta, catalog_name: string, schema_name_n: string) => Row
    tables_columns: (prov: ProviderMeta) => DataModel
    tables: (prov: ProviderMeta) => DataModel
    table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name_n: string) => Row
    views: (prov: ProviderMeta) => DataModel
    view: (prov: ProviderMeta, view_catalog: string, view_schema: string, view_name_n: string) => Row
    columns: (prov: ProviderMeta) => DataModel
    table_columns: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    table_column: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, column_name: string) => Row
    views_columns: (prov: ProviderMeta) => DataModel
    view_columns: (prov: ProviderMeta, view_catalog: string, view_schema: string, view_name: string) => DataModel
    view_column: (prov: ProviderMeta, view_catalog: string, view_schema: string, view_name: string, column_name: string) => Row
    constraints_tables: (prov: ProviderMeta) => DataModel
    constraints_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    constraint_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name_n: string) => Row
    constraints_ref: (prov: ProviderMeta) => DataModel
    constraints_ref_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    constraint_ref: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name: string) => Row
    key_columns: (prov: ProviderMeta) => DataModel
    key_column: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name: string) => Row
    check_columns: (prov: ProviderMeta) => DataModel
    check_column: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, constraint_name: string) => Row
    triggers: (prov: ProviderMeta) => DataModel
    trigger: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => Row
    routines: (prov: ProviderMeta) => DataModel
    routine: (prov: ProviderMeta, routine_catalog: string, routine_schema: string, routine_name_n: string) => Row
    routines_col: (prov: ProviderMeta) => DataModel
    routine_col: (prov: ProviderMeta, rout_catalog: string, rout_schema: string, rout_name: string) => Row
    routines_pars: (prov: ProviderMeta) => DataModel
    routine_pars: (prov: ProviderMeta, rout_catalog: string, rout_schema: string, rout_name: string) => Row
    indexes_tables: (prov: ProviderMeta) => DataModel
    indexes_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string) => DataModel
    index_table: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, index_name_n: string) => Row
    index_cols: (prov: ProviderMeta) => DataModel
    index_col: (prov: ProviderMeta, table_catalog: string, table_schema: string, table_name: string, index_name: string) => Row
    padding: object[]
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
export abstract class ServerOperationClass {
    /* Fields of Gda.ServerOperationClass */
    parent_class: GObject.ObjectClass
    seq_item_added: (op: ServerOperation, seq_path: string, item_index: number) => void
    seq_item_remove: (op: ServerOperation, seq_path: string, item_index: number) => void
    static name: string
}
export class ServerOperationCreateTableArg {
    /* Methods of Gda.ServerOperationCreateTableArg */
    copy(): ServerOperationCreateTableArg
    free(): void
    get_column_name(): string
    get_column_type(): GObject.Type
    get_fkey_ondelete(): string
    get_fkey_onupdate(): string
    get_fkey_refs(): ServerOperationCreateTableArgFKeyRefField[]
    get_fkey_table(): string
    get_flags(): ServerOperationCreateTableFlag
    set_column_name(name: string): void
    set_column_type(ctype: GObject.Type): void
    set_fkey_ondelete(action: string): void
    set_fkey_ondupdate(action: string): void
    set_fkey_refs(refs: ServerOperationCreateTableArgFKeyRefField[]): void
    set_fkey_table(name: string): void
    set_flags(flags: ServerOperationCreateTableFlag): void
    static name: string
    static new(): ServerOperationCreateTableArg
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ServerOperationCreateTableArg
}
export class ServerOperationCreateTableArgFKeyRefField {
    /* Methods of Gda.ServerOperationCreateTableArgFKeyRefField */
    copy(): ServerOperationCreateTableArgFKeyRefField
    free(): void
    get_local_field(): string
    get_referenced_field(): string
    set_local_field(name: string): void
    set_referenced_field(name: string): void
    static name: string
    static new(): ServerOperationCreateTableArgFKeyRefField
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ServerOperationCreateTableArgFKeyRefField
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
    /* Methods of Gda.ServerOperationNode */
    copy(): ServerOperationNode
    free(): void
    static name: string
}
export class ServerProviderBase {
    /* Fields of Gda.ServerProviderBase */
    get_name: (provider: ServerProvider) => string
    get_version: (provider: ServerProvider) => string
    get_server_version: (provider: ServerProvider, cnc: Connection) => string
    supports_feature: (provider: ServerProvider, cnc: Connection, feature: ConnectionFeature) => boolean
    create_worker: (provider: ServerProvider, for_cnc: boolean) => Worker
    get_def_dbms_type: (provider: ServerProvider, cnc: Connection, g_type: GObject.Type) => string
    supports_operation: (provider: ServerProvider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    render_operation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => string
    identifier_quote: (provider: ServerProvider, cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean) => string
    statement_rewrite: (provider: ServerProvider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    open_connection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepare_connection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    close_connection: (provider: ServerProvider, cnc: Connection) => boolean
    escape_string: (provider: ServerProvider, cnc: Connection, str: string) => string
    unescape_string: (provider: ServerProvider, cnc: Connection, str: string) => string
    perform_operation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => boolean
    begin_transaction: (provider: ServerProvider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commit_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_transaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    add_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollback_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    delete_savepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    statement_prepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
    static name: string
}
export abstract class ServerProviderClass {
    /* Fields of Gda.ServerProviderClass */
    parent_class: GObject.ObjectClass
    functions_sets: object[]
    static name: string
}
export class ServerProviderConnectionData {
    /* Fields of Gda.ServerProviderConnectionData */
    worker: Worker
    provider_data_destroy_func: GLib.DestroyNotify
    pad1: object
    pad2: object
    static name: string
}
export class ServerProviderHandlerInfo {
    /* Fields of Gda.ServerProviderHandlerInfo */
    cnc: Connection
    g_type: GObject.Type
    dbms_type: string
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
    routine_col: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any, col_name: any, ordinal_position: any) => boolean
    routine_par: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, rout_catalog: any, rout_schema: any, rout_name: any) => boolean
    indexes_tab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, index_name_n: any) => boolean
    index_cols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, table_catalog: any, table_schema: any, table_name: any, index_name: any) => boolean
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
export class SetSource {
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
    type: SqlAnyPartType
    parent: SqlAnyPart
    /* Methods of Gda.SqlAnyPart */
    check_structure(): boolean
    foreach(func: SqlForeachFunc): boolean
    static name: string
}
export abstract class SqlBuilderClass {
    /* Fields of Gda.SqlBuilderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SqlCase {
    /* Fields of Gda.SqlCase */
    any: SqlAnyPart
    base_expr: SqlExpr
    when_expr_list: object[]
    then_expr_list: object[]
    else_expr: SqlExpr
    /* Methods of Gda.SqlCase */
    copy(): SqlCase
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlCase
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlCase
}
export class SqlExpr {
    /* Fields of Gda.SqlExpr */
    any: SqlAnyPart
    value: any
    param_spec: SqlParamSpec
    func: SqlFunction
    cond: SqlOperation
    select: SqlAnyPart
    case_s: SqlCase
    cast_as: string
    value_is_ident: boolean
    /* Methods of Gda.SqlExpr */
    copy(): SqlExpr
    free(): void
    serialize(): string
    take_select(stmt: SqlStatement): void
    static name: string
    static new(parent: SqlAnyPart): SqlExpr
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlExpr
}
export class SqlField {
    /* Fields of Gda.SqlField */
    any: SqlAnyPart
    field_name: string
    validity_meta_table_column: MetaTableColumn
    /* Methods of Gda.SqlField */
    copy(): SqlField
    free(): void
    serialize(): string
    take_name(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlField
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlField
}
export class SqlFunction {
    /* Fields of Gda.SqlFunction */
    any: SqlAnyPart
    function_name: string
    args_list: object[]
    /* Methods of Gda.SqlFunction */
    check_clean(): void
    copy(): SqlFunction
    free(): void
    serialize(): string
    take_args_list(args: SqlExpr[]): void
    take_name(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlFunction
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlFunction
}
export class SqlOperation {
    /* Fields of Gda.SqlOperation */
    any: SqlAnyPart
    operator_type: SqlOperatorType
    operands: SqlExpr[]
    /* Methods of Gda.SqlOperation */
    copy(): SqlOperation
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlOperation
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlOperation
    static operator_from_string(op: string): SqlOperatorType
    static operator_to_string(op: SqlOperatorType): string
}
export class SqlParamSpec {
    /* Fields of Gda.SqlParamSpec */
    name: string
    descr: string
    is_param: boolean
    nullok: boolean
    g_type: GObject.Type
    validity_meta_dict: object
    _gda_reserved1: object
    _gda_reserved2: object
    /* Methods of Gda.SqlParamSpec */
    copy(): SqlParamSpec
    free(): void
    serialize(): string
    take_descr(value: any): void
    take_name(value: any): void
    take_nullok(value: any): void
    take_type(value: any): void
    static name: string
    static new(simple_spec: any): SqlParamSpec
    constructor(simple_spec: any)
    /* Static methods and pseudo-constructors */
    static new(simple_spec: any): SqlParamSpec
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
export class SqlSelectField {
    /* Fields of Gda.SqlSelectField */
    any: SqlAnyPart
    expr: SqlExpr
    field_name: string
    table_name: string
    as: string
    validity_meta_object: MetaDbObject
    validity_meta_table_column: MetaTableColumn
    /* Methods of Gda.SqlSelectField */
    copy(): SqlSelectField
    free(): void
    serialize(): string
    take_alias(alias: any): void
    take_expr(expr: SqlExpr): void
    take_star_value(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlSelectField
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectField
}
export class SqlSelectFrom {
    /* Fields of Gda.SqlSelectFrom */
    any: SqlAnyPart
    targets: SqlSelectTarget[]
    joins: SqlSelectJoin[]
    /* Methods of Gda.SqlSelectFrom */
    copy(): SqlSelectFrom
    free(): void
    serialize(): string
    take_new_join(join: SqlSelectJoin): void
    take_new_target(target: SqlSelectTarget): void
    static name: string
    static new(parent: SqlAnyPart): SqlSelectFrom
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectFrom
}
export class SqlSelectJoin {
    /* Fields of Gda.SqlSelectJoin */
    any: SqlAnyPart
    type: SqlSelectJoinType
    position: number
    expr: SqlExpr
    use: object[]
    /* Methods of Gda.SqlSelectJoin */
    copy(): SqlSelectJoin
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlSelectJoin
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectJoin
    static type_to_string(type: SqlSelectJoinType): string
}
export class SqlSelectOrder {
    /* Fields of Gda.SqlSelectOrder */
    any: SqlAnyPart
    expr: SqlExpr
    asc: boolean
    collation_name: string
    /* Methods of Gda.SqlSelectOrder */
    copy(): SqlSelectOrder
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlSelectOrder
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectOrder
}
export class SqlSelectTarget {
    /* Fields of Gda.SqlSelectTarget */
    any: SqlAnyPart
    expr: SqlExpr
    table_name: string
    as: string
    validity_meta_object: MetaDbObject
    /* Methods of Gda.SqlSelectTarget */
    copy(): SqlSelectTarget
    free(): void
    serialize(): string
    take_alias(alias: any): void
    take_select(stmt: SqlStatement): void
    take_table_name(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlSelectTarget
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectTarget
}
export class SqlStatement {
    /* Fields of Gda.SqlStatement */
    sql: string
    stmt_type: SqlStatementType
    contents: object
    validity_meta_struct: MetaStruct
    /* Methods of Gda.SqlStatement */
    check_clean(): void
    check_structure(): boolean
    check_validity(cnc?: Connection | null): boolean
    check_validity_m(mstruct?: MetaStruct | null): boolean
    compound_set_type(type: SqlStatementCompoundType): void
    compound_take_stmt(s: SqlStatement): void
    copy(): SqlStatement
    delete_take_condition(cond: SqlExpr): void
    delete_take_table_name(value: any): void
    free(): void
    insert_take_1_values_list(list: SqlExpr[]): void
    insert_take_extra_values_list(list: SqlExpr[]): void
    insert_take_fields_list(list: SqlField[]): void
    insert_take_on_conflict(value: any): void
    insert_take_select(select: SqlStatement): void
    insert_take_table_name(value: any): void
    normalize(cnc?: Connection | null): boolean
    select_take_distinct(distinct: boolean, distinct_expr?: SqlExpr | null): void
    select_take_expr_list(expr_list: SqlSelectField[]): void
    select_take_from(from: SqlSelectFrom): void
    select_take_group_by(group_by: SqlExpr[]): void
    select_take_having_cond(expr: SqlExpr): void
    select_take_limits(count: SqlExpr, offset: SqlExpr): void
    select_take_order_by(order_by: SqlSelectOrder[]): void
    select_take_where_cond(expr: SqlExpr): void
    serialize(): string
    trans_set_isol_level(level: TransactionIsolation): void
    trans_take_mode(value: any): void
    trans_take_name(value: any): void
    unknown_take_expressions(expressions: SqlExpr[]): void
    update_take_condition(cond: SqlExpr): void
    update_take_on_conflict(value: any): void
    update_take_set_value(fname: any, expr: SqlExpr): void
    update_take_table_name(value: any): void
    static name: string
    static new(type: SqlStatementType): SqlStatement
    constructor(type: SqlStatementType)
    /* Static methods and pseudo-constructors */
    static new(type: SqlStatementType): SqlStatement
    static get_contents_infos(type: SqlStatementType): SqlStatementContentsInfo
    static string_to_type(type: string): SqlStatementType
    static type_to_string(type: SqlStatementType): string
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
    any: SqlAnyPart
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
    check_structure_func: SqlForeachFunc
    check_validity_func: SqlForeachFunc
    static name: string
}
export class SqlStatementDelete {
    /* Fields of Gda.SqlStatementDelete */
    any: SqlAnyPart
    table: SqlTable
    cond: SqlExpr
    static name: string
}
export class SqlStatementInsert {
    /* Fields of Gda.SqlStatementInsert */
    any: SqlAnyPart
    on_conflict: string
    table: SqlTable
    fields_list: object[]
    values_list: object[]
    select: SqlAnyPart
    static name: string
}
export class SqlStatementSelect {
    /* Fields of Gda.SqlStatementSelect */
    any: SqlAnyPart
    distinct: boolean
    distinct_expr: SqlExpr
    expr_list: object[]
    from: SqlSelectFrom
    where_cond: SqlExpr
    group_by: object[]
    having_cond: SqlExpr
    order_by: object[]
    limit_count: SqlExpr
    limit_offset: SqlExpr
    static name: string
}
export class SqlStatementTransaction {
    /* Fields of Gda.SqlStatementTransaction */
    any: SqlAnyPart
    isolation_level: TransactionIsolation
    trans_mode: string
    trans_name: string
    static name: string
}
export class SqlStatementUnknown {
    /* Fields of Gda.SqlStatementUnknown */
    any: SqlAnyPart
    expressions: object[]
    static name: string
}
export class SqlStatementUpdate {
    /* Fields of Gda.SqlStatementUpdate */
    any: SqlAnyPart
    on_conflict: string
    table: SqlTable
    fields_list: object[]
    expr_list: object[]
    cond: SqlExpr
    static name: string
}
export class SqlTable {
    /* Fields of Gda.SqlTable */
    any: SqlAnyPart
    table_name: string
    validity_meta_object: MetaDbObject
    /* Methods of Gda.SqlTable */
    copy(): SqlTable
    free(): void
    serialize(): string
    take_name(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlTable
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlTable
}
export abstract class StatementClass {
    /* Fields of Gda.StatementClass */
    parent_class: GObject.ObjectClass
    checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    reset: (stmt: Statement) => void
    static name: string
}
export class Text {
    /* Methods of Gda.Text */
    free(): void
    get_string(): string
    set_string(str: string): void
    take_string(str: string): void
    static name: string
    static new(): Text
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Text
    static to_alphanum(text: string): string
}
export class Time {
    /* Methods of Gda.Time */
    copy(): Time
    free(): void
    get_fraction(): number
    get_hour(): number
    get_minute(): number
    get_second(): number
    get_timezone(): number
    get_tz(): GLib.TimeZone
    set_fraction(fraction: number): void
    set_hour(hour: number): void
    set_minute(minute: number): void
    set_second(second: number): void
    set_timezone(timezone: number): void
    to_string(): string
    to_string_local(): string
    to_string_utc(): string
    to_timezone(ntz: GLib.TimeZone): Time
    to_utc(): Time
    valid(): boolean
    static name: string
    static new(): Time
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Time
    static new_from_date_time(dt: GLib.DateTime): Time
    static new_from_values(hour: number, minute: number, second: number, fraction: number, timezone: number): Time
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
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TreeMgrColumnsClass {
    /* Fields of Gda.TreeMgrColumnsClass */
    object_class: TreeManagerClass
    static name: string
}
export abstract class TreeMgrLabelClass {
    /* Fields of Gda.TreeMgrLabelClass */
    parent_class: TreeManagerClass
    static name: string
}
export abstract class TreeMgrSchemasClass {
    /* Fields of Gda.TreeMgrSchemasClass */
    object_class: TreeManagerClass
    static name: string
}
export abstract class TreeMgrSelectClass {
    /* Fields of Gda.TreeMgrSelectClass */
    object_class: TreeManagerClass
    static name: string
}
export abstract class TreeMgrTablesClass {
    /* Fields of Gda.TreeMgrTablesClass */
    object_class: TreeManagerClass
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
export class Worker {
    /* Methods of Gda.Worker */
    cancel_job(job_id: number): boolean
    do_job(context: GLib.MainContext | null, timeout_ms: number, out_result: object | null, out_job_id: number | null, func: WorkerFunc, data_destroy_func?: GLib.DestroyNotify | null): boolean
    fetch_job_result(job_id: number, out_result?: object | null): boolean
    forget_job(job_id: number): void
    get_worker_thread(): GLib.Thread
    ref(): Worker
    set_callback(context?: GLib.MainContext | null, callback?: WorkerCallback | null): boolean
    submit_job(callback_context: GLib.MainContext | null, func: WorkerFunc, data_destroy_func?: GLib.DestroyNotify | null): number
    thread_is_worker(): boolean
    unref(): void
    wait_job(func: WorkerFunc): object | null
    static name: string
    static new(): Worker
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Worker
    static error_quark(): GLib.Quark
    static new_unique(location: Worker, allow_destroy: boolean): Worker
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
export type SqlBuilderId = number