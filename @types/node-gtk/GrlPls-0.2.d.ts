/**
 * GrlPls-0.2
 */

/// <reference types="node" />
import type { Grl } from './Grl-0.2';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GrlPls {

export function browse(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filterFunc: FilterFunc | null, callback: Grl.SourceResultCb): number
export function browseBySpec(source: Grl.Source, filterFunc: FilterFunc | null, bs: Grl.SourceBrowseSpec): void
export function browseSync(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filterFunc?: FilterFunc | null): Grl.Media[]
export function fileToMedia(content: Grl.Media, file: Gio.File, info: Gio.FileInfo, handlePls: boolean, options: Grl.OperationOptions): Grl.Media
export function getFileAttributes(): string
export function mediaIsPlaylist(media: Grl.Media): boolean
export interface FilterFunc {
    (source: Grl.Source, media: Grl.Media): Grl.Media
}
}