import { GirNamespace } from "../gir/namespace.js";
import { GirFunctionParameter, GirClassFunction, GirFunction, GirStaticClassFunction } from "../gir/function.js";
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
  GenerifiedTypeIdentifier
} from "../gir.js";
import { Direction } from "@gi.ts/parser";
import { GirField } from "../gir/property.js";
import { GirAlias } from "../gir/alias.js";
import { GirInterface } from "../gir/class.js";
import { GirNSRegistry } from "../gir/registry.js";

function typeParam(name: string, type: TypeExpression) {
  return new GirFunctionParameter({
    name,
    direction: Direction.In,
    type: type
  });
}

function anyParam(name: string) {
  return typeParam(name, AnyType);
}

export default {
  namespace: "GObject",
  version: "2.0",
  modifier(namespace: GirNamespace, _registry: GirNSRegistry) {
    {
      const SignalMatch = new GirInterface({
        name: "SignalMatch",
        namespace,
        fields: [
          new GirField({
            name: "signalId",
            type: StringType,
            isStatic: false,
            writable: true
          }),
          new GirField({
            name: "detail",
            type: StringType,
            isStatic: false,
            writable: true
          }),
          new GirField({
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

      const GType = new GirAlias({
        name: "GType",
        type: new NativeType("any")
      });
      namespace.members.set("GType", GType);

      // We don't want to emit TypeScript-specific GType
      // hacks, but we still need the alias so the type
      // can resolve.
      GType.noEmit();

      const ParamSpec = namespace.assertClass("ParamSpec");
      const ParamFlags = namespace.getEnum("ParamFlags");

      function generateParamSpec(
        name: string,
        returnType: TypeExpression = ParamSpec.getType(),
        minMax = false,
        type: string | null = null,
        defaultValue = false,
        defaultValueType: TypeExpression = AnyType,
        addGeneric = false
      ) {
        const fn = new GirStaticClassFunction({
          name,
          parameters: [
            typeParam("name", StringType),
            typeParam("nick", StringType),
            typeParam("blurb", StringType),
            typeParam("flags", new BinaryType(ParamFlags?.getType() ?? AnyType, NumberType)),
            ...(minMax ? [typeParam("minimum", NumberType), typeParam("maximum", NumberType)] : []),
            ...(type
              ? !addGeneric
                ? [anyParam(`${type}Type`)]
                : [
                    new GirFunctionParameter({
                      name: `${type}Type`,
                      direction: Direction.In,
                      type: new NativeType("GType<T> | { $gtype: GType<T> }")
                    })
                  ]
              : []),
            ...(defaultValue ? [typeParam("defaultValue", defaultValueType)] : [])
          ],
          parent: ParamSpec,
          return_type: returnType
        });

        if (addGeneric) {
          fn.generics.push(new Generic(new GenericType("T")));
        }

        return fn;
      }

      ParamSpec.fields.push(
        new GirField({
          name: "override",
          isStatic: true,
          type: AnyType,
          writable: true
        })
      );

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

      const object = new GirStaticClassFunction({
        name: "object",
        parameters: [
          anyParam("name"),
          anyParam("nick"),
          anyParam("blurb"),
          anyParam("flags"),
          new GirFunctionParameter({
            name: `objectType`,
            direction: Direction.In,
            type: new NativeType("GType<T> | { $gtype: GType<T> }")
          })
        ],
        parent: ParamSpec,
        return_type: new NativeType("ParamSpec<T>")
      });

      object.generics.push(new Generic(new GenericType("T")));

      function ParamSpecWithGenerics(type: TypeExpression) {
        return new GenerifiedTypeIdentifier("ParamSpec", "GObject", [type]);
      }

      ParamSpec.members.push(
        //   "char": "static char(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("char", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "uchar": "static uchar(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any):ParamSpec;",
        generateParamSpec("uchar", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "int": "static int(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("int", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "uint": "static uint(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("uint", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "long": "static long(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("long", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "ulong": "static ulong(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("ulong", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "int64": "static int64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("int64", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "uint64": "static uint64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("uint64", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "float": "static float(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("float", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "boolean": "static boolean(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;",
        generateParamSpec("boolean", ParamSpecWithGenerics(BooleanType), false, null, true, BooleanType),
        //   "flags": "static flags(name: any, nick: any, blurb: any, flags: any, flagsType: any, defaultValue: any): ParamSpec;",
        generateParamSpec("flags", ParamSpecWithGenerics(NumberType), false, "flags", true),
        //   "enum": "static enum(name: any, nick: any, blurb: any, flags: any, enumType: any, defaultValue: any): ParamSpec;",
        generateParamSpec(
          "enum",
          ParamSpecWithGenerics(new NativeType("T")),
          false,
          "enum",
          true,
          undefined,
          true
        ),
        //   "double": "static double(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("double", ParamSpecWithGenerics(NumberType), true, null, true, NumberType),
        //   "string": "static string(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;",
        generateParamSpec("string", ParamSpecWithGenerics(StringType), false, null, true, StringType),
        //   "boxed": "static boxed(name: any, nick: any, blurb: any, flags: any, boxedType: any): ParamSpec;",
        generateParamSpec(
          "boxed",
          ParamSpecWithGenerics(new NativeType("T")),
          false,
          "boxed",
          false,
          undefined,
          true
        ),
        //   "object": "static object(name: any, nick: any, blurb: any, flags: any, objectType: any): ParamSpec;",
        object,
        //   "param": "static param(name: any, nick: any, blurb: any, flags: any, paramType: any): ParamSpec;",
        generateParamSpec("param", ParamSpec.getType(), false, "param", false)
      );
    }

    {
      namespace.members.delete("Closure");

      namespace.members.set(
        "Closure",
        new GirAlias({
          name: "Closure",
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

      const get_property = Object.members.findIndex(m => m.name === "get_property");
      const set_property = Object.members.findIndex(m => m.name === "set_property");

      Object.members[get_property] = new GirClassFunction({
        name: "get_property",
        parent: Object,
        parameters: [
          new GirFunctionParameter({
            name: "property_name",
            type: StringType,
            direction: Direction.In
          })
        ],
        return_type: AnyType
      });

      Object.members[set_property] = new GirClassFunction({
        name: "set_property",
        parent: Object,
        parameters: [
          new GirFunctionParameter({
            name: "property_name",
            type: StringType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "value",
            type: AnyType,
            direction: Direction.In
          })
        ],
        return_type: VoidType
      });

      Object.members.push(
        new GirStaticClassFunction({
          name: "_classInit",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "klass",
              type: AnyType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        }),
        new GirClassFunction({
          name: "disconnect",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "id",
              type: NumberType,
              direction: Direction.In
            })
          ],
          return_type: VoidType
        }),
        // TODO: Add per-class set type checking.
        new GirClassFunction({
          name: "set",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "properties",
              type: new NativeType("{ [key: string]: any }"),
              direction: Direction.In
            })
          ],
          return_type: VoidType
        }),
        new GirClassFunction({
          name: "block_signal_handler",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "id",
              type: NumberType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        }),
        new GirClassFunction({
          name: "unblock_signal_handler",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "id",
              type: NumberType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        }),
        new GirClassFunction({
          name: "stop_emission_by_name",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "detailedName",
              type: StringType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        })
      );

      function replaceFunction(name: string, ...functions: GirFunction[]) {
        namespace.members.delete(name);

        namespace.members.set(name, functions);
      }

      // export function signal_handlers_block_by_func(instance: Object, func: Function);

      replaceFunction(
        "signal_handlers_block_by_func",
        new GirFunction({
          name: "signal_handlers_block_by_func",
          raw_name: "signal_handlers_block_by_func",
          parameters: [
            new GirFunctionParameter({
              name: "instance",
              type: Object.getType(),
              direction: Direction.In
            }),
            new GirFunctionParameter({
              name: "func",
              type: AnyFunctionType,
              direction: Direction.In
            })
          ],
          return_type: VoidType
        })
      );

      // export function signal_handlers_unblock_by_func  (instance: Object, func: Function);

      replaceFunction(
        "signal_handlers_unblock_by_func",
        new GirFunction({
          name: "signal_handlers_unblock_by_func",
          raw_name: "signal_handlers_unblock_by_func",
          parameters: [
            new GirFunctionParameter({
              name: "instance",
              type: Object.getType(),
              direction: Direction.In
            }),
            new GirFunctionParameter({
              name: "func",
              type: AnyFunctionType,
              direction: Direction.In
            })
          ],
          return_type: VoidType
        })
      );

      // export function signal_handlers_disconnect_by_func(instance: Object, func: Function);

      replaceFunction(
        "signal_handlers_disconnect_by_func",
        new GirFunction({
          name: "signal_handlers_disconnect_by_func",
          raw_name: "signal_handlers_disconnect_by_func",
          parameters: [
            new GirFunctionParameter({
              name: "instance",
              type: Object.getType(),
              direction: Direction.In
            }),
            new GirFunctionParameter({
              name: "func",
              type: AnyFunctionType,
              direction: Direction.In
            })
          ],
          return_type: VoidType
        })
      );

      // signal_handler_find

      const args = new GirFunctionParameter({
        name: "args",
        direction: Direction.In,
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
        new GirFunctionParameter({
          name: "instance",
          direction: Direction.In,

          type: Object.getType()
        }),
        new GirFunctionParameter({
          name: "match",
          direction: Direction.In,
          type: NativeType.of("SignalMatch")
        })
      ];

      const originalArgs = [
        new GirFunctionParameter({
          name: "instance",
          direction: Direction.In,

          type: Object.getType()
        }),
        new GirFunctionParameter({
          name: "match",
          direction: Direction.In,
          type: new TypeIdentifier("SignalMatchType", "GObject")
        }),
        new GirFunctionParameter({
          name: "signal_id",
          direction: Direction.In,
          type: NumberType
        }),
        new GirFunctionParameter({
          name: "detail",
          type: new TypeIdentifier("Quark", "GLib"),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "closure",
          type: new NullableType(new TypeIdentifier("Closure", "GObject")),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "func",
          type: new NullableType(ObjectType),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "object",
          type: new NullableType(ObjectType),
          direction: Direction.In
        })
      ];

      function originalFunc(name: string) {
        return new GirFunction({
          name,
          raw_name: name,
          return_type: NumberType,
          parameters: originalArgs.map(a => a.copy())
        });
      }

      function func(name: string) {
        replaceFunction(
          name,
          // [name](...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
          new GirFunction({
            name,
            raw_name: name,
            return_type: NumberType,
            parameters: [args]
          }),
          // export function [name](instance: Object, match: SignalMatch): number;
          new GirFunction({
            name,
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
