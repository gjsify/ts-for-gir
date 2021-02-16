/**
 * xft-2.0
 */

/// <reference types="node" />
import type { xlib } from './xlib-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace xft {

export function init(): void
export class Color {
    static name: string
}
export class Draw {
    static name: string
}
export class Font {
    static name: string
}
export class GlyphSpec {
    static name: string
}
}