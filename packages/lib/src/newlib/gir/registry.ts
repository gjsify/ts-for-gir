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
import { IntrospectedNamespace } from "./namespace.js";
import { DtsModuleGenerator } from "../generators/dts-modules.js";
import { DtsInlineGenerator } from "../generators/dts-inline.js";
import { ParsedGir } from "../../types/parsed-gir.js";
import { GenerateConfig } from "../../types/generate-config.js";

export interface NSLoader {
    load(namespace: string, version: string): ParsedGir | null;
    loadAll(namespace: string): ParsedGir[];
}

type GeneratorConstructor<T> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (namespace: IntrospectedNamespace, options: GenerationOptions, ...args: any[]): FormatGenerator<T>;
};

export class NSRegistry {
    mapping: TwoKeyMap<string, string, IntrospectedNamespace> = new TwoKeyMap();
    private formatters: Map<string, Formatter> = new Map();
    private generators: Map<string, GeneratorConstructor<unknown>> = new Map();
    c_mapping: Map<string, IntrospectedNamespace[]> = new Map();
    transformations: GirVisitor[] = [];
    loaders: [NSLoader, LoadOptions][] = [];
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
        generator: { new (namespace: IntrospectedNamespace, options: GenerationOptions): FormatGenerator<T> }
    ) {
        this.generators.set(output, generator);
    }

    async getGenerator(
        output: "json"
    ): Promise<{ new (namespace: IntrospectedNamespace, options: GenerationOptions): JsonGenerator }>;
    async getGenerator(
        output: "dts"
    ): Promise<{ new (namespace: IntrospectedNamespace, options: GenerationOptions): DtsGenerator }>;
    async getGenerator<T>(output: string): Promise<GeneratorConstructor<T> | undefined>;
    async getGenerator(output: string): Promise<GeneratorConstructor<unknown> | undefined> {
        if (output === "dts") {
            return DtsModuleGenerator;
        }

        if (output === "dts-inline") {
            return DtsInlineGenerator;
        }

        if (output === "json") {
            return JsonGenerator;
        }

        // Handle loading external generators...
        if (!this.generators.has(output)) {
            let Generator: { default: GeneratorConstructor<unknown> };
            try {
                Generator = (await import(`@gi.ts/generator-${output}`)) as { default: GeneratorConstructor<unknown> };

                if (Generator) {
                    console.log(`Loading generator "@gi.ts/generator-${output}"...`);
                    this.generators.set(output, Generator.default);
                    return;
                }
            } catch {
                try {
                    Generator = (await import(`gi-ts-generator-${output}`)) as {
                        default: GeneratorConstructor<unknown>;
                    };

                    console.log(`Loading generator "gi-ts-generator-${output}"...`);
                    this.generators.set(output, Generator.default);
                    return;
                } catch {
                    try {
                        Generator = (await import(`${output}`)) as { default: GeneratorConstructor<unknown> };

                        console.log(`Loading generator "${output}"...`);
                        this.generators.set(output, Generator.default);
                        return;
                    } catch {}
                }
            }
        }

        return this.generators.get(output);
    }

    private _transformNamespace(namespace: IntrospectedNamespace) {
        this.transformations.forEach(t => {
            namespace.accept(t);
        });
    }

    namespace(name: string, version: string): IntrospectedNamespace | null {
        const namespace = this.mapping.get(name, version);

        if (!namespace) {
            return this._internalLoad(name, version);
        }

        return namespace;
    }

    namespacesForPrefix(c_prefix: string): IntrospectedNamespace[] {
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

        const ns = this._defaultVersionInternalLoad(name);

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

    assertNamespace(name: string, version: string): IntrospectedNamespace {
        let namespace = this.mapping.get(name, version) ?? null;

        if (!namespace) {
            namespace = this._internalLoad(name, version);
        }

        if (!namespace) {
            throw new Error(`Namespace '${name}' not found.`);
        }

        return namespace;
    }

    load(gir: ParsedGir, options: LoadOptions): IntrospectedNamespace {
        const namespace = IntrospectedNamespace.load(gir, options as LoadOptions & GenerateConfig, this);

        this.mapping.set(namespace.name, namespace.version, namespace);

        namespace.c_prefixes.forEach(c_prefix => {
            const c_map = this.c_mapping.get(c_prefix) || [];

            c_map.push(namespace);

            this.c_mapping.set(c_prefix, c_map);
        });

        this._transformNamespace(namespace);

        return namespace;
    }

    private _defaultVersionInternalLoad(name: string): IntrospectedNamespace | null {
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
            .filter((a): a is [ParsedGir[], LoadOptions] => a != null);

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

    private _internalLoad(name: string, version: string): IntrospectedNamespace | null {
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

    registerLoader(loader: NSLoader, options: LoadOptions) {
        this.loaders.push([loader, options]);
    }
}
