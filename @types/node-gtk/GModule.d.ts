/**
 * GModule-2.0
 */

/// <reference path="GLib.d.ts" />
/// <reference path="GObject.d.ts" />

declare namespace GModule {

export enum ModuleFlags {
    LAZY,
    LOCAL,
    MASK,
}
export function moduleBuildPath(directory: string | null, module_name: string): string
export function moduleError(): string
export function moduleSupported(): boolean
export interface ModuleCheckInit {
    (module: Module): string
}
export interface ModuleUnload {
    (module: Module): void
}
export class Module {
    /* Methods of GModule.Module */
    close(): boolean
    makeResident(): void
    name(): string
    symbol(symbol_name: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    static buildPath(directory: string | null, module_name: string): string
    static error(): string
    static supported(): boolean
}
}