import { GirXML } from "@gi.ts/parser";
import { DefaultFormatter } from "../formatters/default.js";
import { Formatter } from "../formatters/formatter.js";
import { JSONFormatter } from "../formatters/json.js";
import { DtsGenerator } from "../generators/dts.js";
import { JsonGenerator } from "../generators/json.js";
import { FormatGenerator } from "../generators/generator.js";
import { generify } from "../generics/generify.js";
import { inject } from "../injections/inject.js";
import { GenerationOptions, LoadOptions, TransformOptions } from "../types.js";
import { TwoKeyMap } from "../util.js";
import { ClassVisitor } from "../validators/class.js";
import { InterfaceVisitor } from "../validators/interface.js";
import { GirVisitor } from "../visitor.js";
import { GirNamespace } from "./namespace.js";
import { DtsModuleGenerator } from "../generators/dts-modules.js";
import { DtsInlineGenerator } from "../generators/dts-inline.js";

export interface GirNSLoader {
  load(namespace: string, version: string): GirXML | null;
  loadAll(namespace: string): GirXML[];
}

type GeneratorConstructor<T> = {
  new (namespace: GirNamespace, options: GenerationOptions, ...args: any[]): FormatGenerator<T>;
};

export class GirNSRegistry {
  mapping: TwoKeyMap<string, string, GirNamespace> = new TwoKeyMap();
  private formatters: Map<string, Formatter> = new Map();
  private generators: Map<string, GeneratorConstructor<any>> = new Map();
  c_mapping: Map<string, GirNamespace[]> = new Map();
  transformations: GirVisitor[] = [];
  loaders: [GirNSLoader, LoadOptions][] = [];
  subtypes = new TwoKeyMap<string, string, TwoKeyMap<string, string, boolean>>();

  constructor() {
    this.formatters.set("json", new JSONFormatter());
  }

  registerTransformation(visitor: GirVisitor) {
    this.transformations.push(visitor);

    // Apply transformations to already built namespaces.
    this.mapping.forEach(n => {
      n.accept(visitor);
    });
  }

  registerFormatter(output: string, formatter: Formatter) {
    this.formatters.set(output, formatter);
  }

  getFormatter(output: string) {
    return this.formatters.get(output) ?? new DefaultFormatter();
  }

  registerGenerator<T>(
    output: string,
    generator: { new (namespace: GirNamespace, options: GenerationOptions): FormatGenerator<T> }
  ) {
    this.generators.set(output, generator);
  }

  getGenerator(output: "json"): { new (namespace: GirNamespace, options: GenerationOptions): JsonGenerator };
  getGenerator(output: "dts"): { new (namespace: GirNamespace, options: GenerationOptions): DtsGenerator };
  getGenerator<T>(output: string): GeneratorConstructor<T> | undefined;
  getGenerator(output: string): GeneratorConstructor<any> | undefined {
    if (output === "dts") {
      return DtsModuleGenerator;
    }

    if (output === 'dts-inline') {
      return DtsInlineGenerator;
    }

    if (output === "json") {
      return JsonGenerator;
    }

    // Handle loading external generators...
    if (!this.generators.has(output)) {
      (() => {
        let Generator = require(`@gi.ts/generator-${output}`);

        if (Generator) {
          console.log(`Loading generator "@gi.ts/generator-${output}"...`);
          this.generators.set(output, Generator);
          return;
        }

        Generator = require(`gi-ts-generator-${output}`);

        if (Generator) {
          console.log(`Loading generator "gi-ts-generator-${output}"...`);
          this.generators.set(output, Generator);
          return;
        }

        Generator = require(`${output}`);

        if (Generator) {
          console.log(`Loading generator "${output}"...`);
          this.generators.set(output, Generator);
          return;
        }
      })();
    }

    return this.generators.get(output);
  }

  private _transformNamespace(namespace: GirNamespace) {
    this.transformations.forEach(t => {
      namespace.accept(t);
    });
  }

  namespace(name: string, version: string): GirNamespace | null {
    const namespace = this.mapping.get(name, version);

    if (!namespace) {
      return this._internalLoad(name, version);
    }

    return namespace;
  }

  namespacesForPrefix(c_prefix): GirNamespace[] {
    return this.c_mapping.get(c_prefix) ?? [];
  }

  transform(options: TransformOptions) {
    const GLib = this.assertNamespace("GLib", "2.0");
    const Gio = this.assertNamespace("Gio", "2.0");
    const GObject = this.assertNamespace("GObject", "2.0");

    // These follow the GLib version.
    Gio.package_version = [...GLib.package_version];
    GObject.package_version = [...GLib.package_version];

    const interfaceVisitor = new InterfaceVisitor();

    this.registerTransformation(interfaceVisitor);

    const classVisitor = new ClassVisitor();

    this.registerTransformation(classVisitor);

    console.log("Adding generics...");
    generify(this, options.inferGenerics);

    console.log("Injecting types...");
    inject(this);
  }

  defaultVersionOf(name: string): string | null {
    // GJS has a hard dependency on these versions.
    if (name === "GLib" || name === "Gio" || name === "GObject") {
      return "2.0";
    }

    const meta = this.mapping.getIfOnly(name);

    if (meta) {
      return meta[0];
    }

    let ns = this._defaultVersionInternalLoad(name);

    if (ns) {
      return ns.version;
    }

    return null;
  }

  assertDefaultVersionOf(name: string): string {
    const version = this.defaultVersionOf(name);

    if (version) {
      return version;
    }

    // This mirrors GJS' and GI's default behavior.
    // If we can't find a single version of an unspecified dependency, we throw an error.
    throw new Error(`No single version found for unspecified dependency: ${name}.`);
  }

  assertNamespace(name: string, version: string): GirNamespace {
    let namespace = this.mapping.get(name, version) ?? null;

    if (!namespace) {
      namespace = this._internalLoad(name, version);
    }

    if (!namespace) {
      throw new Error(`Namespace '${name}' not found.`);
    }

    return namespace;
  }

  load(gir: GirXML, options: LoadOptions): GirNamespace {
    const namespace = GirNamespace.fromXML(gir, options, this);

    this.mapping.set(namespace.name, namespace.version, namespace);

    namespace.c_prefixes.forEach(c_prefix => {
      let c_map = this.c_mapping.get(c_prefix) || [];

      c_map.push(namespace);

      this.c_mapping.set(c_prefix, c_map);
    });

    this._transformNamespace(namespace);

    return namespace;
  }

  private _defaultVersionInternalLoad(name: string): GirNamespace | null {
    const all = this.loaders
      .map(([loader, options]) => {
        try {
          return [loader.loadAll(name), options] as const;
        } catch (error) {
          // TODO: Should we throw here?
          console.error(error);
          return null;
        }
      })
      .filter((a): a is [GirXML[], LoadOptions] => a != null);

    if (all.length === 0 || all.length > 1) {
      return null;
    }

    const [[xmls, options]] = all;

    if (xmls.length === 0 || xmls.length > 1) {
      return null;
    }

    const [xml] = xmls;

    const ns = this.load(xml, options);

    if (ns) {
      this._transformNamespace(ns);
    }

    return ns;
  }

  private _internalLoad(name: string, version: string): GirNamespace | null {
    for (const [loader, options] of this.loaders) {
      try {
        const xml = loader.load(name, version);

        if (xml) {
          const ns = this.load(xml, options);

          if (ns) {
            this._transformNamespace(ns);
          }

          return ns;
        }
      } catch (error) {
        // TODO: Should we throw here?
        console.error(error);
      }
    }

    return null;
  }

  registerLoader(loader: GirNSLoader, options: LoadOptions) {
    this.loaders.push([loader, options]);
  }
}
