/**
 * P11Kit-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';

export namespace P11Kit {

enum UriResult {
    OK,
    UNEXPECTED,
    BAD_SCHEME,
    BAD_ENCODING,
    BAD_SYNTAX,
    BAD_VERSION,
    NOT_FOUND,
}
enum PinFlags {
    USER_LOGIN,
    SO_LOGIN,
    CONTEXT_LOGIN,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
}
enum UriType {
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
function space_strdup(string: number, max_length: number): string
function space_strlen(string: number, max_length: number): number
function uri_message(code: number): string
function uri_parse(string: string, uri_type: UriType, uri: Uri): number
interface pin_destroy_func {
    (data: object): void
}
class Pin {
    /* Methods of P11Kit-1.0.P11Kit.Pin */
    get_length(): number
    get_value(length: number): number
    unref(): void
    static name: string
}
class Uri {
    /* Methods of P11Kit-1.0.P11Kit.Uri */
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
}
export default P11Kit