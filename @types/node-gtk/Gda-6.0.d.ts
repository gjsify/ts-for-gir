/**
 * Gda-6.0
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Gda {

enum BatchError {
    BATCH_CONFLICTING_PARAMETER_ERROR,
}
enum ConfigError {
    DSN_NOT_FOUND_ERROR,
    PERMISSION_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_CREATION_ERROR,
}
enum ConnectionError {
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
enum ConnectionEventCode {
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
enum ConnectionEventType {
    NOTICE,
    WARNING,
    ERROR,
    COMMAND,
}
enum ConnectionFeature {
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
enum ConnectionMetaType {
    NAMESPACES,
    TYPES,
    TABLES,
    VIEWS,
    FIELDS,
    INDEXES,
}
enum ConnectionStatus {
    CLOSED,
    OPENING,
    IDLE,
    BUSY,
}
enum DataComparatorError {
    MISSING_DATA_MODEL_ERROR,
    COLUMN_TYPES_MISMATCH_ERROR,
    MODEL_ACCESS_ERROR,
    USER_CANCELLED_ERROR,
}
enum DataModelError {
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
enum DataModelHint {
    START_BATCH_UPDATE,
    END_BATCH_UPDATE,
    REFRESH,
}
enum DataModelIOFormat {
    DATA_ARRAY_XML,
    TEXT_SEPARATED,
    TEXT_TABLE,
}
enum DataModelIterError {
    DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR,
}
enum DataPivotAggregate {
    AVG,
    COUNT,
    MAX,
    MIN,
    SUM,
}
enum DataPivotError {
    INTERNAL_ERROR,
    SOURCE_MODEL_ERROR,
    FIELD_FORMAT_ERROR,
    USAGE_ERROR,
    OVERFLOW_ERROR,
}
enum DataPivotFieldType {
    ROW,
    COLUMN,
}
enum DataProxyError {
    COMMIT_ERROR,
    COMMIT_CANCELLED,
    READ_ONLY_VALUE,
    READ_ONLY_ROW,
    FILTER_ERROR,
}
enum DataSelectConditionType {
    PK,
    ALL_COLUMNS,
}
enum DataSelectError {
    MODIFICATION_STATEMENT_ERROR,
    MISSING_MODIFICATION_STATEMENT_ERROR,
    CONNECTION_ERROR,
    ACCESS_ERROR,
    SQL_ERROR,
    SAFETY_LOCKED_ERROR,
}
enum DbCatalogError {
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
enum DbColumnError {
    TYPE,
    WRONG_OPERATION,
}
enum DbFkeyReferenceAction {
    NO_ACTION,
    SET_NULL,
    RESTRICT,
    SET_DEFAULT,
    CASCADE,
}
enum DbIndexError {
    CONNECTION_NOT_OPENED,
    SERVER_OPERATION,
}
enum DbIndexSortOrder {
    ASC,
    DESC,
}
enum DbTableError {
    COLUMN_EMPTY,
    CONNECTION_NOT_OPENED,
    SERVER_OPERATION,
}
enum DbViewRefAction {
    RESTRICT,
    CASCADE,
}
enum DdlModifiableError {
    NOT_IMPLEMENTED,
    CONNECTION_NOT_OPENED,
    MISSED_DATA,
}
enum DiffType {
    ADD_ROW,
    REMOVE_ROW,
    MODIFY_ROW,
}
enum HolderError {
    STRING_CONVERSION_ERROR,
    VALUE_TYPE_ERROR,
    VALUE_NULL_ERROR,
    VALUE_CHANGE_ERROR,
}
enum MetaDbObjectType {
    UNKNOWN,
    TABLE,
    VIEW,
}
enum MetaForeignKeyPolicy {
    UNKNOWN,
    NONE,
    NO_ACTION,
    RESTRICT,
    CASCADE,
    SET_NULL,
    SET_DEFAULT,
}
enum MetaSortType {
    ALHAPETICAL,
    DEPENDENCIES,
}
enum MetaStoreChangeType {
    ADD,
    REMOVE,
    MODIFY,
}
enum MetaStoreError {
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
enum MetaStructError {
    UNKNOWN_OBJECT_ERROR,
    DUPLICATE_OBJECT_ERROR,
    INCOHERENCE_ERROR,
    XML_ERROR,
}
enum ProviderMetaError {
    NO_CONNECTION_ERROR,
    QUERY_ERROR,
}
enum ServerOperationError {
    OBJECT_NAME_ERROR,
    INCORRECT_VALUE_ERROR,
    XML_ERROR,
}
enum ServerOperationNodeStatus {
    OPTIONAL,
    REQUIRED,
    UNKNOWN,
}
enum ServerOperationNodeType {
    PARAMLIST,
    DATA_MODEL,
    PARAM,
    SEQUENCE,
    SEQUENCE_ITEM,
    DATA_MODEL_COLUMN,
    UNKNOWN,
}
enum ServerOperationType {
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
enum ServerProviderError {
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
enum ServerProviderFunctionsType {
    BASE,
    META,
    XA,
    MAX,
}
enum ServerProviderMetaType {
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
enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
enum SqlAnyPartType {
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
enum SqlBuilderError {
    WRONG_TYPE_ERROR,
    MISUSE_ERROR,
}
enum SqlError {
    STRUCTURE_CONTENTS_ERROR,
    MALFORMED_IDENTIFIER_ERROR,
    MISSING_IDENTIFIER_ERROR,
    VALIDATION_ERROR,
}
enum SqlOperatorType {
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
enum SqlParserError {
    SYNTAX_ERROR,
    OVERFLOW_ERROR,
    EMPTY_SQL_ERROR,
}
enum SqlParserFlavour {
    STANDARD,
    SQLITE,
    MYSQL,
    ORACLE,
    POSTGRESQL,
}
enum SqlParserMode {
    PARSE,
    DELIMIT,
}
enum SqlSelectJoinType {
    CROSS,
    NATURAL,
    INNER,
    LEFT,
    RIGHT,
    FULL,
}
enum SqlStatementCompoundType {
    UNION,
    UNION_ALL,
    INTERSECT,
    INTERSECT_ALL,
    EXCEPT,
    EXCEPT_ALL,
}
enum SqlStatementType {
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
enum StatementError {
    PARSE_ERROR,
    SYNTAX_ERROR,
    NO_CNC_ERROR,
    CNC_CLOSED_ERROR,
    EXEC_ERROR,
    PARAM_TYPE_ERROR,
    PARAM_ERROR,
}
enum TransactionIsolation {
    SERVER_DEFAULT,
    READ_COMMITTED,
    READ_UNCOMMITTED,
    REPEATABLE_READ,
    SERIALIZABLE,
}
enum TransactionStatusEventType {
    SAVEPOINT,
    SQL,
    SUB_TRANSACTION,
}
enum TransactionStatusState {
    OK,
    FAILED,
}
enum TreeError {
    TREE_UNKNOWN_ERROR,
}
enum TreeManagerError {
    TREE_MANAGER_UNKNOWN_ERROR,
}
enum TreeNodeError {
    TREE_NODE_UNKNOWN_ERROR,
}
enum WorkerError {
    INTER_THREAD_ERROR,
    JOB_NOT_FOUND_ERROR,
    JOB_QUEUED_ERROR,
    JOB_BEING_PROCESSED_ERROR,
    JOB_PROCESSED_ERROR,
    JOB_CANCELLED_ERROR,
    THREAD_KILLED,
}
enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
enum XaType {
    START,
    END,
    PREPARE,
    COMMIT,
    ROLLBACK,
    RECOVER,
}
enum ConnectionOptions {
    NONE,
    READ_ONLY,
    SQL_IDENTIFIERS_CASE_SENSITIVE,
    AUTO_META_DATA,
}
enum DataModelAccessFlags {
    RANDOM,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    INSERT,
    UPDATE,
    DELETE,
    WRITE,
}
enum MetaGraphInfo {
    META_GRAPH_COLUMNS,
}
enum MetaStructFeature {
    NONE,
    FOREIGN_KEYS,
    VIEW_DEPENDENCIES,
    ALL,
}
enum ServerOperationCreateTableFlag {
    NOTHING_FLAG,
    PKEY_FLAG,
    NOT_NULL_FLAG,
    UNIQUE_FLAG,
    AUTOINC_FLAG,
    FKEY_FLAG,
    PKEY_AUTOINC_FLAG,
}
enum SqlIdentifierStyle {
    LOWER_CASE,
    UPPER_CASE,
}
enum StatementModelUsage {
    RANDOM_ACCESS,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    ALLOW_NOPARAM,
    OFFLINE,
}
enum StatementSqlFlag {
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
enum ValueAttribute {
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
function alphanumToText(text: string): string | null
function completionListGet(cnc: Connection, sql: string, start: number, end: number): string[] | null
function computeDmlStatements(cnc: Connection, selectStmt: Statement, requirePk: boolean): { returnType: boolean, insertStmt: Statement | null, updateStmt: Statement | null, deleteStmt: Statement | null }
function computeSelectStatementFromUpdate(updateStmt: Statement): SqlStatement | null
function computeUniqueTableRowCondition(stsel: SqlStatementSelect, mtable: MetaTable, requirePk: boolean): SqlExpr | null
function computeUniqueTableRowConditionWithCnc(cnc: Connection | null, stsel: SqlStatementSelect, mtable: MetaTable, requirePk: boolean): SqlExpr | null
function dataHandlerGetDefault(forType: GObject.Type): DataHandler
function dataModelErrorQuark(): GLib.Quark
function dateTimeCopy(ts: GLib.DateTime): GLib.DateTime
function ddlModifiableErrorQuark(): GLib.Quark
function defaultEscapeString(string: string): string | null
function defaultUnescapeString(string: string): string | null
function dsnSplit(string: string, outDsn: string, outUsername: string, outPassword: string): void
function gTypeFromString(str: string): GObject.Type
function gTypeToString(type: GObject.Type): string
function identifierEqual(id1: string, id2: string): boolean
function identifierHash(id: string): number
function logDisable(): void
function logEnable(): void
function logIsEnabled(): boolean
function parseFormattedDate(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
function parseFormattedTime(value: string, sep: number): Time
function parseFormattedTimestamp(value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): GLib.DateTime | null
function parseIso8601Date(gdate: GLib.Date, value: string): boolean
function parseIso8601Time(value: string): Time
function providerMetaErrorQuark(): GLib.Quark
function rewriteSqlStatementForNullParameters(sqlst: SqlStatement, params: Set): { returnType: SqlStatement | null, outModified: boolean | null }
function rewriteStatementForNullParameters(stmt: Statement, params: Set): { returnType: boolean, outStmt: Statement | null }
function rfc1738Decode(string: string): boolean
function rfc1738Encode(string: string): string | null
function selectAlterSelectForEmpty(stmt: Statement): Statement
function serverOperationCreateTableArgGetFkeyRefFieldGetType(): GObject.Type
function sqlErrorQuark(): GLib.Quark
function sqlIdentifierForceQuotes(str: string): string
function sqlIdentifierPrepareForCompare(str: string): string
function sqlIdentifierQuote(id: string, cnc: Connection | null, prov: ServerProvider | null, metaStoreConvention: boolean, forceQuotes: boolean): string | null
function sqlIdentifierSplit(id: string): string[] | null
function sqlOperationOperatorFromString(op: string): SqlOperatorType
function sqlOperationOperatorToString(op: SqlOperatorType): string
function sqlSelectJoinTypeToString(type: SqlSelectJoinType): string
function sqlStatementGetContentsInfos(type: SqlStatementType): SqlStatementContentsInfo
function sqlStatementStringToType(type: string): SqlStatementType
function sqlStatementTypeToString(type: SqlStatementType): string
function sqlValueStringify(value: any): string
function stringToBinary(str?: string | null): Binary
function stringToBlob(str: string): Blob
function textToAlphanum(text: string): string
function utilityCheckDataModel(model: DataModel, types: GObject.Type[]): boolean
function utilityDataModelDumpDataToXml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, useColIds: boolean): boolean
function utilityDataModelFindColumnDescription(model: DataSelect, fieldName: string): string | null
function utilityHolderLoadAttributes(holder: Holder, node: libxml2.NodePtr, sources?: DataModel[] | null): boolean
function valueCompare(value1: any, value2: any): number
function valueCopy(value: any): any
function valueDiffer(value1: any, value2: any): number
function valueFree(value?: any | null): void
function valueGetBinary(value: any): Binary
function valueGetBlob(value: any): Blob
function valueGetGeometricPoint(value: any): GeometricPoint
function valueGetMetaStoreChange(value: any): MetaStoreChange
function valueGetNumeric(value: any): Numeric
function valueGetShort(value: any): number
function valueGetTime(value: any): Time
function valueGetUshort(value: any): number
function valueIsNull(value: any): boolean
function valueIsNumber(value: any): boolean
function valueNew(type: GObject.Type): any
function valueNewBinary(val: number, size: number): any
function valueNewBlob(val: number, size: number): any
function valueNewBlobFromFile(filename: string): any
function valueNewDateTimeFromTimet(val: number): any
function valueNewDefault(defaultVal?: string | null): any
function valueNewFromString(asString: string, type: GObject.Type): any
function valueNewFromXml(node: libxml2.NodePtr): any
function valueNewNull(): any
function valueNewTimeFromTimet(val: number): any
function valueResetWithType(value: any, type: GObject.Type): void
function valueSetBinary(value: any, binary: Binary): void
function valueSetBlob(value: any, blob: Blob): void
function valueSetFromString(value: any, asString: string, type: GObject.Type): boolean
function valueSetFromValue(value: any, from: any): boolean
function valueSetGeometricPoint(value: any, val: GeometricPoint): void
function valueSetMetaStoreChange(value: any, change: MetaStoreChange): void
function valueSetNull(value: any): void
function valueSetNumeric(value: any, val: Numeric): void
function valueSetShort(value: any, val: number): void
function valueSetTime(value: any, val: Time): void
function valueSetUshort(value: any, val: number): void
function valueStringify(value: any): string
function valueTakeBinary(value: any, binary: Binary): void
function valueTakeBlob(value: any, blob: Blob): void
function valueToXmlString(value: any): string
function workerErrorQuark(): GLib.Quark
function workerNewUnique(location: Worker, allowDestroy: boolean): Worker
interface ConnectionOpenFunc {
    (cnc: Connection, jobId: number, result: boolean, error: GLib.Error, data?: object | null): void
}
interface SqlForeachFunc {
    (part: SqlAnyPart, data?: object | null): boolean
}
interface SqlReservedKeywordsFunc {
    (word: string): boolean
}
interface TreeManagerNodeFunc {
    (manager: TreeManager, parent?: TreeNode | null, name?: string | null): TreeNode
}
interface TreeManagerNodesFunc {
    (manager: TreeManager, node: TreeNode | null, childrenNodes: TreeNode[]): TreeNode[]
}
interface WorkerCallback {
    (worker: Worker, jobId: number, resultData: object | null, error: GLib.Error): void
}
interface WorkerFunc {
    (): object | null
}
class DataHandler {
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(forType: GObject.Type): DataHandler
}
class DataModel {
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModel) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModel) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModel) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModel, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModel, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModel, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DbBuildable {
    /* Methods of Gda-6.0.Gda.DbBuildable */
    parseNode(node: libxml2.NodePtr): boolean
    writeNode(node: libxml2.NodePtr): boolean
    static name: string
}
class DdlModifiable {
    /* Methods of Gda-6.0.Gda.DdlModifiable */
    create(cnc: Connection, userData?: object | null): boolean
    drop(cnc: Connection, userData?: object | null): boolean
    rename(cnc: Connection, userData?: object | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Lockable {
    /* Methods of Gda-6.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    static name: string
}
class Provider {
    /* Methods of Gda-6.0.Gda.Provider */
    addSavepoint(cnc: Connection, name: string): boolean
    beginTransaction(cnc: Connection, name: string, level: TransactionIsolation): boolean
    closeConnection(cnc: Connection): boolean
    commitTransaction(cnc: Connection, name: string): boolean
    createConnection(): Connection
    createOperation(cnc: Connection, type: ServerOperationType, options: Set): ServerOperation
    createParser(cnc: Connection): SqlParser
    deleteSavepoint(cnc: Connection, name: string): boolean
    escapeString(cnc: Connection, str: string): string
    getDataHandler(cnc: Connection, gType: GObject.Type, dbmsType: string): DataHandler
    getDefDbmsType(cnc: Connection, gType: GObject.Type): string
    getLastInserted(cnc: Connection): Set
    getName(): string
    getServerVersion(cnc: Connection): string
    getVersion(): string
    identifierQuote(cnc: Connection | null, id: string, forMetaStore: boolean, forceQuotes: boolean): string
    openConnection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    performOperation(cnc: Connection, op: ServerOperation): boolean
    prepareConnection(cnc: Connection, params: QuarkList, auth: QuarkList): boolean
    renderOperation(cnc: Connection, op: ServerOperation): string
    rollbackSavepoint(cnc: Connection, name: string): boolean
    rollbackTransaction(cnc: Connection, name: string): boolean
    statementExecute(cnc: Connection, stmt: Statement, params: Set, modelUsage: StatementModelUsage, colTypes: GObject.Type, lastInsertedRow: Set): GObject.Object
    statementPrepare(cnc: Connection, stmt: Statement): boolean
    statementRewrite(cnc: Connection, stmt: Statement, params: Set): SqlStatement
    statementToSql(cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag): { returnType: string, paramsUsed: Holder[] | null }
    supportsFeature(cnc: Connection, feature: ConnectionFeature): boolean
    supportsOperation(cnc: Connection, type: ServerOperationType, options: Set): boolean
    unescapeString(cnc: Connection, str: string): string
    static name: string
}
class ProviderMeta {
    /* Methods of Gda-6.0.Gda.ProviderMeta */
    btypes(): DataModel
    characterSet(chsetCatalog: string, chsetSchema: string, chsetNameN: string): Row
    characterSets(): DataModel
    checkColumn(tableCatalog: string, tableSchema: string, tableName: string, constraintName: string): Row
    checkColumns(): DataModel
    collation(collationCatalog: string, collationSchema: string, collationNameN: string): Row
    collations(): DataModel
    columns(): DataModel
    constraintRef(tableCatalog: string, tableSchema: string, tableName: string, constraintName: string): Row
    constraintTable(tableCatalog: string, tableSchema: string, tableName: string, constraintNameN: string): Row
    constraintsRef(): DataModel
    constraintsRefTable(tableCatalog: string, tableSchema: string, tableName: string): DataModel
    constraintsTable(tableCatalog: string, tableSchema: string, tableName: string): DataModel
    constraintsTables(): DataModel
    domain(domainCatalog: string, domainSchema: string): Row
    domainConstraint(domainCatalog: string, domainSchema: string, domainName: string, contraintName: string): Row
    domainConstraints(domainCatalog: string, domainSchema: string, domainName: string): DataModel
    domains(): DataModel
    domainsConstraints(): DataModel
    elementType(specificName: string): Row
    elementTypes(): DataModel
    enumType(udtCatalog: string, udtSchema: string, udtName: string): Row
    enumsType(): DataModel
    executeQuery(sql: string, params?: Set | null): DataModel | null
    executeQueryRow(sql: string, params: Set): Row | null
    getConnection(): Connection
    indexCol(tableCatalog: string, tableSchema: string, tableName: string, indexName: string): Row
    indexCols(): DataModel
    indexTable(tableCatalog: string, tableSchema: string, tableName: string, indexNameN: string): Row
    indexesTable(tableCatalog: string, tableSchema: string, tableName: string): DataModel
    indexesTables(): DataModel
    keyColumn(tableCatalog: string, tableSchema: string, tableName: string, constraintName: string): Row
    keyColumns(): DataModel
    routine(routineCatalog: string, routineSchema: string, routineNameN: string): Row
    routineCol(routCatalog: string, routSchema: string, routName: string): Row
    routinePars(routCatalog: string, routSchema: string, routName: string): Row
    routines(): DataModel
    routinesCol(): DataModel
    routinesPars(): DataModel
    schemata(catalogName: string, schemaNameN: string): Row
    schematas(): DataModel
    table(tableCatalog: string, tableSchema: string, tableNameN: string): Row
    tableColumn(tableCatalog: string, tableSchema: string, tableName: string, columnName: string): Row
    tableColumns(tableCatalog: string, tableSchema: string, tableName: string): DataModel
    tables(): DataModel
    tablesColumns(): DataModel
    trigger(tableCatalog: string, tableSchema: string, tableName: string): Row
    triggers(): DataModel
    udt(udtCatalog: string, udtSchema: string): Row
    udtCol(udtCatalog: string, udtSchema: string, udtName: string): Row
    udtCols(): DataModel
    udts(): DataModel
    view(viewCatalog: string, viewSchema: string, viewNameN: string): Row
    viewColumn(viewCatalog: string, viewSchema: string, viewName: string, columnName: string): Row
    viewColumns(viewCatalog: string, viewSchema: string, viewName: string): DataModel
    views(): DataModel
    viewsColumns(): DataModel
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
export interface Batch_ConstructProps extends GObject.Object_ConstructProps {
}
class Batch {
    /* Fields of Gda-6.0.Gda.Batch */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Batch */
    addStatement(stmt: Statement): void
    copy(): Batch
    getParameters(): { returnType: boolean, outParams: Set | null }
    getStatements(): Statement[]
    removeStatement(stmt: Statement): void
    serialize(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.Batch */
    connect(sigName: "changed", callback: (($obj: Batch, changedStmt: GObject.Object) => void)): number
    on(sigName: "changed", callback: (changedStmt: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (changedStmt: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (changedStmt: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "changed", changedStmt: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Batch
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface BlobOp_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
}
class BlobOp {
    /* Fields of Gda-6.0.Gda.BlobOp */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.BlobOp */
    getLength(): number
    read(blob: Blob, offset: number, size: number): number
    readAll(blob: Blob): boolean
    write(blob: Blob, offset: number): number
    writeAll(blob: Blob): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlobOp, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class Column {
    /* Properties of Gda-6.0.Gda.Column */
    desc: string
    id: string
    name: string
    /* Fields of Gda-6.0.Gda.Column */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Column */
    copy(): Column
    getAllowNull(): boolean
    getAutoIncrement(): boolean
    getDbmsType(): string
    getDefaultValue(): any | null
    getDescription(): string
    getGType(): GObject.Type
    getName(): string
    getPosition(): number
    setAllowNull(allow: boolean): void
    setAutoIncrement(isAuto: boolean): void
    setDbmsType(dbmsType: string): void
    setDefaultValue(defaultValue?: any | null): void
    setDescription(descr: string): void
    setGType(type: GObject.Type): void
    setName(name: string): void
    setPosition(position: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.Column */
    connect(sigName: "g-type-changed", callback: (($obj: Column, oldType: GObject.Type, newType: GObject.Type) => void)): number
    on(sigName: "g-type-changed", callback: (oldType: GObject.Type, newType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-type-changed", callback: (oldType: GObject.Type, newType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-type-changed", callback: (oldType: GObject.Type, newType: GObject.Type) => void): NodeJS.EventEmitter
    emit(sigName: "g-type-changed", oldType: GObject.Type, newType: GObject.Type): void
    connect(sigName: "name-changed", callback: (($obj: Column, oldName: string) => void)): number
    on(sigName: "name-changed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (oldName: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", oldName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::desc", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Column
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
    systemFilename?: string
    userFilename?: string
}
class Config {
    /* Properties of Gda-6.0.Gda.Config */
    systemFilename: string
    userFilename: string
    /* Fields of Gda-6.0.Gda.Config */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.Config */
    connect(sigName: "dsn-added", callback: (($obj: Config, newDsn?: object | null) => void)): number
    on(sigName: "dsn-added", callback: (newDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-added", callback: (newDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-added", callback: (newDsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-added", newDsn?: object | null): void
    connect(sigName: "dsn-changed", callback: (($obj: Config, dsn?: object | null) => void)): number
    on(sigName: "dsn-changed", callback: (dsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-changed", callback: (dsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-changed", callback: (dsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-changed", dsn?: object | null): void
    connect(sigName: "dsn-removed", callback: (($obj: Config, oldDsn?: object | null) => void)): number
    on(sigName: "dsn-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-removed", callback: (oldDsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-removed", oldDsn?: object | null): void
    connect(sigName: "dsn-to-be-removed", callback: (($obj: Config, oldDsn?: object | null) => void)): number
    on(sigName: "dsn-to-be-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-to-be-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-to-be-removed", callback: (oldDsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-to-be-removed", oldDsn?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::system-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-filename", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static canModifySystemConfig(): boolean
    static defineDsn(info: DsnInfo): boolean
    static dsnNeedsAuthentication(dsnName: string): boolean
    static errorQuark(): GLib.Quark
    static get(): Config
    static getDsnInfo(dsnName: string): DsnInfo
    static getDsnInfoAtIndex(index: number): DsnInfo
    static getDsnInfoIndex(dsnName: string): number
    static getNbDsn(): number
    static getProvider(providerName: string): ServerProvider
    static getProviderInfo(providerName: string): ProviderInfo
    static listDsn(): DataModel
    static listProviders(): DataModel
    static removeDsn(dsnName: string): boolean
    static $gtype: GObject.Type
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    authString?: string
    cncString?: string
    dsn?: string
    eventsHistorySize?: number
    executionSlowdown?: number
    executionTimer?: boolean
    metaStore?: MetaStore
    provider?: ServerProvider
}
class Connection {
    /* Properties of Gda-6.0.Gda.Connection */
    authString: string
    cncString: string
    dsn: string
    eventsHistorySize: number
    executionSlowdown: number
    executionTimer: boolean
    metaStore: MetaStore
    provider: ServerProvider
    /* Fields of Gda-6.0.Gda.Connection */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Connection */
    addEvent(event: ConnectionEvent): void
    addPreparedStatement(gdaStmt: Statement, preparedStmt: PStmt): void
    addSavepoint(name?: string | null): boolean
    batchExecute(batch: Batch, params: Set | null, modelUsage: StatementModelUsage): GObject.Object[]
    beginTransaction(name: string | null, level: TransactionIsolation): boolean
    clearEventsList(): void
    close(): boolean
    commitTransaction(name?: string | null): boolean
    createDbCatalog(): DbCatalog
    createOperation(type: ServerOperationType, options?: Set | null): ServerOperation
    createParser(): SqlParser
    delPreparedStatement(gdaStmt: Statement): void
    deleteRowFromTable(table: string, conditionColumnName: string, conditionValue: any): boolean
    deleteSavepoint(name?: string | null): boolean
    executeNonSelectCommand(sql: string): number
    executeSelectCommand(sql: string): DataModel
    getAuthentication(): string
    getCncString(): string
    getDateFormat(): { returnType: boolean, outFirst: GLib.DateDMY | null, outSecond: GLib.DateDMY | null, outThird: GLib.DateDMY | null, outSep: string | null }
    getDsn(): string
    getEvents(): ConnectionEvent[]
    getMainContext(thread?: GLib.Thread | null): GLib.MainContext
    getMetaStore(): MetaStore
    getMetaStoreData(metaType: ConnectionMetaType, filters: Holder[]): DataModel
    getOptions(): ConnectionOptions
    getPreparedStatement(gdaStmt: Statement): PStmt
    getProvider(): ServerProvider
    getProviderName(): string
    getStatus(): ConnectionStatus
    getTransactionStatus(): TransactionStatus
    insertRowIntoTableV(table: string, colNames: string[], values: any[]): boolean
    internalChangeTransactionState(newstate: TransactionStatusState): void
    internalGetProviderDataError(): ServerProviderConnectionData | null
    internalResetTransactionStatus(): void
    internalSavepointAdded(parentTrans: string | null, svpName: string): void
    internalSavepointRemoved(svpName?: string | null): void
    internalSavepointRolledback(svpName?: string | null): void
    internalSetProviderData(data: ServerProviderConnectionData, destroyFunc: GLib.DestroyNotify): void
    internalStatementExecuted(stmt: Statement, params: Set | null, error: ConnectionEvent): void
    internalTransactionCommitted(transName?: string | null): void
    internalTransactionRolledback(transName?: string | null): void
    internalTransactionStarted(parentTrans: string | null, transName: string, isolLevel: TransactionIsolation): void
    isOpened(): boolean
    open(): boolean
    openAsync(callback: ConnectionOpenFunc): number
    operationGetSqlIdentifierAtPath(op: ServerOperation, path: string): string | null
    parseSqlString(sql: string): { returnType: Statement, params: Set | null }
    performOperation(op: ServerOperation): boolean
    pointAvailableEvent(type: ConnectionEventType): ConnectionEvent
    prepareOperationCreateTable(tableName: string, arguments_: ServerOperationCreateTableArg[]): ServerOperation | null
    prepareOperationDropTable(tableName: string): ServerOperation | null
    quoteSqlIdentifier(id: string): string
    repetitiveStatementExecute(rstmt: RepetitiveStatement, modelUsage: StatementModelUsage, colTypes: GObject.Type[] | null, stopOnError: boolean): GObject.Object[]
    rollbackSavepoint(name?: string | null): boolean
    rollbackTransaction(name?: string | null): boolean
    setMainContext(thread?: GLib.Thread | null, context?: GLib.MainContext | null): void
    statementExecute(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage): { returnType: GObject.Object, lastInsertRow: Set | null }
    statementExecuteNonSelect(stmt: Statement, params?: Set | null): { returnType: number, lastInsertRow: Set | null }
    statementExecuteSelect(stmt: Statement, params?: Set | null): DataModel
    statementExecuteSelectFull(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage, colTypes?: GObject.Type[] | null): DataModel
    statementPrepare(stmt: Statement): boolean
    statementToSql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): { returnType: string, paramsUsed: Holder[] | null }
    supportsFeature(feature: ConnectionFeature): boolean
    updateMetaStore(context?: MetaContext | null): boolean
    updateRowInTableV(table: string, conditionColumnName: string, conditionValue: any, colNames: string[], values: any[]): boolean
    valueToSqlString(from: any): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of Gda-6.0.Gda.Connection */
    connect(sigName: "closed", callback: (($obj: Connection) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "dsn-changed", callback: (($obj: Connection) => void)): number
    on(sigName: "dsn-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "dsn-changed"): void
    connect(sigName: "error", callback: (($obj: Connection, event: ConnectionEvent) => void)): number
    on(sigName: "error", callback: (event: ConnectionEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (event: ConnectionEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (event: ConnectionEvent) => void): NodeJS.EventEmitter
    emit(sigName: "error", event: ConnectionEvent): void
    connect(sigName: "opened", callback: (($obj: Connection) => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    connect(sigName: "status-changed", callback: (($obj: Connection, status: ConnectionStatus) => void)): number
    on(sigName: "status-changed", callback: (status: ConnectionStatus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: (status: ConnectionStatus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: (status: ConnectionStatus) => void): NodeJS.EventEmitter
    emit(sigName: "status-changed", status: ConnectionStatus): void
    connect(sigName: "transaction-status-changed", callback: (($obj: Connection) => void)): number
    on(sigName: "transaction-status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-status-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "transaction-status-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cnc-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dsn", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dsn", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events-history-size", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events-history-size", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::execution-slowdown", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-slowdown", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::execution-timer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-timer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromDsn(dsn: DsnInfo, authString: string | null, options: ConnectionOptions): Connection
    static newFromDsnName(dsnName: string, authString: string | null, options: ConnectionOptions): Connection
    static newFromString(providerName: string | null, cncString: string, authString: string | null, options: ConnectionOptions): Connection
    static errorQuark(): GLib.Quark
    static internalGetWorker(data?: ServerProviderConnectionData | null): Worker
    static openFromDsn(dsn: DsnInfo, authString: string | null, options: ConnectionOptions): Connection
    static openFromDsnName(dsnName: string, authString: string | null, options: ConnectionOptions): Connection
    static openFromString(providerName: string | null, cncString: string, authString: string | null, options: ConnectionOptions): Connection
    static openSqlite(directory: string | null, filename: string, autoUnlink: boolean): Connection
    static stringSplit(string: string): { outCncParams: string, outProvider: string, outUsername: string, outPassword: string }
    static $gtype: GObject.Type
}
export interface ConnectionEvent_ConstructProps extends GObject.Object_ConstructProps {
    type?: number
}
class ConnectionEvent {
    /* Properties of Gda-6.0.Gda.ConnectionEvent */
    type: number
    /* Fields of Gda-6.0.Gda.ConnectionEvent */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.ConnectionEvent */
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: ConnectionEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConnectionEvent_ConstructProps)
    _init (config?: ConnectionEvent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataAccessWrapper_ConstructProps extends GObject.Object_ConstructProps {
    model?: DataModel
}
class DataAccessWrapper {
    /* Fields of Gda-6.0.Gda.DataAccessWrapper */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataAccessWrapper */
    setMapping(mapping: number[] | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataAccessWrapper, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataAccessWrapper) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataAccessWrapper) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataAccessWrapper) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataAccessWrapper, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataAccessWrapper_ConstructProps)
    _init (config?: DataAccessWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataComparator_ConstructProps extends GObject.Object_ConstructProps {
    newModel?: DataModel
    oldModel?: DataModel
}
class DataComparator {
    /* Properties of Gda-6.0.Gda.DataComparator */
    newModel: DataModel
    oldModel: DataModel
    /* Fields of Gda-6.0.Gda.DataComparator */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataComparator */
    computeDiff(): boolean
    getDiff(pos: number): Diff
    getNDiffs(): number
    setKeyColumns(colNumbers: number[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.DataComparator */
    connect(sigName: "diff-computed", callback: (($obj: DataComparator, object?: object | null) => boolean)): number
    on(sigName: "diff-computed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "diff-computed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "diff-computed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "diff-computed", object?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::new-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::old-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-model", callback: (($obj: DataComparator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataComparator_ConstructProps)
    _init (config?: DataComparator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(oldModel: DataModel, newModel: DataModel): DataComparator
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelArray_ConstructProps extends GObject.Object_ConstructProps {
    nColumns?: number
    readOnly?: boolean
}
class DataModelArray {
    /* Properties of Gda-6.0.Gda.DataModelArray */
    nColumns: number
    readOnly: boolean
    /* Fields of Gda-6.0.Gda.DataModelArray */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelArray */
    clear(): void
    getRow(row: number): Row
    setNColumns(cols: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelArray) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelArray) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelArray) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelArray, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelArray, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelArray, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::n-columns", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DataModelArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelArray_ConstructProps)
    _init (config?: DataModelArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithGTypes(cols: number, types: GObject.Type[]): DataModel
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelDir_ConstructProps extends GObject.Object_ConstructProps {
    basedir?: string
}
class DataModelDir {
    /* Fields of Gda-6.0.Gda.DataModelDir */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelDir */
    cleanErrors(): void
    getErrors(): GLib.Error[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelDir, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelDir) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelDir) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelDir) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelDir, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelDir, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelDir, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelDir_ConstructProps)
    _init (config?: DataModelDir_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelImport_ConstructProps extends GObject.Object_ConstructProps {
    dataString?: string
    filename?: string
    options?: Set
    randomAccess?: boolean
    strict?: boolean
    xmlNode?: object
}
class DataModelImport {
    /* Properties of Gda-6.0.Gda.DataModelImport */
    strict: boolean
    /* Fields of Gda-6.0.Gda.DataModelImport */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelImport */
    cleanErrors(): void
    getErrors(): GLib.Error[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelImport) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelImport) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelImport) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelImport, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelImport, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelImport, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::strict", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strict", callback: (($obj: DataModelImport, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelImport_ConstructProps)
    _init (config?: DataModelImport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFile(filename: string, randomAccess: boolean, options?: Set | null): DataModel
    static newMem(data: string, randomAccess: boolean, options?: Set | null): DataModel
    static newXmlNode(node: libxml2.NodePtr): DataModel
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelImportIter_ConstructProps extends DataModelIter_ConstructProps {
}
class DataModelImportIter {
    /* Properties of Gda-6.0.Gda.DataModelIter */
    currentRow: number
    dataModel: DataModel
    updateModel: boolean
    /* Properties of Gda-6.0.Gda.Set */
    description: string
    id: string
    name: string
    validateChanges: boolean
    /* Fields of Gda-6.0.Gda.DataModelImportIter */
    parentInstance: DataModelIter
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelIter */
    getHolderForField(col: number): Holder
    getRow(): number
    getValueAt(col: number): any | null
    getValueAtE(col: number): any | null
    getValueForField(fieldName: string): any | null
    invalidateContents(): void
    isValid(): boolean
    moveNext(): boolean
    movePrev(): boolean
    moveToRow(row: number): boolean
    setValueAt(col: number, value: any): boolean
    /* Methods of Gda-6.0.Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getGroups(): SetGroup[]
    getHolder(holderId: string): Holder
    getHolderValue(holderId: string): any | null
    getHolders(): Holder[]
    getNode(holder: Holder): SetNode
    getNodes(): SetNode[]
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    getSources(): SetSource[]
    mergeWithSet(setToMerge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.DataModelIter */
    connect(sigName: "end-of-data", callback: (($obj: DataModelImportIter) => void)): number
    on(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-data", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: (($obj: DataModelImportIter, row: number) => void)): number
    on(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda-6.0.Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: DataModelImportIter, holder: Holder, attrName: string, attrValue: any) => void)): number
    on(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", holder: Holder, attrName: string, attrValue: any): void
    connect(sigName: "holder-changed", callback: (($obj: DataModelImportIter, object: Holder) => void)): number
    on(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: (object: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: DataModelImportIter, holder: Holder) => void)): number
    on(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: (holder: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: DataModelImportIter) => void)): number
    on(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: DataModelImportIter, source?: object | null) => void)): number
    on(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: (source?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: DataModelImportIter, holder: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", holder: Holder, newValue: any): void
    connect(sigName: "validate-set", callback: (($obj: DataModelImportIter) => GLib.Error)): number
    on(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "validate-set"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validate-changes", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataModelImportIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelImportIter_ConstructProps)
    _init (config?: DataModelImportIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataModelIter_ConstructProps extends Set_ConstructProps {
    currentRow?: number
    dataModel?: DataModel
    updateModel?: boolean
}
class DataModelIter {
    /* Properties of Gda-6.0.Gda.DataModelIter */
    currentRow: number
    dataModel: DataModel
    updateModel: boolean
    /* Properties of Gda-6.0.Gda.Set */
    description: string
    id: string
    name: string
    validateChanges: boolean
    /* Fields of Gda-6.0.Gda.DataModelIter */
    parentInstance: Set
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelIter */
    getHolderForField(col: number): Holder
    getRow(): number
    getValueAt(col: number): any | null
    getValueAtE(col: number): any | null
    getValueForField(fieldName: string): any | null
    invalidateContents(): void
    isValid(): boolean
    moveNext(): boolean
    movePrev(): boolean
    moveToRow(row: number): boolean
    setValueAt(col: number, value: any): boolean
    /* Methods of Gda-6.0.Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getGroups(): SetGroup[]
    getHolder(holderId: string): Holder
    getHolderValue(holderId: string): any | null
    getHolders(): Holder[]
    getNode(holder: Holder): SetNode
    getNodes(): SetNode[]
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    getSources(): SetSource[]
    mergeWithSet(setToMerge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.DataModelIter */
    connect(sigName: "end-of-data", callback: (($obj: DataModelIter) => void)): number
    on(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-data", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: (($obj: DataModelIter, row: number) => void)): number
    on(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda-6.0.Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: DataModelIter, holder: Holder, attrName: string, attrValue: any) => void)): number
    on(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", holder: Holder, attrName: string, attrValue: any): void
    connect(sigName: "holder-changed", callback: (($obj: DataModelIter, object: Holder) => void)): number
    on(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: (object: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: DataModelIter, holder: Holder) => void)): number
    on(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: (holder: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: DataModelIter) => void)): number
    on(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: DataModelIter, source?: object | null) => void)): number
    on(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: (source?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: DataModelIter, holder: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", holder: Holder, newValue: any): void
    connect(sigName: "validate-set", callback: (($obj: DataModelIter) => GLib.Error)): number
    on(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "validate-set"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validate-changes", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataModelIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelIter_ConstructProps)
    _init (config?: DataModelIter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataModelSelect_ConstructProps extends GObject.Object_ConstructProps {
}
class DataModelSelect {
    /* Properties of Gda-6.0.Gda.DataModelSelect */
    readonly valid: boolean
    /* Fields of Gda-6.0.Gda.DataModelSelect */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelSelect */
    getParameters(): Set
    isValid(): boolean
    setParameters(params: Set): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of Gda-6.0.Gda.DataModelSelect */
    connect(sigName: "updated", callback: (($obj: DataModelSelect) => void)): number
    on(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "updated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataModelSelect) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataModelSelect) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataModelSelect) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataModelSelect, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataModelSelect, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataModelSelect, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::valid", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: DataModelSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelSelect_ConstructProps)
    _init (config?: DataModelSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, stm: Statement, params?: Set | null): DataModelSelect
    static newFromString(cnc: Connection, sql: string): DataModelSelect
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataPivot_ConstructProps extends GObject.Object_ConstructProps {
    model?: DataModel
}
class DataPivot {
    /* Properties of Gda-6.0.Gda.DataPivot */
    model: DataModel
    /* Fields of Gda-6.0.Gda.DataPivot */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataPivot */
    addData(aggregateType: DataPivotAggregate, field: string, alias?: string | null): boolean
    addField(fieldType: DataPivotFieldType, field: string, alias?: string | null): boolean
    populate(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataPivot) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataPivot) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataPivot) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataPivot, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataPivot, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataPivot, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataPivot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataPivot_ConstructProps)
    _init (config?: DataPivot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataProxy_ConstructProps extends GObject.Object_ConstructProps {
    cacheChanges?: boolean
    deferSync?: boolean
    model?: DataModel
    prependNullEntry?: boolean
    sampleSize?: number
}
class DataProxy {
    /* Properties of Gda-6.0.Gda.DataProxy */
    cacheChanges: boolean
    deferSync: boolean
    model: DataModel
    prependNullEntry: boolean
    sampleSize: number
    /* Fields of Gda-6.0.Gda.DataProxy */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataProxy */
    alterValueAttributes(proxyRow: number, col: number, alterFlags: ValueAttribute): void
    applyAllChanges(): boolean
    applyRowChanges(proxyRow: number): boolean
    cancelAllChanges(): boolean
    cancelRowChanges(proxyRow: number, col: number): void
    delete(proxyRow: number): void
    getFilterExpr(): string
    getFilteredNRows(): number
    getNModifiedRows(): number
    getNNewRows(): number
    getProxiedModel(): DataModel
    getProxiedModelNCols(): number
    getProxiedModelNRows(): number
    getProxiedModelRow(proxyRow: number): number
    getSampleEnd(): number
    getSampleSize(): number
    getSampleStart(): number
    getValueAttributes(proxyRow: number, col: number): ValueAttribute
    getValues(proxyRow: number, colsIndex: number[]): any[]
    hasChanged(): boolean
    isReadOnly(): boolean
    rowHasChanged(proxyRow: number): boolean
    rowIsDeleted(proxyRow: number): boolean
    rowIsInserted(proxyRow: number): boolean
    setFilterExpr(filterExpr?: string | null): boolean
    setOrderingColumn(col: number): boolean
    setSampleSize(sampleSize: number): void
    setSampleStart(sampleStart: number): void
    undelete(proxyRow: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of Gda-6.0.Gda.DataProxy */
    connect(sigName: "filter-changed", callback: (($obj: DataProxy) => void)): number
    on(sigName: "filter-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "filter-changed"): void
    connect(sigName: "row-changes-applied", callback: (($obj: DataProxy, row: number, proxiedRow: number) => void)): number
    on(sigName: "row-changes-applied", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changes-applied", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changes-applied", callback: (row: number, proxiedRow: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-changes-applied", row: number, proxiedRow: number): void
    connect(sigName: "row-delete-changed", callback: (($obj: DataProxy, row: number, toBeDeleted: boolean) => void)): number
    on(sigName: "row-delete-changed", callback: (row: number, toBeDeleted: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-delete-changed", callback: (row: number, toBeDeleted: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-delete-changed", callback: (row: number, toBeDeleted: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "row-delete-changed", row: number, toBeDeleted: boolean): void
    connect(sigName: "sample-changed", callback: (($obj: DataProxy, sampleStart: number, sampleEnd: number) => void)): number
    on(sigName: "sample-changed", callback: (sampleStart: number, sampleEnd: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sample-changed", callback: (sampleStart: number, sampleEnd: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sample-changed", callback: (sampleStart: number, sampleEnd: number) => void): NodeJS.EventEmitter
    emit(sigName: "sample-changed", sampleStart: number, sampleEnd: number): void
    connect(sigName: "sample-size-changed", callback: (($obj: DataProxy, sampleSize: number) => void)): number
    on(sigName: "sample-size-changed", callback: (sampleSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sample-size-changed", callback: (sampleSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sample-size-changed", callback: (sampleSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "sample-size-changed", sampleSize: number): void
    connect(sigName: "validate-row-changes", callback: (($obj: DataProxy, row: number, proxiedRow: number) => GLib.Error)): number
    on(sigName: "validate-row-changes", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-row-changes", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-row-changes", callback: (row: number, proxiedRow: number) => void): NodeJS.EventEmitter
    emit(sigName: "validate-row-changes", row: number, proxiedRow: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataProxy) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataProxy) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataProxy) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataProxy, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataProxy, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataProxy, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::cache-changes", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-changes", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::defer-sync", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defer-sync", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prepend-null-entry", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepend-null-entry", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-size", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-size", callback: (($obj: DataProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataProxy_ConstructProps)
    _init (config?: DataProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: DataModel): DataProxy
    static newWithDataModel(model: DataModel): DataProxy
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataSelect_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
    deleteStmt?: Statement
    execParams?: Set
    executionDelay?: number
    insertStmt?: Statement
    modelUsage?: number
    preparedStmt?: PStmt
    storeAllRows?: boolean
    updateStmt?: Statement
}
class DataSelect {
    /* Properties of Gda-6.0.Gda.DataSelect */
    deleteStmt: Statement
    executionDelay: number
    insertStmt: Statement
    preparedStmt: PStmt
    readonly selectStmt: Statement
    storeAllRows: boolean
    updateStmt: Statement
    /* Fields of Gda-6.0.Gda.DataSelect */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataSelect */
    computeColumnsAttributes(): boolean
    computeModificationStatements(): boolean
    computeModificationStatementsExt(condType: DataSelectConditionType): boolean
    computeRowSelectionCondition(): boolean
    getAdvertizedNrows(): number
    getConnection(): Connection
    getNbStoredRows(): number
    getPrepStmt(): PStmt
    prepareForOffline(): boolean
    setAdvertizedNrows(n: number): void
    setModificationStatement(modStmt: Statement): boolean
    setModificationStatementSql(sql: string): boolean
    setRowSelectionCondition(expr: SqlExpr): boolean
    setRowSelectionConditionSql(sqlWhere: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
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
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterMoveNextDefault(iter: DataModelIter): boolean
    iterMovePrevDefault(iter: DataModelIter): boolean
    iterMoveToRowDefault(iter: DataModelIter, row: number): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-6.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (($obj: DataSelect) => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (($obj: DataSelect) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (($obj: DataSelect) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: (($obj: DataSelect, row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: (($obj: DataSelect, row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: (($obj: DataSelect, row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::delete-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::execution-delay", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-delay", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prepared-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepared-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::select-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store-all-rows", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-all-rows", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-stmt", callback: (($obj: DataSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataSelect_ConstructProps)
    _init (config?: DataSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataSelectIter_ConstructProps extends DataModelIter_ConstructProps {
}
class DataSelectIter {
    /* Properties of Gda-6.0.Gda.DataModelIter */
    currentRow: number
    dataModel: DataModel
    updateModel: boolean
    /* Properties of Gda-6.0.Gda.Set */
    description: string
    id: string
    name: string
    validateChanges: boolean
    /* Fields of Gda-6.0.Gda.DataSelectIter */
    parentInstance: DataModelIter
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DataModelIter */
    getHolderForField(col: number): Holder
    getRow(): number
    getValueAt(col: number): any | null
    getValueAtE(col: number): any | null
    getValueForField(fieldName: string): any | null
    invalidateContents(): void
    isValid(): boolean
    moveNext(): boolean
    movePrev(): boolean
    moveToRow(row: number): boolean
    setValueAt(col: number, value: any): boolean
    /* Methods of Gda-6.0.Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getGroups(): SetGroup[]
    getHolder(holderId: string): Holder
    getHolderValue(holderId: string): any | null
    getHolders(): Holder[]
    getNode(holder: Holder): SetNode
    getNodes(): SetNode[]
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    getSources(): SetSource[]
    mergeWithSet(setToMerge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.DataModelIter */
    connect(sigName: "end-of-data", callback: (($obj: DataSelectIter) => void)): number
    on(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-data", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: (($obj: DataSelectIter, row: number) => void)): number
    on(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda-6.0.Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: DataSelectIter, holder: Holder, attrName: string, attrValue: any) => void)): number
    on(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", holder: Holder, attrName: string, attrValue: any): void
    connect(sigName: "holder-changed", callback: (($obj: DataSelectIter, object: Holder) => void)): number
    on(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: (object: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: DataSelectIter, holder: Holder) => void)): number
    on(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: (holder: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: DataSelectIter) => void)): number
    on(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: DataSelectIter, source?: object | null) => void)): number
    on(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: (source?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: DataSelectIter, holder: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", holder: Holder, newValue: any): void
    connect(sigName: "validate-set", callback: (($obj: DataSelectIter) => GLib.Error)): number
    on(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "validate-set"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validate-changes", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: DataSelectIter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataSelectIter_ConstructProps)
    _init (config?: DataSelectIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DbBase_ConstructProps extends GObject.Object_ConstructProps {
}
class DbBase {
    /* Fields of Gda-6.0.Gda.DbBase */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbBase */
    compare(b: DbBase): number
    getCatalog(): string
    getFullName(): string
    getName(): string
    getSchema(): string
    setCatalog(catalog: string): void
    setName(name: string): void
    setNames(catalog: string | null, schema: string | null, name: string): void
    setSchema(schema: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbBase_ConstructProps)
    _init (config?: DbBase_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbBase
    static $gtype: GObject.Type
}
export interface DbCatalog_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
    schemaName?: string
}
class DbCatalog {
    /* Properties of Gda-6.0.Gda.DbCatalog */
    connection: Connection
    schemaName: string
    /* Fields of Gda-6.0.Gda.DbCatalog */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbCatalog */
    appendTable(table: DbTable): void
    appendView(view: DbView): void
    getTables(): DbTable[]
    getViews(): DbView[]
    parseCnc(): boolean
    parseFile(xmlfile: Gio.File): boolean
    parseFileFromPath(xmlfile: string): boolean
    performOperation(): boolean
    writeToFile(file: Gio.File): boolean
    writeToPath(path: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema-name", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema-name", callback: (($obj: DbCatalog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbCatalog_ConstructProps)
    _init (config?: DbCatalog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbCatalog
    static errorQuark(): GLib.Quark
    static validateFileFromPath(xmlfile: string): boolean
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
class DbColumn {
    /* Properties of Gda-6.0.Gda.DbColumn */
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
    /* Fields of Gda-6.0.Gda.DbColumn */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbColumn */
    getAutoinc(): boolean
    getCheck(): string
    getComment(): string
    getCtype(): string
    getDefault(): string
    getGtype(): GObject.Type
    getName(): string
    getNnul(): boolean
    getPkey(): boolean
    getScale(): number
    getSize(): number
    getUnique(): boolean
    prepareAdd(op: ServerOperation): boolean
    prepareCreate(op: ServerOperation, order: number): boolean
    setAutoinc(autoinc: boolean): void
    setCheck(value: string): void
    setComment(comnt: string): void
    setDefault(value: string): void
    setName(name: string): void
    setNnul(nnul: boolean): void
    setPkey(pkey: boolean): void
    setScale(scale: number): void
    setSize(size: number): void
    setType(type: GObject.Type): void
    setUnique(unique: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DbBuildable */
    parseNode(node: libxml2.NodePtr): boolean
    writeNode(node: libxml2.NodePtr): boolean
    /* Methods of Gda-6.0.Gda.DdlModifiable */
    create(cnc: Connection, userData?: object | null): boolean
    drop(cnc: Connection, userData?: object | null): boolean
    rename(cnc: Connection, userData?: object | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoinc", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoinc", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoinc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoinc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoinc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::check", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::check", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::check", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::check", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nnul", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nnul", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nnul", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nnul", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nnul", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pkey", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkey", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::table", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unique", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique", callback: (($obj: DbColumn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unique", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unique", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unique", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbColumn_ConstructProps)
    _init (config?: DbColumn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbColumn
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DbFkey_ConstructProps extends GObject.Object_ConstructProps {
}
class DbFkey {
    /* Fields of Gda-6.0.Gda.DbFkey */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbFkey */
    getFieldName(): string[]
    getOndelete(): string
    getOndeleteId(): DbFkeyReferenceAction
    getOnupdate(): string
    getOnupdateId(): DbFkeyReferenceAction
    getRefField(): string[]
    getRefTable(): string
    prepareCreate(op: ServerOperation, i: number): boolean
    setField(field: string, reffield: string): void
    setOndelete(id: DbFkeyReferenceAction): void
    setOnupdate(id: DbFkeyReferenceAction): void
    setRefTable(rtable: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DbBuildable */
    parseNode(node: libxml2.NodePtr): boolean
    writeNode(node: libxml2.NodePtr): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbFkey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class DbIndex {
    /* Properties of Gda-6.0.Gda.DbIndex */
    table: DbTable
    /* Fields of Gda-6.0.Gda.DbIndex */
    parentInstance: DbBase
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbIndex */
    appendField(field: DbIndexField): void
    getFields(): DbIndexField[] | null
    getUnique(): boolean
    removeField(name: string): void
    setUnique(val: boolean): void
    /* Methods of Gda-6.0.Gda.DbBase */
    compare(b: DbBase): number
    getCatalog(): string
    getFullName(): string
    getName(): string
    getSchema(): string
    setCatalog(catalog: string): void
    setName(name: string): void
    setNames(catalog: string | null, schema: string | null, name: string): void
    setSchema(schema: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DdlModifiable */
    create(cnc: Connection, userData?: object | null): boolean
    drop(cnc: Connection, userData?: object | null): boolean
    rename(cnc: Connection, userData?: object | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::table", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: DbIndex, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbIndex_ConstructProps)
    _init (config?: DbIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbIndex
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DbIndexField_ConstructProps extends GObject.Object_ConstructProps {
}
class DbIndexField {
    /* Fields of Gda-6.0.Gda.DbIndexField */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbIndexField */
    getCollate(): string
    getColumn(): DbColumn
    getSortOrder(): DbIndexSortOrder
    getSortOrderStr(): string
    setCollate(collate: string): void
    setColumn(column: DbColumn): void
    setSortOrder(sorder: DbIndexSortOrder): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbIndexField, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class DbTable {
    /* Properties of Gda-6.0.Gda.DbTable */
    comment: string
    istemp: string
    /* Fields of Gda-6.0.Gda.DbTable */
    parentInstance: DbBase
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbTable */
    appendColumn(column: DbColumn): void
    appendConstraint(constr: string): void
    appendFkey(fkey: DbFkey): void
    getColumns(): DbColumn[]
    getFkeys(): DbFkey[]
    getIsTemp(): boolean
    isValid(): boolean
    prepareCreate(op: ServerOperation, ifnotexists: boolean): boolean
    setIsTemp(istemp: boolean): void
    update(obj: MetaTable, cnc: Connection): boolean
    /* Methods of Gda-6.0.Gda.DbBase */
    compare(b: DbBase): number
    getCatalog(): string
    getFullName(): string
    getName(): string
    getSchema(): string
    setCatalog(catalog: string): void
    setName(name: string): void
    setNames(catalog: string | null, schema: string | null, name: string): void
    setSchema(schema: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DbBuildable */
    parseNode(node: libxml2.NodePtr): boolean
    writeNode(node: libxml2.NodePtr): boolean
    /* Methods of Gda-6.0.Gda.DdlModifiable */
    create(cnc: Connection, userData?: object | null): boolean
    drop(cnc: Connection, userData?: object | null): boolean
    rename(cnc: Connection, userData?: object | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::comment", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::istemp", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::istemp", callback: (($obj: DbTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbTable_ConstructProps)
    _init (config?: DbTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbTable
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DbView_ConstructProps extends DbBase_ConstructProps {
    defstring?: string
    ifnoexist?: boolean
    istemp?: boolean
    replace?: boolean
}
class DbView {
    /* Properties of Gda-6.0.Gda.DbView */
    defstring: string
    ifnoexist: boolean
    istemp: boolean
    replace: boolean
    /* Fields of Gda-6.0.Gda.DbView */
    parentInstance: DbBase
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.DbView */
    getDefstring(): string
    getIfnoexist(): boolean
    getIstemp(): boolean
    getReplace(): boolean
    prepareCreate(op: ServerOperation): boolean
    setDefstring(str: string): void
    setIfnoexist(noexist: boolean): void
    setIstemp(temp: boolean): void
    setReplace(replace: boolean): void
    /* Methods of Gda-6.0.Gda.DbBase */
    compare(b: DbBase): number
    getCatalog(): string
    getFullName(): string
    getName(): string
    getSchema(): string
    setCatalog(catalog: string): void
    setName(name: string): void
    setNames(catalog: string | null, schema: string | null, name: string): void
    setSchema(schema: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DbBuildable */
    parseNode(node: libxml2.NodePtr): boolean
    writeNode(node: libxml2.NodePtr): boolean
    /* Methods of Gda-6.0.Gda.DdlModifiable */
    create(cnc: Connection, userData?: object | null): boolean
    drop(cnc: Connection, userData?: object | null): boolean
    rename(cnc: Connection, userData?: object | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::defstring", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defstring", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::defstring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::defstring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::defstring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ifnoexist", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ifnoexist", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ifnoexist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ifnoexist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ifnoexist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::istemp", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::istemp", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::istemp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::replace", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::replace", callback: (($obj: DbView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::replace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::replace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::replace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DbView_ConstructProps)
    _init (config?: DbView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DbView
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface HandlerBin_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerBin {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerBin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerBin_ConstructProps)
    _init (config?: HandlerBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HandlerBin
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerBoolean_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerBoolean {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerBoolean, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerBoolean_ConstructProps)
    _init (config?: HandlerBoolean_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HandlerBoolean
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerNumerical_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerNumerical {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerNumerical, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerNumerical_ConstructProps)
    _init (config?: HandlerNumerical_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HandlerNumerical
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerString_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerString {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerString, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerString_ConstructProps)
    _init (config?: HandlerString_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HandlerString
    static newWithProvider(prov: ServerProvider, cnc?: Connection | null): HandlerString
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerText_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerText {
    /* Fields of Gda-6.0.Gda.HandlerText */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerText_ConstructProps)
    _init (config?: HandlerText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithConnection(cnc?: Connection | null): HandlerText
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerTime_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerTime {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.HandlerTime */
    getFormat(type: GObject.Type): string
    getHint(type: GObject.Type): string
    getNoLocaleStrFromValue(value: any): string
    setSqlSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigitsYears: boolean): void
    setStrSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigitsYears: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerTime, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerTime_ConstructProps)
    _init (config?: HandlerTime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HandlerTime
    static newNoLocale(): HandlerTime
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface HandlerType_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerType {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HandlerType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HandlerType_ConstructProps)
    _init (config?: HandlerType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HandlerType
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
export interface Holder_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    fullBind?: Holder
    gType?: GObject.Type
    id?: string
    name?: string
    notNull?: boolean
    plugin?: string
    simpleBind?: Holder
    sourceColumn?: number
    sourceModel?: DataModel
    validateChanges?: boolean
}
class Holder {
    /* Properties of Gda-6.0.Gda.Holder */
    description: string
    fullBind: Holder
    gType: GObject.Type
    id: string
    name: string
    notNull: boolean
    plugin: string
    simpleBind: Holder
    sourceColumn: number
    sourceModel: DataModel
    validateChanges: boolean
    /* Fields of Gda-6.0.Gda.Holder */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Holder */
    copy(): Holder
    forceInvalid(): void
    forceInvalidE(error?: GLib.Error | null): void
    getAlphanumId(): string
    getBind(): Holder
    getDefaultValue(): any
    getGType(): GObject.Type
    getId(): string
    getNotNull(): boolean
    getSourceModel(col: number): DataModel
    getValue(): any | null
    getValueStr(dh?: DataHandler | null): string
    isValid(): boolean
    isValidE(): boolean
    setBind(bindTo: Holder): boolean
    setDefaultValue(value: any): void
    setNotNull(notNull: boolean): void
    setSourceModel(model: DataModel, col: number): boolean
    setValue(value?: any | null): boolean
    setValueStr(dh: DataHandler, value: string): boolean
    setValueToDefault(): boolean
    takeStaticValue(value: any, valueChanged: boolean): any
    takeValue(value: any): boolean
    valueIsDefault(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of Gda-6.0.Gda.Holder */
    connect(sigName: "changed", callback: (($obj: Holder) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "source-changed", callback: (($obj: Holder) => void)): number
    on(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "source-changed"): void
    connect(sigName: "to-default", callback: (($obj: Holder) => void)): number
    on(sigName: "to-default", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "to-default", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "to-default", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "to-default"): void
    connect(sigName: "validate-change", callback: (($obj: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-change", callback: (newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-change", callback: (newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-change", callback: (newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-change", newValue: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-type", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::not-null", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-null", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::simple-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-bind", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-column", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-column", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-model", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-model", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validate-changes", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: Holder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Holder_ConstructProps)
    _init (config?: Holder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, id: string): Holder
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface MetaStore_ConstructProps extends GObject.Object_ConstructProps {
    catalog?: string
    cnc?: Connection
    cncString?: string
    schema?: string
}
class MetaStore {
    /* Fields of Gda-6.0.Gda.MetaStore */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.MetaStore */
    createModifyDataModel(tableName: string): DataModel
    createStruct(features: MetaStructFeature): MetaStruct
    declareForeignKey(mstruct: MetaStruct | null, fkName: string, catalog: string | null, schema: string | null, table: string, refCatalog: string | null, refSchema: string | null, refTable: string, colnames: string[], refColnames: string[]): boolean
    extract(selectSql: string, vars?: GLib.HashTable | null): DataModel
    getAttributeValue(attName: string): { returnType: boolean, attValue: string }
    getInternalConnection(): Connection
    getVersion(): number
    modify(tableName: string, newData: DataModel | null, condition: string | null, valueNames: string[], values: any[]): boolean
    modifyWithContext(context: MetaContext, newData?: DataModel | null): boolean
    schemaAddCustomObject(xmlDescription: string): boolean
    schemaGetAllTables(): string[]
    schemaGetDependTables(tableName: string): string[]
    schemaGetStructure(): MetaStruct
    schemaRemoveCustomObject(objName: string): boolean
    setAttributeValue(attName: string, attValue?: string | null): boolean
    setIdentifiersStyle(style: SqlIdentifierStyle): void
    setReservedKeywordsFunc(func?: SqlReservedKeywordsFunc | null): void
    undeclareForeignKey(mstruct: MetaStruct | null, fkName: string, catalog: string | null, schema: string | null, table: string, refCatalog: string | null, refSchema: string | null, refTable: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.MetaStore */
    connect(sigName: "meta-changed", callback: (($obj: MetaStore, changes: MetaStoreChange[]) => void)): number
    on(sigName: "meta-changed", callback: (changes: MetaStoreChange[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "meta-changed", callback: (changes: MetaStoreChange[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "meta-changed", callback: (changes: MetaStoreChange[]) => void): NodeJS.EventEmitter
    emit(sigName: "meta-changed", changes: MetaStoreChange[]): void
    connect(sigName: "meta-reset", callback: (($obj: MetaStore) => void)): number
    on(sigName: "meta-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "meta-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "meta-reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "meta-reset"): void
    connect(sigName: "suggest-update", callback: (($obj: MetaStore, suggest: MetaContext) => GLib.Error)): number
    on(sigName: "suggest-update", callback: (suggest: MetaContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "suggest-update", callback: (suggest: MetaContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "suggest-update", callback: (suggest: MetaContext) => void): NodeJS.EventEmitter
    emit(sigName: "suggest-update", suggest: MetaContext): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetaStore_ConstructProps)
    _init (config?: MetaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cncString?: string | null): MetaStore
    static newWithFile(fileName: string): MetaStore
    static errorQuark(): GLib.Quark
    static sqlIdentifierQuote(id: string, cnc: Connection): string
    static $gtype: GObject.Type
}
export interface MetaStruct_ConstructProps extends GObject.Object_ConstructProps {
    features?: number
    metaStore?: MetaStore
}
class MetaStruct {
    /* Fields of Gda-6.0.Gda.MetaStruct */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.MetaStruct */
    complement(type: MetaDbObjectType, catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    complementAll(): boolean
    complementDefault(): boolean
    complementDepend(dbo: MetaDbObject): boolean
    complementSchema(catalog?: any | null, schema?: any | null): boolean
    dumpAsGraph(info: MetaGraphInfo): string | null
    getAllDbObjects(): MetaDbObject[] | null
    getDbObject(catalog: any | null, schema: any | null, name: any): MetaDbObject | null
    getTableColumn(table: MetaTable, colName: any): MetaTableColumn | null
    loadFromXmlFile(catalog: string | null, schema: string | null, xmlSpecFile: string): boolean
    sortDbObjects(sortType: MetaSortType): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaStruct, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MetaStruct_ConstructProps)
    _init (config?: MetaStruct_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface PStmt_ConstructProps extends GObject.Object_ConstructProps {
}
class PStmt {
    /* Fields of Gda-6.0.Gda.PStmt */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.PStmt */
    copyContents(dest: PStmt): void
    getGdaStatement(): Statement
    getNcols(): number
    getParamIds(): string[]
    getSql(): string
    getTmplColumns(): Column[]
    getTypes(): GObject.Type[]
    setCols(types: GObject.Type[]): void
    setGdaStatement(stmt?: Statement | null): void
    setParamIds(params: string[]): void
    setSql(sql: string): void
    setTmplColumns(columns: Column[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PStmt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PStmt_ConstructProps)
    _init (config?: PStmt_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RepetitiveStatement_ConstructProps extends GObject.Object_ConstructProps {
    statement?: Statement
}
class RepetitiveStatement {
    /* Fields of Gda-6.0.Gda.RepetitiveStatement */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.RepetitiveStatement */
    appendSet(values: Set, makeCopy: boolean): boolean
    getAllSets(): Set[]
    getTemplateSet(set: Set): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepetitiveStatement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RepetitiveStatement_ConstructProps)
    _init (config?: RepetitiveStatement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stmt: Statement): RepetitiveStatement
    static $gtype: GObject.Type
}
export interface Row_ConstructProps extends GObject.Object_ConstructProps {
    model?: DataModel
    modelRow?: number
    nbValues?: number
}
class Row {
    /* Fields of Gda-6.0.Gda.Row */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Row */
    getLength(): number
    getValue(num: number): any | null
    invalidateValue(value: any): void
    invalidateValueE(value: any, error?: GLib.Error | null): void
    valueIsValid(value: any): boolean
    valueIsValidE(value: any): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Row, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Row_ConstructProps)
    _init (config?: Row_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(count: number): Row
    static newFromDataModel(model: DataModel, row: number): Row
    static $gtype: GObject.Type
}
export interface ServerOperation_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Connection
    opType?: number
    provider?: ServerProvider
    specFilename?: string
    specResource?: string
}
class ServerOperation {
    /* Fields of Gda-6.0.Gda.ServerOperation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.ServerOperation */
    addItemToSequence(seqPath: string): number
    delItemFromSequence(itemPath: string): boolean
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
    getSqlIdentifierAtPath(path: string): string
    getValueAt(path: string): any | null
    isValid(xmlFile?: string | null): boolean
    isValidFromResource(resource?: string | null): boolean
    loadDataFromXml(node: libxml2.NodePtr): boolean
    performCreateDatabase(provider?: string | null): boolean
    performDropDatabase(provider?: string | null): boolean
    render(): string | null
    saveDataToXmlString(): string
    setValueAt(value: string | null, path: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.ServerOperation */
    connect(sigName: "sequence-item-added", callback: (($obj: ServerOperation, seqPath: string, itemIndex: number) => void)): number
    on(sigName: "sequence-item-added", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sequence-item-added", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sequence-item-added", callback: (seqPath: string, itemIndex: number) => void): NodeJS.EventEmitter
    emit(sigName: "sequence-item-added", seqPath: string, itemIndex: number): void
    connect(sigName: "sequence-item-remove", callback: (($obj: ServerOperation, seqPath: string, itemIndex: number) => void)): number
    on(sigName: "sequence-item-remove", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sequence-item-remove", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sequence-item-remove", callback: (seqPath: string, itemIndex: number) => void): NodeJS.EventEmitter
    emit(sigName: "sequence-item-remove", seqPath: string, itemIndex: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServerOperation_ConstructProps)
    _init (config?: ServerOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(opType: ServerOperationType, xmlFile: string): ServerOperation
    static errorQuark(): GLib.Quark
    static opTypeToString(type: ServerOperationType): string
    static prepareCreateDatabase(provider: string, dbName?: string | null): ServerOperation | null
    static prepareDropDatabase(provider: string, dbName?: string | null): ServerOperation | null
    static stringToOpType(str: string): ServerOperationType
    static $gtype: GObject.Type
}
export interface ServerProvider_ConstructProps extends GObject.Object_ConstructProps {
}
class ServerProvider {
    /* Fields of Gda-6.0.Gda.ServerProvider */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.ServerProvider */
    createOperation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    createParser(cnc?: Connection | null): SqlParser
    escapeString(cnc: Connection | null, str: string): string
    getDataHandlerDbms(cnc: Connection | null, forType: string): DataHandler
    getDataHandlerGType(cnc: Connection | null, forType: GObject.Type): DataHandler
    getDefaultDbmsType(cnc: Connection | null, type: GObject.Type): string | null
    getName(): string
    getServerVersion(cnc: Connection): string
    getVersion(): string
    handlerDeclare(dh: DataHandler, cnc: Connection, gType: GObject.Type, dbmsType: string): void
    handlerFind(cnc: Connection | null, gType: GObject.Type, dbmsType?: string | null): DataHandler
    handlerUseDefault(type: GObject.Type): DataHandler
    internalGetParser(): SqlParser
    performOperation(cnc: Connection | null, op: ServerOperation): boolean
    performOperationDefault(cnc: Connection | null, op: ServerOperation): boolean
    renderOperation(cnc: Connection | null, op: ServerOperation): string | null
    stringToValue(cnc: Connection | null, string: string, preferredType: GObject.Type, dbmsType?: string | null): any
    supportsFeature(cnc: Connection | null, feature: ConnectionFeature): boolean
    supportsOperation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean
    unescapeString(cnc: Connection | null, str: string): string
    valueToSqlString(cnc: Connection | null, from: any): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServerProvider_ConstructProps)
    _init (config?: ServerProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static getImplFunctionsForClass(klass: GObject.ObjectClass, type: ServerProviderFunctionsType): object | null
    static getRealMainContext(cnc?: Connection | null): GLib.MainContext
    static loadResourceContents(provName: string, resource: string): string
    static setImplFunctions(klass: ServerProviderClass, type: ServerProviderFunctionsType, functionsSet?: object | null): void
    static $gtype: GObject.Type
}
export interface Set_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    holders?: object
    id?: string
    name?: string
    validateChanges?: boolean
}
class Set {
    /* Properties of Gda-6.0.Gda.Set */
    description: string
    id: string
    name: string
    validateChanges: boolean
    /* Fields of Gda-6.0.Gda.Set */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getGroups(): SetGroup[]
    getHolder(holderId: string): Holder
    getHolderValue(holderId: string): any | null
    getHolders(): Holder[]
    getNode(holder: Holder): SetNode
    getNodes(): SetNode[]
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    getSources(): SetSource[]
    isValid(): boolean
    mergeWithSet(setToMerge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.Set */
    connect(sigName: "holder-attr-changed", callback: (($obj: Set, holder: Holder, attrName: string, attrValue: any) => void)): number
    on(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", holder: Holder, attrName: string, attrValue: any): void
    connect(sigName: "holder-changed", callback: (($obj: Set, object: Holder) => void)): number
    on(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: (object: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: (($obj: Set, holder: Holder) => void)): number
    on(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: (holder: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (($obj: Set) => void)): number
    on(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: (($obj: Set, source?: object | null) => void)): number
    on(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: (source?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: (($obj: Set, holder: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", holder: Holder, newValue: any): void
    connect(sigName: "validate-set", callback: (($obj: Set) => GLib.Error)): number
    on(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "validate-set"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validate-changes", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(holders: Holder[]): Set
    static newFromSpecNode(xmlSpec: libxml2.NodePtr): Set
    static newFromSpecString(xmlSpec: string): Set
    static newReadOnly(holders: Holder[]): Set
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
class Short {
    static name: string
}
export interface SqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
}
class SqlBuilder {
    /* Fields of Gda-6.0.Gda.SqlBuilder */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.SqlBuilder */
    addCase(testExpr: SqlBuilderId, elseExpr: SqlBuilderId, whenArray: SqlBuilderId[], thenArray: SqlBuilderId[]): SqlBuilderId
    addCond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    addCondV(op: SqlOperatorType, opIds: SqlBuilderId[]): SqlBuilderId
    addExprValue(value?: any | null): SqlBuilderId
    addFieldId(fieldName: string, tableName?: string | null): SqlBuilderId
    addFieldValueAsGvalue(fieldName: string, value?: any | null): void
    addFieldValueId(fieldId: SqlBuilderId, valueId: SqlBuilderId): void
    addFunction(funcName: string, args: SqlBuilderId[]): SqlBuilderId
    addId(str: string): SqlBuilderId
    addParam(paramName: string, type: GObject.Type, nullok: boolean): SqlBuilderId
    addSubSelect(sqlst: SqlStatement): SqlBuilderId
    compoundAddSubSelect(sqlst: SqlStatement): void
    compoundAddSubSelectFromBuilder(subselect: SqlBuilder): void
    compoundSetType(compoundType: SqlStatementCompoundType): void
    exportExpression(id: SqlBuilderId): SqlExpr
    getSqlStatement(): SqlStatement | null
    getStatement(): Statement
    importExpression(expr: SqlExpr): SqlBuilderId
    importExpressionFromBuilder(query: SqlBuilder, exprId: SqlBuilderId): SqlBuilderId
    joinAddField(joinId: SqlBuilderId, fieldName: string): void
    selectAddField(fieldName: string, tableName?: string | null, alias?: string | null): SqlBuilderId
    selectAddTarget(tableName: string, alias?: string | null): SqlBuilderId
    selectAddTargetId(tableId: SqlBuilderId, alias?: string | null): SqlBuilderId
    selectGroupBy(exprId: SqlBuilderId): void
    selectJoinTargets(leftTargetId: SqlBuilderId, rightTargetId: SqlBuilderId, joinType: SqlSelectJoinType, joinExpr: SqlBuilderId): SqlBuilderId
    selectOrderBy(exprId: SqlBuilderId, asc: boolean, collationName?: string | null): void
    selectSetDistinct(distinct: boolean, exprId: SqlBuilderId): void
    selectSetHaving(condId: SqlBuilderId): void
    selectSetLimit(limitCountExprId: SqlBuilderId, limitOffsetExprId: SqlBuilderId): void
    setTable(tableName: string): void
    setWhere(condId: SqlBuilderId): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SqlBuilder_ConstructProps)
    _init (config?: SqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stmtType: SqlStatementType): SqlBuilder
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface SqlParser_ConstructProps extends GObject.Object_ConstructProps {
    debug?: boolean
    mode?: number
    tokenizerFlavour?: number
}
class SqlParser {
    /* Properties of Gda-6.0.Gda.SqlParser */
    readonly columnError: number
    debug: boolean
    readonly lineError: number
    mode: number
    tokenizerFlavour: number
    /* Fields of Gda-6.0.Gda.SqlParser */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.SqlParser */
    parseFileAsBatch(filename: string): Batch | null
    parseString(sql: string): { returnType: Statement | null, remain: string | null }
    parseStringAsBatch(sql: string): { returnType: Batch | null, remain: string | null }
    setOverflowError(): void
    setSyntaxError(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gda-6.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debug", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-error", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tokenizer-flavour", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tokenizer-flavour", callback: (($obj: SqlParser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SqlParser_ConstructProps)
    _init (config?: SqlParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SqlParser
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Statement_ConstructProps extends GObject.Object_ConstructProps {
    structure?: SqlStatement
}
class Statement {
    /* Properties of Gda-6.0.Gda.Statement */
    structure: SqlStatement
    /* Fields of Gda-6.0.Gda.Statement */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Statement */
    checkStructure(): boolean
    checkValidity(cnc?: Connection | null): boolean
    copy(): Statement
    getParameters(): { returnType: boolean, outParams: Set | null }
    getStatementType(): SqlStatementType
    isUseless(): boolean
    normalize(cnc: Connection): boolean
    rewriteForDefaultValues(params: Set, remove: boolean): SqlStatement | null
    serialize(): string
    toSqlExtended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): { returnType: string, paramsUsed: Holder[] | null }
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.Statement */
    connect(sigName: "checked", callback: (($obj: Statement, cnc: Connection, checked: boolean) => void)): number
    on(sigName: "checked", callback: (cnc: Connection, checked: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "checked", callback: (cnc: Connection, checked: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "checked", callback: (cnc: Connection, checked: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "checked", cnc: Connection, checked: boolean): void
    connect(sigName: "reset", callback: (($obj: Statement) => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structure", callback: (($obj: Statement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Statement_ConstructProps)
    _init (config?: Statement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Statement
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TransactionStatus_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionStatus {
    /* Fields of Gda-6.0.Gda.TransactionStatus */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TransactionStatus */
    addEventSql(sql: string, connEvent: ConnectionEvent): TransactionStatusEvent
    addEventSub(subTrans: TransactionStatus): TransactionStatusEvent
    addEventSvp(svpName: string): TransactionStatusEvent
    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    findCurrent(destev: TransactionStatusEvent, unnamedOnly: boolean): TransactionStatus | null
    freeEvents(event: TransactionStatusEvent, freeAfter: boolean): void
    getIsolationLevel(): TransactionIsolation
    getState(): TransactionStatusState
    setIsolationLevel(il: TransactionIsolation): void
    setState(state: TransactionStatusState): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransactionStatus, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TransactionStatus_ConstructProps)
    _init (config?: TransactionStatus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): TransactionStatus
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends GObject.Object_ConstructProps {
}
class Tree {
    /* Properties of Gda-6.0.Gda.Tree */
    readonly isList: boolean
    /* Fields of Gda-6.0.Gda.Tree */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.Tree */
    addManager(manager: TreeManager): void
    clean(): void
    dump(node?: TreeNode | null, stream?: object | null): void
    getNode(treePath: string, useNames: boolean): TreeNode | null
    getNodeManager(node: TreeNode): TreeManager
    getNodePath(node: TreeNode): string
    getNodesInPath(treePath: string | null, useNames: boolean): TreeNode[]
    setAttribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    updateAll(): boolean
    updateChildren(node?: TreeNode | null): boolean
    updatePart(node: TreeNode): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.Tree */
    connect(sigName: "node-changed", callback: (($obj: Tree, node: TreeNode) => void)): number
    on(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: (($obj: Tree, nodePath: string) => void)): number
    on(sigName: "node-deleted", callback: (nodePath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-deleted", callback: (nodePath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-deleted", callback: (nodePath: string) => void): NodeJS.EventEmitter
    emit(sigName: "node-deleted", nodePath: string): void
    connect(sigName: "node-has-child-toggled", callback: (($obj: Tree, node: TreeNode) => void)): number
    on(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: (($obj: Tree, node: TreeNode) => void)): number
    on(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-inserted", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-list", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tree
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeManager_ConstructProps extends GObject.Object_ConstructProps {
    func?: TreeManagerNodesFunc
    recursive?: boolean
}
class TreeManager {
    /* Properties of Gda-6.0.Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda-6.0.Gda.TreeManager */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    setNodeCreateFunc(func?: TreeManagerNodeFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeManager_ConstructProps)
    _init (config?: TreeManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithFunc(updateFunc: TreeManagerNodesFunc): TreeManager
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeMgrColumns_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    metaStore?: MetaStore
    schema?: string
    tableName?: string
}
class TreeMgrColumns {
    /* Properties of Gda-6.0.Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda-6.0.Gda.TreeMgrColumns */
    parentInstance: TreeManager
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    setNodeCreateFunc(func?: TreeManagerNodeFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrColumns, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrColumns_ConstructProps)
    _init (config?: TreeMgrColumns_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, schema: string, tableName: string): TreeMgrColumns
    static $gtype: GObject.Type
}
export interface TreeMgrLabel_ConstructProps extends TreeManager_ConstructProps {
    label?: string
}
class TreeMgrLabel {
    /* Properties of Gda-6.0.Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda-6.0.Gda.TreeMgrLabel */
    parentInstance: TreeManager
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    setNodeCreateFunc(func?: TreeManagerNodeFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrLabel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrLabel_ConstructProps)
    _init (config?: TreeMgrLabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label: string): TreeMgrLabel
    static $gtype: GObject.Type
}
export interface TreeMgrSchemas_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    metaStore?: MetaStore
}
class TreeMgrSchemas {
    /* Properties of Gda-6.0.Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda-6.0.Gda.TreeMgrSchemas */
    parentInstance: TreeManager
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    setNodeCreateFunc(func?: TreeManagerNodeFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrSchemas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class TreeMgrSelect {
    /* Properties of Gda-6.0.Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda-6.0.Gda.TreeMgrSelect */
    parentInstance: TreeManager
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    setNodeCreateFunc(func?: TreeManagerNodeFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrSelect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrSelect_ConstructProps)
    _init (config?: TreeMgrSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect
    static $gtype: GObject.Type
}
export interface TreeMgrTables_ConstructProps extends TreeManager_ConstructProps {
    connection?: Connection
    metaStore?: MetaStore
    schema?: string
}
class TreeMgrTables {
    /* Properties of Gda-6.0.Gda.TreeManager */
    func: TreeManagerNodesFunc
    recursive: boolean
    /* Fields of Gda-6.0.Gda.TreeMgrTables */
    parentInstance: TreeManager
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
    setNodeCreateFunc(func?: TreeManagerNodeFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::func", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: TreeMgrTables, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class TreeNode {
    /* Properties of Gda-6.0.Gda.TreeNode */
    name: string
    /* Fields of Gda-6.0.Gda.TreeNode */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.TreeNode */
    fetchAttribute(attribute: string): any
    getChildIndex(index: number): TreeNode
    getChildName(name: string): TreeNode
    getChildren(): TreeNode[]
    getNodeAttribute(attribute: string): any
    getParent(): TreeNode
    setNodeAttribute(attribute: string, value: any | null, destroy: GLib.DestroyNotify): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gda-6.0.Gda.TreeNode */
    connect(sigName: "node-changed", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    on(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: (($obj: TreeNode, relativePath: string) => void)): number
    on(sigName: "node-deleted", callback: (relativePath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-deleted", callback: (relativePath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-deleted", callback: (relativePath: string) => void): NodeJS.EventEmitter
    emit(sigName: "node-deleted", relativePath: string): void
    connect(sigName: "node-has-child-toggled", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    on(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: (($obj: TreeNode, node: TreeNode) => void)): number
    on(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-inserted", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TreeNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeNode_ConstructProps)
    _init (config?: TreeNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): TreeNode
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
class UShort {
    static name: string
}
export interface XaTransaction_ConstructProps extends GObject.Object_ConstructProps {
    formatId?: number
    transactionId?: string
}
class XaTransaction {
    /* Fields of Gda-6.0.Gda.XaTransaction */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-6.0.Gda.XaTransaction */
    begin(): boolean
    commit(): { returnType: boolean, cncToRecover: Connection[] | null }
    commitRecovered(): { returnType: boolean, cncToRecover: Connection[] | null }
    registerConnection(cnc: Connection, branch: string): boolean
    rollback(): boolean
    unregisterConnection(cnc: Connection): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XaTransaction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XaTransaction_ConstructProps)
    _init (config?: XaTransaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: number, globalTransactionId: string): XaTransaction
    static errorQuark(): GLib.Quark
    static stringToId(str: string): XaTransactionId
    static $gtype: GObject.Type
}
abstract class BatchClass {
    /* Fields of Gda-6.0.Gda.BatchClass */
    parentClass: GObject.ObjectClass
    changed: (batch: Batch, changedStmt: Statement) => void
    static name: string
}
class Binary {
    /* Methods of Gda-6.0.Gda.Binary */
    copy(): Binary
    free(): void
    getData(): object | null
    getSize(): number
    resetData(): void
    setData(val: any[]): void
    takeData(val: any[]): void
    toString(maxlen: number): string
    static name: string
    static new(): Binary
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Binary
}
class Blob {
    /* Methods of Gda-6.0.Gda.Blob */
    copy(): Blob
    free(): void
    getBinary(): Binary
    getOp(): BlobOp
    setOp(op?: BlobOp | null): void
    toString(maxlen: number): string
    static name: string
    static new(): Blob
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Blob
}
abstract class BlobOpClass {
    /* Fields of Gda-6.0.Gda.BlobOpClass */
    parentClass: GObject.ObjectClass
    functions: object
    padding: object[]
    static name: string
}
class BlobOpFunctions {
    /* Fields of Gda-6.0.Gda.BlobOpFunctions */
    getLength: (op: BlobOp) => number
    read: (op: BlobOp, blob: Blob, offset: number, size: number) => number
    write: (op: BlobOp, blob: Blob, offset: number) => number
    writeAll: (op: BlobOp, blob: Blob) => boolean
    static name: string
}
abstract class ColumnClass {
    /* Fields of Gda-6.0.Gda.ColumnClass */
    parentClass: GObject.ObjectClass
    nameChanged: (column: Column, oldName: string) => void
    gTypeChanged: (column: Column, oldType: GObject.Type, newType: GObject.Type) => void
    static name: string
}
abstract class ConfigClass {
    /* Fields of Gda-6.0.Gda.ConfigClass */
    parentClass: GObject.ObjectClass
    dsnAdded: (conf: Config, newDsn: DsnInfo) => void
    dsnToBeRemoved: (conf: Config, oldDsn: DsnInfo) => void
    dsnRemoved: (conf: Config, oldDsn: DsnInfo) => void
    dsnChanged: (conf: Config, dsn: DsnInfo) => void
    static name: string
}
abstract class ConnectionClass {
    /* Fields of Gda-6.0.Gda.ConnectionClass */
    objectClass: GObject.ObjectClass
    statusChanged: (obj: Connection, status: ConnectionStatus) => void
    error: (cnc: Connection, error: ConnectionEvent) => void
    opened: (obj: Connection) => void
    closed: (obj: Connection) => void
    dsnChanged: (obj: Connection) => void
    transactionStatusChanged: (obj: Connection) => void
    static name: string
}
abstract class ConnectionEventClass {
    /* Fields of Gda-6.0.Gda.ConnectionEventClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
abstract class DataAccessWrapperClass {
    /* Fields of Gda-6.0.Gda.DataAccessWrapperClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataComparatorClass {
    /* Fields of Gda-6.0.Gda.DataComparatorClass */
    parentClass: GObject.ObjectClass
    diffComputed: (comp: DataComparator, diff: Diff) => boolean
    static name: string
}
abstract class DataHandlerInterface {
    /* Fields of Gda-6.0.Gda.DataHandlerInterface */
    gIface: GObject.TypeInterface
    getSqlFromValue: (dh: DataHandler, value?: any | null) => string
    getStrFromValue: (dh: DataHandler, value?: any | null) => string
    getValueFromSql: (dh: DataHandler, sql: string | null, type: GObject.Type) => any
    getValueFromStr: (dh: DataHandler, str: string | null, type: GObject.Type) => any
    getSaneInitValue: (dh: DataHandler, type: GObject.Type) => any | null
    acceptsGType: (dh: DataHandler, type: GObject.Type) => boolean
    getDescr: (dh: DataHandler) => string
    static name: string
}
abstract class DataModelArrayClass {
    /* Fields of Gda-6.0.Gda.DataModelArrayClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataModelDirClass {
    /* Fields of Gda-6.0.Gda.DataModelDirClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataModelIface {
    static name: string
}
abstract class DataModelImportClass {
    /* Fields of Gda-6.0.Gda.DataModelImportClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataModelImportIterClass {
    /* Fields of Gda-6.0.Gda.DataModelImportIterClass */
    parentClass: DataModelIterClass
    static name: string
}
class DataModelInterface {
    /* Fields of Gda-6.0.Gda.DataModelInterface */
    gIface: GObject.TypeInterface
    getNRows: (model: DataModel) => number
    getNColumns: (model: DataModel) => number
    getAccessFlags: (model: DataModel) => DataModelAccessFlags
    getValueAt: (model: DataModel, col: number, row: number) => any
    getAttributesAt: (model: DataModel, col: number, row: number) => ValueAttribute
    setValueAt: (model: DataModel, col: number, row: number, value: any) => boolean
    appendRow: (model: DataModel) => number
    removeRow: (model: DataModel, row: number) => boolean
    freeze: (model: DataModel) => void
    thaw: (model: DataModel) => void
    getNotify: (model: DataModel) => boolean
    sendHint: (model: DataModel, hint: DataModelHint, hintValue: any) => void
    getExceptions: (model: DataModel) => GLib.Error
    rowInserted: (model: DataModel, row: number) => void
    rowUpdated: (model: DataModel, row: number) => void
    rowRemoved: (model: DataModel, row: number) => void
    changed: (model: DataModel) => void
    reset: (model: DataModel) => void
    accessChanged: (model: DataModel) => void
    static name: string
}
abstract class DataModelIterClass {
    /* Fields of Gda-6.0.Gda.DataModelIterClass */
    parentClass: SetClass
    moveToRow: (iter: DataModelIter, row: number) => boolean
    moveNext: (iter: DataModelIter) => boolean
    movePrev: (iter: DataModelIter) => boolean
    setValueAt: (iter: DataModelIter, col: number, value: any) => boolean
    rowChanged: (iter: DataModelIter, row: number) => void
    endOfData: (iter: DataModelIter) => void
    static name: string
}
abstract class DataModelSelectClass {
    /* Fields of Gda-6.0.Gda.DataModelSelectClass */
    parentClass: GObject.ObjectClass
    updated: (model: DataModelSelect) => void
    static name: string
}
abstract class DataPivotClass {
    /* Fields of Gda-6.0.Gda.DataPivotClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataProxyClass {
    /* Fields of Gda-6.0.Gda.DataProxyClass */
    parentClass: GObject.ObjectClass
    rowDeleteChanged: (proxy: DataProxy, row: number, toBeDeleted: boolean) => void
    sampleSizeChanged: (proxy: DataProxy, sampleSize: number) => void
    sampleChanged: (proxy: DataProxy, sampleStart: number, sampleEnd: number) => void
    validateRowChanges: (proxy: DataProxy, row: number, proxiedRow: number) => GLib.Error
    rowChangesApplied: (proxy: DataProxy, row: number, proxiedRow: number) => void
    filterChanged: (proxy: DataProxy) => void
    static name: string
}
abstract class DataSelectClass {
    /* Fields of Gda-6.0.Gda.DataSelectClass */
    parentClass: GObject.ObjectClass
    fetchNbRows: (model: DataSelect) => number
    fetchRandom: (model: DataSelect, prow: Row, rownum: number) => boolean
    storeAll: (model: DataSelect) => boolean
    fetchNext: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetchPrev: (model: DataSelect, prow: Row, rownum: number) => boolean
    fetchAt: (model: DataSelect, prow: Row, rownum: number) => boolean
    static name: string
}
abstract class DataSelectIterClass {
    /* Fields of Gda-6.0.Gda.DataSelectIterClass */
    parentClass: DataModelIterClass
    static name: string
}
abstract class DbBaseClass {
    /* Fields of Gda-6.0.Gda.DbBaseClass */
    parent: GObject.ObjectClass
    static name: string
}
abstract class DbBuildableInterface {
    /* Fields of Gda-6.0.Gda.DbBuildableInterface */
    parentIface: GObject.TypeInterface
    parseNode: (self: DbBuildable, node: libxml2.NodePtr) => boolean
    writeNode: (self: DbBuildable, node: libxml2.NodePtr) => boolean
    static name: string
}
abstract class DbCatalogClass {
    /* Fields of Gda-6.0.Gda.DbCatalogClass */
    parent: GObject.ObjectClass
    static name: string
}
abstract class DbColumnClass {
    /* Fields of Gda-6.0.Gda.DbColumnClass */
    parent: GObject.ObjectClass
    static name: string
}
abstract class DbFkeyClass {
    /* Fields of Gda-6.0.Gda.DbFkeyClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DbIndexClass {
    /* Fields of Gda-6.0.Gda.DbIndexClass */
    parentClass: DbBaseClass
    static name: string
}
abstract class DbIndexFieldClass {
    /* Fields of Gda-6.0.Gda.DbIndexFieldClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DbTableClass {
    /* Fields of Gda-6.0.Gda.DbTableClass */
    parentClass: DbBaseClass
    static name: string
}
abstract class DbViewClass {
    /* Fields of Gda-6.0.Gda.DbViewClass */
    parentClass: DbBaseClass
    static name: string
}
abstract class DdlModifiableInterface {
    /* Fields of Gda-6.0.Gda.DdlModifiableInterface */
    parentIface: GObject.TypeInterface
    create: (self: DdlModifiable, cnc: Connection) => boolean
    drop: (self: DdlModifiable, cnc: Connection) => boolean
    rename: (self: DdlModifiable, cnc: Connection) => boolean
    static name: string
}
class Diff {
    /* Fields of Gda-6.0.Gda.Diff */
    type: DiffType
    oldRow: number
    newRow: number
    values: GLib.HashTable
    static name: string
}
class DsnInfo {
    /* Fields of Gda-6.0.Gda.DsnInfo */
    name: string
    provider: string
    description: string
    cncString: string
    authString: string
    isSystem: boolean
    /* Methods of Gda-6.0.Gda.DsnInfo */
    copy(): DsnInfo
    equal(dsn2?: DsnInfo | null): boolean
    free(): void
    static name: string
    static new(): DsnInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DsnInfo
}
class GeometricPoint {
    /* Methods of Gda-6.0.Gda.GeometricPoint */
    copy(): GeometricPoint
    free(): void
    getX(): number
    getY(): number
    setX(x: number): void
    setY(y: number): void
    static name: string
    static new(): GeometricPoint
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GeometricPoint
}
abstract class HandlerBinClass {
    /* Fields of Gda-6.0.Gda.HandlerBinClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HandlerBooleanClass {
    /* Fields of Gda-6.0.Gda.HandlerBooleanClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HandlerNumericalClass {
    /* Fields of Gda-6.0.Gda.HandlerNumericalClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HandlerStringClass {
    /* Fields of Gda-6.0.Gda.HandlerStringClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HandlerTextClass {
    /* Fields of Gda-6.0.Gda.HandlerTextClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HandlerTimeClass {
    /* Fields of Gda-6.0.Gda.HandlerTimeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HandlerTypeClass {
    /* Fields of Gda-6.0.Gda.HandlerTypeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class HolderClass {
    /* Fields of Gda-6.0.Gda.HolderClass */
    parentClass: GObject.ObjectClass
    changed: (holder: Holder) => void
    sourceChanged: (holder: Holder) => void
    validateChange: (holder: Holder, newValue: any) => GLib.Error
    toDefault: (holder: Holder) => void
    static name: string
}
abstract class LockableInterface {
    /* Fields of Gda-6.0.Gda.LockableInterface */
    gIface: GObject.TypeInterface
    lock: (lockable: Lockable) => void
    trylock: (lockable: Lockable) => boolean
    unlock: (lockable: Lockable) => void
    static name: string
}
class MetaContext {
    /* Fields of Gda-6.0.Gda.MetaContext */
    tableName: string
    size: number
    columnNames: string[]
    columnValues: any[]
    columns: GLib.HashTable
    /* Methods of Gda-6.0.Gda.MetaContext */
    copy(): MetaContext
    free(): void
    getNColumns(): number
    getTable(): string
    setColumn(column: string, value: any, cnc?: Connection | null): void
    setColumns(columns: GLib.HashTable, cnc?: Connection | null): void
    setTable(table: string): void
    stringify(): string
    static name: string
    static new(): MetaContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MetaContext
}
class MetaDbObject {
    /* Fields of Gda-6.0.Gda.MetaDbObject */
    objType: MetaDbObjectType
    outdated: boolean
    objCatalog: string
    objSchema: string
    objName: string
    objShortName: string
    objFullName: string
    objOwner: string
    dependList: MetaDbObject[]
    static name: string
}
class MetaStoreChange {
    /* Methods of Gda-6.0.Gda.MetaStoreChange */
    copy(): MetaStoreChange
    free(): void
    getChangeType(): MetaStoreChangeType
    getKeys(): GLib.HashTable
    getTableName(): string
    setChangeType(ctype: MetaStoreChangeType): void
    setTableName(tableName: string): void
    static name: string
    static new(): MetaStoreChange
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MetaStoreChange
}
abstract class MetaStoreClass {
    /* Fields of Gda-6.0.Gda.MetaStoreClass */
    parentClass: GObject.ObjectClass
    metaReset: (store: MetaStore) => void
    suggestUpdate: (store: MetaStore, suggest: MetaContext) => GLib.Error
    static name: string
}
abstract class MetaStructClass {
    /* Fields of Gda-6.0.Gda.MetaStructClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class MetaTable {
    /* Fields of Gda-6.0.Gda.MetaTable */
    columns: MetaTableColumn[]
    pkColsArray: number
    pkColsNb: number
    reverseFkList: MetaTableForeignKey[]
    fkList: MetaTableForeignKey[]
    static name: string
}
class MetaTableColumn {
    /* Fields of Gda-6.0.Gda.MetaTableColumn */
    columnName: string
    columnType: string
    gtype: GObject.Type
    pkey: boolean
    nullok: boolean
    defaultValue: string
    autoIncement: boolean
    desc: string
    static name: string
}
class MetaTableForeignKey {
    /* Fields of Gda-6.0.Gda.MetaTableForeignKey */
    metaTable: MetaDbObject
    dependOn: MetaDbObject
    colsNb: number
    fkColsArray: number
    fkNamesArray: string
    refPkColsArray: number
    refPkNamesArray: string
    fkName: string
    static name: string
}
class MetaView {
    /* Fields of Gda-6.0.Gda.MetaView */
    table: MetaTable
    viewDef: string
    isUpdatable: boolean
    static name: string
}
class Numeric {
    /* Methods of Gda-6.0.Gda.Numeric */
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
    /* Static methods and pseudo-constructors */
    static new(): Numeric
}
abstract class PStmtClass {
    /* Fields of Gda-6.0.Gda.PStmtClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ProviderInfo {
    /* Fields of Gda-6.0.Gda.ProviderInfo */
    id: string
    location: string
    description: string
    dsnParams: Set
    authParams: Set
    iconId: string
    static name: string
}
abstract class ProviderInterface {
    /* Fields of Gda-6.0.Gda.ProviderInterface */
    gIface: GObject.TypeInterface
    getName: (provider: Provider) => string
    getVersion: (provider: Provider) => string
    getServerVersion: (provider: Provider, cnc: Connection) => string
    supportsFeature: (provider: Provider, cnc: Connection, feature: ConnectionFeature) => boolean
    createConnection: (provider: Provider) => Connection
    createParser: (provider: Provider, cnc: Connection) => SqlParser
    getDataHandler: (provider: Provider, cnc: Connection, gType: GObject.Type, dbmsType: string) => DataHandler
    getDefDbmsType: (provider: Provider, cnc: Connection, gType: GObject.Type) => string
    supportsOperation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    createOperation: (provider: Provider, cnc: Connection, type: ServerOperationType, options: Set) => ServerOperation
    renderOperation: (provider: Provider, cnc: Connection, op: ServerOperation) => string
    statementToSql: (provider: Provider, cnc: Connection, stmt: Statement, params: Set | null, flags: StatementSqlFlag) => { returnType: string, paramsUsed: Holder[] | null }
    identifierQuote: (provider: Provider, cnc: Connection | null, id: string, forMetaStore: boolean, forceQuotes: boolean) => string
    statementRewrite: (provider: Provider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    openConnection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepareConnection: (provider: Provider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    closeConnection: (provider: Provider, cnc: Connection) => boolean
    escapeString: (provider: Provider, cnc: Connection, str: string) => string
    unescapeString: (provider: Provider, cnc: Connection, str: string) => string
    performOperation: (provider: Provider, cnc: Connection, op: ServerOperation) => boolean
    beginTransaction: (provider: Provider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commitTransaction: (provider: Provider, cnc: Connection, name: string) => boolean
    rollbackTransaction: (provider: Provider, cnc: Connection, name: string) => boolean
    addSavepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    rollbackSavepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    deleteSavepoint: (provider: Provider, cnc: Connection, name: string) => boolean
    statementPrepare: (provider: Provider, cnc: Connection, stmt: Statement) => boolean
    statementExecute: (provider: Provider, cnc: Connection, stmt: Statement, params: Set, modelUsage: StatementModelUsage, colTypes: GObject.Type, lastInsertedRow: Set) => GObject.Object
    getLastInserted: (provider: Provider, cnc: Connection) => Set
    padding: object[]
    static name: string
}
abstract class ProviderMetaInterface {
    /* Fields of Gda-6.0.Gda.ProviderMetaInterface */
    gIface: GObject.TypeInterface
    btypes: (prov: ProviderMeta) => DataModel
    udts: (prov: ProviderMeta) => DataModel
    udt: (prov: ProviderMeta, udtCatalog: string, udtSchema: string) => Row
    udtCols: (prov: ProviderMeta) => DataModel
    udtCol: (prov: ProviderMeta, udtCatalog: string, udtSchema: string, udtName: string) => Row
    enumsType: (prov: ProviderMeta) => DataModel
    enumType: (prov: ProviderMeta, udtCatalog: string, udtSchema: string, udtName: string) => Row
    domains: (prov: ProviderMeta) => DataModel
    domain: (prov: ProviderMeta, domainCatalog: string, domainSchema: string) => Row
    domainsConstraints: (prov: ProviderMeta) => DataModel
    domainConstraints: (prov: ProviderMeta, domainCatalog: string, domainSchema: string, domainName: string) => DataModel
    domainConstraint: (prov: ProviderMeta, domainCatalog: string, domainSchema: string, domainName: string, constraintName: string) => Row
    elementTypes: (prov: ProviderMeta) => DataModel
    elementType: (prov: ProviderMeta, specificName: string) => Row
    collations: (prov: ProviderMeta) => DataModel
    collation: (prov: ProviderMeta, collationCatalog: string, collationSchema: string, collationNameN: string) => Row
    characterSets: (prov: ProviderMeta) => DataModel
    characterSet: (prov: ProviderMeta, chsetCatalog: string, chsetSchema: string, chsetNameN: string) => Row
    schematas: (prov: ProviderMeta) => DataModel
    schemata: (prov: ProviderMeta, catalogName: string, schemaNameN: string) => Row
    tablesColumns: (prov: ProviderMeta) => DataModel
    tables: (prov: ProviderMeta) => DataModel
    table: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableNameN: string) => Row
    views: (prov: ProviderMeta) => DataModel
    view: (prov: ProviderMeta, viewCatalog: string, viewSchema: string, viewNameN: string) => Row
    columns: (prov: ProviderMeta) => DataModel
    tableColumns: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string) => DataModel
    tableColumn: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, columnName: string) => Row
    viewsColumns: (prov: ProviderMeta) => DataModel
    viewColumns: (prov: ProviderMeta, viewCatalog: string, viewSchema: string, viewName: string) => DataModel
    viewColumn: (prov: ProviderMeta, viewCatalog: string, viewSchema: string, viewName: string, columnName: string) => Row
    constraintsTables: (prov: ProviderMeta) => DataModel
    constraintsTable: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string) => DataModel
    constraintTable: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, constraintNameN: string) => Row
    constraintsRef: (prov: ProviderMeta) => DataModel
    constraintsRefTable: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string) => DataModel
    constraintRef: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, constraintName: string) => Row
    keyColumns: (prov: ProviderMeta) => DataModel
    keyColumn: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, constraintName: string) => Row
    checkColumns: (prov: ProviderMeta) => DataModel
    checkColumn: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, constraintName: string) => Row
    triggers: (prov: ProviderMeta) => DataModel
    trigger: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string) => Row
    routines: (prov: ProviderMeta) => DataModel
    routine: (prov: ProviderMeta, routineCatalog: string, routineSchema: string, routineNameN: string) => Row
    routinesCol: (prov: ProviderMeta) => DataModel
    routineCol: (prov: ProviderMeta, routCatalog: string, routSchema: string, routName: string) => Row
    routinesPars: (prov: ProviderMeta) => DataModel
    routinePars: (prov: ProviderMeta, routCatalog: string, routSchema: string, routName: string) => Row
    indexesTables: (prov: ProviderMeta) => DataModel
    indexesTable: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string) => DataModel
    indexTable: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, indexNameN: string) => Row
    indexCols: (prov: ProviderMeta) => DataModel
    indexCol: (prov: ProviderMeta, tableCatalog: string, tableSchema: string, tableName: string, indexName: string) => Row
    padding: object[]
    static name: string
}
class QuarkList {
    /* Methods of Gda-6.0.Gda.QuarkList */
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
    /* Static methods and pseudo-constructors */
    static new(): QuarkList
    static newFromString(string: string): QuarkList
}
abstract class RepetitiveStatementClass {
    /* Fields of Gda-6.0.Gda.RepetitiveStatementClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RowClass {
    /* Fields of Gda-6.0.Gda.RowClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ServerOperationClass {
    /* Fields of Gda-6.0.Gda.ServerOperationClass */
    parentClass: GObject.ObjectClass
    seqItemAdded: (op: ServerOperation, seqPath: string, itemIndex: number) => void
    seqItemRemove: (op: ServerOperation, seqPath: string, itemIndex: number) => void
    static name: string
}
class ServerOperationCreateTableArg {
    /* Methods of Gda-6.0.Gda.ServerOperationCreateTableArg */
    copy(): ServerOperationCreateTableArg
    free(): void
    getColumnName(): string
    getColumnType(): GObject.Type
    getFkeyOndelete(): string
    getFkeyOnupdate(): string
    getFkeyRefs(): ServerOperationCreateTableArgFKeyRefField[]
    getFkeyTable(): string
    getFlags(): ServerOperationCreateTableFlag
    setColumnName(name: string): void
    setColumnType(ctype: GObject.Type): void
    setFkeyOndelete(action: string): void
    setFkeyOndupdate(action: string): void
    setFkeyRefs(refs: ServerOperationCreateTableArgFKeyRefField[]): void
    setFkeyTable(name: string): void
    setFlags(flags: ServerOperationCreateTableFlag): void
    static name: string
    static new(): ServerOperationCreateTableArg
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ServerOperationCreateTableArg
}
class ServerOperationCreateTableArgFKeyRefField {
    /* Methods of Gda-6.0.Gda.ServerOperationCreateTableArgFKeyRefField */
    copy(): ServerOperationCreateTableArgFKeyRefField
    free(): void
    getLocalField(): string
    getReferencedField(): string
    setLocalField(name: string): void
    setReferencedField(name: string): void
    static name: string
    static new(): ServerOperationCreateTableArgFKeyRefField
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ServerOperationCreateTableArgFKeyRefField
}
class ServerOperationNode {
    /* Fields of Gda-6.0.Gda.ServerOperationNode */
    type: ServerOperationNodeType
    status: ServerOperationNodeStatus
    plist: Set
    model: DataModel
    column: Column
    param: Holder
    priv: object
    /* Methods of Gda-6.0.Gda.ServerOperationNode */
    copy(): ServerOperationNode
    free(): void
    static name: string
}
class ServerProviderBase {
    /* Fields of Gda-6.0.Gda.ServerProviderBase */
    getName: (provider: ServerProvider) => string
    getVersion: (provider: ServerProvider) => string
    getServerVersion: (provider: ServerProvider, cnc: Connection) => string
    supportsFeature: (provider: ServerProvider, cnc: Connection, feature: ConnectionFeature) => boolean
    createWorker: (provider: ServerProvider, forCnc: boolean) => Worker
    getDefDbmsType: (provider: ServerProvider, cnc: Connection, gType: GObject.Type) => string
    supportsOperation: (provider: ServerProvider, cnc: Connection, type: ServerOperationType, options: Set) => boolean
    renderOperation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => string
    identifierQuote: (provider: ServerProvider, cnc: Connection, id: string, forMetaStore: boolean, forceQuotes: boolean) => string
    statementRewrite: (provider: ServerProvider, cnc: Connection, stmt: Statement, params: Set) => SqlStatement
    openConnection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    prepareConnection: (provider: ServerProvider, cnc: Connection, params: QuarkList, auth: QuarkList) => boolean
    closeConnection: (provider: ServerProvider, cnc: Connection) => boolean
    escapeString: (provider: ServerProvider, cnc: Connection, str: string) => string
    unescapeString: (provider: ServerProvider, cnc: Connection, str: string) => string
    performOperation: (provider: ServerProvider, cnc: Connection, op: ServerOperation) => boolean
    beginTransaction: (provider: ServerProvider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    commitTransaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollbackTransaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    addSavepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    rollbackSavepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    deleteSavepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    statementPrepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
    static name: string
}
abstract class ServerProviderClass {
    /* Fields of Gda-6.0.Gda.ServerProviderClass */
    parentClass: GObject.ObjectClass
    functionsSets: object[]
    static name: string
}
class ServerProviderConnectionData {
    /* Fields of Gda-6.0.Gda.ServerProviderConnectionData */
    worker: Worker
    providerDataDestroyFunc: GLib.DestroyNotify
    pad1: object
    pad2: object
    static name: string
}
class ServerProviderHandlerInfo {
    /* Fields of Gda-6.0.Gda.ServerProviderHandlerInfo */
    cnc: Connection
    gType: GObject.Type
    dbmsType: string
    static name: string
}
class ServerProviderMeta {
    /* Fields of Gda-6.0.Gda.ServerProviderMeta */
    udt: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any) => boolean
    udtCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any, udtName: any) => boolean
    enums: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any, udtName: any) => boolean
    domains: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domainCatalog: any, domainSchema: any) => boolean
    constraintsDom: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domainCatalog: any, domainSchema: any, domainName: any) => boolean
    elTypes: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, specificName: any) => boolean
    collations: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, collationCatalog: any, collationSchema: any, collationNameN: any) => boolean
    characterSets: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, chsetCatalog: any, chsetSchema: any, chsetNameN: any) => boolean
    schemata: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, catalogName: any, schemaNameN: any) => boolean
    tablesViews: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableNameN: any) => boolean
    columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any) => boolean
    viewCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, viewCatalog: any, viewSchema: any, viewName: any) => boolean
    constraintsTab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintNameN: any) => boolean
    constraintsRef: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    keyColumns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    checkColumns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    triggers: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any) => boolean
    routines: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routineCatalog: any, routineSchema: any, routineNameN: any) => boolean
    routineCol: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routCatalog: any, routSchema: any, routName: any, colName: any, ordinalPosition: any) => boolean
    routinePar: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routCatalog: any, routSchema: any, routName: any) => boolean
    indexesTab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, indexNameN: any) => boolean
    indexCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, indexName: any) => boolean
    static name: string
}
class ServerProviderXa {
    /* Fields of Gda-6.0.Gda.ServerProviderXa */
    xaStart: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaEnd: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaPrepare: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaCommit: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    xaRollback: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    static name: string
}
abstract class SetClass {
    /* Fields of Gda-6.0.Gda.SetClass */
    parentClass: GObject.ObjectClass
    validateHolderChange: (set: Set, holder: Holder, newValue: any) => GLib.Error
    validateSet: (set: Set) => GLib.Error
    holderChanged: (set: Set, holder: Holder) => void
    holderAttrChanged: (set: Set, holder: Holder, attrName: string, attrValue: any) => void
    publicDataChanged: (set: Set) => void
    holderTypeSet: (set: Set, holder: Holder) => void
    sourceModelChanged: (set: Set, source: SetSource) => void
    static name: string
}
class SetGroup {
    /* Methods of Gda-6.0.Gda.SetGroup */
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
    /* Static methods and pseudo-constructors */
    static new(node: SetNode): SetGroup
}
class SetNode {
    /* Methods of Gda-6.0.Gda.SetNode */
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
    /* Static methods and pseudo-constructors */
    static new(holder: Holder): SetNode
}
class SetSource {
    /* Methods of Gda-6.0.Gda.SetSource */
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
    /* Static methods and pseudo-constructors */
    static new(model: DataModel): SetSource
}
class SqlAnyPart {
    /* Fields of Gda-6.0.Gda.SqlAnyPart */
    type: SqlAnyPartType
    parent: SqlAnyPart
    /* Methods of Gda-6.0.Gda.SqlAnyPart */
    checkStructure(): boolean
    foreach(func: SqlForeachFunc): boolean
    static name: string
}
abstract class SqlBuilderClass {
    /* Fields of Gda-6.0.Gda.SqlBuilderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class SqlCase {
    /* Fields of Gda-6.0.Gda.SqlCase */
    any: SqlAnyPart
    baseExpr: SqlExpr
    whenExprList: object[]
    thenExprList: object[]
    elseExpr: SqlExpr
    /* Methods of Gda-6.0.Gda.SqlCase */
    copy(): SqlCase
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlCase
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlCase
}
class SqlExpr {
    /* Fields of Gda-6.0.Gda.SqlExpr */
    any: SqlAnyPart
    value: any
    paramSpec: SqlParamSpec
    func: SqlFunction
    cond: SqlOperation
    select: SqlAnyPart
    caseS: SqlCase
    castAs: string
    valueIsIdent: boolean
    /* Methods of Gda-6.0.Gda.SqlExpr */
    copy(): SqlExpr
    free(): void
    serialize(): string
    takeSelect(stmt: SqlStatement): void
    static name: string
    static new(parent: SqlAnyPart): SqlExpr
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlExpr
}
class SqlField {
    /* Fields of Gda-6.0.Gda.SqlField */
    any: SqlAnyPart
    fieldName: string
    validityMetaTableColumn: MetaTableColumn
    /* Methods of Gda-6.0.Gda.SqlField */
    copy(): SqlField
    free(): void
    serialize(): string
    takeName(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlField
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlField
}
class SqlFunction {
    /* Fields of Gda-6.0.Gda.SqlFunction */
    any: SqlAnyPart
    functionName: string
    argsList: object[]
    /* Methods of Gda-6.0.Gda.SqlFunction */
    checkClean(): void
    copy(): SqlFunction
    free(): void
    serialize(): string
    takeArgsList(args: SqlExpr[]): void
    takeName(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlFunction
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlFunction
}
class SqlOperation {
    /* Fields of Gda-6.0.Gda.SqlOperation */
    any: SqlAnyPart
    operatorType: SqlOperatorType
    operands: SqlExpr[]
    /* Methods of Gda-6.0.Gda.SqlOperation */
    copy(): SqlOperation
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlOperation
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlOperation
    static operatorFromString(op: string): SqlOperatorType
    static operatorToString(op: SqlOperatorType): string
}
class SqlParamSpec {
    /* Fields of Gda-6.0.Gda.SqlParamSpec */
    name: string
    descr: string
    isParam: boolean
    nullok: boolean
    gType: GObject.Type
    validityMetaDict: object
    gdaReserved1: object
    gdaReserved2: object
    /* Methods of Gda-6.0.Gda.SqlParamSpec */
    copy(): SqlParamSpec
    free(): void
    serialize(): string
    takeDescr(value: any): void
    takeName(value: any): void
    takeNullok(value: any): void
    takeType(value: any): void
    static name: string
    static new(simpleSpec: any): SqlParamSpec
    constructor(simpleSpec: any)
    /* Static methods and pseudo-constructors */
    static new(simpleSpec: any): SqlParamSpec
}
abstract class SqlParserClass {
    /* Fields of Gda-6.0.Gda.SqlParserClass */
    parentClass: GObject.ObjectClass
    delimAlloc: (f: object) => object
    delimFree: (d: object, f: object) => void
    delimTrace: (d: object, s: string) => void
    delimParse: (d: object, i: number, v: any, iface: SqlParserIface) => void
    delimTokensTrans: number
    parserAlloc: (f: object) => object
    parserFree: (p: object, f: object) => void
    parserTrace: (p: object, s: string) => void
    parserParse: (p: object, i: number, v: any, iface: SqlParserIface) => void
    parserTokensTrans: number
    static name: string
}
class SqlParserIface {
    /* Fields of Gda-6.0.Gda.SqlParserIface */
    parser: SqlParser
    parsedStatement: SqlStatement
    static name: string
}
class SqlSelectField {
    /* Fields of Gda-6.0.Gda.SqlSelectField */
    any: SqlAnyPart
    expr: SqlExpr
    fieldName: string
    tableName: string
    as: string
    validityMetaObject: MetaDbObject
    validityMetaTableColumn: MetaTableColumn
    /* Methods of Gda-6.0.Gda.SqlSelectField */
    copy(): SqlSelectField
    free(): void
    serialize(): string
    takeAlias(alias: any): void
    takeExpr(expr: SqlExpr): void
    takeStarValue(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlSelectField
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectField
}
class SqlSelectFrom {
    /* Fields of Gda-6.0.Gda.SqlSelectFrom */
    any: SqlAnyPart
    targets: SqlSelectTarget[]
    joins: SqlSelectJoin[]
    /* Methods of Gda-6.0.Gda.SqlSelectFrom */
    copy(): SqlSelectFrom
    free(): void
    serialize(): string
    takeNewJoin(join: SqlSelectJoin): void
    takeNewTarget(target: SqlSelectTarget): void
    static name: string
    static new(parent: SqlAnyPart): SqlSelectFrom
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectFrom
}
class SqlSelectJoin {
    /* Fields of Gda-6.0.Gda.SqlSelectJoin */
    any: SqlAnyPart
    type: SqlSelectJoinType
    position: number
    expr: SqlExpr
    use: object[]
    /* Methods of Gda-6.0.Gda.SqlSelectJoin */
    copy(): SqlSelectJoin
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlSelectJoin
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectJoin
    static typeToString(type: SqlSelectJoinType): string
}
class SqlSelectOrder {
    /* Fields of Gda-6.0.Gda.SqlSelectOrder */
    any: SqlAnyPart
    expr: SqlExpr
    asc: boolean
    collationName: string
    /* Methods of Gda-6.0.Gda.SqlSelectOrder */
    copy(): SqlSelectOrder
    free(): void
    serialize(): string
    static name: string
    static new(parent: SqlAnyPart): SqlSelectOrder
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectOrder
}
class SqlSelectTarget {
    /* Fields of Gda-6.0.Gda.SqlSelectTarget */
    any: SqlAnyPart
    expr: SqlExpr
    tableName: string
    as: string
    validityMetaObject: MetaDbObject
    /* Methods of Gda-6.0.Gda.SqlSelectTarget */
    copy(): SqlSelectTarget
    free(): void
    serialize(): string
    takeAlias(alias: any): void
    takeSelect(stmt: SqlStatement): void
    takeTableName(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlSelectTarget
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlSelectTarget
}
class SqlStatement {
    /* Fields of Gda-6.0.Gda.SqlStatement */
    sql: string
    stmtType: SqlStatementType
    contents: object
    validityMetaStruct: MetaStruct
    /* Methods of Gda-6.0.Gda.SqlStatement */
    checkClean(): void
    checkStructure(): boolean
    checkValidity(cnc?: Connection | null): boolean
    checkValidityM(mstruct?: MetaStruct | null): boolean
    compoundSetType(type: SqlStatementCompoundType): void
    compoundTakeStmt(s: SqlStatement): void
    copy(): SqlStatement
    deleteTakeCondition(cond: SqlExpr): void
    deleteTakeTableName(value: any): void
    free(): void
    insertTake1ValuesList(list: SqlExpr[]): void
    insertTakeExtraValuesList(list: SqlExpr[]): void
    insertTakeFieldsList(list: SqlField[]): void
    insertTakeOnConflict(value: any): void
    insertTakeSelect(select: SqlStatement): void
    insertTakeTableName(value: any): void
    normalize(cnc?: Connection | null): boolean
    selectTakeDistinct(distinct: boolean, distinctExpr?: SqlExpr | null): void
    selectTakeExprList(exprList: SqlSelectField[]): void
    selectTakeFrom(from: SqlSelectFrom): void
    selectTakeGroupBy(groupBy: SqlExpr[]): void
    selectTakeHavingCond(expr: SqlExpr): void
    selectTakeLimits(count: SqlExpr, offset: SqlExpr): void
    selectTakeOrderBy(orderBy: SqlSelectOrder[]): void
    selectTakeWhereCond(expr: SqlExpr): void
    serialize(): string
    transSetIsolLevel(level: TransactionIsolation): void
    transTakeMode(value: any): void
    transTakeName(value: any): void
    unknownTakeExpressions(expressions: SqlExpr[]): void
    updateTakeCondition(cond: SqlExpr): void
    updateTakeOnConflict(value: any): void
    updateTakeSetValue(fname: any, expr: SqlExpr): void
    updateTakeTableName(value: any): void
    static name: string
    static new(type: SqlStatementType): SqlStatement
    constructor(type: SqlStatementType)
    /* Static methods and pseudo-constructors */
    static new(type: SqlStatementType): SqlStatement
    static getContentsInfos(type: SqlStatementType): SqlStatementContentsInfo
    static stringToType(type: string): SqlStatementType
    static typeToString(type: SqlStatementType): string
}
class SqlStatementCheckValidityData {
    /* Fields of Gda-6.0.Gda.SqlStatementCheckValidityData */
    cnc: Connection
    store: MetaStore
    mstruct: MetaStruct
    static name: string
}
class SqlStatementCompound {
    /* Fields of Gda-6.0.Gda.SqlStatementCompound */
    any: SqlAnyPart
    compoundType: SqlStatementCompoundType
    stmtList: object[]
    static name: string
}
class SqlStatementContentsInfo {
    /* Fields of Gda-6.0.Gda.SqlStatementContentsInfo */
    type: SqlStatementType
    name: string
    construct: () => object
    free: (stm: object) => void
    copy: (stm: object) => object
    serialize: (stm: object) => string
    checkStructureFunc: SqlForeachFunc
    checkValidityFunc: SqlForeachFunc
    static name: string
}
class SqlStatementDelete {
    /* Fields of Gda-6.0.Gda.SqlStatementDelete */
    any: SqlAnyPart
    table: SqlTable
    cond: SqlExpr
    static name: string
}
class SqlStatementInsert {
    /* Fields of Gda-6.0.Gda.SqlStatementInsert */
    any: SqlAnyPart
    onConflict: string
    table: SqlTable
    fieldsList: object[]
    valuesList: object[]
    select: SqlAnyPart
    static name: string
}
class SqlStatementSelect {
    /* Fields of Gda-6.0.Gda.SqlStatementSelect */
    any: SqlAnyPart
    distinct: boolean
    distinctExpr: SqlExpr
    exprList: object[]
    from: SqlSelectFrom
    whereCond: SqlExpr
    groupBy: object[]
    havingCond: SqlExpr
    orderBy: object[]
    limitCount: SqlExpr
    limitOffset: SqlExpr
    static name: string
}
class SqlStatementTransaction {
    /* Fields of Gda-6.0.Gda.SqlStatementTransaction */
    any: SqlAnyPart
    isolationLevel: TransactionIsolation
    transMode: string
    transName: string
    static name: string
}
class SqlStatementUnknown {
    /* Fields of Gda-6.0.Gda.SqlStatementUnknown */
    any: SqlAnyPart
    expressions: object[]
    static name: string
}
class SqlStatementUpdate {
    /* Fields of Gda-6.0.Gda.SqlStatementUpdate */
    any: SqlAnyPart
    onConflict: string
    table: SqlTable
    fieldsList: object[]
    exprList: object[]
    cond: SqlExpr
    static name: string
}
class SqlTable {
    /* Fields of Gda-6.0.Gda.SqlTable */
    any: SqlAnyPart
    tableName: string
    validityMetaObject: MetaDbObject
    /* Methods of Gda-6.0.Gda.SqlTable */
    copy(): SqlTable
    free(): void
    serialize(): string
    takeName(value: any): void
    static name: string
    static new(parent: SqlAnyPart): SqlTable
    constructor(parent: SqlAnyPart)
    /* Static methods and pseudo-constructors */
    static new(parent: SqlAnyPart): SqlTable
}
abstract class StatementClass {
    /* Fields of Gda-6.0.Gda.StatementClass */
    parentClass: GObject.ObjectClass
    checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    reset: (stmt: Statement) => void
    static name: string
}
class Text {
    /* Methods of Gda-6.0.Gda.Text */
    free(): void
    getString(): string
    setString(str: string): void
    takeString(str: string): void
    static name: string
    static new(): Text
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Text
    static toAlphanum(text: string): string
}
class Time {
    /* Methods of Gda-6.0.Gda.Time */
    copy(): Time
    free(): void
    getFraction(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    getTimezone(): number
    getTz(): GLib.TimeZone
    setFraction(fraction: number): void
    setHour(hour: number): void
    setMinute(minute: number): void
    setSecond(second: number): void
    setTimezone(timezone: number): void
    toString(): string
    toStringLocal(): string
    toStringUtc(): string
    toTimezone(ntz: GLib.TimeZone): Time
    toUtc(): Time
    valid(): boolean
    static name: string
    static new(): Time
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Time
    static newFromDateTime(dt: GLib.DateTime): Time
    static newFromValues(hour: number, minute: number, second: number, fraction: number, timezone: number): Time
}
abstract class TransactionStatusClass {
    /* Fields of Gda-6.0.Gda.TransactionStatusClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class TransactionStatusEvent {
    /* Fields of Gda-6.0.Gda.TransactionStatusEvent */
    trans: TransactionStatus
    type: TransactionStatusEventType
    connEvent: ConnectionEvent
    static name: string
}
abstract class TreeClass {
    /* Fields of Gda-6.0.Gda.TreeClass */
    objectClass: GObject.ObjectClass
    nodeChanged: (tree: Tree, node: TreeNode) => void
    nodeInserted: (tree: Tree, node: TreeNode) => void
    nodeHasChildToggled: (tree: Tree, node: TreeNode) => void
    nodeDeleted: (tree: Tree, nodePath: string) => void
    static name: string
}
abstract class TreeManagerClass {
    /* Fields of Gda-6.0.Gda.TreeManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TreeMgrColumnsClass {
    /* Fields of Gda-6.0.Gda.TreeMgrColumnsClass */
    objectClass: TreeManagerClass
    static name: string
}
abstract class TreeMgrLabelClass {
    /* Fields of Gda-6.0.Gda.TreeMgrLabelClass */
    parentClass: TreeManagerClass
    static name: string
}
abstract class TreeMgrSchemasClass {
    /* Fields of Gda-6.0.Gda.TreeMgrSchemasClass */
    objectClass: TreeManagerClass
    static name: string
}
abstract class TreeMgrSelectClass {
    /* Fields of Gda-6.0.Gda.TreeMgrSelectClass */
    objectClass: TreeManagerClass
    static name: string
}
abstract class TreeMgrTablesClass {
    /* Fields of Gda-6.0.Gda.TreeMgrTablesClass */
    objectClass: TreeManagerClass
    static name: string
}
abstract class TreeNodeClass {
    /* Fields of Gda-6.0.Gda.TreeNodeClass */
    objectClass: GObject.ObjectClass
    nodeChanged: (reporting: TreeNode, node: TreeNode) => void
    nodeInserted: (reporting: TreeNode, node: TreeNode) => void
    nodeHasChildToggled: (reporting: TreeNode, node: TreeNode) => void
    nodeDeleted: (reporting: TreeNode, relativePath: string) => void
    dumpHeader: (node: TreeNode) => string
    dumpChildren: (node: TreeNode, prefix: string, inString: GLib.String) => void
    static name: string
}
class Worker {
    /* Methods of Gda-6.0.Gda.Worker */
    cancelJob(jobId: number): boolean
    doJob(context: GLib.MainContext | null, timeoutMs: number, outResult: object | null, outJobId: number | null, func: WorkerFunc, dataDestroyFunc?: GLib.DestroyNotify | null): boolean
    fetchJobResult(jobId: number, outResult?: object | null): boolean
    forgetJob(jobId: number): void
    getWorkerThread(): GLib.Thread
    ref(): Worker
    setCallback(context?: GLib.MainContext | null, callback?: WorkerCallback | null): boolean
    submitJob(callbackContext: GLib.MainContext | null, func: WorkerFunc, dataDestroyFunc?: GLib.DestroyNotify | null): number
    threadIsWorker(): boolean
    unref(): void
    waitJob(func: WorkerFunc): object | null
    static name: string
    static new(): Worker
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Worker
    static errorQuark(): GLib.Quark
    static newUnique(location: Worker, allowDestroy: boolean): Worker
}
abstract class XaTransactionClass {
    /* Fields of Gda-6.0.Gda.XaTransactionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class XaTransactionId {
    /* Fields of Gda-6.0.Gda.XaTransactionId */
    format: number
    gtridLength: number
    bqualLength: number
    data: number[]
    /* Methods of Gda-6.0.Gda.XaTransactionId */
    toString(): string
    static name: string
}
type SqlBuilderId = number
}
export default Gda