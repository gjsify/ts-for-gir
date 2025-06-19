import { IntrospectedNamespace } from "../gir/namespace.ts";

import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import { IntrospectedFunction } from "../gir/function.ts";
import { IntrospectedClassFunction } from "../gir/class-function.ts";
import { IntrospectedConstructor } from "../gir/constructor.ts";
import { IntrospectedDirectAllocationConstructor } from "../gir/direct-allocation-constructor.ts";

import {
    NativeType,
    AnyType,
    BooleanType,
    Uint8ArrayType,
    StringType,
    GenericType,
    TypeIdentifier,
    BinaryType,
    Generic
} from "../gir.ts";
import { GirDirection } from "@gi.ts/parser";
import { IntrospectedRecord } from "../gir/record.ts";
import { JSField } from "../gir/property.ts";

export default {
    namespace: "GLib",
    version: "2.0",
    modifier(namespace: IntrospectedNamespace) {
        // export function log_structured(logDomain, logLevel, stringFields);

        namespace.members.set(
            "log_structured",
            new IntrospectedFunction({
                name: "log_structured",
                raw_name: "log_structured",
                namespace: namespace,
                parameters: [
                    new IntrospectedFunctionParameter({
                        name: "logDomain",
                        type: AnyType,
                        direction: GirDirection.In
                    }),
                    new IntrospectedFunctionParameter({
                        name: "logLevel",
                        type: AnyType,
                        direction: GirDirection.In
                    }),
                    new IntrospectedFunctionParameter({
                        name: "stringFields",
                        type: AnyType,
                        direction: GirDirection.In
                    })
                ],
                return_type: AnyType
            })
        );

        // export function strstrip(str: string): string;

        namespace.members.set(
            "strstrip",
            new IntrospectedFunction({
                name: "strstrip",
                raw_name: "strstrip",
                namespace: namespace,
                parameters: [
                    new IntrospectedFunctionParameter({
                        name: "str",
                        type: StringType,
                        direction: GirDirection.In
                    })
                ],
                return_type: StringType
            })
        );

        // GLib.Error

        {
            const Error = namespace.assertClass("Error");

            const fixQuark = <T extends IntrospectedConstructor | IntrospectedClassFunction>(c: T): T => {
                return c.copy({
                    parameters: c.parameters.map(p => {
                        if (p.type instanceof TypeIdentifier && p.type.is("GLib", "Quark")) {
                            return p.copy({
                                type: new BinaryType(new NativeType("({ new(...args: any[] ): Error })"), p.type)
                            });
                        }

                        return p;
                    })
                }) as T;
            };

            if (Error.mainConstructor && !(Error.mainConstructor instanceof IntrospectedDirectAllocationConstructor))
                Error.mainConstructor = fixQuark(Error.mainConstructor);

            Error.constructors = Error.constructors.map(c => fixQuark(c));
            Error.members = Error.members.map(m => fixQuark(m));
            Error.fields.push(
                new JSField({
                    name: "stack",
                    parent: Error,
                    type: StringType
                })
            );
        }

        {
            const HashTable = namespace.assertClass("HashTable") as IntrospectedRecord;

            HashTable.__ts__indexSignature = "[key: string]: B;";
        }

        // GLib.Variant

        {
            const Variant = namespace.assertClass("Variant");
            const VariantType = namespace.assertClass("VariantType");

            Variant.addGeneric({
                default: new NativeType("any"),
                constraint: StringType
            });

            VariantType.addGeneric({
                default: new NativeType("any"),
                constraint: StringType
            });

            const VariantParams = [
                new IntrospectedFunctionParameter({
                    name: "sig",
                    type: new GenericType("A"),
                    direction: GirDirection.In
                }),
                new IntrospectedFunctionParameter({
                    name: "value",
                    type: AnyType,
                    direction: GirDirection.In
                })
            ];

            // static "new"<A>(sig: A, value: any) => Variant<A>;
            const VariantConstructor = new IntrospectedConstructor({
                name: "new",
                parent: Variant,
                parameters: VariantParams.map(vp => vp.copy()),
                return_type: new NativeType("Variant<A>")
            });

            VariantConstructor.generics = [new Generic(new GenericType("A"), undefined, undefined, StringType)];

            Variant.mainConstructor = VariantConstructor.copy();
            if (!(Variant instanceof IntrospectedRecord)) {
                throw new Error("GLib.Variant is not a record");
            }
            Variant.setPrivate(false);

            // static _new_internal: (sig: any, value: any) => any;
            const internalConstructor = new IntrospectedConstructor({
                name: "_new_internal",
                parent: Variant,
                parameters: VariantParams.map(vp => vp.copy()),
                return_type: AnyType
            });

            internalConstructor.generics = [new Generic(new GenericType("A"), undefined, undefined, StringType)];

            Variant.constructors.unshift(VariantConstructor.copy(), internalConstructor);

            const unpackedReturnType = new GenericType("T");
            // unpack<T= any>(): T;
            const unpack = new IntrospectedClassFunction({
                name: "unpack",
                return_type: unpackedReturnType,
                parent: Variant
            });
            unpack.generics.push(new Generic(unpackedReturnType));

            // deepUnpack<T = any>(): T;
            const deepUnpack = new IntrospectedClassFunction({
                name: "deepUnpack",
                return_type: unpackedReturnType,
                parent: Variant
            });
            deepUnpack.generics.push(new Generic(unpackedReturnType));

            Variant.members.push(
                unpack,
                deepUnpack,
                // deep_unpack<T = any>(): T;
                deepUnpack.copy({ name: "deep_unpack" }),
                // recursiveUnpack: () => any;
                new IntrospectedClassFunction({
                    name: "recursiveUnpack",
                    return_type: AnyType,
                    parent: Variant
                }),
                // _init(sig: any, value: any): Variant;
                new IntrospectedClassFunction({
                    name: "_init",
                    return_type: Variant.getType(),
                    parent: Variant,
                    parameters: VariantParams.map(vp => vp.copy())
                })
            );
        }

        // GLib.VariantDict

        {
            const VariantDict = namespace.assertClass("VariantDict");

            VariantDict.members.push(
                // lookup(key: any, variantType?: any, deep?: any): any;
                new IntrospectedClassFunction({
                    name: "lookup",
                    return_type: AnyType,
                    parent: VariantDict,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "key",
                            direction: GirDirection.In,
                            type: AnyType
                        }),
                        new IntrospectedFunctionParameter({
                            name: "variantType",
                            direction: GirDirection.In,
                            type: AnyType,
                            isOptional: true
                        }),
                        new IntrospectedFunctionParameter({
                            name: "deep",
                            direction: GirDirection.In,
                            type: BooleanType,
                            isOptional: true
                        })
                    ]
                })
            );
        }

        // GLib.Bytes

        {
            const Bytes = namespace.assertClass("Bytes");

            Bytes.members.push(
                // toArray(): Uint8Array;
                new IntrospectedClassFunction({
                    name: "toArray",
                    return_type: Uint8ArrayType,
                    parent: Bytes,
                    parameters: []
                })
            );
        }

        {
            // See https://github.com/gjsify/ts-for-gir/issues/130
            const MainLoop = namespace.assertClass("MainLoop");

            MainLoop.members.push(
                new IntrospectedClassFunction({
                    parent: MainLoop,
                    name: "runAsync",
                    parameters: [],
                    return_type: new NativeType("Promise<void>"),
                    doc: "Similar to `GLib.MainLoop.run` but return a Promise which resolves when the main loop ends, instead of blocking while the main loop runs.\nThis helps avoid the situation where Promises never resolved if you didn't run the main loop inside a callback."
                })
            );
        }
    }
};
