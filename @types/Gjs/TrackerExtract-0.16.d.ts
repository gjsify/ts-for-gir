/**
 * TrackerExtract-0.16
 */

import * as Gjs from './Gjs';
import * as Tracker from './Tracker-0.16';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GModule from './GModule-2.0';

export function client_cancel_for_prefix(prefix: Gio.File): void
export function client_get_metadata(file: Gio.File, mime_type: string, graph: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
export function client_get_metadata_finish(file: Gio.File, res: Gio.AsyncResult): Info
export function get_metadata(info: Info): boolean
export function module_manager_init(): boolean
export function module_manager_mimetype_is_handled(mimetype: string): boolean
export function module_shutdown(): boolean
export interface MetadataFunc {
    (info: Info): boolean
}
export interface ShutdownFunc {
    (): void
}
export class Info {
    /* Methods of TrackerExtract.Info */
    get_file(): Gio.File
    get_graph(): string
    get_metadata_builder(): Tracker.SparqlBuilder
    get_mimetype(): string
    get_postupdate_builder(): Tracker.SparqlBuilder
    get_preupdate_builder(): Tracker.SparqlBuilder
    get_where_clause(): string
    ref(): Info
    set_where_clause(where: string): void
    unref(): void
    static name: string
    static new(file: Gio.File, mimetype: string, graph: string): Info
    constructor(file: Gio.File, mimetype: string, graph: string)
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File, mimetype: string, graph: string): Info
}