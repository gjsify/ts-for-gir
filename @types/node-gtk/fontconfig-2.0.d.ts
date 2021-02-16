/**
 * fontconfig-2.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace fontconfig {

export function init(): void
export class Pattern {
    static name: string
}
export class CharSet {
    static name: string
}
}