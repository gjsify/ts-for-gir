import { GirDirection } from "@gi.ts/parser";
import { NativeType, NeverType } from "../../gir.ts";
import { IntrospectedClassFunction } from "../../gir/introspected-classes.ts";
import { IntrospectedFunctionParameter } from "../../gir/parameter.ts";
import { IntrospectedNamespace } from "../../gir/namespace.ts";

export function override(node: IntrospectedNamespace) {
    const ParamSpec = node.assertClass("ParamSpec");

    // We only inject __type__ for .d.ts files.
    const type_function = new IntrospectedClassFunction({
        name: "__type__",
        parent: ParamSpec,
        parameters: [
            new IntrospectedFunctionParameter({
                name: "arg",
                type: NeverType,
                direction: GirDirection.In
            })
        ],
        return_type: new NativeType("A")
        // TODO: Add support for generic native type replacement.
        // return_type: UnknownType
    });

    ParamSpec.members.push(type_function.copy());

    return `
// GJS OVERRIDES

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
