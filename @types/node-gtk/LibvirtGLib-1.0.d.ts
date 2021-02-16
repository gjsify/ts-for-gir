/**
 * LibvirtGLib-1.0
 */

/// <reference types="node" />
import type { GLib } from './GLib-2.0';
import type { GObject } from './GObject-2.0';

declare namespace LibvirtGLib {

export function errorNewLiteral(domain: GLib.Quark, code: number, message: string): GLib.Error
export function eventRegister(): void
export function init(argv?: string[] | null): /* argv */ string[] | null
export function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export function setErrorLiteral(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void
}