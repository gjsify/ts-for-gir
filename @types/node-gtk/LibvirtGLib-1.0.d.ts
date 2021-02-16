/**
 * LibvirtGLib-1.0
 */

/// <reference types="node" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace LibvirtGLib {

export function errorNewLiteral(domain: GLib.Quark, code: number, message: string): GLib.Error
export function eventRegister(): void
export function init(argv?: string[] | null): /* argv */ string[] | null
export function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export function setErrorLiteral(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void
}