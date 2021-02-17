/**
 * P11Kit-1.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';

export enum UriResult {
    OK,
    UNEXPECTED,
    BAD_SCHEME,
    BAD_ENCODING,
    BAD_SYNTAX,
    BAD_VERSION,
    NOT_FOUND,
}
export enum PinFlags {
    USER_LOGIN,
    SO_LOGIN,
    CONTEXT_LOGIN,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
}
export enum UriType {
    OBJECT,
    TOKEN,
    MODULE,
    MODULE_WITH_VERSION,
    OBJECT_ON_TOKEN,
    OBJECT_ON_TOKEN_AND_MODULE,
    ANY,
}
export const PIN_FALLBACK: string
export const URI_SCHEME: string
export const URI_SCHEME_LEN: number
export function space_strdup(string: number, max_length: number): string
export function space_strlen(string: number, max_length: number): number
export function uri_message(code: number): string
export function uri_parse(string: string, uri_type: UriType, uri: Uri): number
export interface pin_destroy_func {
    (data: object): void
}
export class Pin {
    /* Methods of P11Kit.Pin */
    get_length(): number
    get_value(length: number): number
    unref(): void
    static name: string
}
export class Uri {
    /* Methods of P11Kit.Uri */
    any_unrecognized(): number
    clear_attributes(): void
    format(uri_type: UriType, string: string): number
    free(): void
    get_pin_source(): string
    get_pinfile(): string
    set_pin_source(pin_source: string): void
    set_pinfile(pinfile: string): void
    set_unrecognized(unrecognized: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static message(code: number): string
    static parse(string: string, uri_type: UriType, uri: Uri): number
}