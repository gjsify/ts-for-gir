import { Direction } from "@gi.ts/parser";
import { NativeType, NeverType } from "../../gir.js";
import { GirClassFunction, GirFunctionParameter } from "../../gir/function.js";
import { GirNamespace } from "../../gir/namespace.js";

export function override(node: GirNamespace) {
  const ParamSpec = node.assertClass("ParamSpec");

  // We only inject __type__ for .d.ts files.
  const type_function = new GirClassFunction({
    name: "__type__",
    parent: ParamSpec,
    parameters: [
      new GirFunctionParameter({
        name: "arg",
        type: NeverType,
        direction: Direction.In
      })
    ],
    return_type: new NativeType("A")
    // TODO: Add support for generic native type replacement.
    // return_type: UnknownType
  });

  ParamSpec.members.push(type_function.copy());

  return `
// GJS OVERRIDES

// __type__ forces all GTypes to not match structurally.

export type GType<T = unknown> = { __type__(arg: never): T };

// Correctly types interface checks.
export function type_is_a<T extends Object>(obj: Object, is_a_type: { $gtype: GType<T> }): obj is T;

export class Interface {
    static _classInit: (klass: any) => any;
    __name__: string;
    _construct: (params: any, ...otherArgs: any[]) => any;
    _init: (params: any) => void;
    $gtype?: GType;
}

export function signal_connect(object: Object, name: string, handler: Function): number;
export function signal_connect_after(object: Object, name: string, handler: Function): number;
export function signal_emit_by_name(object: Object, name: string, ...args: any[]): void;

export const __gtkCssName__: unique symbol;
export const __gtkTemplate__: unique symbol;
export const __gtkChildren__: unique symbol;
export const __gtkInternalChildren__: unique symbol;

// Expose GObject static properties for ES6 classes

export const GTypeName: unique symbol;
export const requires: unique symbol;
export const interfaces: unique symbol;
export const properties: unique symbol;
export const signals: unique symbol;

export enum AccumulatorType {
    NONE,
    FIRST_WINS,
    TRUE_HANDLED
}

export class NotImplementedError extends Error {
}

export let gtypeNameBasedOnJSPath: boolean;

export let TYPE_BOOLEAN: GType<boolean>;
export let Boolean: BooleanConstructor;

export let TYPE_ENUM: GType<number>;
export let TYPE_FLAGS: GType<number>;

export let TYPE_DOUBLE: GType<number>;
export let Double: NumberConstructor;

export let TYPE_STRING: GType<string>;
export let String: StringConstructor;

declare global {
    interface BooleanConstructor {
        $gtype: GType<boolean>;
    }

    interface NumberConstructor {
        $gtype: GType<number>;
    }

    interface StringConstructor {
        $gtype: GType<string>;
    }
}

export let TYPE_NONE: GType<undefined>;
export let TYPE_POINTER: GType<undefined>;
export let TYPE_BOXED: GType<unknown>;
export let TYPE_PARAM: GType<unknown>;
export let TYPE_INTERFACE: GType<unknown>;
export let TYPE_OBJECT: GType<object>;
export let TYPE_VARIANT: GType<GLib.Variant>;
export let TYPE_INT: GType<number>;
export let TYPE_UINT: GType<number>;
export let TYPE_INT64: GType<number>;
export let TYPE_UINT64: GType<number>;

export function registerClass<
    P extends {},
    T extends new (...args: any[]) => P,
    >(
        klass: T
    ): RegisteredClass<T, {}, []>;

export type Property<K extends ParamSpec> = K extends ParamSpec<infer T>
    ? T
    : any;

export type Properties<
    Prototype extends {},
    Properties extends { [key: string]: ParamSpec }
    > = Omit<{
        [key in (keyof Properties | keyof Prototype)]: key extends keyof Prototype ? never :
        key extends keyof Properties ? Property<Properties[key]> : never;
    }, keyof Prototype>;

export type SignalDefinition = {
    param_types?: readonly GType[];
    [key: string]: any;
};

type UnionToIntersection<T> =
    (T extends any ? (x: T) => any : never) extends
    (x: infer R) => any ? R : never

type IFaces<Interfaces extends { $gtype: GType<any> }[]> = { [key in keyof Interfaces]: Interfaces[key] extends { $gtype: GType<infer I> } ? I : never };

export type RegisteredPrototype<P extends {}, Props extends { [key: string]: ParamSpec }, Interfaces extends any[]> =
    Properties<P, SnakeToCamel<Props> & SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P;

type SnakeToUnderscoreCase<S extends string> =
    S extends \`\${infer T}-\${infer U}\` ? \`\${T}_\${SnakeToUnderscoreCase<U>}\` :
    S extends \`\${infer T}\` ? \`\${T}\` :
    never;

type SnakeToCamelCase<S extends string> =
    S extends \`\${infer T}-\${infer U}\` ? \`\${Lowercase<T>}\${SnakeToPascalCase<U>}\` :
    S extends \`\${infer T}\` ? \`\${Lowercase<T>}\` :
    SnakeToPascalCase<S>;

type SnakeToPascalCase<S extends string> =
    string extends S ? string :
    S extends \`\${infer T}-\${infer U}\` ? \`\${Capitalize<Lowercase<T>>}\${SnakeToPascalCase<U>}\` :
    S extends \`\${infer T}\` ? \`\${Capitalize<Lowercase<T>>}\` :
    never;

type SnakeToCamel<T> = { [P in keyof T as P extends string ? SnakeToCamelCase<P> : P]: T[P] };
type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] };

type Ctor = new (...a: any[]) => object;

type Init = { _init(...args: any[]): void };

export type RegisteredClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType<any> }[]
    > = T extends { prototype: infer P } ? {
        $gtype: GType<RegisteredClass<T, Props, IFaces<Interfaces>>>;
        new(...args: P extends Init ? Parameters<P["_init"]> : [void]): RegisteredPrototype<P, Props, IFaces<Interfaces>>;
        prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>;
    } : never;

export function registerClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GType[];
            [key: string]: any;
        }
    }
>(
    options: {
        GTypeName?: string;
        GTypeFlags?: TypeFlags;
        Properties?: Props;
        Signals?: Sigs;
        Implements?: Interfaces;
        CssName?: string;
        Template?: string;
        Children?: string[];
        InternalChildren?: string[];
    },
    klass: T
): RegisteredClass<T, Props, Interfaces>;
`;
}
