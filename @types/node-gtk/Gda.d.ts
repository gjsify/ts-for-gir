/**
 * Gda-5.0
 */

/// <reference path="libxml2.d.ts" />
/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />

declare namespace Gda {

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
export const ATTRIBUTE_AUTO_INCREMENT:string
export const ATTRIBUTE_DESCRIPTION:string
export const ATTRIBUTE_IS_DEFAULT:string
export const ATTRIBUTE_NAME:string
export const ATTRIBUTE_NUMERIC_PRECISION:string
export const ATTRIBUTE_NUMERIC_SCALE:string
export const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN:string
export const EXTRA_AUTO_INCREMENT:string
export const SQLSTATE_GENERAL_ERROR:string
export const SQLSTATE_NO_ERROR:string
export const TIMEZONE_INVALID:number
export function alphanumToText(text: string): string
export function binaryCopy(boxed?: object | null): object | null
export function binaryFree(boxed?: object | null): void
export function blobCopy(boxed?: object | null): object | null
export function blobFree(boxed?: object | null): void
export function completionListGet(cnc: Connection, sql: string, start: number, end: number): string[] | null
export function computeDmlStatements(cnc: Connection, select_stmt: Statement, require_pk: boolean, insert_stmt?: Statement | null, update_stmt?: Statement | null, delete_stmt?: Statement | null): boolean
export function dataHandlerGetDefault(for_type: GObject.Type): DataHandler
export function dataModelErrorQuark(): GLib.Quark
export function defaultEscapeString(string: string): string
export function defaultUnescapeString(string: string): string
export function dsnSplit(string: string, out_dsn: string, out_username: string, out_password: string): void
export function gTypeFromString(str: string): GObject.Type
export function gTypeToString(type: GObject.Type): string
export function geometricpointCopy(boxed?: object | null): object | null
export function geometricpointFree(boxed?: object | null): void
export function getApplicationExecPath(app_name: string): string
export function identifierEqual(id1: string, id2: string): boolean
export function identifierHash(id: string): number
export function init(): void
export function localeChanged(): void
export function logDisable(): void
export function logEnable(): void
export function logIsEnabled(): boolean
export function mutexFree(mutex: Mutex): void
export function mutexLock(mutex: Mutex): void
export function mutexTrylock(mutex: Mutex): boolean
export function mutexUnlock(mutex: Mutex): void
export function parseFormattedDate(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
export function parseFormattedTime(timegda: Time, value: string, sep: number): boolean
export function parseFormattedTimestamp(timestamp: Timestamp, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
export function parseIso8601Date(gdate: GLib.Date, value: string): boolean
export function parseIso8601Time(timegda: Time, value: string): boolean
export function parseIso8601Timestamp(timestamp: Timestamp, value: string): boolean
export function rewriteStatementForNullParameters(stmt: Statement, params: Set, out_stmt?: Statement | null): boolean
export function rfc1738Decode(string: string): boolean
export function rfc1738Encode(string: string): string
export function selectAlterSelectForEmpty(stmt: Statement): Statement
export function sqlErrorQuark(): GLib.Quark
export function sqlIdentifierQuote(id: string, cnc: Connection | null, prov: ServerProvider | null, meta_store_convention: boolean, force_quotes: boolean): string
export function sqlIdentifierSplit(id: string): string[] | null
export function sqlOperationOperatorFromString(op: string): SqlOperatorType
export function sqlOperationOperatorToString(op: SqlOperatorType): string
export function sqlSelectJoinTypeToString(type: SqlSelectJoinType): string
export function stringToBinary(str?: string | null): Binary
export function stringToBlob(str: string): Blob
export function textToAlphanum(text: string): string
export function timeCopy(boxed?: object | null): object | null
export function timeFree(boxed?: object | null): void
export function timestampCopy(boxed?: object | null): object | null
export function timestampFree(boxed?: object | null): void
export function utilityCheckDataModel(model: DataModel, types: GObject.Type[]): boolean
export function utilityDataModelDumpDataToXml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, use_col_ids: boolean): boolean
export function utilityDataModelFindColumnDescription(model: DataSelect, field_name: string): string
export function utilityHolderLoadAttributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[]): boolean
export function valueCompare(value1: any, value2: any): number
export function valueDiffer(value1: any, value2: any): number
export function valueStringify(value: any): string
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
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of Gda.DataHandler */
    vfuncAcceptsGType?(type: GObject.Type): boolean
    vfuncGetDescr?(): string
    vfuncGetSaneInitValue?(type: GObject.Type): any
    vfuncGetSqlFromValue?(value?: any): string
    vfuncGetStrFromValue?(value?: any): string
    vfuncGetValueFromSql?(sql: string | null, type: GObject.Type): any
    vfuncGetValueFromStr?(str: string | null, type: GObject.Type): any
    static name: string
    static getDefault(for_type: GObject.Type): DataHandler
}
export class DataModel {
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of Gda.DataModel */
    vfuncAccessChanged?(): void
    vfuncChanged?(): void
    vfuncIAppendRow?(): number
    vfuncIAppendValues?(values?: any): number
    vfuncICreateIter?(): DataModelIter
    vfuncIDescribeColumn?(col: number): Column | null
    vfuncIFindRow?(values: any, cols_index: number[]): number
    vfuncIGetAccessFlags?(): DataModelAccessFlags
    vfuncIGetAttributesAt?(col: number, row: number): ValueAttribute
    vfuncIGetExceptions?(): GLib.Error[]
    vfuncIGetNColumns?(): number
    vfuncIGetNRows?(): number
    vfuncIGetNotify?(): boolean
    vfuncIGetValueAt?(col: number, row: number): any
    vfuncIIterAtRow?(iter: DataModelIter, row: number): boolean
    vfuncIIterNext?(iter: DataModelIter): boolean
    vfuncIIterPrev?(iter: DataModelIter): boolean
    vfuncIIterSetValue?(iter: DataModelIter, col: number, value: any): boolean
    vfuncIRemoveRow?(row: number): boolean
    vfuncISendHint?(hint: DataModelHint, hint_value?: any): void
    vfuncISetNotify?(do_notify_changes: boolean): void
    vfuncISetValueAt?(col: number, row: number, value: any): boolean
    vfuncISetValues?(row: number, values?: any): boolean
    vfuncReset?(): void
    vfuncRowInserted?(row: number): void
    vfuncRowRemoved?(row: number): void
    vfuncRowUpdated?(row: number): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataModel) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataModel) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataModel) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataModel) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataModel) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataModel) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataModel, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataModel, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataModel, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataModel, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataModel, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataModel, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    static name: string
    static errorQuark(): GLib.Quark
}
export class Lockable {
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.Lockable */
    vfuncILock?(): void
    vfuncITrylock?(): boolean
    vfuncIUnlock?(): void
    static name: string
}
export interface Batch_ConstructProps extends GObject.Object_ConstructProps {
}
export class Batch {
    /* Fields of Gda.Batch */
    object:GObject.Object
    priv:BatchPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Batch */
    addStatement(stmt: Statement): void
    copy(): Batch
    getParameters(): [ /* returnType */ boolean, /* out_params */ Set | null ]
    getStatements(): Statement[]
    removeStatement(stmt: Statement): void
    serialize(): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.Batch */
    vfuncChanged?(changed_stmt: Statement): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Batch */
    connect(sigName: "changed", callback: ((obj: Batch, changed_stmt: GObject.Object) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Batch, changed_stmt: GObject.Object) => void)): number
    emit(sigName: "changed", changed_stmt: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Batch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Batch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    static new(): Batch
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface BlobOp_ConstructProps extends GObject.Object_ConstructProps {
}
export class BlobOp {
    /* Fields of Gda.BlobOp */
    object:GObject.Object
    _gda_reserved1:object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.BlobOp */
    getLength(): number
    read(blob: Blob, offset: number, size: number): number
    readAll(blob: Blob): boolean
    write(blob: Blob, offset: number): number
    writeAll(blob: Blob): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.BlobOp */
    vfuncGetLength?(): number
    vfuncRead?(blob: Blob, offset: number, size: number): number
    vfuncWrite?(blob: Blob, offset: number): number
    vfuncWriteAll?(blob: Blob): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
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
    id?:string
}
export class Column {
    /* Properties of Gda.Column */
    id:string
    /* Fields of Gda.Column */
    object:GObject.Object
    priv:ColumnPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Column */
    copy(): Column
    getAllowNull(): boolean
    getAttribute(attribute: string): any
    getAutoIncrement(): boolean
    getDbmsType(): string
    getDefaultValue(): any
    getDescription(): string
    getGType(): GObject.Type
    getName(): string
    getPosition(): number
    setAllowNull(allow: boolean): void
    setAttribute(attribute: string, value?: any, destroy?: GLib.DestroyNotify | null): void
    setAutoIncrement(is_auto: boolean): void
    setDbmsType(dbms_type: string): void
    setDefaultValue(default_value?: any): void
    setDescription(title: string): void
    setGType(type: GObject.Type): void
    setName(name: string): void
    setPosition(position: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.Column */
    vfuncGTypeChanged?(old_type: GObject.Type, new_type: GObject.Type): void
    vfuncNameChanged?(old_name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Column */
    connect(sigName: "g-type-changed", callback: ((obj: Column, old_type: GObject.Type, new_type: GObject.Type) => void)): number
    connect_after(sigName: "g-type-changed", callback: ((obj: Column, old_type: GObject.Type, new_type: GObject.Type) => void)): number
    emit(sigName: "g-type-changed", old_type: GObject.Type, new_type: GObject.Type): void
    connect(sigName: "name-changed", callback: ((obj: Column, old_name: string) => void)): number
    connect_after(sigName: "name-changed", callback: ((obj: Column, old_name: string) => void)): number
    emit(sigName: "name-changed", old_name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: ((obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    static new(): Column
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
    system_filename?:string
    user_filename?:string
}
export class Config {
    /* Properties of Gda.Config */
    system_filename:string
    user_filename:string
    /* Fields of Gda.Config */
    object:GObject.Object
    priv:ConfigPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.Config */
    vfuncDsnAdded?(new_dsn: DsnInfo): void
    vfuncDsnChanged?(dsn: DsnInfo): void
    vfuncDsnRemoved?(old_dsn: DsnInfo): void
    vfuncDsnToBeRemoved?(old_dsn: DsnInfo): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Config */
    connect(sigName: "dsn-added", callback: ((obj: Config, new_dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-added", callback: ((obj: Config, new_dsn?: object | null) => void)): number
    emit(sigName: "dsn-added", new_dsn?: object | null): void
    connect(sigName: "dsn-changed", callback: ((obj: Config, dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-changed", callback: ((obj: Config, dsn?: object | null) => void)): number
    emit(sigName: "dsn-changed", dsn?: object | null): void
    connect(sigName: "dsn-removed", callback: ((obj: Config, old_dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-removed", callback: ((obj: Config, old_dsn?: object | null) => void)): number
    emit(sigName: "dsn-removed", old_dsn?: object | null): void
    connect(sigName: "dsn-to-be-removed", callback: ((obj: Config, old_dsn?: object | null) => void)): number
    connect_after(sigName: "dsn-to-be-removed", callback: ((obj: Config, old_dsn?: object | null) => void)): number
    emit(sigName: "dsn-to-be-removed", old_dsn?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::system-filename", callback: ((obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-filename", callback: ((obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-filename", callback: ((obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-filename", callback: ((obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    static canModifySystemConfig(): boolean
    static defineDsn(info: DsnInfo): boolean
    static dsnNeedsAuthentication(dsn_name: string): boolean
    static errorQuark(): GLib.Quark
    static get(): Config
    static getDsnInfo(dsn_name: string): DsnInfo
    static getDsnInfoAtIndex(index: number): DsnInfo
    static getDsnInfoIndex(dsn_name: string): number
    static getNbDsn(): number
    static getProvider(provider_name: string): ServerProvider
    static getProviderInfo(provider_name: string): ProviderInfo
    static listDsn(): DataModel
    static listProviders(): DataModel
    static removeDsn(dsn_name: string): boolean
    static $gtype: GObject.Type
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    auth_string?:string
    cnc_string?:string
    dsn?:string
    events_history_size?:number
    execution_slowdown?:number
    execution_timer?:boolean
    is_wrapper?:boolean
    meta_store?:MetaStore
    monitor_wrapped_in_mainloop?:boolean
    provider?:ServerProvider
    thread_owner?:object
}
export class Connection {
    /* Properties of Gda.Connection */
    auth_string:string
    cnc_string:string
    dsn:string
    events_history_size:number
    execution_slowdown:number
    execution_timer:boolean
    is_wrapper:boolean
    meta_store:MetaStore
    monitor_wrapped_in_mainloop:boolean
    provider:ServerProvider
    thread_owner:object
    /* Fields of Gda.Connection */
    object:GObject.Object
    priv:ConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Connection */
    addEvent(event: ConnectionEvent): void
    addPreparedStatement(gda_stmt: Statement, prepared_stmt: PStmt): void
    addSavepoint(name?: string | null): boolean
    asyncCancel(task_id: number): boolean
    asyncFetchResult(task_id: number): [ /* returnType */ GObject.Object, /* last_insert_row */ Set | null ]
    asyncStatementExecute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage, col_types: GObject.Type[] | null, need_last_insert_row: boolean): number
    batchExecute(batch: Batch, params: Set | null, model_usage: StatementModelUsage): GObject.Object[]
    beginTransaction(name: string | null, level: TransactionIsolation): boolean
    clearEventsList(): void
    close(): void
    closeNoWarning(): void
    commitTransaction(name?: string | null): boolean
    createOperation(type: ServerOperationType, options?: Set | null): ServerOperation
    createParser(): SqlParser
    delPreparedStatement(gda_stmt: Statement): void
    deleteRowFromTable(table: string, condition_column_name: string, condition_value: any): boolean
    deleteSavepoint(name?: string | null): boolean
    executeNonSelectCommand(sql: string): number
    executeSelectCommand(sql: string): DataModel
    getAuthentication(): string
    getCncString(): string
    getDateFormat(): [ /* returnType */ boolean, /* out_first */ GLib.DateDMY | null, /* out_second */ GLib.DateDMY | null, /* out_third */ GLib.DateDMY | null, /* out_sep */ string | null ]
    getDsn(): string
    getEvents(): ConnectionEvent[]
    getMetaStore(): MetaStore
    getMetaStoreDataV(meta_type: ConnectionMetaType, filters: Holder[]): DataModel
    getOptions(): ConnectionOptions
    getPreparedStatement(gda_stmt: Statement): PStmt
    getProvider(): ServerProvider
    getProviderName(): string
    getTransactionStatus(): TransactionStatus
    insertRowIntoTableV(table: string, col_names: string[], values: any): boolean
    isOpened(): boolean
    open(): boolean
    parseSqlString(sql: string): [ /* returnType */ Statement, /* params */ Set | null ]
    performOperation(op: ServerOperation): boolean
    pointAvailableEvent(type: ConnectionEventType): ConnectionEvent
    quoteSqlIdentifier(id: string): string
    repetitiveStatementExecute(rstmt: RepetitiveStatement, model_usage: StatementModelUsage, col_types: GObject.Type[] | null, stop_on_error: boolean): GObject.Object[]
    rollbackSavepoint(name?: string | null): boolean
    rollbackTransaction(name?: string | null): boolean
    statementExecute(stmt: Statement, params: Set | null, model_usage: StatementModelUsage): [ /* returnType */ GObject.Object, /* last_insert_row */ Set | null ]
    statementExecuteNonSelect(stmt: Statement, params?: Set | null): [ /* returnType */ number, /* last_insert_row */ Set | null ]
    statementExecuteSelect(stmt: Statement, params?: Set | null): DataModel
    statementExecuteSelectFull(stmt: Statement, params: Set | null, model_usage: StatementModelUsage, col_types?: GObject.Type[] | null): DataModel
    statementPrepare(stmt: Statement): boolean
    statementToSql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
    supportsFeature(feature: ConnectionFeature): boolean
    updateMetaStore(context?: MetaContext | null): boolean
    updateRowInTableV(table: string, condition_column_name: string, condition_value: any, col_names: string[], values: any): boolean
    valueToSqlString(from: any): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.Connection */
    vfuncConnClosed?(): void
    vfuncConnOpened?(): void
    vfuncConnToClose?(): void
    vfuncDsnChanged?(): void
    vfuncError?(error: ConnectionEvent): void
    vfuncTransactionStatusChanged?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Connection */
    connect(sigName: "conn-closed", callback: ((obj: Connection) => void)): number
    connect_after(sigName: "conn-closed", callback: ((obj: Connection) => void)): number
    emit(sigName: "conn-closed"): void
    connect(sigName: "conn-opened", callback: ((obj: Connection) => void)): number
    connect_after(sigName: "conn-opened", callback: ((obj: Connection) => void)): number
    emit(sigName: "conn-opened"): void
    connect(sigName: "conn-to-close", callback: ((obj: Connection) => void)): number
    connect_after(sigName: "conn-to-close", callback: ((obj: Connection) => void)): number
    emit(sigName: "conn-to-close"): void
    connect(sigName: "dsn-changed", callback: ((obj: Connection) => void)): number
    connect_after(sigName: "dsn-changed", callback: ((obj: Connection) => void)): number
    emit(sigName: "dsn-changed"): void
    connect(sigName: "error", callback: ((obj: Connection, event: ConnectionEvent) => void)): number
    connect_after(sigName: "error", callback: ((obj: Connection, event: ConnectionEvent) => void)): number
    emit(sigName: "error", event: ConnectionEvent): void
    connect(sigName: "transaction-status-changed", callback: ((obj: Connection) => void)): number
    connect_after(sigName: "transaction-status-changed", callback: ((obj: Connection) => void)): number
    emit(sigName: "transaction-status-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-string", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-string", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cnc-string", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc-string", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dsn", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dsn", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events-history-size", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events-history-size", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::execution-slowdown", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-slowdown", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::execution-timer", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-timer", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-wrapper", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-wrapper", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::meta-store", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitor-wrapped-in-mainloop", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-wrapped-in-mainloop", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thread-owner", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread-owner", callback: ((obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    static newFromDsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection
    static newFromString(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    static errorQuark(): GLib.Quark
    static openFromDsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection
    static openFromString(provider_name: string | null, cnc_string: string, auth_string: string | null, options: ConnectionOptions): Connection
    static openSqlite(directory: string | null, filename: string, auto_unlink: boolean): Connection
    static stringSplit(string: string, out_cnc_params: string, out_provider: string, out_username: string, out_password?: string | null): void
    static $gtype: GObject.Type
}
export interface ConnectionEvent_ConstructProps extends GObject.Object_ConstructProps {
    type?:number
}
export class ConnectionEvent {
    /* Properties of Gda.ConnectionEvent */
    type:number
    /* Fields of Gda.ConnectionEvent */
    object:GObject.Object
    priv:ConnectionEventPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.ConnectionEvent */
    getCode(): number
    getDescription(): string
    getEventType(): ConnectionEventType
    getGdaCode(): ConnectionEventCode
    getSource(): string
    getSqlstate(): string
    setCode(code: number): void
    setDescription(description?: string | null): void
    setEventType(type: ConnectionEventType): void
    setGdaCode(code: ConnectionEventCode): void
    setSource(source: string): void
    setSqlstate(sqlstate: string): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: ((obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
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
    model?:DataModel
}
export class DataAccessWrapper {
    /* Properties of Gda.DataAccessWrapper */
    /* Fields of Gda.DataAccessWrapper */
    object:GObject.Object
    priv:DataAccessWrapperPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataAccessWrapper */
    setMapping(mapping: number[] | null): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataAccessWrapper) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataAccessWrapper) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataAccessWrapper) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataAccessWrapper) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataAccessWrapper) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataAccessWrapper) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataAccessWrapper, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataAccessWrapper, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataAccessWrapper, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataAccessWrapper, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataAccessWrapper, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataAccessWrapper, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataAccessWrapper_ConstructProps)
    _init (config?: DataAccessWrapper_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataComparator_ConstructProps extends GObject.Object_ConstructProps {
    new_model?:DataModel
    old_model?:DataModel
}
export class DataComparator {
    /* Properties of Gda.DataComparator */
    new_model:DataModel
    old_model:DataModel
    /* Fields of Gda.DataComparator */
    object:GObject.Object
    priv:DataComparatorPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataComparator */
    computeDiff(): boolean
    getDiff(pos: number): Diff
    getNDiffs(): number
    setKeyColumns(col_numbers: number[]): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.DataComparator */
    vfuncDiffComputed?(diff: Diff): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataComparator */
    connect(sigName: "diff-computed", callback: ((obj: DataComparator, object?: object | null) => boolean)): number
    connect_after(sigName: "diff-computed", callback: ((obj: DataComparator, object?: object | null) => boolean)): number
    emit(sigName: "diff-computed", object?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::new-model", callback: ((obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-model", callback: ((obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::old-model", callback: ((obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-model", callback: ((obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataComparator_ConstructProps)
    _init (config?: DataComparator_ConstructProps): void
    static new(old_model: DataModel, new_model: DataModel): DataComparator
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelArray_ConstructProps extends GObject.Object_ConstructProps {
    n_columns?:number
    read_only?:boolean
}
export class DataModelArray {
    /* Properties of Gda.DataModelArray */
    n_columns:number
    read_only:boolean
    /* Fields of Gda.DataModelArray */
    object:GObject.Object
    priv:DataModelArrayPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataModelArray */
    clear(): void
    getRow(row: number): Row
    setNColumns(cols: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataModelArray) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataModelArray) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataModelArray) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataModelArray) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataModelArray) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataModelArray) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataModelArray, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataModelArray, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataModelArray, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataModelArray, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataModelArray, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataModelArray, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::n-columns", callback: ((obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: ((obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: ((obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelArray_ConstructProps)
    _init (config?: DataModelArray_ConstructProps): void
    static newWithGTypes(cols: number, types: GObject.Type[]): DataModel
    static $gtype: GObject.Type
}
export interface DataModelDir_ConstructProps extends GObject.Object_ConstructProps {
    basedir?:string
}
export class DataModelDir {
    /* Properties of Gda.DataModelDir */
    /* Fields of Gda.DataModelDir */
    object:GObject.Object
    priv:DataModelDirPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataModelDir */
    cleanErrors(): void
    getErrors(): GLib.Error[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataModelDir) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataModelDir) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataModelDir) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataModelDir) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataModelDir) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataModelDir) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataModelDir, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataModelDir, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataModelDir, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataModelDir, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataModelDir, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataModelDir, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelDir_ConstructProps)
    _init (config?: DataModelDir_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataModelImport_ConstructProps extends GObject.Object_ConstructProps {
    data_string?:string
    filename?:string
    options?:Set
    random_access?:boolean
    strict?:boolean
    xml_node?:object
}
export class DataModelImport {
    /* Properties of Gda.DataModelImport */
    strict:boolean
    /* Fields of Gda.DataModelImport */
    object:GObject.Object
    priv:DataModelImportPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataModelImport */
    cleanErrors(): void
    getErrors(): GLib.Error[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataModelImport) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataModelImport) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataModelImport) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataModelImport) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataModelImport) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataModelImport) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataModelImport, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataModelImport, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataModelImport, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataModelImport, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataModelImport, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataModelImport, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::strict", callback: ((obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strict", callback: ((obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelImport_ConstructProps)
    _init (config?: DataModelImport_ConstructProps): void
    static newFile(filename: string, random_access: boolean, options?: Set | null): DataModel
    static newMem(data: string, random_access: boolean, options?: Set | null): DataModel
    static newXmlNode(node: libxml2.NodePtr): DataModel
    static $gtype: GObject.Type
}
export interface DataModelIter_ConstructProps extends Set_ConstructProps {
    current_row?:number
    data_model?:DataModel
    forced_model?:DataModel
    update_model?:boolean
}
export class DataModelIter {
    /* Properties of Gda.DataModelIter */
    current_row:number
    data_model:DataModel
    forced_model:DataModel
    update_model:boolean
    /* Properties of Gda.Set */
    description:string
    id:string
    name:string
    validate_changes:boolean
    /* Fields of Gda.DataModelIter */
    object:Set
    priv:DataModelIterPrivate
    /* Fields of Gda.Set */
    holders:Holder[]
    nodes_list:SetNode[]
    sources_list:SetSource[]
    groups_list:SetGroup[]
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataModelIter */
    getColumnForParam(param: Holder): number
    getHolderForField(col: number): Holder
    getRow(): number
    getValueAt(col: number): any
    getValueAtE(col: number): any
    getValueForField(field_name: string): any
    invalidateContents(): void
    isValid(): boolean
    moveNext(): boolean
    movePrev(): boolean
    moveToRow(row: number): boolean
    setValueAt(col: number, value: any): boolean
    /* Methods of Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getHolder(holder_id: string): Holder
    getHolderValue(holder_id: string): any
    getNode(holder: Holder): SetNode
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    mergeWithSet(set_to_merge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.DataModelIter */
    vfuncEndOfData?(): void
    vfuncRowChanged?(row: number): void
    /* Virtual methods of Gda.Set */
    vfuncHolderAttrChanged?(holder: Holder, attr_name: string, attr_value: any): void
    vfuncHolderChanged?(holder: Holder): void
    vfuncHolderTypeSet?(holder: Holder): void
    vfuncPublicDataChanged?(): void
    vfuncSourceModelChanged?(source: SetSource): void
    vfuncValidateHolderChange?(holder: Holder, new_value: any): GLib.Error
    vfuncValidateSet?(): GLib.Error
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModelIter */
    connect(sigName: "end-of-data", callback: ((obj: DataModelIter) => void)): number
    connect_after(sigName: "end-of-data", callback: ((obj: DataModelIter) => void)): number
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: ((obj: DataModelIter, row: number) => void)): number
    connect_after(sigName: "row-changed", callback: ((obj: DataModelIter, row: number) => void)): number
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda.Set */
    connect(sigName: "holder-attr-changed", callback: ((obj: DataModelIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    connect_after(sigName: "holder-attr-changed", callback: ((obj: DataModelIter, holder: Holder, attr_name: string, attr_value: any) => void)): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any): void
    connect(sigName: "holder-changed", callback: ((obj: DataModelIter, object: Holder) => void)): number
    connect_after(sigName: "holder-changed", callback: ((obj: DataModelIter, object: Holder) => void)): number
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: ((obj: DataModelIter, holder: Holder) => void)): number
    connect_after(sigName: "holder-type-set", callback: ((obj: DataModelIter, holder: Holder) => void)): number
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: ((obj: DataModelIter) => void)): number
    connect_after(sigName: "public-data-changed", callback: ((obj: DataModelIter) => void)): number
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: ((obj: DataModelIter, source?: object | null) => void)): number
    connect_after(sigName: "source-model-changed", callback: ((obj: DataModelIter, source?: object | null) => void)): number
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: ((obj: DataModelIter, holder: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-holder-change", callback: ((obj: DataModelIter, holder: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any): void
    connect(sigName: "validate-set", callback: ((obj: DataModelIter) => GLib.Error)): number
    connect_after(sigName: "validate-set", callback: ((obj: DataModelIter) => GLib.Error)): number
    emit(sigName: "validate-set"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data-model", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forced-model", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forced-model", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-model", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: ((obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataModelIter_ConstructProps)
    _init (config?: DataModelIter_ConstructProps): void
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataPivot_ConstructProps extends GObject.Object_ConstructProps {
    model?:DataModel
}
export class DataPivot {
    /* Properties of Gda.DataPivot */
    model:DataModel
    /* Fields of Gda.DataPivot */
    object:GObject.Object
    priv:DataPivotPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataPivot */
    addData(aggregate_type: DataPivotAggregate, field: string, alias?: string | null): boolean
    addField(field_type: DataPivotFieldType, field: string, alias?: string | null): boolean
    populate(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataPivot) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataPivot) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataPivot) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataPivot) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataPivot) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataPivot) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataPivot, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataPivot, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataPivot, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataPivot, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataPivot, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataPivot, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::model", callback: ((obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataPivot_ConstructProps)
    _init (config?: DataPivot_ConstructProps): void
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataProxy_ConstructProps extends GObject.Object_ConstructProps {
    cache_changes?:boolean
    defer_sync?:boolean
    model?:DataModel
    prepend_null_entry?:boolean
    sample_size?:number
}
export class DataProxy {
    /* Properties of Gda.DataProxy */
    cache_changes:boolean
    defer_sync:boolean
    model:DataModel
    prepend_null_entry:boolean
    sample_size:number
    /* Fields of Gda.DataProxy */
    object:GObject.Object
    priv:DataProxyPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataProxy */
    alterValueAttributes(proxy_row: number, col: number, alter_flags: ValueAttribute): void
    applyAllChanges(): boolean
    applyRowChanges(proxy_row: number): boolean
    cancelAllChanges(): boolean
    cancelRowChanges(proxy_row: number, col: number): void
    delete(proxy_row: number): void
    getFilterExpr(): string
    getFilteredNRows(): number
    getNModifiedRows(): number
    getNNewRows(): number
    getProxiedModel(): DataModel
    getProxiedModelNCols(): number
    getProxiedModelNRows(): number
    getProxiedModelRow(proxy_row: number): number
    getSampleEnd(): number
    getSampleSize(): number
    getSampleStart(): number
    getValueAttributes(proxy_row: number, col: number): ValueAttribute
    getValues(proxy_row: number, cols_index: number[]): any
    hasChanged(): boolean
    isReadOnly(): boolean
    rowHasChanged(proxy_row: number): boolean
    rowIsDeleted(proxy_row: number): boolean
    rowIsInserted(proxy_row: number): boolean
    setFilterExpr(filter_expr?: string | null): boolean
    setOrderingColumn(col: number): boolean
    setSampleSize(sample_size: number): void
    setSampleStart(sample_start: number): void
    undelete(proxy_row: number): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of Gda.DataProxy */
    vfuncFilterChanged?(): void
    vfuncRowChangesApplied?(row: number, proxied_row: number): void
    vfuncRowDeleteChanged?(row: number, to_be_deleted: boolean): void
    vfuncSampleChanged?(sample_start: number, sample_end: number): void
    vfuncSampleSizeChanged?(sample_size: number): void
    vfuncValidateRowChanges?(row: number, proxied_row: number): GLib.Error
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataProxy */
    connect(sigName: "filter-changed", callback: ((obj: DataProxy) => void)): number
    connect_after(sigName: "filter-changed", callback: ((obj: DataProxy) => void)): number
    emit(sigName: "filter-changed"): void
    connect(sigName: "row-changes-applied", callback: ((obj: DataProxy, row: number, proxied_row: number) => void)): number
    connect_after(sigName: "row-changes-applied", callback: ((obj: DataProxy, row: number, proxied_row: number) => void)): number
    emit(sigName: "row-changes-applied", row: number, proxied_row: number): void
    connect(sigName: "row-delete-changed", callback: ((obj: DataProxy, row: number, to_be_deleted: boolean) => void)): number
    connect_after(sigName: "row-delete-changed", callback: ((obj: DataProxy, row: number, to_be_deleted: boolean) => void)): number
    emit(sigName: "row-delete-changed", row: number, to_be_deleted: boolean): void
    connect(sigName: "sample-changed", callback: ((obj: DataProxy, sample_start: number, sample_end: number) => void)): number
    connect_after(sigName: "sample-changed", callback: ((obj: DataProxy, sample_start: number, sample_end: number) => void)): number
    emit(sigName: "sample-changed", sample_start: number, sample_end: number): void
    connect(sigName: "sample-size-changed", callback: ((obj: DataProxy, sample_size: number) => void)): number
    connect_after(sigName: "sample-size-changed", callback: ((obj: DataProxy, sample_size: number) => void)): number
    emit(sigName: "sample-size-changed", sample_size: number): void
    connect(sigName: "validate-row-changes", callback: ((obj: DataProxy, row: number, proxied_row: number) => GLib.Error)): number
    connect_after(sigName: "validate-row-changes", callback: ((obj: DataProxy, row: number, proxied_row: number) => GLib.Error)): number
    emit(sigName: "validate-row-changes", row: number, proxied_row: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataProxy) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataProxy) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataProxy) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataProxy) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataProxy) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataProxy) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataProxy, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataProxy, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataProxy, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataProxy, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataProxy, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataProxy, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::cache-changes", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-changes", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::defer-sync", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defer-sync", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prepend-null-entry", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepend-null-entry", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sample-size", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-size", callback: ((obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataProxy_ConstructProps)
    _init (config?: DataProxy_ConstructProps): void
    static new(model: DataModel): DataProxy
    static newWithDataModel(model: DataModel): DataProxy
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataSelect_ConstructProps extends GObject.Object_ConstructProps {
    auto_reset?:boolean
    connection?:Connection
    delete_stmt?:Statement
    exec_params?:Set
    execution_delay?:number
    insert_stmt?:Statement
    model_usage?:number
    prepared_stmt?:PStmt
    store_all_rows?:boolean
    update_stmt?:Statement
}
export class DataSelect {
    /* Properties of Gda.DataSelect */
    auto_reset:boolean
    delete_stmt:Statement
    execution_delay:number
    insert_stmt:Statement
    prepared_stmt:PStmt
    readonly select_stmt:Statement
    store_all_rows:boolean
    update_stmt:Statement
    /* Fields of Gda.DataSelect */
    object:GObject.Object
    priv:DataSelectPrivate
    prep_stmt:PStmt
    nb_stored_rows:number
    advertized_nrows:number
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.DataSelect */
    computeColumnsAttributes(): boolean
    computeModificationStatements(): boolean
    computeModificationStatementsExt(cond_type: DataSelectConditionType): boolean
    computeRowSelectionCondition(): boolean
    getConnection(): Connection
    prepareForOffline(): boolean
    rerun(): boolean
    setModificationStatement(mod_stmt: Statement): boolean
    setModificationStatementSql(sql: string): boolean
    setRowSelectionConditionSql(sql_where: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(to_stream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any, cols_index: number[]): number
    getTypedValueAt(col: number, row: number, expected_type: GObject.Type, nullok: boolean): any
    getValueAt(col: number, row: number): any
    importFromFile(file: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable | null): boolean
    importFromString(string: string, cols_trans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hint_value?: any): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(do_notify_changes: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any): boolean
    thaw(): void
    /* Virtual methods of Gda.DataSelect */
    vfuncFetchAt?(prow: Row, rownum: number): boolean
    vfuncFetchNbRows?(): number
    vfuncFetchNext?(prow: Row, rownum: number): boolean
    vfuncFetchPrev?(prow: Row, rownum: number): boolean
    vfuncFetchRandom?(prow: Row, rownum: number): boolean
    vfuncStoreAll?(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda.DataModel */
    connect(sigName: "access-changed", callback: ((obj: DataSelect) => void)): number
    connect_after(sigName: "access-changed", callback: ((obj: DataSelect) => void)): number
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: ((obj: DataSelect) => void)): number
    connect_after(sigName: "changed", callback: ((obj: DataSelect) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: ((obj: DataSelect) => void)): number
    connect_after(sigName: "reset", callback: ((obj: DataSelect) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((obj: DataSelect, row: number) => void)): number
    connect_after(sigName: "row-inserted", callback: ((obj: DataSelect, row: number) => void)): number
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((obj: DataSelect, row: number) => void)): number
    connect_after(sigName: "row-removed", callback: ((obj: DataSelect, row: number) => void)): number
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((obj: DataSelect, row: number) => void)): number
    connect_after(sigName: "row-updated", callback: ((obj: DataSelect, row: number) => void)): number
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::auto-reset", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reset", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delete-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::execution-delay", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-delay", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::insert-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prepared-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepared-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::select-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-all-rows", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-all-rows", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-stmt", callback: ((obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSelect_ConstructProps)
    _init (config?: DataSelect_ConstructProps): void
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface HandlerBin_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerBin {
    /* Fields of Gda.HandlerBin */
    object:GObject.Object
    priv:HandlerBinPriv
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HandlerBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HandlerBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerBin_ConstructProps)
    _init (config?: HandlerBin_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HandlerBoolean_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerBoolean {
    /* Fields of Gda.HandlerBoolean */
    object:GObject.Object
    priv:HandlerBooleanPriv
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HandlerBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HandlerBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerBoolean_ConstructProps)
    _init (config?: HandlerBoolean_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HandlerNumerical_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerNumerical {
    /* Fields of Gda.HandlerNumerical */
    object:GObject.Object
    priv:HandlerNumericalPriv
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HandlerNumerical, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HandlerNumerical, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerNumerical_ConstructProps)
    _init (config?: HandlerNumerical_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HandlerString_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerString {
    /* Fields of Gda.HandlerString */
    object:GObject.Object
    priv:HandlerStringPriv
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HandlerString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HandlerString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerString_ConstructProps)
    _init (config?: HandlerString_ConstructProps): void
    static newWithProvider(prov: ServerProvider, cnc?: Connection | null): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerTime_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerTime {
    /* Fields of Gda.HandlerTime */
    object:GObject.Object
    priv:HandlerTimePriv
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.HandlerTime */
    getFormat(type: GObject.Type): string
    getNoLocaleStrFromValue(value: any): string
    setSqlSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean): void
    setStrSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HandlerTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HandlerTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerTime_ConstructProps)
    _init (config?: HandlerTime_ConstructProps): void
    static newNoLocale(): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerType_ConstructProps extends GObject.Object_ConstructProps {
}
export class HandlerType {
    /* Fields of Gda.HandlerType */
    object:GObject.Object
    priv:HandlerTypePriv
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any
    getSqlFromValue(value?: any): string
    getStrFromValue(value?: any): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: HandlerType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: HandlerType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HandlerType_ConstructProps)
    _init (config?: HandlerType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Holder_ConstructProps extends GObject.Object_ConstructProps {
    description?:string
    full_bind?:Holder
    g_type?:GObject.Type
    id?:string
    name?:string
    not_null?:boolean
    simple_bind?:Holder
    source_column?:number
    source_model?:DataModel
    validate_changes?:boolean
}
export class Holder {
    /* Properties of Gda.Holder */
    description:string
    full_bind:Holder
    g_type:GObject.Type
    id:string
    name:string
    not_null:boolean
    simple_bind:Holder
    source_column:number
    source_model:DataModel
    validate_changes:boolean
    /* Fields of Gda.Holder */
    object:GObject.Object
    priv:HolderPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Holder */
    copy(): Holder
    forceInvalid(): void
    forceInvalidE(error?: GLib.Error | null): void
    getAlphanumId(): string
    getAttribute(attribute: string): any
    getBind(): Holder
    getDefaultValue(): any
    getGType(): GObject.Type
    getId(): string
    getNotNull(): boolean
    getSourceModel(col: number): DataModel
    getValue(): any
    getValueStr(dh?: DataHandler | null): string
    isValid(): boolean
    isValidE(): boolean
    setAttribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    setBind(bind_to: Holder): boolean
    setDefaultValue(value: any): void
    setNotNull(not_null: boolean): void
    setSourceModel(model: DataModel, col: number): boolean
    setValue(value?: any): boolean
    setValueStr(dh: DataHandler, value: string): boolean
    setValueToDefault(): boolean
    takeStaticValue(value: any, value_changed: boolean): any
    takeValue(value: any): boolean
    valueIsDefault(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of Gda.Holder */
    vfuncAttChanged?(att_name: string, att_value: any): void
    vfuncChanged?(): void
    vfuncSourceChanged?(): void
    vfuncValidateChange?(new_value: any): GLib.Error
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Holder */
    connect(sigName: "attribute-changed", callback: ((obj: Holder, att_name: string, att_value: any) => void)): number
    connect_after(sigName: "attribute-changed", callback: ((obj: Holder, att_name: string, att_value: any) => void)): number
    emit(sigName: "attribute-changed", att_name: string, att_value: any): void
    connect(sigName: "changed", callback: ((obj: Holder) => void)): number
    connect_after(sigName: "changed", callback: ((obj: Holder) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "source-changed", callback: ((obj: Holder) => void)): number
    connect_after(sigName: "source-changed", callback: ((obj: Holder) => void)): number
    emit(sigName: "source-changed"): void
    connect(sigName: "validate-change", callback: ((obj: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-change", callback: ((obj: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-change", new_value: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-bind", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-bind", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-type", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::not-null", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-null", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::simple-bind", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-bind", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-column", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-column", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-model", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-model", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: ((obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Holder_ConstructProps)
    _init (config?: Holder_ConstructProps): void
    static new(type: GObject.Type): Holder
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface MetaStore_ConstructProps extends GObject.Object_ConstructProps {
    catalog?:string
    cnc?:Connection
    cnc_string?:string
    schema?:string
}
export class MetaStore {
    /* Properties of Gda.MetaStore */
    /* Fields of Gda.MetaStore */
    object:GObject.Object
    priv:MetaStorePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.MetaStore */
    createModifyDataModel(table_name: string): DataModel
    declareForeignKey(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string, colnames: string[], ref_colnames: string[]): boolean
    extract(select_sql: string, vars?: GLib.HashTable | null): DataModel
    getAttributeValue(att_name: string): [ /* returnType */ boolean, /* att_value */ string ]
    getInternalConnection(): Connection
    getVersion(): number
    modify(table_name: string, new_data: DataModel | null, condition: string | null, value_names: string[], values: any): boolean
    modifyWithContext(context: MetaContext, new_data?: DataModel | null): boolean
    schemaAddCustomObject(xml_description: string): boolean
    schemaGetAllTables(): string[]
    schemaGetDependTables(table_name: string): string[]
    schemaGetStructure(): MetaStruct
    schemaRemoveCustomObject(obj_name: string): boolean
    setAttributeValue(att_name: string, att_value?: string | null): boolean
    setIdentifiersStyle(style: SqlIdentifierStyle): void
    setReservedKeywordsFunc(func?: SqlReservedKeywordsFunc | null): void
    undeclareForeignKey(mstruct: MetaStruct | null, fk_name: string, catalog: string | null, schema: string | null, table: string, ref_catalog: string | null, ref_schema: string | null, ref_table: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.MetaStore */
    vfuncMetaReset?(): void
    vfuncSuggestUpdate?(suggest: MetaContext): GLib.Error
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.MetaStore */
    connect(sigName: "meta-changed", callback: ((obj: MetaStore, changes: MetaStoreChange[]) => void)): number
    connect_after(sigName: "meta-changed", callback: ((obj: MetaStore, changes: MetaStoreChange[]) => void)): number
    emit(sigName: "meta-changed", changes: MetaStoreChange[]): void
    connect(sigName: "meta-reset", callback: ((obj: MetaStore) => void)): number
    connect_after(sigName: "meta-reset", callback: ((obj: MetaStore) => void)): number
    emit(sigName: "meta-reset"): void
    connect(sigName: "suggest-update", callback: ((obj: MetaStore, suggest: MetaContext) => GLib.Error)): number
    connect_after(sigName: "suggest-update", callback: ((obj: MetaStore, suggest: MetaContext) => GLib.Error)): number
    emit(sigName: "suggest-update", suggest: MetaContext): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetaStore_ConstructProps)
    _init (config?: MetaStore_ConstructProps): void
    static new(cnc_string?: string | null): MetaStore
    static newWithFile(file_name: string): MetaStore
    static errorQuark(): GLib.Quark
    static sqlIdentifierQuote(id: string, cnc: Connection): string
    static $gtype: GObject.Type
}
export interface MetaStruct_ConstructProps extends GObject.Object_ConstructProps {
    features?:number
    meta_store?:MetaStore
}
export class MetaStruct {
    /* Properties of Gda.MetaStruct */
    /* Fields of Gda.MetaStruct */
    object:GObject.Object
    priv:MetaStructPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.MetaStruct */
    complement(type: MetaDbObjectType, catalog: any, schema: any, name: any): MetaDbObject
    complementAll(): boolean
    complementDefault(): boolean
    complementDepend(dbo: MetaDbObject): boolean
    complementSchema(catalog?: any, schema?: any): boolean
    dumpAsGraph(info: MetaGraphInfo): string
    getAllDbObjects(): MetaDbObject[]
    getDbObject(catalog: any, schema: any, name: any): MetaDbObject
    loadFromXmlFile(catalog: string | null, schema: string | null, xml_spec_file: string): boolean
    sortDbObjects(sort_type: MetaSortType): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetaStruct_ConstructProps)
    _init (config?: MetaStruct_ConstructProps): void
    static new(store: MetaStore, features: MetaStructFeature): MetaStruct
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface PStmt_ConstructProps extends GObject.Object_ConstructProps {
}
export class PStmt {
    /* Fields of Gda.PStmt */
    object:GObject.Object
    priv:PStmtPrivate
    sql:string
    param_ids:string[]
    ncols:number
    types:any
    tmpl_columns:Column[]
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.PStmt */
    copyContents(dest: PStmt): void
    getGdaStatement(): Statement
    setGdaStatement(stmt?: Statement | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: PStmt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: PStmt, pspec: GObject.ParamSpec) => void)): number
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
    statement?:Statement
}
export class RepetitiveStatement {
    /* Properties of Gda.RepetitiveStatement */
    /* Fields of Gda.RepetitiveStatement */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.RepetitiveStatement */
    appendSet(values: Set, make_copy: boolean): boolean
    getAllSets(): Set[]
    getTemplateSet(set: Set): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepetitiveStatement_ConstructProps)
    _init (config?: RepetitiveStatement_ConstructProps): void
    static new(stmt: Statement): RepetitiveStatement
    static $gtype: GObject.Type
}
export interface Row_ConstructProps extends GObject.Object_ConstructProps {
    nb_values?:number
}
export class Row {
    /* Properties of Gda.Row */
    nb_values:number
    /* Fields of Gda.Row */
    object:GObject.Object
    priv:RowPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Row */
    getLength(): number
    getValue(num: number): any
    invalidateValue(value: any): void
    invalidateValueE(value: any, error?: GLib.Error | null): void
    valueIsValid(value: any): boolean
    valueIsValidE(value: any): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Row, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::nb-values", callback: ((obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nb-values", callback: ((obj: Row, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Row_ConstructProps)
    _init (config?: Row_ConstructProps): void
    static new(count: number): Row
    static $gtype: GObject.Type
}
export interface ServerOperation_ConstructProps extends GObject.Object_ConstructProps {
    connection?:Connection
    op_type?:number
    provider?:ServerProvider
    spec_filename?:string
}
export class ServerOperation {
    /* Properties of Gda.ServerOperation */
    /* Fields of Gda.ServerOperation */
    object:GObject.Object
    priv:ServerOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.ServerOperation */
    addItemToSequence(seq_path: string): number
    delItemFromSequence(item_path: string): boolean
    getNodeParent(path: string): string
    getNodePathPortion(path: string): string
    getNodeType(path: string, status?: ServerOperationNodeStatus | null): ServerOperationNodeType
    getOpType(): ServerOperationType
    getRootNodes(): string[]
    getSequenceItemNames(path: string): string[]
    getSequenceMaxSize(path: string): number
    getSequenceMinSize(path: string): number
    getSequenceName(path: string): string
    getSequenceSize(path: string): number
    getSqlIdentifierAt(cnc: Connection | null, prov: ServerProvider | null, path: string): string
    getValueAt(path: string): any
    isValid(xml_file?: string | null): boolean
    loadDataFromXml(node: libxml2.NodePtr): boolean
    performCreateDatabase(provider?: string | null): boolean
    performCreateTable(): boolean
    performDropDatabase(provider?: string | null): boolean
    performDropTable(): boolean
    setValueAt(value: string | null, path: string): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.ServerOperation */
    vfuncSeqItemAdded?(seq_path: string, item_index: number): void
    vfuncSeqItemRemove?(seq_path: string, item_index: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.ServerOperation */
    connect(sigName: "sequence-item-added", callback: ((obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    connect_after(sigName: "sequence-item-added", callback: ((obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    emit(sigName: "sequence-item-added", seq_path: string, item_index: number): void
    connect(sigName: "sequence-item-remove", callback: ((obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    connect_after(sigName: "sequence-item-remove", callback: ((obj: ServerOperation, seq_path: string, item_index: number) => void)): number
    emit(sigName: "sequence-item-remove", seq_path: string, item_index: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerOperation_ConstructProps)
    _init (config?: ServerOperation_ConstructProps): void
    static new(op_type: ServerOperationType, xml_file: string): ServerOperation
    static errorQuark(): GLib.Quark
    static opTypeToString(type: ServerOperationType): string
    static prepareCreateDatabase(provider: string, db_name?: string | null): ServerOperation | null
    static prepareDropDatabase(provider: string, db_name?: string | null): ServerOperation | null
    static prepareDropTable(cnc: Connection, table_name: string): ServerOperation | null
    static stringToOpType(str: string): ServerOperationType
    static $gtype: GObject.Type
}
export interface ServerProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class ServerProvider {
    /* Fields of Gda.ServerProvider */
    object:GObject.Object
    priv:ServerProviderPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.ServerProvider */
    createOperation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    createParser(cnc?: Connection | null): SqlParser
    escapeString(cnc: Connection | null, str: string): string
    findFile(inst_dir: string, filename: string): string
    getDataHandlerDbms(cnc: Connection | null, for_type: string): DataHandler
    getDataHandlerDefault(cnc: Connection | null, type: GObject.Type, dbms_type: string): DataHandler
    getDataHandlerGType(cnc: Connection | null, for_type: GObject.Type): DataHandler
    getDefaultDbmsType(cnc: Connection | null, type: GObject.Type): string | null
    getName(): string
    getServerVersion(cnc: Connection): string
    getVersion(): string
    handlerDeclare(dh: DataHandler, cnc: Connection, g_type: GObject.Type, dbms_type: string): void
    handlerFind(cnc: Connection | null, g_type: GObject.Type, dbms_type?: string | null): DataHandler
    internalGetParser(): SqlParser
    performOperation(cnc: Connection | null, op: ServerOperation): boolean
    performOperationDefault(cnc: Connection | null, op: ServerOperation): boolean
    renderOperation(cnc: Connection | null, op: ServerOperation): string | null
    stringToValue(cnc: Connection | null, string: string, preferred_type: GObject.Type, dbms_type?: string | null): any
    supportsFeature(cnc: Connection | null, feature: ConnectionFeature): boolean
    supportsOperation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean
    unescapeString(cnc: Connection | null, str: string): string
    valueToSqlString(cnc: Connection | null, from: any): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.ServerProvider */
    vfuncAddSavepoint?(cnc: Connection, name: string): boolean
    vfuncBeginTransaction?(cnc: Connection, name: string, level: TransactionIsolation): boolean
    vfuncCancel?(cnc: Connection, task_id: number): boolean
    vfuncCloseConnection?(cnc: Connection): boolean
    vfuncCommitTransaction?(cnc: Connection, name: string): boolean
    vfuncCreateOperation?(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    vfuncCreateParser?(cnc?: Connection | null): SqlParser
    vfuncDeleteSavepoint?(cnc: Connection, name: string): boolean
    vfuncEscapeString?(cnc: Connection | null, str: string): string
    vfuncGetDatabase?(cnc: Connection): string
    vfuncGetDefDbmsType?(cnc: Connection, g_type: GObject.Type): string
    vfuncGetName?(): string
    vfuncGetServerVersion?(cnc: Connection): string
    vfuncGetVersion?(): string
    vfuncHandleAsync?(cnc: Connection): boolean
    vfuncIdentifierQuote?(cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean): string
    vfuncIsBusy?(cnc: Connection): boolean
    vfuncRenderOperation?(cnc: Connection | null, op: ServerOperation): string | null
    vfuncRollbackSavepoint?(cnc: Connection, name: string): boolean
    vfuncRollbackTransaction?(cnc: Connection, name: string): boolean
    vfuncStatementPrepare?(cnc: Connection, stmt: Statement): boolean
    vfuncSupportsFeature?(cnc: Connection | null, feature: ConnectionFeature): boolean
    vfuncSupportsOperation?(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean
    vfuncUnescapeString?(cnc: Connection | null, str: string): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ServerProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ServerProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerProvider_ConstructProps)
    _init (config?: ServerProvider_ConstructProps): void
    static errorQuark(): GLib.Quark
    static loadFileContents(inst_dir: string, data_dir: string, filename: string): string
    static $gtype: GObject.Type
}
export interface Set_ConstructProps extends GObject.Object_ConstructProps {
    description?:string
    holders?:object
    id?:string
    name?:string
    validate_changes?:boolean
}
export class Set {
    /* Properties of Gda.Set */
    description:string
    id:string
    name:string
    validate_changes:boolean
    /* Fields of Gda.Set */
    object:GObject.Object
    priv:SetPrivate
    holders:Holder[]
    nodes_list:SetNode[]
    sources_list:SetSource[]
    groups_list:SetGroup[]
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getHolder(holder_id: string): Holder
    getHolderValue(holder_id: string): any
    getNode(holder: Holder): SetNode
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    isValid(): boolean
    mergeWithSet(set_to_merge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.Set */
    vfuncHolderAttrChanged?(holder: Holder, attr_name: string, attr_value: any): void
    vfuncHolderChanged?(holder: Holder): void
    vfuncHolderTypeSet?(holder: Holder): void
    vfuncPublicDataChanged?(): void
    vfuncSourceModelChanged?(source: SetSource): void
    vfuncValidateHolderChange?(holder: Holder, new_value: any): GLib.Error
    vfuncValidateSet?(): GLib.Error
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Set */
    connect(sigName: "holder-attr-changed", callback: ((obj: Set, holder: Holder, attr_name: string, attr_value: any) => void)): number
    connect_after(sigName: "holder-attr-changed", callback: ((obj: Set, holder: Holder, attr_name: string, attr_value: any) => void)): number
    emit(sigName: "holder-attr-changed", holder: Holder, attr_name: string, attr_value: any): void
    connect(sigName: "holder-changed", callback: ((obj: Set, object: Holder) => void)): number
    connect_after(sigName: "holder-changed", callback: ((obj: Set, object: Holder) => void)): number
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: ((obj: Set, holder: Holder) => void)): number
    connect_after(sigName: "holder-type-set", callback: ((obj: Set, holder: Holder) => void)): number
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: ((obj: Set) => void)): number
    connect_after(sigName: "public-data-changed", callback: ((obj: Set) => void)): number
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: ((obj: Set, source?: object | null) => void)): number
    connect_after(sigName: "source-model-changed", callback: ((obj: Set, source?: object | null) => void)): number
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: ((obj: Set, holder: Holder, new_value: any) => GLib.Error)): number
    connect_after(sigName: "validate-holder-change", callback: ((obj: Set, holder: Holder, new_value: any) => GLib.Error)): number
    emit(sigName: "validate-holder-change", holder: Holder, new_value: any): void
    connect(sigName: "validate-set", callback: ((obj: Set) => GLib.Error)): number
    connect_after(sigName: "validate-set", callback: ((obj: Set) => GLib.Error)): number
    emit(sigName: "validate-set"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validate-changes", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: ((obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    static new(holders: Holder[]): Set
    static newFromSpecNode(xml_spec: libxml2.NodePtr): Set
    static newFromSpecString(xml_spec: string): Set
    static newReadOnly(holders: Holder[]): Set
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export class Short {
    static name: string
}
export interface SqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
}
export class SqlBuilder {
    /* Properties of Gda.SqlBuilder */
    /* Fields of Gda.SqlBuilder */
    object:GObject.Object
    priv:SqlBuilderPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.SqlBuilder */
    addCase(test_expr: SqlBuilderId, else_expr: SqlBuilderId, when_array: SqlBuilderId[], then_array: SqlBuilderId[]): SqlBuilderId
    addCond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    addCondV(op: SqlOperatorType, op_ids: SqlBuilderId[]): SqlBuilderId
    addExprValue(dh?: DataHandler | null, value?: any): SqlBuilderId
    addFieldId(field_name: string, table_name?: string | null): SqlBuilderId
    addFieldValueAsGvalue(field_name: string, value?: any): void
    addFieldValueId(field_id: SqlBuilderId, value_id: SqlBuilderId): void
    addFunction(func_name: string, args: SqlBuilderId[]): SqlBuilderId
    addId(str: string): SqlBuilderId
    addParam(param_name: string, type: GObject.Type, nullok: boolean): SqlBuilderId
    compoundAddSubSelectFromBuilder(subselect: SqlBuilder): void
    compoundSetType(compound_type: SqlStatementCompoundType): void
    getStatement(): Statement
    importExpressionFromBuilder(query: SqlBuilder, expr_id: SqlBuilderId): SqlBuilderId
    joinAddField(join_id: SqlBuilderId, field_name: string): void
    selectAddField(field_name: string, table_name?: string | null, alias?: string | null): SqlBuilderId
    selectAddTarget(table_name: string, alias?: string | null): SqlBuilderId
    selectAddTargetId(table_id: SqlBuilderId, alias?: string | null): SqlBuilderId
    selectGroupBy(expr_id: SqlBuilderId): void
    selectOrderBy(expr_id: SqlBuilderId, asc: boolean, collation_name?: string | null): void
    selectSetDistinct(distinct: boolean, expr_id: SqlBuilderId): void
    selectSetHaving(cond_id: SqlBuilderId): void
    selectSetLimit(limit_count_expr_id: SqlBuilderId, limit_offset_expr_id: SqlBuilderId): void
    setTable(table_name: string): void
    setWhere(cond_id: SqlBuilderId): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SqlBuilder_ConstructProps)
    _init (config?: SqlBuilder_ConstructProps): void
    static new(stmt_type: SqlStatementType): SqlBuilder
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface SqlParser_ConstructProps extends GObject.Object_ConstructProps {
    mode?:number
    tokenizer_flavour?:number
}
export class SqlParser {
    /* Properties of Gda.SqlParser */
    readonly column_error:number
    readonly line_error:number
    mode:number
    tokenizer_flavour:number
    /* Fields of Gda.SqlParser */
    object:GObject.Object
    priv:SqlParserPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.SqlParser */
    parseFileAsBatch(filename: string): Batch | null
    parseString(sql: string): [ /* returnType */ Statement | null, /* remain */ string | null ]
    parseStringAsBatch(sql: string): [ /* returnType */ Batch | null, /* remain */ string | null ]
    setOverflowError(): void
    setSyntaxError(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::column-error", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-error", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-error", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-error", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tokenizer-flavour", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tokenizer-flavour", callback: ((obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SqlParser_ConstructProps)
    _init (config?: SqlParser_ConstructProps): void
    static new(): SqlParser
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Statement_ConstructProps extends GObject.Object_ConstructProps {
    structure?:object
}
export class Statement {
    /* Properties of Gda.Statement */
    structure:object
    /* Fields of Gda.Statement */
    object:GObject.Object
    priv:StatementPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Statement */
    checkStructure(): boolean
    checkValidity(cnc?: Connection | null): boolean
    copy(): Statement
    getParameters(): [ /* returnType */ boolean, /* out_params */ Set | null ]
    getStatementType(): SqlStatementType
    isUseless(): boolean
    normalize(cnc: Connection): boolean
    serialize(): string
    toSqlExtended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* params_used */ Holder[] | null ]
    toSqlReal(context: SqlRenderingContext): string
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.Statement */
    vfuncChecked?(cnc: Connection, checked: boolean): void
    vfuncReset?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Statement */
    connect(sigName: "checked", callback: ((obj: Statement, object: Connection, p0: boolean) => void)): number
    connect_after(sigName: "checked", callback: ((obj: Statement, object: Connection, p0: boolean) => void)): number
    emit(sigName: "checked", object: Connection, p0: boolean): void
    connect(sigName: "reset", callback: ((obj: Statement) => void)): number
    connect_after(sigName: "reset", callback: ((obj: Statement) => void)): number
    emit(sigName: "reset"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Statement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::structure", callback: ((obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structure", callback: ((obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Statement_ConstructProps)
    _init (config?: Statement_ConstructProps): void
    static new(): Statement
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface ThreadWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
export class ThreadWrapper {
    /* Fields of Gda.ThreadWrapper */
    object:GObject.Object
    priv:ThreadWrapperPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.ThreadWrapper */
    cancel(id: number): boolean
    connectRaw(instance: object | null, sig_name: string, private_thread: boolean, private_job: boolean, callback: ThreadWrapperCallback): number
    disconnect(id: number): void
    execute(func: ThreadWrapperFunc, arg?: object | null): number
    executeVoid(func: ThreadWrapperVoidFunc, arg?: object | null): number
    fetchResult(may_lock: boolean, exp_id: number): object | null
    getIoChannel(): GLib.IOChannel
    getWaitingSize(): number
    iterate(may_block: boolean): void
    stealSignal(id: number): void
    unsetIoChannel(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: ThreadWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: ThreadWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThreadWrapper_ConstructProps)
    _init (config?: ThreadWrapper_ConstructProps): void
    static new(): ThreadWrapper
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TransactionStatus_ConstructProps extends GObject.Object_ConstructProps {
}
export class TransactionStatus {
    /* Fields of Gda.TransactionStatus */
    object:GObject.Object
    name:string
    isolation_level:TransactionIsolation
    state:TransactionStatusState
    events:TransactionStatusEvent[]
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TransactionStatus */
    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    findCurrent(destev: TransactionStatusEvent, unnamed_only: boolean): TransactionStatus | null
    freeEvents(event: TransactionStatusEvent, free_after: boolean): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TransactionStatus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TransactionStatus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransactionStatus_ConstructProps)
    _init (config?: TransactionStatus_ConstructProps): void
    static new(name: string): TransactionStatus
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends GObject.Object_ConstructProps {
}
export class Tree {
    /* Properties of Gda.Tree */
    readonly is_list:boolean
    /* Fields of Gda.Tree */
    object:GObject.Object
    priv:TreePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.Tree */
    addManager(manager: TreeManager): void
    clean(): void
    dump(node?: TreeNode | null, stream?: object | null): void
    getNode(tree_path: string, use_names: boolean): TreeNode | null
    getNodeManager(node: TreeNode): TreeManager
    getNodePath(node: TreeNode): string
    getNodesInPath(tree_path: string | null, use_names: boolean): TreeNode[]
    setAttribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    updateAll(): boolean
    updateChildren(node?: TreeNode | null): boolean
    updatePart(node: TreeNode): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.Tree */
    vfuncNodeChanged?(node: TreeNode): void
    vfuncNodeDeleted?(node_path: string): void
    vfuncNodeHasChildToggled?(node: TreeNode): void
    vfuncNodeInserted?(node: TreeNode): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.Tree */
    connect(sigName: "node-changed", callback: ((obj: Tree, node: TreeNode) => void)): number
    connect_after(sigName: "node-changed", callback: ((obj: Tree, node: TreeNode) => void)): number
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: ((obj: Tree, node_path: string) => void)): number
    connect_after(sigName: "node-deleted", callback: ((obj: Tree, node_path: string) => void)): number
    emit(sigName: "node-deleted", node_path: string): void
    connect(sigName: "node-has-child-toggled", callback: ((obj: Tree, node: TreeNode) => void)): number
    connect_after(sigName: "node-has-child-toggled", callback: ((obj: Tree, node: TreeNode) => void)): number
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: ((obj: Tree, node: TreeNode) => void)): number
    connect_after(sigName: "node-inserted", callback: ((obj: Tree, node: TreeNode) => void)): number
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-list", callback: ((obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-list", callback: ((obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    static new(): Tree
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeManager_ConstructProps extends GObject.Object_ConstructProps {
    func?:object
    recursive?:boolean
}
export class TreeManager {
    /* Properties of Gda.TreeManager */
    func:object
    recursive:boolean
    /* Fields of Gda.TreeManager */
    object:GObject.Object
    priv:TreeManagerPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeManager */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: ((obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: ((obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeManager_ConstructProps)
    _init (config?: TreeManager_ConstructProps): void
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeMgrColumns_ConstructProps extends TreeManager_ConstructProps {
    connection?:Connection
    meta_store?:MetaStore
    schema?:string
    table_name?:string
}
export class TreeMgrColumns {
    /* Properties of Gda.TreeMgrColumns */
    /* Properties of Gda.TreeManager */
    func:object
    recursive:boolean
    /* Fields of Gda.TreeMgrColumns */
    object:TreeManager
    priv:TreeMgrColumnsPriv
    /* Fields of Gda.TreeManager */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeManager */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: ((obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: ((obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrColumns_ConstructProps)
    _init (config?: TreeMgrColumns_ConstructProps): void
    static new(cnc: Connection, schema: string, table_name: string): TreeMgrColumns
    static $gtype: GObject.Type
}
export interface TreeMgrLabel_ConstructProps extends TreeManager_ConstructProps {
    label?:string
}
export class TreeMgrLabel {
    /* Properties of Gda.TreeMgrLabel */
    /* Properties of Gda.TreeManager */
    func:object
    recursive:boolean
    /* Fields of Gda.TreeMgrLabel */
    object:TreeManager
    priv:TreeMgrLabelPriv
    /* Fields of Gda.TreeManager */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeManager */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: ((obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: ((obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrLabel_ConstructProps)
    _init (config?: TreeMgrLabel_ConstructProps): void
    static new(label: string): TreeMgrLabel
    static $gtype: GObject.Type
}
export interface TreeMgrSchemas_ConstructProps extends TreeManager_ConstructProps {
    connection?:Connection
    meta_store?:MetaStore
}
export class TreeMgrSchemas {
    /* Properties of Gda.TreeMgrSchemas */
    /* Properties of Gda.TreeManager */
    func:object
    recursive:boolean
    /* Fields of Gda.TreeMgrSchemas */
    object:TreeManager
    priv:TreeMgrSchemasPriv
    /* Fields of Gda.TreeManager */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeManager */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: ((obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: ((obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrSchemas_ConstructProps)
    _init (config?: TreeMgrSchemas_ConstructProps): void
    static new(cnc: Connection): TreeMgrSchemas
    static $gtype: GObject.Type
}
export interface TreeMgrSelect_ConstructProps extends TreeManager_ConstructProps {
    connection?:Connection
    params?:Set
    statement?:Statement
}
export class TreeMgrSelect {
    /* Properties of Gda.TreeMgrSelect */
    /* Properties of Gda.TreeManager */
    func:object
    recursive:boolean
    /* Fields of Gda.TreeMgrSelect */
    object:TreeManager
    priv:TreeMgrSelectPriv
    /* Fields of Gda.TreeManager */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeManager */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: ((obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: ((obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrSelect_ConstructProps)
    _init (config?: TreeMgrSelect_ConstructProps): void
    static new(cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect
    static $gtype: GObject.Type
}
export interface TreeMgrTables_ConstructProps extends TreeManager_ConstructProps {
    connection?:Connection
    meta_store?:MetaStore
    schema?:string
}
export class TreeMgrTables {
    /* Properties of Gda.TreeMgrTables */
    /* Properties of Gda.TreeManager */
    func:object
    recursive:boolean
    /* Fields of Gda.TreeMgrTables */
    object:TreeManager
    priv:TreeMgrTablesPriv
    /* Fields of Gda.TreeManager */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeManager */
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: ((obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: ((obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeMgrTables_ConstructProps)
    _init (config?: TreeMgrTables_ConstructProps): void
    static new(cnc: Connection, schema?: string | null): TreeMgrTables
    static $gtype: GObject.Type
}
export interface TreeNode_ConstructProps extends GObject.Object_ConstructProps {
    name?:string
}
export class TreeNode {
    /* Properties of Gda.TreeNode */
    name:string
    /* Fields of Gda.TreeNode */
    object:GObject.Object
    priv:TreeNodePrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.TreeNode */
    fetchAttribute(attribute: string): any
    getChildIndex(index: number): TreeNode
    getChildName(name: string): TreeNode
    getChildren(): TreeNode[]
    getNodeAttribute(attribute: string): any
    getParent(): TreeNode
    setNodeAttribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gda.TreeNode */
    vfuncDumpChildren?(prefix: string, in_string: GLib.String): void
    vfuncDumpHeader?(): string
    vfuncNodeChanged?(node: TreeNode): void
    vfuncNodeDeleted?(relative_path: string): void
    vfuncNodeHasChildToggled?(node: TreeNode): void
    vfuncNodeInserted?(node: TreeNode): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gda.TreeNode */
    connect(sigName: "node-changed", callback: ((obj: TreeNode, node: TreeNode) => void)): number
    connect_after(sigName: "node-changed", callback: ((obj: TreeNode, node: TreeNode) => void)): number
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: ((obj: TreeNode, relative_path: string) => void)): number
    connect_after(sigName: "node-deleted", callback: ((obj: TreeNode, relative_path: string) => void)): number
    emit(sigName: "node-deleted", relative_path: string): void
    connect(sigName: "node-has-child-toggled", callback: ((obj: TreeNode, node: TreeNode) => void)): number
    connect_after(sigName: "node-has-child-toggled", callback: ((obj: TreeNode, node: TreeNode) => void)): number
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: ((obj: TreeNode, node: TreeNode) => void)): number
    connect_after(sigName: "node-inserted", callback: ((obj: TreeNode, node: TreeNode) => void)): number
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: ((obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeNode_ConstructProps)
    _init (config?: TreeNode_ConstructProps): void
    static new(name?: string | null): TreeNode
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export class UShort {
    static name: string
}
export interface XaTransaction_ConstructProps extends GObject.Object_ConstructProps {
    format_id?:number
    transaction_id?:string
}
export class XaTransaction {
    /* Properties of Gda.XaTransaction */
    /* Fields of Gda.XaTransaction */
    object:GObject.Object
    priv:XaTransactionPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Gda.XaTransaction */
    begin(): boolean
    commit(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] | null ]
    commitRecovered(): [ /* returnType */ boolean, /* cnc_to_recover */ Connection[] | null ]
    registerConnection(cnc: Connection, branch: string): boolean
    rollback(): boolean
    unregisterConnection(cnc: Connection): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XaTransaction_ConstructProps)
    _init (config?: XaTransaction_ConstructProps): void
    static new(format: number, global_transaction_id: string): XaTransaction
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export class AttributesManager {
    /* Methods of Gda.AttributesManager */
    clear(ptr?: object | null): void
    foreach(ptr: object | null, func: AttributesManagerFunc): void
    free(): void
    get(ptr: object | null, att_name: string): any
    set(ptr: object | null, att_name: string, value: any): void
    setFull(ptr: object | null, att_name: string, value: any, destroy: GLib.DestroyNotify): void
    static name: string
}
export class BatchPrivate {
    static name: string
}
export class Binary {
    /* Fields of Gda.Binary */
    data:any
    binary_length:number
    /* Methods of Gda.Binary */
    static name: string
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class Blob {
    /* Fields of Gda.Blob */
    data:Binary
    op:BlobOp
    /* Methods of Gda.Blob */
    setOp(op?: BlobOp | null): void
    static name: string
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class ColumnPrivate {
    static name: string
}
export class ConfigPrivate {
    static name: string
}
export class ConnectionEventPrivate {
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export class DataAccessWrapperPrivate {
    static name: string
}
export class DataComparatorPrivate {
    static name: string
}
export class DataModelArrayPrivate {
    static name: string
}
export class DataModelDirPrivate {
    static name: string
}
export class DataModelImportPrivate {
    static name: string
}
export class DataModelIterPrivate {
    static name: string
}
export class DataPivotPrivate {
    static name: string
}
export class DataProxyPrivate {
    static name: string
}
export class DataSelectPrivate {
    static name: string
}
export class Diff {
    /* Fields of Gda.Diff */
    type:DiffType
    old_row:number
    new_row:number
    values:GLib.HashTable
    static name: string
}
export class DsnInfo {
    /* Fields of Gda.DsnInfo */
    name:string
    provider:string
    description:string
    cnc_string:string
    auth_string:string
    is_system:boolean
    /* Methods of Gda.DsnInfo */
    copy(): DsnInfo
    free(): void
    static name: string
    static new(): DsnInfo
    constructor()
    static new(): DsnInfo
}
export class GeometricPoint {
    /* Fields of Gda.GeometricPoint */
    x:number
    y:number
    static name: string
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class HandlerBinPriv {
    static name: string
}
export class HandlerBooleanPriv {
    static name: string
}
export class HandlerNumericalPriv {
    static name: string
}
export class HandlerStringPriv {
    static name: string
}
export class HandlerTimePriv {
    static name: string
}
export class HandlerTypePriv {
    static name: string
}
export class HolderPrivate {
    static name: string
}
export class MetaContext {
    /* Fields of Gda.MetaContext */
    table_name:string
    size:number
    column_names:string[]
    column_values:any
    columns:GLib.HashTable
    /* Methods of Gda.MetaContext */
    copy(): MetaContext
    free(): void
    getTable(): string
    setColumn(column: string, value: any, cnc?: Connection | null): void
    setColumns(columns: GLib.HashTable, cnc?: Connection | null): void
    setTable(table: string): void
    static name: string
    static new(): MetaContext
    constructor()
    static new(): MetaContext
}
export class MetaDbObject {
    /* Fields of Gda.MetaDbObject */
    obj_type:MetaDbObjectType
    outdated:boolean
    obj_catalog:string
    obj_schema:string
    obj_name:string
    obj_short_name:string
    obj_full_name:string
    obj_owner:string
    depend_list:MetaDbObject[]
    static name: string
}
export class MetaStoreChange {
    /* Fields of Gda.MetaStoreChange */
    c_type:MetaStoreChangeType
    table_name:string
    keys:GLib.HashTable
    static name: string
}
export class MetaStoreClassPrivate {
    static name: string
}
export class MetaStorePrivate {
    static name: string
}
export class MetaStructPrivate {
    static name: string
}
export class MetaTable {
    /* Fields of Gda.MetaTable */
    columns:MetaTableColumn[]
    pk_cols_array:number
    pk_cols_nb:number
    reverse_fk_list:MetaTableForeignKey[]
    fk_list:MetaTableForeignKey[]
    static name: string
}
export class MetaTableColumn {
    /* Fields of Gda.MetaTableColumn */
    column_name:string
    column_type:string
    gtype:GObject.Type
    pkey:boolean
    nullok:boolean
    default_value:string
    /* Methods of Gda.MetaTableColumn */
    foreachAttribute(func: AttributesManagerFunc): void
    getAttribute(attribute: string): any
    setAttribute(attribute: string, value?: any, destroy?: GLib.DestroyNotify | null): void
    static name: string
}
export class MetaTableForeignKey {
    /* Fields of Gda.MetaTableForeignKey */
    meta_table:MetaDbObject
    depend_on:MetaDbObject
    cols_nb:number
    fk_cols_array:number
    fk_names_array:string
    ref_pk_cols_array:number
    ref_pk_names_array:string
    fk_name:string
    static name: string
}
export class MetaView {
    /* Fields of Gda.MetaView */
    table:MetaTable
    view_def:string
    is_updatable:boolean
    static name: string
}
export class Numeric {
    /* Fields of Gda.Numeric */
    number:string
    precision:number
    width:number
    /* Methods of Gda.Numeric */
    copy(): Numeric
    free(): void
    getDouble(): number
    getPrecision(): number
    getString(): string | null
    getWidth(): number
    setDouble(number: number): void
    setFromString(str: string): void
    setPrecision(precision: number): void
    setWidth(width: number): void
    static name: string
    static new(): Numeric
    constructor()
    static new(): Numeric
}
export class PStmtPrivate {
    static name: string
}
export class ProviderInfo {
    /* Fields of Gda.ProviderInfo */
    id:string
    location:string
    description:string
    dsn_params:Set
    auth_params:Set
    static name: string
}
export class QuarkList {
    /* Methods of Gda.QuarkList */
    addFromString(string: string, cleanup: boolean): void
    clear(): void
    copy(): QuarkList
    find(name: string): string
    foreach(func: GLib.HFunc): void
    free(): void
    protectValues(): void
    remove(name: string): void
    static name: string
    static new(): QuarkList
    constructor()
    static new(): QuarkList
    static newFromString(string: string): QuarkList
}
export class RowPrivate {
    static name: string
}
export class ServerOperationNode {
    /* Fields of Gda.ServerOperationNode */
    type:ServerOperationNodeType
    status:ServerOperationNodeStatus
    plist:Set
    model:DataModel
    column:Column
    param:Holder
    priv:object
    static name: string
}
export class ServerOperationPrivate {
    static name: string
}
export class ServerProviderHandlerInfo {
    /* Fields of Gda.ServerProviderHandlerInfo */
    cnc:Connection
    g_type:GObject.Type
    dbms_type:string
    static name: string
}
export class ServerProviderInfo {
    static name: string
}
export class ServerProviderMeta {
    /* Fields of Gda.ServerProviderMeta */
    udt:any
    udt_cols:any
    enums:any
    domains:any
    constraints_dom:any
    el_types:any
    collations:any
    character_sets:any
    schemata:any
    tables_views:any
    columns:any
    view_cols:any
    constraints_tab:any
    constraints_ref:any
    key_columns:any
    check_columns:any
    triggers:any
    routines:any
    routine_col:any
    routine_par:any
    indexes_tab:any
    index_cols:any
    static name: string
}
export class ServerProviderPrivate {
    /* Fields of Gda.ServerProviderPrivate */
    data_handlers:GLib.HashTable
    parser:SqlParser
    static name: string
}
export class ServerProviderXa {
    /* Fields of Gda.ServerProviderXa */
    xa_start:any
    xa_end:any
    xa_prepare:any
    xa_commit:any
    xa_rollback:any
    static name: string
}
export class SetGroup {
    /* Fields of Gda.SetGroup */
    nodes:SetNode[]
    nodes_source:SetSource
    /* Methods of Gda.SetGroup */
    addNode(node: SetNode): void
    copy(): SetGroup
    free(): void
    getNNodes(): number
    getNode(): SetNode
    getNodes(): SetNode[]
    getSource(): SetSource
    setSource(source: SetSource): void
    static name: string
    static new(node: SetNode): SetGroup
    constructor(node: SetNode)
    static new(node: SetNode): SetGroup
}
export class SetNode {
    /* Fields of Gda.SetNode */
    holder:Holder
    source_model:DataModel
    source_column:number
    /* Methods of Gda.SetNode */
    copy(): SetNode
    free(): void
    getDataModel(): DataModel
    getHolder(): Holder
    getSourceColumn(): number
    setDataModel(model?: DataModel | null): void
    setHolder(holder: Holder): void
    setSourceColumn(column: number): void
    static name: string
    static new(holder: Holder): SetNode
    constructor(holder: Holder)
    static new(holder: Holder): SetNode
}
export class SetPrivate {
    static name: string
}
export class SetSource {
    /* Fields of Gda.SetSource */
    data_model:DataModel
    nodes:SetNode[]
    /* Methods of Gda.SetSource */
    addNode(node: SetNode): void
    copy(): SetSource
    free(): void
    getDataModel(): DataModel
    getNNodes(): number
    getNodes(): SetNode[]
    setDataModel(model: DataModel): void
    static name: string
    static new(model: DataModel): SetSource
    constructor(model: DataModel)
    static new(model: DataModel): SetSource
}
export class SqlAnyPart {
    /* Fields of Gda.SqlAnyPart */
    type:any
    parent:any
    /* Methods of Gda.SqlAnyPart */
    checkStructure(): boolean
    static name: string
}
export class SqlBuilderPrivate {
    static name: string
}
export class SqlCase {
    /* Fields of Gda.SqlCase */
    any:any
    base_expr:any
    when_expr_list:object[]
    then_expr_list:object[]
    else_expr:any
    /* Methods of Gda.SqlCase */
    free(): void
    serialize(): string
    static name: string
}
export class SqlExpr {
    /* Fields of Gda.SqlExpr */
    any:any
    value:any
    param_spec:any
    func:any
    cond:any
    select:any
    case_s:any
    cast_as:string
    value_is_ident:boolean
    /* Methods of Gda.SqlExpr */
    free(): void
    serialize(): string
    takeSelect(stmt: SqlStatement): void
    static name: string
}
export class SqlField {
    /* Fields of Gda.SqlField */
    any:any
    field_name:string
    validity_meta_table_column:MetaTableColumn
    /* Methods of Gda.SqlField */
    free(): void
    serialize(): string
    takeName(value: any): void
    static name: string
}
export class SqlFunction {
    /* Fields of Gda.SqlFunction */
    any:any
    function_name:string
    args_list:object[]
    /* Methods of Gda.SqlFunction */
    checkClean(): void
    free(): void
    serialize(): string
    takeArgsList(args: object[]): void
    takeName(value: any): void
    static name: string
}
export class SqlOperation {
    /* Fields of Gda.SqlOperation */
    any:any
    operator_type:SqlOperatorType
    operands:object[]
    /* Methods of Gda.SqlOperation */
    free(): void
    serialize(): string
    static name: string
    static operatorFromString(op: string): SqlOperatorType
    static operatorToString(op: SqlOperatorType): string
}
export class SqlParserIface {
    /* Fields of Gda.SqlParserIface */
    parser:SqlParser
    parsed_statement:SqlStatement
    static name: string
}
export class SqlParserPrivate {
    static name: string
}
export class SqlRenderingContext {
    /* Fields of Gda.SqlRenderingContext */
    flags:StatementSqlFlag
    params:Set
    params_used:Holder[]
    provider:ServerProvider
    cnc:Connection
    render_value:SqlRenderingValue
    static name: string
}
export class SqlSelectField {
    /* Fields of Gda.SqlSelectField */
    any:any
    expr:any
    field_name:string
    table_name:string
    as:string
    validity_meta_object:MetaDbObject
    validity_meta_table_column:MetaTableColumn
    /* Methods of Gda.SqlSelectField */
    free(): void
    serialize(): string
    takeAlias(alias: any): void
    takeStarValue(value: any): void
    static name: string
}
export class SqlSelectFrom {
    /* Fields of Gda.SqlSelectFrom */
    any:any
    targets:any[]
    joins:any[]
    /* Methods of Gda.SqlSelectFrom */
    free(): void
    serialize(): string
    static name: string
}
export class SqlSelectJoin {
    /* Fields of Gda.SqlSelectJoin */
    any:any
    type:SqlSelectJoinType
    position:number
    expr:any
    use:object[]
    /* Methods of Gda.SqlSelectJoin */
    free(): void
    serialize(): string
    static name: string
    static typeToString(type: SqlSelectJoinType): string
}
export class SqlSelectOrder {
    /* Fields of Gda.SqlSelectOrder */
    any:any
    expr:any
    asc:boolean
    collation_name:string
    /* Methods of Gda.SqlSelectOrder */
    free(): void
    serialize(): string
    static name: string
}
export class SqlSelectTarget {
    /* Fields of Gda.SqlSelectTarget */
    any:any
    expr:any
    table_name:string
    as:string
    validity_meta_object:MetaDbObject
    /* Methods of Gda.SqlSelectTarget */
    free(): void
    serialize(): string
    takeAlias(alias: any): void
    takeSelect(stmt: SqlStatement): void
    takeTableName(value: any): void
    static name: string
}
export class SqlStatement {
    /* Methods of Gda.SqlStatement */
    compoundSetType(type: SqlStatementCompoundType): void
    compoundTakeStmt(s: SqlStatement): void
    static name: string
}
export class SqlStatementCheckValidityData {
    /* Fields of Gda.SqlStatementCheckValidityData */
    cnc:Connection
    store:MetaStore
    mstruct:MetaStruct
    static name: string
}
export class SqlStatementCompound {
    /* Fields of Gda.SqlStatementCompound */
    any:any
    compound_type:SqlStatementCompoundType
    stmt_list:object[]
    static name: string
}
export class SqlStatementContentsInfo {
    /* Fields of Gda.SqlStatementContentsInfo */
    type:SqlStatementType
    name:string
    construct:any
    free:any
    copy:any
    serialize:any
    check_structure_func:any
    check_validity_func:any
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
    any:any
    table_name:string
    validity_meta_object:MetaDbObject
    /* Methods of Gda.SqlTable */
    free(): void
    serialize(): string
    takeName(value: any): void
    static name: string
}
export class StatementPrivate {
    static name: string
}
export class ThreadNotification {
    /* Fields of Gda.ThreadNotification */
    type:ThreadNotificationType
    job_id:number
    static name: string
}
export class ThreadWrapperPrivate {
    static name: string
}
export class Time {
    /* Fields of Gda.Time */
    hour:number
    minute:number
    second:number
    fraction:number
    timezone:number
    /* Methods of Gda.Time */
    changeTimezone(ntz: number): void
    valid(): boolean
    static name: string
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class Timestamp {
    /* Fields of Gda.Timestamp */
    year:number
    month:number
    day:number
    hour:number
    minute:number
    second:number
    fraction:number
    timezone:number
    /* Methods of Gda.Timestamp */
    changeTimezone(ntz: number): void
    valid(): boolean
    static name: string
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
export class TransactionStatusEvent {
    /* Fields of Gda.TransactionStatusEvent */
    trans:TransactionStatus
    type:TransactionStatusEventType
    conn_event:ConnectionEvent
    static name: string
}
export class TreeManagerPrivate {
    static name: string
}
export class TreeMgrColumnsPriv {
    static name: string
}
export class TreeMgrLabelPriv {
    static name: string
}
export class TreeMgrSchemasPriv {
    static name: string
}
export class TreeMgrSelectPriv {
    static name: string
}
export class TreeMgrTablesPriv {
    static name: string
}
export class TreeNodePrivate {
    static name: string
}
export class TreePrivate {
    static name: string
}
export class XaTransactionId {
    /* Fields of Gda.XaTransactionId */
    format:number
    gtrid_length:number
    bqual_length:number
    data:number[]
    /* Methods of Gda.XaTransactionId */
    static name: string
}
export class XaTransactionPrivate {
    static name: string
}
type Mutex = GLib.RecMutex
type SqlBuilderId = number
type SqlErrorType = SqlError
}