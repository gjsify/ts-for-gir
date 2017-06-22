/**
 * GModule-2.0
 */

import * as GLib from './GLib'
export enum ModuleFlags {
    LAZY,
    LOCAL,
    MASK,
}
export function module_build_path(directory: string | null, module_name: string): string
export function module_error(): string
export function module_supported(): boolean
export interface ModuleCheckInit {
    (module: Module): string
}
export interface ModuleUnload {
    (module: Module): void
}
export interface Module {
    /* Methods of GModule.Module */
    close(): boolean
    make_resident(): void
    name(): string
    symbol(symbol_name: string): [ /* returnType */ boolean, /* symbol */ object ]
}
export interface Module_Static {
}
export declare class Module_Static {
    build_path(directory: string | null, module_name: string): string
    error(): string
    supported(): boolean
}
export declare var Module: Module_Static