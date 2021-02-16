/**
 * fontconfig-2.0
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace fontconfig {

export function init(): void
export class Pattern {
    static name: string
}
export class CharSet {
    static name: string
}
}