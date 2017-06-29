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
    function Class(props: any): any
}
