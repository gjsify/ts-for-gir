/**
 * P11Kit-1.0
 */

import "node"
import type { GObject } from './GObject-2.0';

declare namespace P11Kit {

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
function spaceStrdup(string: number, maxLength: number): string
function spaceStrlen(string: number, maxLength: number): number
function uriMessage(code: number): string
function uriParse(string: string, uriType: UriType, uri: Uri): number
interface pin_destroy_func {
    (data: object): void
}
class Pin {
    /* Methods of P11Kit-1.0.P11Kit.Pin */
    getLength(): number
    getValue(length: number): number
    unref(): void
    static name: string
}
class Uri {
    /* Methods of P11Kit-1.0.P11Kit.Uri */
    anyUnrecognized(): number
    clearAttributes(): void
    format(uriType: UriType, string: string): number
    free(): void
    getPinSource(): string
    getPinfile(): string
    setPinSource(pinSource: string): void
    setPinfile(pinfile: string): void
    setUnrecognized(unrecognized: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static message(code: number): string
    static parse(string: string, uriType: UriType, uri: Uri): number
}
}
export default P11Kit