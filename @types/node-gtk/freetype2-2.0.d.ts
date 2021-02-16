/**
 * freetype2-2.0
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace freetype2 {

export function libraryVersion(): void
export class Bitmap {
    static name: string
}
export class Face {
    static name: string
}
export class Library {
    static name: string
}
export type Int32 = int32
}