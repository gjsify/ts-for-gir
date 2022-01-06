/**
 * TrackerExtract-0.16
 */

<<<<<<< HEAD
import "node"
import type { Tracker } from './Tracker-0.16';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace TrackerExtract {
=======
/// <reference types="node" />
/// <reference path="Tracker-0.16.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace TrackerExtract {
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))

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
<<<<<<< HEAD
    /* Methods of TrackerExtract-0.16.TrackerExtract.Info */
=======
    /* Methods of TrackerExtract.Info */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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