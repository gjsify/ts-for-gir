/**
 * JSCore-3.0
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace JSCore {

export function evaluateScript(): void
export type GlobalContextRef = JSGlobalContextRef
export type ObjectRef = JSObjectRef
}