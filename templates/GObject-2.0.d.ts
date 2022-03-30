export type GType<T = unknown> = {
    __type__(arg: never): T
    name: string
};

// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: GType
    param_types?: GType[]
}

export interface MetaInfo<Props, Interfaces, Sigs> {
    GTypeName?: string
    GTypeFlags?: TypeFlags
    Properties?: Props
    Signals?: Sigs
    Implements?: Interfaces
    CssName?: string
    Template?: string
    Children?: string[]
    InternalChildren?: string[]
}

// The following are part of gi.ts
// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/lib/src/generators/dts/gobject.ts
// Copyright Evan Welsh

export const GTypeName: unique symbol;
export const requires: unique symbol;
export const interfaces: unique symbol;
export const properties: unique symbol;
export const signals: unique symbol;

export type Property<K extends ParamSpec> = K extends ParamSpecBoolean
    ? boolean
    : K extends ParamSpecDouble | ParamSpecInt | ParamSpecUInt | ParamSpecFloat | ParamSpecLong
    ? number
    : K extends ParamSpecInt64 | ParamSpecUInt64 | ParamSpecULong
    ? number
    : K extends ParamSpecFlags
    ? number
    : K extends ParamSpecString | ParamSpecUnichar
    ? string
    : K extends ParamSpecValueArray
    ? any[]
    : K extends ParamSpecObject // TODO?: <infer T>
    ? ParamSpecObject // T
    : K extends ParamSpecEnum // TODO?: <infer T><infer E>
    ? ParamSpecEnum // E
    : K extends ParamSpecBoxed // TODO?: <infer T><infer B>
    ? ParamSpecBoxed //B
    : K extends ParamSpecVariant
    ? GLib.Variant
    : any;

export type Properties<Prototype extends {}, Properties extends { [key: string]: ParamSpec }> = Omit<
    {
        [key in keyof Properties | keyof Prototype]: key extends keyof Prototype
        ? never
        : key extends keyof Properties
        ? Property<Properties[key]>
        : never;
    },
    keyof Prototype
>;

type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

type IFaces<Interfaces extends { $gtype: GType<any> }[]> = {
    [key in keyof Interfaces]: Interfaces[key] extends { $gtype: GType<infer I> } ? I : never;
};

export type RegisteredPrototype<
    P extends {},
    Props extends { [key: string]: ParamSpec },
    Interfaces extends any[]
    > = Properties<P, SnakeToCamel<Props> & SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P;

type SnakeToUnderscoreCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${T}_${SnakeToUnderscoreCase<U>}`
    : S extends `${infer T}`
    ? `${T}`
    : never;

type SnakeToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${Lowercase<T>}${SnakeToPascalCase<U>}`
    : S extends `${infer T}`
    ? `${Lowercase<T>}`
    : SnakeToPascalCase<S>;

type SnakeToPascalCase<S extends string> = string extends S
    ? string
    : S extends `${infer T}-${infer U}`
    ? `${Capitalize<Lowercase<T>>}${SnakeToPascalCase<U>}`
    : S extends `${infer T}`
    ? `${Capitalize<Lowercase<T>>}`
    : never;

type SnakeToCamel<T> = { [P in keyof T as P extends string ? SnakeToCamelCase<P> : P]: T[P] };
type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] };

type Ctor = new (...a: any[]) => object;

type Init = { _init(...args: any[]): void };

// TODO: What about the generated class Closure 
export type TClosure<R = any, P = any> = (...args: P[]) => R;

export type RegisteredClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType<any> }[]
    > = T extends { prototype: infer P }
    ? {
        $gtype: GType<RegisteredClass<T, Props, IFaces<Interfaces>>>;
        new(...args: P extends Init ? Parameters<P["_init"]> : [void]): RegisteredPrototype<
            P,
            Props,
            IFaces<Interfaces>
        >;
        prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>;
    }
    : never;

export function registerClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GType[];
            [key: string]: any;
        };
    }
>(
    options: MetaInfo<Props, Interfaces, Sigs>,
    klass: T
): RegisteredClass<T, Props, Interfaces>;

export function registerClass<P extends {}, T extends new (...args: any[]) => P>(cls: T): RegisteredClass<T, {}, []>;