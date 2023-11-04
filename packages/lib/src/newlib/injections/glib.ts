import { GirNamespace } from "../gir/namespace.js";
import {
  GirConstructor,
  GirFunctionParameter,
  GirClassFunction,
  GirFunction,
  GirDirectAllocationConstructor
} from "../gir/function.js";
import {
  NativeType,
  AnyType,
  BooleanType,
  Uint8ArrayType,
  StringType,
  UnknownType,
  GenericType,
  TypeIdentifier,
  BinaryType
} from "../gir.js";
import { Direction } from "@gi.ts/parser";
import { GirNSRegistry } from "../gir/registry.js";
import { GirRecord } from "../gir/class.js";

export default {
  namespace: "GLib",
  version: "2.0",
  modifier(namespace: GirNamespace, registry: GirNSRegistry) {
    // export function log_structured(logDomain, logLevel, stringFields);

    namespace.members.set(
      "log_structured",
      new GirFunction({
        name: "log_structured",
        raw_name: "log_structured",
        parameters: [
          new GirFunctionParameter({
            name: "logDomain",
            type: AnyType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "logLevel",
            type: AnyType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "stringFields",
            type: AnyType,
            direction: Direction.In
          })
        ],
        return_type: AnyType
      })
    );

    // export function strstrip(str: string): string;

    namespace.members.set(
      "strstrip",
      new GirFunction({
        name: "strstrip",
        raw_name: "strstrip",
        parameters: [
          new GirFunctionParameter({
            name: "str",
            type: StringType,
            direction: Direction.In
          })
        ],
        return_type: StringType
      })
    );

    // GLib.Error

    {
      const Error = namespace.assertClass("Error");

      const fixQuark = <T extends GirConstructor | GirClassFunction>(c: T): T => {
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

      if (Error.mainConstructor && !(Error.mainConstructor instanceof GirDirectAllocationConstructor))
        Error.mainConstructor = fixQuark(Error.mainConstructor);

      Error.constructors = Error.constructors.map(c => fixQuark(c));
      Error.members = Error.members.map(m => fixQuark(m));
    }

    {
      const HashTable = namespace.assertClass("HashTable") as GirRecord;

      HashTable.indexSignature = `[key: string]: B;`;
    }

    // GLib.Variant

    {
      const Variant = namespace.assertClass("Variant");
      const VariantType = namespace.assertClass("VariantType");

      Variant.addGeneric({
        default: new NativeType(`any`),
        constraint: StringType
      });

      VariantType.addGeneric({
        default: new NativeType(`any`),
        constraint: StringType
      });

      const VariantParams = [
        new GirFunctionParameter({
          name: "sig",
          type: new GenericType("A"),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "value",
          type: AnyType,
          direction: Direction.In
        })
      ];
      const VariantConstructor = new GirConstructor({
        name: "new",
        parameters: VariantParams.map(vp => vp.copy()),
        return_type: Variant.getType()
      });

      Variant.mainConstructor = VariantConstructor.copy();

      Variant.constructors.unshift(
        // static new: (sig: any, value: any) => Variant;
        VariantConstructor.copy(),
        // static _new_internal: (sig: any, value: any) => any;,
        new GirConstructor({
          name: "_new_internal",
          parameters: VariantParams.map(vp => vp.copy()),
          return_type: AnyType
        })
      );

      Variant.members.push(
        // unpack<T= any>(): T;
        new GirClassFunction({
          name: "unpack",
          return_type: UnknownType,
          parent: Variant
        }),
        // deepUnpack<T = any>(): T;
        new GirClassFunction({
          name: "deepUnpack",
          return_type: UnknownType,
          parent: Variant
        }),
        // deep_unpack: any;
        new GirClassFunction({
          name: "deep_unpack",
          return_type: UnknownType,
          parent: Variant
        }),
        // recursiveUnpack: () => any;
        new GirClassFunction({
          name: "recursiveUnpack",
          return_type: AnyType,
          parent: Variant
        }),
        // _init(sig: any, value: any): Variant;
        new GirClassFunction({
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
        new GirClassFunction({
          name: "lookup",
          return_type: AnyType,
          parent: VariantDict,
          parameters: [
            new GirFunctionParameter({
              name: "key",
              direction: Direction.In,
              type: AnyType
            }),
            new GirFunctionParameter({
              name: "variantType",
              direction: Direction.In,
              type: AnyType,
              isOptional: true
            }),
            new GirFunctionParameter({
              name: "deep",
              direction: Direction.In,
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
        new GirClassFunction({
          name: "toArray",
          return_type: Uint8ArrayType,
          parent: Bytes,
          parameters: []
        })
      );
    }
  }
};
