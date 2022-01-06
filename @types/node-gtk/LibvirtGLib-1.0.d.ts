/**
 * LibvirtGLib-1.0
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { GObject } from './GObject-2.0';

declare namespace LibvirtGLib {

function errorNewLiteral(domain: GLib.Quark, code: number, message: string): GLib.Error
function eventRegister(): void
function init(argv?: string[] | null): { argv: string[] | null }
function initCheck(argv?: string[] | null): { returnType: boolean, argv: string[] | null }
function setErrorLiteral(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void
}
export default LibvirtGLib