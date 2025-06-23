import { IntrospectedNamespace } from "../gir/namespace.ts";
import {

    IntrospectedClassFunction
} from "../gir/introspected-classes.ts";
import { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import { IntrospectedFunction } from "../gir/function.ts";
import { IntrospectedStaticClassFunction } from "../gir/introspected-classes.ts";
import {
    NativeType,
    AnyType,
    StringType,
    BinaryType,
    VoidType,
    NumberType,
    TypeIdentifier,
    ObjectType,
    NullableType,
    TupleType,
    UnknownType,
    AnyFunctionType,
    Generic,
    GenericType,
    TypeExpression,
    BooleanType,
    GenerifiedTypeIdentifier,
    OrType
} from "../gir.ts";
import { GirDirection } from "@gi.ts/parser";
import { IntrospectedField } from "../gir/property.ts";
import { IntrospectedAlias } from "../gir/alias.ts";
import { IntrospectedInterface } from "../gir/introspected-classes.ts";

function typeParam(name: string, type: TypeExpression, options: any = {}) {
    return new IntrospectedFunctionParameter({
        name,
        direction: GirDirection.In,
        type: type,
        ...options
    });
}

function anyParam(name: string, options: any = {}) {
    return typeParam(name, AnyType, options);
}

function stringParam(name: string, options: any = {}) {
    return typeParam(name, StringType, options);
}

/**
 * Creates a parameter with a nullable string type.
 * Used for optional documentation fields like 'nick' and 'blurb' in GObject properties.
 * These fields are commonly used to provide human-readable descriptions of properties.
 * 
 * @param name The parameter name
 * @param options Additional options including documentation
 * @returns An IntrospectedFunctionParameter with nullable string type
 * @see https://gjs.guide/guides/gobject/basics.html#properties
 */
function nullableStringParam(name: string, options: any = {}) {
    return typeParam(name, new NullableType(StringType), {
        doc: "A nullable string parameter, commonly used for optional documentation fields in GObject properties",
        ...options
    });
}

export default {
    namespace: "GObject",
    version: "2.0",
    modifier(namespace: IntrospectedNamespace) {
        {
            const SignalMatch = new IntrospectedInterface({
                name: "SignalMatch",
                namespace,
                fields: [
                    new IntrospectedField({
                        name: "signalId",
                        type: StringType,
                        isStatic: false,
                        writable: true
                    }),
                    new IntrospectedField({
                        name: "detail",
                        type: StringType,
                        isStatic: false,
                        writable: true
                    }),
                    new IntrospectedField({
                        name: "func",
                        type: AnyFunctionType,
                        isStatic: false,
                        writable: true
                    })
                ]
            });

            // TODO: Devise a better way to represent pure TypeScript types.
            SignalMatch.noParent = true;

            namespace.members.set("SignalMatch", SignalMatch);

            const GType = new IntrospectedAlias({
                name: "GType",
                namespace,
                type: new NativeType("any")
            });

            namespace.members.set("GType", GType);

            // We don't want to emit TypeScript-specific GType
            // hacks, but we still need the alias so the type
            // can resolve.
            GType.noEmit();

            const ParamSpec = namespace.assertClass("ParamSpec");
            ParamSpec.doc = `A GObject parameter specification that defines property characteristics.
See https://gjs.guide/guides/gobject/basics.html#properties for more details.`;
            const ParamFlags = namespace.getEnum("ParamFlags");

            /**
             * Generates ParamSpec function definitions with proper typing for nullable documentation fields.
             * Follows GJS style guidelines for property definitions with optional documentation.
             * 
             * @param name The name of the ParamSpec type (e.g., "string", "int", "boolean")
             * @param returnType The return type of the ParamSpec
             * @param minMax Whether the ParamSpec has min/max values
             * @param type Optional type parameter name
             * @param defaultValue Whether the ParamSpec has a default value
             * @param defaultValueType The type of the default value
             * @param addGeneric Whether to add generic type parameters
             * @returns An IntrospectedStaticClassFunction for the ParamSpec
             * @see https://gjs.guide/guides/gjs/style-guide.html#properties
             */
            function generateParamSpec(
                name: string,
                returnType: TypeExpression = ParamSpec.getType(),
                minMax = false,
                type: string | null = null,
                defaultValue = false,
                defaultValueType: TypeExpression = AnyType,
                addGeneric = false,
                doc: string
            ) {
                const params = [
                    stringParam("name", {
                        doc: "The name of the property"
                    }),
                    nullableStringParam("nick", {
                        doc: "A human readable name for the property"
                    }),
                    nullableStringParam("blurb", {
                        doc: "A longer description of the property"
                    }),
                    typeParam("flags", new BinaryType(ParamFlags?.getType() ?? AnyType, NumberType), {
                        doc: "The flags for this property (e.g. READABLE, WRITABLE)"
                    })
                ];

                if (minMax) {
                    params.push(typeParam("minimum", NumberType, {
                        doc: "The minimum value for this property"
                    }), typeParam("maximum", NumberType, {
                        doc: "The maximum value for this property"
                    }));
                }

                if (type) {
                    if (!addGeneric) {
                        params.push(anyParam(`${type}Type`));
                    } else {
                        params.push(new IntrospectedFunctionParameter({
                            name: `${type}Type`,
                            direction: GirDirection.In,
                            type: new NativeType("GType<T> | { $gtype: GType<T> }")
                        }));
                    }
                }

                if (defaultValue) {
                    params.push(typeParam("defaultValue", defaultValueType, {
                        doc: "The default value for this property"
                    }));
                }

                const fn = new IntrospectedStaticClassFunction({
                    name,
                    parameters: params,
                    parent: ParamSpec,
                    return_type: returnType
                });

                if (addGeneric) {
                    fn.generics.push(new Generic(new GenericType("T")));
                }

                fn.doc = doc;

                return fn;
            }

            // Get rid of the ParamSpec subtypes.
            namespace.assertClass("ParamSpecBoolean").noEmit();
            namespace.assertClass("ParamSpecBoxed").noEmit();
            namespace.assertClass("ParamSpecChar").noEmit();
            namespace.assertClass("ParamSpecDouble").noEmit();
            namespace.assertClass("ParamSpecEnum").noEmit();
            namespace.assertClass("ParamSpecFlags").noEmit();
            namespace.assertClass("ParamSpecFloat").noEmit();
            namespace.assertClass("ParamSpecInt").noEmit();
            namespace.assertClass("ParamSpecInt64").noEmit();
            namespace.assertClass("ParamSpecLong").noEmit();
            namespace.assertClass("ParamSpecObject").noEmit();
            namespace.assertClass("ParamSpecParam").noEmit();
            namespace.assertClass("ParamSpecString").noEmit();
            namespace.assertClass("ParamSpecUChar").noEmit();
            namespace.assertClass("ParamSpecUnichar").noEmit();
            namespace.assertClass("ParamSpecValueArray").noEmit();
            namespace.assertClass("ParamSpecVariant").noEmit();
            namespace.assertClass("ParamSpecUInt").noEmit();
            namespace.assertClass("ParamSpecUInt64").noEmit();
            namespace.assertClass("ParamSpecULong").noEmit();
            namespace.assertClass("ParamSpecGType").noEmit();
            namespace.assertClass("ParamSpecOverride").noEmit();
            namespace.assertClass("ParamSpecPointer").noEmit();

            // The primary "type"
            ParamSpec.addGeneric({
                default: UnknownType
            });

            const object = new IntrospectedStaticClassFunction({
                name: "object",
                parameters: [
                    stringParam("name", {
                        doc: "The name of the property"
                    }),
                    nullableStringParam("nick", {
                        doc: "A human readable name for the property (can be null)"
                    }),
                    nullableStringParam("blurb", {
                        doc: "A longer description of the property (can be null)"
                    }),
                    typeParam("flags", new BinaryType(ParamFlags?.getType() ?? AnyType, NumberType), {
                        doc: "The flags for this property (e.g. READABLE, WRITABLE)"
                    }),
                    new IntrospectedFunctionParameter({
                        name: "objectType",
                        direction: GirDirection.In,
                        type: new NativeType("GType<T> | { $gtype: GType<T> }"),
                        doc: "The GType of the object"
                    })
                ],
                parent: ParamSpec,
                return_type: new NativeType("ParamSpec<T>")
            });

            object.generics.push(new Generic(new GenericType("T")));
            object.doc = "Creates a new GParamSpecObject instance specifying a property holding object references.";

            // static jsobject(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpecBoxed
            const jsobject = new IntrospectedStaticClassFunction({
                name: "jsobject",
                parameters: [
                    stringParam("name", {
                        doc: "The name of the property"
                    }),
                    nullableStringParam("nick", {
                        doc: "A human readable name for the property (can be null)"
                    }),
                    nullableStringParam("blurb", {
                        doc: "A longer description of the property (can be null)"
                    }),
                    typeParam("flags", new BinaryType(ParamFlags?.getType() ?? AnyType, NumberType), {
                        doc: "The flags for this property (e.g. READABLE, WRITABLE)"
                    })
                ],
                parent: ParamSpec,
                return_type: new NativeType("ParamSpec<T>")
            });

            jsobject.generics.push(new Generic(new GenericType("T")));
            jsobject.doc = "Creates a new ParamSpec instance for JavaScript object properties.";

            const override = new IntrospectedClassFunction({
                parent: ParamSpec,
                name: "override",
                return_type: VoidType,
                parameters: [
                    new IntrospectedFunctionParameter({
                        direction: GirDirection.In,
                        name: "name",
                        type: StringType,
                        doc: "The name of the property to override"
                    }),
                    new IntrospectedFunctionParameter({
                        direction: GirDirection.In,
                        name: "oclass",
                        type: new OrType(
                            namespace.assertClass("Object").getType(),
                            new NativeType("Function"),
                            new TypeIdentifier("GType", "GObject")
                        ),
                        doc: "The object class or type that contains the property to override"
                    })
                ],
                doc: "Registers a property override for a property introduced in a parent class or inherited interface."
            });

            function ParamSpecWithGenerics(type: TypeExpression) {
                return new GenerifiedTypeIdentifier("ParamSpec", "GObject", [type]);
            }

            ParamSpec.members.push(
                generateParamSpec("char", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecChar instance specifying a G_TYPE_CHAR property."
                ),
                generateParamSpec("uchar", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecUChar instance specifying a G_TYPE_UCHAR property."
                ),
                generateParamSpec("int", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecInt instance specifying a G_TYPE_INT property."
                ),
                generateParamSpec("uint", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecUInt instance specifying a G_TYPE_UINT property."
                ),
                generateParamSpec("long", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecLong instance specifying a G_TYPE_LONG property."
                ),
                generateParamSpec("ulong", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecULong instance specifying a G_TYPE_ULONG property."
                ),
                generateParamSpec("int64", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecInt64 instance specifying a G_TYPE_INT64 property."
                ),
                generateParamSpec("uint64", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecUInt64 instance specifying a G_TYPE_UINT64 property."
                ),
                generateParamSpec("float", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecFloat instance specifying a G_TYPE_FLOAT property."
                ),
                generateParamSpec("boolean", ParamSpecWithGenerics(BooleanType), false, null, true, BooleanType, false,
                    "Creates a new GParamSpecBoolean instance specifying a G_TYPE_BOOLEAN property. In many cases, it may be more appropriate to use an enum with g_param_spec_enum(), both to improve code clarity by using explicitly named values, and to allow for more values to be added in future without breaking API."
                ),
                generateParamSpec("flags", ParamSpecWithGenerics(NumberType), false, "flags", true, undefined, false,
                    "Creates a new GParamSpecFlags instance specifying a G_TYPE_FLAGS property."
                ),
                generateParamSpec("enum", ParamSpecWithGenerics(new NativeType("T")), false, "enum", true, undefined, true,
                    "Creates a new GParamSpecEnum instance specifying a G_TYPE_ENUM property."
                ),
                generateParamSpec("double", ParamSpecWithGenerics(NumberType), true, null, true, NumberType, false,
                    "Creates a new GParamSpecDouble instance specifying a G_TYPE_DOUBLE property."
                ),
                generateParamSpec("string", ParamSpecWithGenerics(StringType), false, null, true, StringType, false,
                    "Creates a new GParamSpecString instance specifying a G_TYPE_STRING property."
                ),
                generateParamSpec("boxed", ParamSpecWithGenerics(new NativeType("T")), false, "boxed", false, undefined, true,
                    "Creates a new GParamSpecBoxed instance specifying a G_TYPE_BOXED derived property."
                ),
                object,
                generateParamSpec("param", ParamSpec.getType(), false, "param", false, undefined, false,
                    "Creates a new GParamSpecParam instance specifying a G_TYPE_PARAM property."
                ),
                jsobject,
                override
            );
        }

        {
            namespace.members.delete("Closure");

            namespace.members.set(
                "Closure",
                new IntrospectedAlias({
                    name: "Closure",
                    namespace,
                    type: NativeType.of("(...args: P[]) => R"),
                    generics: [
                        {
                            name: "R",
                            type: AnyType
                        },
                        {
                            name: "P",
                            type: AnyType
                        }
                    ]
                })
            );
        }

        {
            const Object = namespace.assertClass("Object");
            const Value = namespace.assertClass("Value");

            const get_property = Object.members.findIndex(m => m.name === "get_property");
            const set_property = Object.members.findIndex(m => m.name === "set_property");

            Object.members[get_property] = new IntrospectedClassFunction({
                name: "get_property",
                parent: Object,
                parameters: [
                    new IntrospectedFunctionParameter({
                        name: "property_name", 
                        type: StringType,
                        direction: GirDirection.In,
                        doc: "The name of the property to get"
                    }),
                    new IntrospectedFunctionParameter({
                        name: "value",
                        type: Value.getType(), 
                        direction: GirDirection.In,
                        doc: "Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type"
                    })
                ],
                return_type: AnyType,
                doc: `Gets a property of an object.

The value can be:
- an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
- a GObject.Value initialized with the expected type of the property  
- a GObject.Value initialized with a type to which the expected type of the property can be transformed

In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.

Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.`
            });

            Object.members[set_property] = new IntrospectedClassFunction({
                name: "set_property",
                parent: Object,
                parameters: [
                    new IntrospectedFunctionParameter({
                        name: "property_name",
                        type: StringType,
                        direction: GirDirection.In,
                        doc: "The name of the property to set"
                    }),
                    new IntrospectedFunctionParameter({
                        name: "value", 
                        type: Value.getType(),
                        direction: GirDirection.In,
                        doc: "The value to set the property to"
                    })
                ],
                return_type: VoidType,
                doc: "Sets a property on an object."
            });

            // Fix for bind_property_full - make Closure parameters nullable, see https://github.com/gjsify/ts-for-gir/issues/255
            // The bind_property_with_closures method in GObject-2.0.gir shadows bind_property_full,
            // but the Closure parameters are missing nullable="1" attributes even though the
            // documentation states they can be null. This is a bug in the upstream GIR file.
            
            // Find all bind_property_full methods
            const allBindPropertyFull = Object.members.filter(m => 
                m.name === "bind_property_full" && 
                m instanceof IntrospectedClassFunction
            ) as IntrospectedClassFunction[];
                        
            // Find the one with Closure parameters (the shadowed version)
            const bindPropertyFullWithClosures = allBindPropertyFull.find(method => {
                const hasClosureParams = method.parameters.some(param => {
                    if (param.name === "transform_to" || param.name === "transform_from") {
                        const type = param.type.deepUnwrap();
                        const isClosureType = type instanceof TypeIdentifier && type.name === "Closure";
                        return isClosureType;
                    }
                    return false;
                });
                return hasClosureParams;
            });

            if (bindPropertyFullWithClosures) {
                // Create corrected parameters with nullable Closure types
                const correctedParameters = bindPropertyFullWithClosures.parameters.map(param => {
                    if ((param.name === "transform_to" || param.name === "transform_from")) {
                        const type = param.type.deepUnwrap();
                        if (type instanceof TypeIdentifier && type.name === "Closure") {
                            // Make the Closure parameter nullable
                            return param.copy({
                                type: new NullableType(param.type)
                            });
                        }
                    }
                    return param;
                });

                // Find the index and replace
                const bindPropertyFullIndex = Object.members.findIndex(m => m === bindPropertyFullWithClosures);
                Object.members[bindPropertyFullIndex] = bindPropertyFullWithClosures.copy({
                    parameters: correctedParameters
                });
            }

            Object.members.push(
                new IntrospectedStaticClassFunction({
                    name: "_classInit",
                    parent: Object,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "klass",
                            type: AnyType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: AnyType
                }),
                new IntrospectedClassFunction({
                    name: "disconnect",
                    parent: Object,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "id",
                            type: NumberType,
                            direction: GirDirection.In,
                            doc: "Handler ID of the handler to be disconnected"
                        })
                    ],
                    return_type: VoidType,
                    doc: "Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to."
                }),
                new IntrospectedClassFunction({
                    name: "set",
                    parent: Object,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "properties",
                            type: new NativeType("{ [key: string]: any }"),
                            direction: GirDirection.In,
                            doc: "Object containing the properties to set"
                        })
                    ],
                    return_type: VoidType,
                    doc: "Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values."
                }),
                new IntrospectedClassFunction({
                    name: "block_signal_handler",
                    parent: Object,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "id",
                            type: NumberType,
                            direction: GirDirection.In,
                            doc: "Handler ID of the handler to be blocked"
                        })
                    ],
                    return_type: VoidType,
                    doc: "Blocks a handler of an instance so it will not be called during any signal emissions"
                }),
                new IntrospectedClassFunction({
                    name: "unblock_signal_handler",
                    parent: Object,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "id",
                            type: NumberType,
                            direction: GirDirection.In,
                            doc: "Handler ID of the handler to be unblocked"
                        })
                    ],
                    return_type: VoidType,
                    doc: "Unblocks a handler so it will be called again during any signal emissions"
                }),
                new IntrospectedClassFunction({
                    name: "stop_emission_by_name",
                    parent: Object,
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "detailedName",
                            type: StringType,
                            direction: GirDirection.In,
                            doc: "Name of the signal to stop emission of"
                        })
                    ],
                    return_type: VoidType,
                    doc: "Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked."
                })
            );

            function replaceFunction(name: string, ...functions: IntrospectedFunction[]) {
                namespace.members.delete(name);

                namespace.members.set(name, functions);
            }

            // export function signal_handlers_block_by_func(instance: Object, func: Function);

            replaceFunction(
                "signal_handlers_block_by_func",
                new IntrospectedFunction({
                    name: "signal_handlers_block_by_func",
                    namespace,
                    raw_name: "signal_handlers_block_by_func",
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "instance",
                            type: Object.getType(),
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "func",
                            type: AnyFunctionType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                })
            );

            // export function signal_handlers_unblock_by_func  (instance: Object, func: Function);

            replaceFunction(
                "signal_handlers_unblock_by_func",
                new IntrospectedFunction({
                    name: "signal_handlers_unblock_by_func",
                    namespace,
                    raw_name: "signal_handlers_unblock_by_func",
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "instance",
                            type: Object.getType(),
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "func",
                            type: AnyFunctionType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                })
            );

            // export function signal_handlers_disconnect_by_func(instance: Object, func: Function);

            replaceFunction(
                "signal_handlers_disconnect_by_func",
                new IntrospectedFunction({
                    name: "signal_handlers_disconnect_by_func",
                    namespace,
                    raw_name: "signal_handlers_disconnect_by_func",
                    parameters: [
                        new IntrospectedFunctionParameter({
                            name: "instance",
                            type: Object.getType(),
                            direction: GirDirection.In
                        }),
                        new IntrospectedFunctionParameter({
                            name: "func",
                            type: AnyFunctionType,
                            direction: GirDirection.In
                        })
                    ],
                    return_type: VoidType
                })
            );

            // signal_handler_find

            const args = new IntrospectedFunctionParameter({
                name: "args",
                direction: GirDirection.In,
                isVarArgs: true,
                type: new BinaryType(
                    new TupleType(Object.getType(), NativeType.of("SignalMatch")),
                    new TupleType(
                        Object.getType(),
                        new TypeIdentifier("SignalMatchType", "GObject"),
                        NumberType,
                        new TypeIdentifier("Quark", "GLib"),
                        new NullableType(new TypeIdentifier("Closure", "GObject")),
                        new NullableType(ObjectType),
                        new NullableType(ObjectType)
                    )
                )
            });

            const modifiedArgs = [
                new IntrospectedFunctionParameter({
                    name: "instance",
                    direction: GirDirection.In,

                    type: Object.getType()
                }),
                new IntrospectedFunctionParameter({
                    name: "match",
                    direction: GirDirection.In,
                    type: NativeType.of("SignalMatch")
                })
            ];

            const originalArgs = [
                new IntrospectedFunctionParameter({
                    name: "instance",
                    direction: GirDirection.In,

                    type: Object.getType()
                }),
                new IntrospectedFunctionParameter({
                    name: "match",
                    direction: GirDirection.In,
                    type: new TypeIdentifier("SignalMatchType", "GObject")
                }),
                new IntrospectedFunctionParameter({
                    name: "signal_id",
                    direction: GirDirection.In,
                    type: NumberType
                }),
                new IntrospectedFunctionParameter({
                    name: "detail",
                    type: new TypeIdentifier("Quark", "GLib"),
                    direction: GirDirection.In
                }),
                new IntrospectedFunctionParameter({
                    name: "closure",
                    type: new NullableType(new TypeIdentifier("Closure", "GObject")),
                    direction: GirDirection.In
                }),
                new IntrospectedFunctionParameter({
                    name: "func",
                    type: new NullableType(ObjectType),
                    direction: GirDirection.In
                }),
                new IntrospectedFunctionParameter({
                    name: "object",
                    type: new NullableType(ObjectType),
                    direction: GirDirection.In
                })
            ];

            function originalFunc(name: string) {
                return new IntrospectedFunction({
                    name,
                    namespace,
                    raw_name: name,
                    return_type: NumberType,
                    parameters: originalArgs.map(a => a.copy())
                });
            }

            function func(name: string) {
                replaceFunction(
                    name,
                    // [name](...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
                    new IntrospectedFunction({
                        name,
                        namespace,
                        raw_name: name,
                        return_type: NumberType,
                        parameters: [args]
                    }),
                    // export function [name](instance: Object, match: SignalMatch): number;
                    new IntrospectedFunction({
                        name,
                        namespace,
                        raw_name: name,
                        return_type: NumberType,
                        parameters: modifiedArgs.map(a => a.copy())
                    }),
                    // export function [name](instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number
                    originalFunc(name),
                    // export function [`_real_${name}`](instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number
                    originalFunc(`_real_${name}`)
                );
            }

            func("signal_handler_find");
            func("signal_handler_block_matched");
            func("signal_handler_block_disconnect_matched");
            func("signal_handler_block_unblock_matched");
        }
    }
};
