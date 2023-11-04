import {
  
  NullableType,
  ObjectType,
  BinaryType,
  VoidType,
  PromiseType,
  BooleanType,
  TupleType,
  TypeIdentifier,
  ClosureType
} from "../gir.js";

import {IntrospectedBase, Options, Metadata} from './base.js';
import { GirAliasElement,  ParsedGir, GirInfoAttrs, GirType } from "../../index.js";
import { isPrimitiveType } from "./util.js";

import { IntrospectedClass, GirInterface, GirRecord, IntrospectedBaseClass } from "./class.js";
import { IntrospectedFunction, IntrospectedCallback } from "./function.js";
import { IntrospectedEnum, IntrospectedError } from "./enum.js";
import { IntrospectedConstant } from "./const.js";
import { IntrospectedAlias } from "./alias.js";

import { LoadOptions } from "../types.js";
import { NSRegistry } from "./registry.js";
import { GirVisitor } from "../visitor.js";

export type GirNSMember = IntrospectedBaseClass | IntrospectedFunction | IntrospectedConstant | IntrospectedEnum | IntrospectedAlias;

export const isIntrospectable = (e: { $?: GirInfoAttrs }) =>
  !e || !e.$ || !e.$.introspectable || e.$.introspectable === "1";
export const isDeprecated = (e: { $: GirInfoAttrs }) => e && e.$ && e.$.deprecated === "1";
export const deprecatedVersion = (e: { $: GirInfoAttrs }) => e?.$?.["deprecated-version"];
export const introducedVersion = (e: { $: GirInfoAttrs }) => e?.$?.version;

export function promisifyNamespaceFunctions(namespace: IntrospectedNamespace) {
  return namespace.members.forEach(node => {
    if (!(node instanceof IntrospectedFunction)) return;

    if (node.parameters.length < 1) return;

    const last_param = node.parameters[node.parameters.length - 1];

    if (!last_param) return;

    const last_param_unwrapped = last_param.type.unwrap();

    if (!(last_param_unwrapped instanceof ClosureType)) return;

    const internal = last_param_unwrapped.type;

    if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
      let async_res = [
        ...Array.from(namespace.members.values()).filter((m): m is IntrospectedFunction => m instanceof IntrospectedFunction)
      ].find(
        m => m.name === `${node.name.replace(/_async$/, "")}_finish` || m.name === `${node.name}_finish`
      );

      if (async_res) {
        const async_parameters = node.parameters.slice(0, -1).map(p => p.copy());
        const sync_parameters = node.parameters.map(p => p.copy({ isOptional: false }));
        const output_parameters = async_res.output_parameters;

        let async_return = new PromiseType(async_res.return());

        if (output_parameters.length > 0) {
          const raw_return = async_res.return();
          if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
            const [output_type, ...output_types] = output_parameters.map(op => op.type);
            async_return = new PromiseType(new TupleType(output_type, ...output_types));
          } else {
            const [...output_types] = output_parameters.map(op => op.type);
            async_return = new PromiseType(new TupleType(raw_return, ...output_types));
          }
        }

        namespace.members.set(node.name, [
          node.copy({
            parameters: async_parameters,
            return_type: async_return
          }),
          node.copy({
            parameters: sync_parameters
          }),
          node.copy({
            return_type: new BinaryType(async_return, node.return())
          })
        ]);
      }
    }
  });
}

export class IntrospectedNamespace {
  readonly name: string;
  readonly version: string;
  readonly c_prefixes: string[];

  private imports: Map<string, string> = new Map();
  default_imports: Map<string, string> = new Map();

  private _members?: Map<string, GirNSMember | GirNSMember[]>;
  private _enum_constants?: Map<string, readonly [string, string]>;
  private _resolve_names: Map<string, TypeIdentifier> = new Map();
  __dts__references?: string[];

  package_version!: readonly [string, string] | readonly [string, string, string];
  parent!: NSRegistry;

  constructor(name: string, version: string, prefixes: string[]) {
    this.name = name;
    this.version = version;
    this.c_prefixes = [...prefixes];
    this.package_version = ['0', '0'];
  }

  registerResolveName(resolveName: string, namespace: string, name: string) {
    this._resolve_names.set(resolveName, new TypeIdentifier(name, namespace));
  }

  get members(): Map<string, GirNSMember | GirNSMember[]> {
    if (!this._members) {
      this._members = new Map<string, GirNSMember | GirNSMember[]>();
    }

    return this._members;
  }

  get enum_constants(): Map<string, readonly [string, string]> {
    if (!this._enum_constants) {
      this._enum_constants = new Map();
    }

    return this._enum_constants;
  }

  accept(visitor: GirVisitor) {
    for (const key of [...this.members.keys()]) {
      const member = this.members.get(key);

      if (!member) continue;

      if (Array.isArray(member)) {
        this.members.set(
          key,
          member.map(m => {
            return m.accept(visitor);
          })
        );
      } else {
        this.members.set(key, member.accept(visitor));
      }
    }
  }

  getImportsForCPrefix(c_prefix: string): IntrospectedNamespace[] {
    return this.parent.namespacesForPrefix(c_prefix);
  }

  hasImport(name: string): boolean {
    return this.default_imports.has(name) || this.imports.has(name);
  }

  private _getImport(name: string): IntrospectedNamespace | null {
    let version = this.default_imports.get(name) ?? this.imports.get(name);

    if (name === this.name) {
      return this;
    }

    // TODO: Clean this up, but essentially try to resolve import versions
    // using transitive imports (e.g. use GtkSource to find the version of Gtk)
    if (!version) {
     const entries =  [...this.default_imports.entries()].flatMap(([_name]) => {
        const namespace = this._getImport(_name);

        return [...namespace?.default_imports.entries() ?? []]
      })

      version = Object.fromEntries(entries)[name];
    }

    if (!version) {
      version = this.parent.assertDefaultVersionOf(name);
    }

    const namespace = this.parent.namespace(name, version);

    if (namespace) {
      if (!this.imports.has(namespace.name)) {
        this.imports.set(namespace.name, namespace.version);
      }
    }

    return namespace;
  }

  getInstalledImport(name: string): IntrospectedNamespace | null {
    let version = this.default_imports.get(name) ?? this.imports.get(name);

    if (name === this.name) {
      return this;
    }

    if (!version) {
      version = this.parent.defaultVersionOf(name) ?? undefined;
    }

    if (!version) {
      return null;
    }

    const namespace = this.parent.namespace(name, version);

    if (namespace) {
      if (!this.imports.has(namespace.name)) {
        this.imports.set(namespace.name, namespace.version);
      }
    }

    return namespace;
  }

  assertInstalledImport(name: string): IntrospectedNamespace {
    let namespace = this._getImport(name);

    if (!namespace) {
      throw new Error(`Failed to import ${name} in ${this.name}, not installed or accessible.`);
    }

    return namespace;
  }

  getImports(): [string, string][] {
    return [...this.imports.entries()].sort(([[a], [b]]) => a.localeCompare(b));
  }

  addImport(ns_name: string) {

    this._getImport(ns_name);
  }

  getMembers(name: string): IntrospectedBase[] {
    const members = this.members.get(name);

    if (Array.isArray(members)) {
      return [...members];
    }
    return members ? [members] : [];
  }

  getMemberWithoutOverrides(name: string) {
    if (this.members.has(name)) {
      const member = this.members.get(name);

      if (!Array.isArray(member)) {
        return member;
      }

      return null;
    }

    const resolvedName = this._resolve_names.get(name);
    if (resolvedName) {
      const member = this.members.get(resolvedName.name);

      if (!Array.isArray(member)) {
        return member;
      }
    }

    return null;
  }

  assertClass(name: string): IntrospectedBaseClass {
    const clazz = this.getClass(name);

    if (!clazz) {
      throw new Error(`Class ${name} does not exist in namespace ${this.name}.`);
    }

    return clazz;
  }

  getClass(name: string): IntrospectedBaseClass | null {
    const member = this.getMemberWithoutOverrides(name);

    if (member instanceof IntrospectedBaseClass) {
      return member;
    }
    return null;
  }

  getEnum(name: string): IntrospectedEnum | null {
    const member = this.getMemberWithoutOverrides(name);

    if (member instanceof IntrospectedEnum) {
      return member;
    }
    return null;
  }

  getAlias(name: string): IntrospectedAlias | null {
    const member = this.getMemberWithoutOverrides(name);

    if (member instanceof IntrospectedAlias) {
      return member;
    }
    return null;
  }

  hasSymbol(name: string) {
    return this.members.has(name);
  }

  resolveSymbolFromTypeName(name: string): string | null {
    const resolvedName = this._resolve_names.get(name);

    if (!resolvedName) {
      return null;
    }

    const member = this.members.get(resolvedName.name);
    if (member instanceof IntrospectedBase) {
      return member.name;
    }

    return null;
  }

  findClassCallback(name: string): [string | null, string] {
    const clazzes = Array.from(this.members.values()).filter(
      (m): m is IntrospectedBaseClass => m instanceof IntrospectedBaseClass
    );
    const res = clazzes
      .map<[IntrospectedBaseClass, IntrospectedCallback | undefined]>(m => [
        m,
        m.callbacks.find(c => c.name === name || c.resolve_names.includes(name))
      ])
      .find((r): r is [IntrospectedBaseClass, IntrospectedCallback] => r[1] != null);

    if (res) {
      return [res[0].name, res[1].name];
    } else {
      return [null, name];
    }
  }

  /**
   * This is an internal method to add TypeScript <reference>
   * comments when overrides use parts of the TypeScript standard
   * libraries that are newer than default.
   */
  ___dts___addReference(reference: string) {
    this.__dts__references ??= [];
    this.__dts__references.push(reference);
  }

  static fromXML(repo: ParsedGir, options: LoadOptions, registry: NSRegistry): IntrospectedNamespace {
    const ns = repo.repository[0]?.namespace?.[0];

    if (!ns) throw new Error(`Missing namespace in ${repo.repository[0].package[0].$.name}`)

    const modName = ns.$["name"];
    let version = ns.$["version"];

    // Hardcode harfbuzz version for now...
    if (modName === "HarfBuzz" && version === "0.0") {
      version = "2.0";
    }

    if (!modName) {
      throw new Error(`Invalid GIR file: no namespace name specified.`);
    }

    if (!version) {
      throw new Error(`Invalid GIR file: no version name specified.`);
    }

    const c_prefix = ns.$?.["c:symbol-prefixes"]?.split(",") ?? [];

    if (options.verbose) {
      console.debug(`Parsing ${modName}...`);
    }

    const building = new IntrospectedNamespace(modName, version, c_prefix);
    building.parent = registry;
    // Set the namespace object here to prevent re-parsing the namespace if
    // another namespace imports it.
    registry.mapping.set(modName, version, building);

    const includes = repo.repository[0].include || [];

    includes
      .map(i => [i.$.name, i.$.version] as const)
      .forEach(([name, version]) => {
        if (version) {
          if (options.verbose) {
            console.debug(`Adding dependency ${name} ${version}...`);
          }

          building.default_imports.set(name, version);
        }
      });

    const importConflicts = (el: IntrospectedConstant | IntrospectedBaseClass | IntrospectedFunction) => {
      return !building.hasImport(el.name);
    };

    if (ns.enumeration) {
      // Get the requested enums
      ns.enumeration
        ?.map(enumeration => {
          if (enumeration.$["glib:error-domain"]) {
            return IntrospectedError.fromXML(modName, building, options, null, enumeration);
          } else {
            return IntrospectedEnum.fromXML(modName, building, options, null, enumeration);
          }
        })
        .forEach(c => building.members.set(c.name, c));
    }

    // Constants
    if (ns.constant) {
      ns.constant
        ?.filter(isIntrospectable)
        .map(constant => IntrospectedConstant.fromXML(modName, building, options, null, constant))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    // Get the requested functions
    if (ns.function) {
      ns.function
        ?.filter(isIntrospectable)
        .map(func => IntrospectedFunction.fromXML(modName, building, options, null, func))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.callback) {
      ns.callback
        ?.filter(isIntrospectable)
        .map(callback => IntrospectedCallback.fromXML(modName, building, options, null, callback))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns["glib:boxed"]) {
      ns["glib:boxed"]
        ?.filter(isIntrospectable)
        .map(boxed => new IntrospectedAlias({ name: boxed.$["glib:name"], type: new NullableType(ObjectType) }))
        .forEach(c => building.members.set(c.name, c));
    }


    // Bitfield is a type of enum
    if (ns.bitfield) {
      ns.bitfield
        ?.filter(isIntrospectable)
        .map(field => IntrospectedEnum.fromXML(modName, building, options, building, field, true))
        .forEach(c => building.members.set(c.name, c));
    }

    // The `enum_constants` map maps the C identifiers (GTK_BUTTON_TYPE_Y)
    // to the name of the enum (Button) to resolve references (Gtk.Button.Y)
    Array.from(building.members.values())
      .filter((m): m is IntrospectedEnum => m instanceof IntrospectedEnum)
      .forEach(m => {
        m.members.forEach(member => {
          building.enum_constants.set(member.c_identifier, [m.name, member.name] as const);
        });
      });

    // Get the requested classes
    if (ns.class) {
      ns.class
        ?.filter(isIntrospectable)
        .map(klass => IntrospectedClass.fromXML(modName, building, options, building, klass))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.record) {
      ns.record
        ?.filter(isIntrospectable)
        .map(record => GirRecord.fromXML(modName, building, options, record))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.union) {
      ns.union
        ?.filter(isIntrospectable)
        .map(union => GirRecord.fromXML(modName, building, options, union))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.interface) {
      ns.interface
        ?.map(inter => GirInterface.fromXML(modName, building, options, inter))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.alias) {
      type NamedType = GirType & { $: { name: string } };

      ns.alias
        ?.filter(isIntrospectable)
        // Avoid attempting to alias non-introspectable symbols.
        .map(b => {
          b.type = b.type?.filter((t): t is NamedType => !!(t && t.$.name))
            .map(t => {
              if (
                t.$.name &&
                !building.hasSymbol(t.$.name) &&
                !isPrimitiveType(t.$.name) &&
                !t.$.name.includes(".")
              ) {
                return { $: { name: "unknown", "c:type": "unknown" } } as GirType;
              }

              return t;
            });

          return b;
        })
        .map(alias => IntrospectedAlias.fromXML(modName, building, options, null, alias))
        .filter((alias): alias is IntrospectedAlias => alias != null)
        .forEach(c => building.members.set(c.name, c));
    }

    try {
      let [major = null] = building.getMembers("MAJOR_VERSION");
      let [minor = null] = building.getMembers("MINOR_VERSION");
      let [micro = null] = building.getMembers("MICRO_VERSION");

      if (!major) {
        major = building.getMembers("VERSION_MAJOR")[0] ?? null;
      }

      if (!minor) {
        minor = building.getMembers("VERSION_MINOR")[0] ?? null;
      }

      if (!micro) {
        micro = building.getMembers("VERSION_MICRO")[0] ?? null;
      }

      if (major instanceof IntrospectedConstant && minor instanceof IntrospectedConstant && major.value && minor.value) {
        if (micro instanceof IntrospectedConstant && micro.value) {
          building.package_version = [major.value, minor.value, micro.value] as const;
        } else {
          building.package_version = [major.value, minor.value] as const;
        }
      } else {
        const [major = "", minor = "0", micro] = building.version.split(".").filter(v => v != "");

        if (micro) {
          building.package_version = [major, minor, micro];
        } else {
          building.package_version = [major, minor];
        }
      }
  } catch (error) {
    console.error(`Failed to parse package version for ${building.name} with version ${building.version}`);
  }

    return building;
  }
}
