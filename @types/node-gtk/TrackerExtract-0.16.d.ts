/**
 * TrackerExtract-0.16
 */

/// <reference types="node" />
/// <reference path="Tracker-0.16.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace TrackerExtract {

export function clientCancelForPrefix(prefix: Gio.File): void
export function clientGetMetadata(file: Gio.File, mimeType: string, graph: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
export function clientGetMetadataFinish(file: Gio.File, res: Gio.AsyncResult): Info
export function getMetadata(info: Info): boolean
export function moduleManagerInit(): boolean
export function moduleManagerMimetypeIsHandled(mimetype: string): boolean
export function moduleShutdown(): boolean
export interface MetadataFunc {
    (info: Info): boolean
}
export interface ShutdownFunc {
    (): void
}
export class Info {
    /* Methods of TrackerExtract.Info */
    getFile(): Gio.File
    getGraph(): string
    getMetadataBuilder(): Tracker.SparqlBuilder
    getMimetype(): string
    getPostupdateBuilder(): Tracker.SparqlBuilder
    getPreupdateBuilder(): Tracker.SparqlBuilder
    getWhereClause(): string
    ref(): Info
    setWhereClause(where: string): void
    unref(): void
    static name: string
    static new(file: Gio.File, mimetype: string, graph: string): Info
    constructor(file: Gio.File, mimetype: string, graph: string)
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File, mimetype: string, graph: string): Info
}
}