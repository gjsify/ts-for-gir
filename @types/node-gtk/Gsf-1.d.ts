/**
 * Gsf-1
 */

/// <reference types="node" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Gsf {

export enum ClipFormat {
    WINDOWS_CLIPBOARD,
    MACINTOSH_CLIPBOARD,
    GUID,
    NO_DATA,
    CLIPBOARD_FORMAT_NAME,
    UNKNOWN,
}
export enum ClipFormatWindows {
    ERROR,
    UNKNOWN,
    METAFILE,
    DIB,
    ENHANCED_METAFILE,
}
export enum Error {
    OUT_OF_MEMORY,
    INVALID_DATA,
}
export enum OutputCsvQuotingMode {
    NEVER,
    AUTO,
    ALWAYS,
}
export enum XMLContent {
    NO_CONTENT,
    CONTENT,
    SHARED_CONTENT,
    /* 2ND (invalid, starts with a number) */
}
export enum ZipCompressionMethod {
    STORED,
    SHRUNK,
    REDUCEDX1,
    REDUCEDX2,
    REDUCEDX3,
    REDUCEDX4,
    IMPLODED,
    TOKENIZED,
    DEFLATED,
    DEFLATED_BETTER,
    IMPLODED_BETTER,
}
export const META_NAME_BYTE_COUNT: string
export const META_NAME_CASE_SENSITIVE: string
export const META_NAME_CATEGORY: string
export const META_NAME_CELL_COUNT: string
export const META_NAME_CHARACTER_COUNT: string
export const META_NAME_CODEPAGE: string
export const META_NAME_COMPANY: string
export const META_NAME_CREATOR: string
export const META_NAME_DATE_CREATED: string
export const META_NAME_DATE_MODIFIED: string
export const META_NAME_DESCRIPTION: string
export const META_NAME_DICTIONARY: string
export const META_NAME_DOCUMENT_PARTS: string
export const META_NAME_EDITING_DURATION: string
export const META_NAME_GENERATOR: string
export const META_NAME_HEADING_PAIRS: string
export const META_NAME_HIDDEN_SLIDE_COUNT: string
export const META_NAME_IMAGE_COUNT: string
export const META_NAME_INITIAL_CREATOR: string
export const META_NAME_KEYWORD: string
export const META_NAME_KEYWORDS: string
export const META_NAME_LANGUAGE: string
export const META_NAME_LAST_PRINTED: string
export const META_NAME_LAST_SAVED_BY: string
export const META_NAME_LINE_COUNT: string
export const META_NAME_LINKS_DIRTY: string
export const META_NAME_LOCALE_SYSTEM_DEFAULT: string
export const META_NAME_MANAGER: string
export const META_NAME_MM_CLIP_COUNT: string
export const META_NAME_MSOLE_UNKNOWN_17: string
export const META_NAME_MSOLE_UNKNOWN_18: string
export const META_NAME_MSOLE_UNKNOWN_19: string
export const META_NAME_MSOLE_UNKNOWN_20: string
export const META_NAME_MSOLE_UNKNOWN_21: string
export const META_NAME_MSOLE_UNKNOWN_22: string
export const META_NAME_MSOLE_UNKNOWN_23: string
export const META_NAME_NOTE_COUNT: string
export const META_NAME_OBJECT_COUNT: string
export const META_NAME_PAGE_COUNT: string
export const META_NAME_PARAGRAPH_COUNT: string
export const META_NAME_PRESENTATION_FORMAT: string
export const META_NAME_PRINTED_BY: string
export const META_NAME_PRINT_DATE: string
export const META_NAME_REVISION_COUNT: string
export const META_NAME_SCALE: string
export const META_NAME_SECURITY: string
export const META_NAME_SLIDE_COUNT: string
export const META_NAME_SPREADSHEET_COUNT: string
export const META_NAME_SUBJECT: string
export const META_NAME_TABLE_COUNT: string
export const META_NAME_TEMPLATE: string
export const META_NAME_THUMBNAIL: string
export const META_NAME_TITLE: string
export const META_NAME_WORD_COUNT: string
export function base64DecodeSimple(data: any, len: number): number
export function base64DecodeStep(in_: any, len: number, out: any, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function base64EncodeClose(in_: any, breakLines: boolean, out: any, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function base64EncodeSimple(data: any, len: number): number
export function base64EncodeStep(in_: any, len: number, breakLines: boolean, out: any, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function debugFlag(flag: string): boolean
export function docMetaDump(meta: DocMetaData): void
export function errorQuark(): GLib.Quark
export function extensionPointer(path: string): string
export function filenameToUtf8(filename: string, quoted: boolean): string
export function init(): void
export function initDynamic(module: GObject.TypeModule): void
export function leGetDouble(p?: object | null): number
export function leGetFloat(p?: object | null): number
export function leGetGuint64(p?: object | null): number
export function leSetDouble(p: object | null, d: number): void
export function leSetFloat(p: object | null, f: number): void
export function memDump(ptr: number, len: number): void
export function msoleCodepageToLid(codepage: number): number
export function msoleIconvWinCodepage(): number
export function msoleInflate(input: Input, offset: gsf_off_t): any
export function msoleLanguageForLid(lid: number): string
export function msoleLidForLanguage(lang?: string | null): number
export function msoleLidToCodepage(lid: number): number
export function msoleLidToCodepageStr(lid: number): string
export function odfGetNs(): XMLInNS
export function odfGetVersion(): number
export function odfGetVersionString(): string
export function openPkgErrorId(): number
export function openPkgForeachRel(opkg: Input, func: OpenPkgIter): void
export function openPkgOpenRel(opkg: Input, rel: OpenPkgRel): Input
export function openPkgOpenRelById(opkg: Input, id: string): Input
export function openPkgOpenRelByType(opkg: Input, type: string): Input
export function openPkgParseRelById(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error
export function propertySettingsFind(name: string, params: GObject.Parameter[]): GObject.Parameter
export function propertySettingsFree(params: GObject.Parameter[]): void
export function shutdown(): void
export function shutdownDynamic(module: GObject.TypeModule): void
export function valueGetDocpropArray(value: any): any
export function valueGetDocpropVarray(value: any): GObject.ValueArray
export function valueGetDocpropVector(value: any): DocPropVector
export function vbaInflate(input: Input, offset: gsf_off_t, size: number, addNullTerminator: boolean): number
export function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number
export function xmlGvalueFromStr(res: any, t: GObject.Type, str: string): boolean
export function xmlProbe(input: Input, func: XMLProbeFunc): boolean
export interface OpenPkgIter {
    (opkg: Input, rel: OpenPkgRel): void
}
export interface XMLInExtDtor {
    (xin: XMLIn, oldState?: object | null): void
}
export interface XMLInUnknownFunc {
    (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean
}
export interface XMLProbeFunc {
    (name: libxml2.Char, prefix: libxml2.Char, uRI: libxml2.Char, nbNamespaces: number, namespaces: libxml2.Char, nbAttributes: number, nbDefaulted: number, attributes: libxml2.Char): boolean
}
export interface Blob_ConstructProps extends GObject.Object_ConstructProps {
}
export class Blob {
    /* Fields of Gsf.Blob */
    object: GObject.Object
    priv: BlobPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Blob */
    getSize(): number
    peekData(): object | null
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Blob_ConstructProps)
    _init (config?: Blob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataToCopy: any): Blob
    static $gtype: GObject.Type
}
export interface ClipData_ConstructProps extends GObject.Object_ConstructProps {
}
export class ClipData {
    /* Fields of Gsf.ClipData */
    object: GObject.Object
    priv: ClipDataPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.ClipData */
    getDataBlob(): Blob
    getFormat(): ClipFormat
    getWindowsClipboardFormat(): ClipFormatWindows
    peekRealData(retSize: number): object | null
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClipData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClipData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClipData_ConstructProps)
    _init (config?: ClipData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ClipFormat, dataBlob: Blob): ClipData
    static $gtype: GObject.Type
}
export interface DocMetaData_ConstructProps extends GObject.Object_ConstructProps {
}
export class DocMetaData {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.DocMetaData */
    foreach(func: GLib.HFunc): void
    insert(name: string, value: any): void
    lookup(name: string): DocProp | null
    odfSubtree(doc: XMLIn): void
    readFromMsole(in_: Input): GLib.Error
    readFromOdf(input: Input): GLib.Error
    remove(name: string): void
    size(): number
    steal(name: string): DocProp | null
    store(prop: DocProp): void
    writeToMsole(out: Output, docNotComponent: boolean): boolean
    writeToOdf(output: XMLOut): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocMetaData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocMetaData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocMetaData_ConstructProps)
    _init (config?: DocMetaData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocMetaData
    static $gtype: GObject.Type
}
export interface DocPropVector_ConstructProps extends GObject.Object_ConstructProps {
}
export class DocPropVector {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.DocPropVector */
    append(value: any): void
    asString(): string
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocPropVector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocPropVector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocPropVector_ConstructProps)
    _init (config?: DocPropVector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocPropVector
    static $gtype: GObject.Type
}
export interface Infile_ConstructProps extends Input_ConstructProps {
}
export class Infile {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Infile_ConstructProps)
    _init (config?: Infile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InfileMSOle_ConstructProps extends Infile_ConstructProps {
}
export class InfileMSOle {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.InfileMSOle */
    getClassId(res: number): boolean
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileMSOle_ConstructProps)
    _init (config?: InfileMSOle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileMSOle
    static $gtype: GObject.Type
}
export interface InfileMSVBA_ConstructProps extends Infile_ConstructProps {
}
export class InfileMSVBA {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.InfileMSVBA */
    getModules(): GLib.HashTable | null
    stealModules(): GLib.HashTable | null
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileMSVBA_ConstructProps)
    _init (config?: InfileMSVBA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Infile): InfileMSVBA
    static $gtype: GObject.Type
}
export interface InfileStdio_ConstructProps extends Infile_ConstructProps {
}
export class InfileStdio {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileStdio_ConstructProps)
    _init (config?: InfileStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(root: string): InfileStdio
    static $gtype: GObject.Type
}
export interface InfileTar_ConstructProps extends Infile_ConstructProps {
    source?: Input
}
export class InfileTar {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileTar_ConstructProps)
    _init (config?: InfileTar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileTar
    static $gtype: GObject.Type
}
export interface InfileZip_ConstructProps extends Infile_ConstructProps {
    internalParent?: InfileZip
    source?: Input
}
export class InfileZip {
    /* Properties of Gsf.InfileZip */
    readonly compressionLevel: number
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compression-level", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-level", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileZip_ConstructProps)
    _init (config?: InfileZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileZip
    static $gtype: GObject.Type
}
export interface Input_ConstructProps extends GObject.Object_ConstructProps {
}
export class Input {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Input_ConstructProps)
    _init (config?: Input_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mmapNew(filename: string): Input
    static errorId(): GLib.Quark
    static $gtype: GObject.Type
}
export interface InputGZip_ConstructProps extends Input_ConstructProps {
    raw?: boolean
    source?: Input
    uncompressedSize?: number
}
export class InputGZip {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputGZip_ConstructProps)
    _init (config?: InputGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputGZip
    static $gtype: GObject.Type
}
export interface InputGio_ConstructProps extends Input_ConstructProps {
}
export class InputGio {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputGio_ConstructProps)
    _init (config?: InputGio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): InputGio
    static newForPath(path: string): InputGio
    static newForUri(uri: string): InputGio
    static $gtype: GObject.Type
}
export interface InputHTTP_ConstructProps extends Input_ConstructProps {
    contentType?: string
    url?: string
}
export class InputHTTP {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.InputHTTP */
    getContentType(): string
    getUrl(): string
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputHTTP_ConstructProps)
    _init (config?: InputHTTP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url: string): InputHTTP
    static $gtype: GObject.Type
}
export interface InputMemory_ConstructProps extends Input_ConstructProps {
}
export class InputMemory {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputMemory_ConstructProps)
    _init (config?: InputMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buf: any, needsFree: boolean): InputMemory
    static newClone(buf: any): InputMemory
    static newFromBzip(source: Input): InputMemory
    static newFromIochannel(channel: GLib.IOChannel): InputMemory
    static $gtype: GObject.Type
}
export interface InputProxy_ConstructProps extends Input_ConstructProps {
}
export class InputProxy {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputProxy_ConstructProps)
    _init (config?: InputProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputProxy
    static newSection(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy
    static $gtype: GObject.Type
}
export interface InputStdio_ConstructProps extends Input_ConstructProps {
}
export class InputStdio {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputStdio_ConstructProps)
    _init (config?: InputStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): InputStdio
    static newFILE(filename: string, file: object | null, keepOpen: boolean): InputStdio
    static $gtype: GObject.Type
}
export interface InputTextline_ConstructProps extends Input_ConstructProps {
}
export class InputTextline {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.InputTextline */
    asciiGets(): any | null
    utf8Gets(): any | null
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputTextline_ConstructProps)
    _init (config?: InputTextline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputTextline
    static $gtype: GObject.Type
}
export interface ODFOut_ConstructProps extends XMLOut_ConstructProps {
    odfVersion?: number
}
export class ODFOut {
    /* Properties of Gsf.XMLOut */
    prettyPrint: boolean
    /* Fields of Gsf.ODFOut */
    base: XMLOut
    priv: object
    /* Fields of Gsf.XMLOut */
    output: Output
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.ODFOut */
    getVersion(): number
    getVersionString(): string
    /* Methods of Gsf.XMLOut */
    addBase64(id: string | null, data: any): void
    addBool(id: string | null, val: boolean): void
    addColor(id: string | null, r: number, g: number, b: number): void
    addCstr(id?: string | null, valUtf8?: string | null): void
    addCstrUnchecked(id?: string | null, valUtf8?: string | null): void
    addEnum(id: string | null, etype: GObject.Type, val: number): void
    addFloat(id: string | null, val: number, precision: number): void
    addGvalue(id: string | null, val: any): void
    addInt(id: string | null, val: number): void
    addUint(id: string | null, val: number): void
    endElement(): string
    getOutput(): Output | null
    getPrettyPrint(): boolean
    setDocType(type: string): void
    setPrettyPrint(pp: boolean): boolean
    simpleElement(id: string, content: string): void
    simpleFloatElement(id: string, val: number, precision: number): void
    simpleIntElement(id: string, val: number): void
    startElement(id: string): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pretty-print", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ODFOut_ConstructProps)
    _init (config?: ODFOut_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Outfile_ConstructProps extends Output_ConstructProps {
}
export class Outfile {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Outfile_ConstructProps)
    _init (config?: Outfile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OutfileMSOle_ConstructProps extends Outfile_ConstructProps {
    bigBlockSize?: number
    sink?: Output
    smallBlockSize?: number
}
export class OutfileMSOle {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.OutfileMSOle */
    setClassId(clsid: any): boolean
    /* Methods of Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileMSOle_ConstructProps)
    _init (config?: OutfileMSOle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutfileMSOle
    static newFull(sink: Output, bbSize: number, sbSize: number): OutfileMSOle
    static $gtype: GObject.Type
}
export interface OutfileOpenPkg_ConstructProps extends Outfile_ConstructProps {
    contentType?: string
    isDir?: boolean
    sink?: Outfile
}
export class OutfileOpenPkg {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.OutfileOpenPkg */
    addExternRel(target: string, contentType: string): string
    relate(parent: OutfileOpenPkg, type: string): string
    setContentType(contentType: string): void
    setSink(sink: Output): void
    /* Methods of Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileOpenPkg_ConstructProps)
    _init (config?: OutfileOpenPkg_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Outfile): OutfileOpenPkg
    static $gtype: GObject.Type
}
export interface OutfileStdio_ConstructProps extends Outfile_ConstructProps {
}
export class OutfileStdio {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileStdio_ConstructProps)
    _init (config?: OutfileStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(root: string): OutfileStdio
    static $gtype: GObject.Type
}
export interface OutfileZip_ConstructProps extends Outfile_ConstructProps {
    compressionLevel?: number
    deflateLevel?: number
    entryName?: string
    sink?: Output
    zip64?: number
}
export class OutfileZip {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.OutfileZip */
    setCompressionMethod(method: ZipCompressionMethod): boolean
    /* Methods of Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileZip_ConstructProps)
    _init (config?: OutfileZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutfileZip
    static $gtype: GObject.Type
}
export interface Output_ConstructProps extends GObject.Object_ConstructProps {
    container?: Outfile
    modtime?: GLib.DateTime
    name?: string
}
export class Output {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Output_ConstructProps)
    _init (config?: Output_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorId(): GLib.Quark
    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean
    static wrap(wrapper: GObject.Object, wrapee: Output): boolean
    static $gtype: GObject.Type
}
export interface OutputBzip_ConstructProps extends Output_ConstructProps {
}
export class OutputBzip {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputBzip_ConstructProps)
    _init (config?: OutputBzip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutputBzip
    static $gtype: GObject.Type
}
export interface OutputCsv_ConstructProps extends Output_ConstructProps {
    eol?: string
    quote?: string
    quotingMode?: OutputCsvQuotingMode
    quotingOnWhitespace?: boolean
    quotingTriggers?: string
    separator?: string
    sink?: Output
}
export class OutputCsv {
    /* Properties of Gsf.OutputCsv */
    eol: string
    quote: string
    quotingMode: OutputCsvQuotingMode
    quotingOnWhitespace: boolean
    quotingTriggers: string
    separator: string
    sink: Output
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.OutputCsv */
    output: Output
    quoteLen: number
    eolLen: number
    separatorLen: number
    fieldsOnLine: boolean
    buf: GLib.String
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.OutputCsv */
    writeEol(): boolean
    writeField(field: string, len: number): boolean
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eol", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eol", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quote", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quoting-mode", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-mode", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quoting-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quoting-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quoting-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quoting-on-whitespace", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-on-whitespace", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quoting-on-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quoting-on-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quoting-on-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quoting-triggers", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-triggers", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quoting-triggers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quoting-triggers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quoting-triggers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::separator", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::separator", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::separator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::separator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::separator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputCsv_ConstructProps)
    _init (config?: OutputCsv_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OutputGZip_ConstructProps extends Output_ConstructProps {
    deflateLevel?: number
    raw?: boolean
    sink?: Output
}
export class OutputGZip {
    /* Properties of Gsf.OutputGZip */
    deflateLevel: number
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deflate-level", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deflate-level", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deflate-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deflate-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deflate-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputGZip_ConstructProps)
    _init (config?: OutputGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutputGZip
    static $gtype: GObject.Type
}
export interface OutputGio_ConstructProps extends Output_ConstructProps {
}
export class OutputGio {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputGio_ConstructProps)
    _init (config?: OutputGio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): OutputGio
    static newForPath(path: string): OutputGio
    static newForUri(uri: string): OutputGio
    static $gtype: GObject.Type
}
export interface OutputIOChannel_ConstructProps extends Output_ConstructProps {
}
export class OutputIOChannel {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputIOChannel_ConstructProps)
    _init (config?: OutputIOChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(channel: GLib.IOChannel): OutputIOChannel
    static $gtype: GObject.Type
}
export interface OutputIconv_ConstructProps extends Output_ConstructProps {
    fallback?: string
    inputCharset?: string
    outputCharset?: string
    sink?: Output
}
export class OutputIconv {
    /* Properties of Gsf.OutputIconv */
    fallback: string
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fallback", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputIconv_ConstructProps)
    _init (config?: OutputIconv_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output, dst: string, src: string): OutputIconv
    static $gtype: GObject.Type
}
export interface OutputMemory_ConstructProps extends Output_ConstructProps {
}
export class OutputMemory {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.OutputMemory */
    getBytes(): any | null
    stealBytes(): any | null
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputMemory_ConstructProps)
    _init (config?: OutputMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OutputMemory
    static $gtype: GObject.Type
}
export interface OutputStdio_ConstructProps extends Output_ConstructProps {
}
export class OutputStdio {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    wrappedBy: GObject.Object
    err: GLib.Error
    printfBuf: string
    printfBufSize: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: any): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Output */
    vfuncClose(): boolean
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfuncWrite(data: any): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputStdio_ConstructProps)
    _init (config?: OutputStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): OutputStdio
    static $gtype: GObject.Type
}
export interface SharedMemory_ConstructProps extends GObject.Object_ConstructProps {
}
export class SharedMemory {
    /* Fields of Gsf.SharedMemory */
    gObject: GObject.Object
    buf: object
    size: gsf_off_t
    needsFree: boolean
    needsUnmap: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SharedMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SharedMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SharedMemory_ConstructProps)
    _init (config?: SharedMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mmappedNew(buf: object | null, size: gsf_off_t): SharedMemory
    static new(buf: object | null, size: gsf_off_t, needsFree: boolean): SharedMemory
    static $gtype: GObject.Type
}
export interface StructuredBlob_ConstructProps extends Infile_ConstructProps {
}
export class StructuredBlob {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    gObject: GObject.Object
    curOffset: gsf_off_t
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.StructuredBlob */
    write(container: Outfile): boolean
    /* Methods of Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): any
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gsf.Infile */
    vfuncNameByIndex(i: number): string | null
    vfuncNumChildren(): number
    /* Virtual methods of Gsf.Input */
    vfuncDup(): Input | null
    vfuncOpenSibling(name: string): Input
    vfuncSeek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StructuredBlob_ConstructProps)
    _init (config?: StructuredBlob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static read(input: Input): StructuredBlob
    static $gtype: GObject.Type
}
export interface XMLOut_ConstructProps extends GObject.Object_ConstructProps {
    prettyPrint?: boolean
    sink?: Output
}
export class XMLOut {
    /* Properties of Gsf.XMLOut */
    prettyPrint: boolean
    /* Fields of Gsf.XMLOut */
    base: GObject.Object
    output: Output
    priv: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf.XMLOut */
    addBase64(id: string | null, data: any): void
    addBool(id: string | null, val: boolean): void
    addColor(id: string | null, r: number, g: number, b: number): void
    addCstr(id?: string | null, valUtf8?: string | null): void
    addCstrUnchecked(id?: string | null, valUtf8?: string | null): void
    addEnum(id: string | null, etype: GObject.Type, val: number): void
    addFloat(id: string | null, val: number, precision: number): void
    addGvalue(id: string | null, val: any): void
    addInt(id: string | null, val: number): void
    addUint(id: string | null, val: number): void
    endElement(): string
    getOutput(): Output | null
    getPrettyPrint(): boolean
    setDocType(type: string): void
    setPrettyPrint(pp: boolean): boolean
    simpleElement(id: string, content: string): void
    simpleFloatElement(id: string, val: number, precision: number): void
    simpleIntElement(id: string, val: number): void
    startElement(id: string): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pretty-print", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XMLOut_ConstructProps)
    _init (config?: XMLOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(output: Output): XMLOut
    static $gtype: GObject.Type
}
export abstract class BlobClass {
    static name: string
}
export class BlobPrivate {
    static name: string
}
export abstract class ClipDataClass {
    static name: string
}
export class ClipDataPrivate {
    static name: string
}
export class DocProp {
    /* Methods of Gsf.DocProp */
    dump(): void
    free(): void
    getLink(): string | null
    getName(): string
    getVal(): any
    setLink(link?: string | null): void
    setVal(val: any): void
    swapVal(val: any): any
    static name: string
    static new(name: string): DocProp
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): DocProp
}
export abstract class InfileClass {
    /* Fields of Gsf.InfileClass */
    inputClass: InputClass
    numChildren: (infile: Infile) => number
    nameByIndex: (infile: Infile, i: number) => string | null
    static name: string
}
export abstract class InputClass {
    /* Fields of Gsf.InputClass */
    gObjectClass: GObject.ObjectClass
    dup: (input: Input) => Input | null
    read: (input: Input, numBytes: number, optionalBuffer?: any | null) => any | null
    seek: (input: Input, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    openSibling: (input: Input, name: string) => Input
    static name: string
}
export class MSOleSortingKey {
    /* Methods of Gsf.MSOleSortingKey */
    cmp(b: MSOleSortingKey): number
    free(): void
    static name: string
    static new(name: string): MSOleSortingKey
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): MSOleSortingKey
}
export abstract class ODFOutClass {
    /* Fields of Gsf.ODFOutClass */
    base: XMLOutClass
    static name: string
}
export class OpenPkgRel {
    /* Methods of Gsf.OpenPkgRel */
    getTarget(): string
    getType(): string
    isExtern(): boolean
    static name: string
}
export class OpenPkgRels {
    static name: string
}
export abstract class OutfileClass {
    /* Fields of Gsf.OutfileClass */
    outputClass: OutputClass
    static name: string
}
export abstract class OutputClass {
    /* Fields of Gsf.OutputClass */
    gObjectClass: GObject.ObjectClass
    close: (output: Output) => boolean
    seek: (output: Output, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    write: (output: Output, data: any) => boolean
    static name: string
}
export abstract class OutputCsvClass {
    /* Fields of Gsf.OutputCsvClass */
    outputClass: OutputClass
    static name: string
}
export abstract class OutputIconvClass {
    /* Fields of Gsf.OutputIconvClass */
    outputClass: OutputClass
    static name: string
}
export class Timestamp {
    /* Fields of Gsf.Timestamp */
    date: GLib.Date
    seconds: number
    timeZone: GLib.String
    timet: number
    /* Methods of Gsf.Timestamp */
    asString(): string
    copy(): Timestamp
    equal(b: Timestamp): boolean
    free(): void
    hash(): number
    loadFromString(spec: string): number
    setTime(t: number): void
    toValue(value: any): void
    static name: string
    static new(): Timestamp
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Timestamp
}
export class XMLBlob {
    static name: string
}
export class XMLIn {
    /* Fields of Gsf.XMLIn */
    userState: object
    content: GLib.String
    doc: XMLInDoc
    node: XMLInNode
    /* Methods of Gsf.XMLIn */
    checkNs(str: string, nsId: number): string | null
    getInput(): Input
    namecmp(str: string, nsId: number, name: string): boolean
    pushState(doc: XMLInDoc, newState: object | null, dtor: XMLInExtDtor, attrs: string[]): void
    setSilentUnknowns(silent: boolean): void
    static name: string
}
export class XMLInDoc {
    /* Methods of Gsf.XMLInDoc */
    addNodes(nodes: XMLInNode[]): void
    free(): void
    parse(input: Input, userState?: object | null): boolean
    setUnknownHandler(handler: XMLInUnknownFunc): void
    static name: string
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
    constructor(nodes: XMLInNode[], ns: XMLInNS[])
    /* Static methods and pseudo-constructors */
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
}
export class XMLInNS {
    /* Fields of Gsf.XMLInNS */
    uri: string
    nsId: number
    static name: string
}
export class XMLInNode {
    /* Fields of Gsf.XMLInNode */
    id: string
    nsId: number
    name: string
    parentId: string
    start: (xin: XMLIn, attrs: libxml2.Char) => void
    end: (xin: XMLIn, unknown: XMLBlob) => void
    hasContent: XMLContent
    checkChildrenForNs: number
    shareChildrenWithParent: number
    static name: string
}
export abstract class XMLOutClass {
    /* Fields of Gsf.XMLOutClass */
    base: GObject.ObjectClass
    static name: string
}
type gsf_off_t = number
}