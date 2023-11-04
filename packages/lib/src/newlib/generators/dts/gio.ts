import { IntrospectedNamespace } from "../../gir/namespace.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function override(node: IntrospectedNamespace) {
    return `
    export function _promisify(klass: any, function_name: string, finish_function_name: string): void;
    export interface _LocalFilePrototype extends FilePrototype {}
    export const _LocalFilePrototype: _LocalFilePrototype;
    `;
}
