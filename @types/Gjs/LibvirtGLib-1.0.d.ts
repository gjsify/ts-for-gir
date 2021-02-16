/**
 * LibvirtGLib-1.0
 */

import type * as Gjs from './Gjs';
import type * as GLib from './GLib-2.0';
import type * as GObject from './GObject-2.0';

export function error_new_literal(domain: GLib.Quark, code: number, message: string): GLib.Error
export function event_register(): void
export function init(argv?: string[] | null): /* argv */ string[] | null
export function init_check(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export function set_error_literal(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void