import { GirDirection } from "@gi.ts/parser";
import {
	IntrospectedClassFunction,
	IntrospectedFunctionParameter,
	type IntrospectedNamespace,
	NativeType,
	NeverType,
} from "@ts-for-gir/lib";

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
				direction: GirDirection.In,
			}),
		],
		return_type: new NativeType("A"),
		// TODO: Add support for generic native type replacement.
		// return_type: UnknownType
	});

	ParamSpec.members.push(type_function.copy());

	// Prevent emission of types that we're replacing
	try {
		const propertyMember = node.members.get("Property");
		if (propertyMember) {
			if (Array.isArray(propertyMember)) {
				propertyMember.forEach((m) => {
					if ("noEmit" in m && typeof m.noEmit === "function") {
						m.noEmit();
					}
				});
			} else if ("noEmit" in propertyMember && typeof propertyMember.noEmit === "function") {
				propertyMember.noEmit();
			}
		}
	} catch (_error) {
		// Ignore if Property doesn't exist
	}

	return `
export type AdvGjsParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// __type__ forces all GTypes to not match structurally.
export type AdvGType<T = unknown> = {
    __type__(arg: never): T;
    name: string;
};

// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface AdvSignalDefinition {
    flags?: SignalFlags;
    accumulator: number;
    return_type?: AdvGType;
    param_types?: AdvGType[];
}

export interface AdvMetaInfo<Props, Interfaces, Sigs> {
    GTypeName?: string;
    GTypeFlags?: TypeFlags;
    Properties?: Props;
    Signals?: Sigs;
    Implements?: Interfaces;
    CssName?: string;
    Template?: Uint8Array | GLib.Bytes | string;
    Children?: string[];
    InternalChildren?: string[];
    Requires?: Object[];
}

export type AdvProperty<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any;

export type AdvProperties<
    Prototype extends {},
    Properties extends { [key: string]: ParamSpec }
> = Omit<{
    [key in keyof Properties | keyof Prototype]: key extends keyof Prototype
        ? never
        : key extends keyof Properties
          ? AdvProperty<Properties[key]>
          : never;
}, keyof Prototype>;

export type AdvSignalSignatures = {
    [signal: string]: (...args: any[]) => any;
};

export type AdvSignalCallback<Emitter, Fn> = Fn extends (...args: infer P) => infer R
    ? (source: Emitter, ...args: P) => R
    : never;

export function registerClass<P extends {}, T extends new (...args: any[]) => P>(
    klass: T,
): RegisteredClass<T, {}, []>

export type AdvSignalDefinitionType = {
    param_types?: readonly AdvGType[];
    [key: string]: any;
};

type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

type IFaces<Interfaces extends { $gtype: AdvGType<any> }[]> = {
    [key in keyof Interfaces]: Interfaces[key] extends { $gtype: AdvGType<infer I> } ? I : never;
};

export type RegisteredPrototype<
    P extends {},
    Props extends { [key: string]: ParamSpec },
    Interfaces extends any[],
> = AdvProperties<P, SnakeToCamel<Props> & SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P;

type SnakeToUnderscoreCase<S extends string> = S extends \`\${infer T}-\${infer U}\`
    ? \`\${T}_\${SnakeToUnderscoreCase<U>}\`
    : S extends \`\${infer T}\`
      ? \`\${T}\`
      : never;

type SnakeToCamelCase<S extends string> = S extends \`\${infer T}-\${infer U}\`
    ? \`\${Lowercase<T>}\${SnakeToPascalCase<U>}\`
    : S extends \`\${infer T}\`
      ? \`\${Lowercase<T>}\`
      : SnakeToPascalCase<S>;

type SnakeToPascalCase<S extends string> = string extends S
    ? string
    : S extends \`\${infer T}-\${infer U}\`
      ? \`\${Capitalize<Lowercase<T>>}\${SnakeToPascalCase<U>}\`
      : S extends \`\${infer T}\`
        ? \`\${Capitalize<Lowercase<T>>}\`
        : never;

type SnakeToCamel<T> = { [P in keyof T as P extends string ? SnakeToCamelCase<P> : P]: T[P] };
type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] };

type Ctor = new (...a: any[]) => object;

type Init = { _init(...args: any[]): void };

export type RegisteredClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: AdvGType<any> }[],
> = T extends { prototype: infer P extends {} }
    ? {
          $gtype: AdvGType<RegisteredClass<T, Props, IFaces<Interfaces>>>;
          new (
              ...args: P extends Init ? Parameters<P['_init']> : [void]
          ): RegisteredPrototype<P, Props, IFaces<Interfaces>>;
          prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>;
      }
    : never;

export function registerClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: AdvGType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly AdvGType[];
            [key: string]: any;
        };
    },
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
    klass: T,
): RegisteredClass<T, Props, Interfaces>
`;
}
