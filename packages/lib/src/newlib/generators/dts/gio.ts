import { GirNamespace } from "../../gir/namespace.js";

export function override(_node: GirNamespace) {
  return `
    export function _promisify(klass: any, function_name: string, finish_function_name: string): void;
    export interface _LocalFilePrototype extends FilePrototype {}
    export const _LocalFilePrototype: _LocalFilePrototype;
    `;
}
