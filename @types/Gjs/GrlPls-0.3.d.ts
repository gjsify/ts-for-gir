/**
 * GrlPls-0.3
 */

import type * as Gjs from './Gjs';
import type * as Grl from './Grl-0.3';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export function browse(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filter_func: FilterFunc | null, callback: Grl.SourceResultCb): number
export function browse_by_spec(source: Grl.Source, filter_func: FilterFunc | null, bs: Grl.SourceBrowseSpec): void
export function browse_sync(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filter_func?: FilterFunc | null): Grl.Media[]
export function file_to_media(content: Grl.Media, file: Gio.File, info: Gio.FileInfo, handle_pls: boolean, options: Grl.OperationOptions): Grl.Media
export function get_file_attributes(): string
export function media_is_playlist(media: Grl.Media): boolean
export interface FilterFunc {
    (source: Grl.Source, media: Grl.Media): Grl.Media
}