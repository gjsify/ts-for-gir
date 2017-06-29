export namespace byteArray {
    export class ByteArray {
        constructor(len: number)
        toString(): string
        toGBytes(): any  // GLib.Bytes?
        length: number
    }
    export function fromString(input: string): ByteArray
    export function fromArray(input: number[]): ByteArray
    export function fromGBytes(input: any): ByteArray
}
export namespace Lang {
    export function Class(props: any): any
}
export namespace gettext {
    export enum LocaleCategory {
        ALL, COLLATE, CTYPE, MESSAGES, MONETARY, NUMERIC, TIME
    }
    export function setlocale(category: number, locale: string|null): string
    export function textdomain(domainname: string|null): string
    export function bindtextdomain(domainname: string, dirname: string|null): string
    export function gettext(msgid: string): string
    export function dgettext(domainname: string|null, msgid: string): string
    export function dcgettext(domainname: string|null, msgid: string, category: number): string
    export function ngettext(msgid: string, msgid_plural: string, n: number): string
    export function dngettext(domainname: string, msgid: string, msgid_plural: string, n: number): string
    export function domain(domainName: string): { gettext: ((msgid: string) => string), ngettext: ((msgid: string, msgid_plural: string, n:number) => string), pgettext: ((context: any, msgid: string) => any) }
}
