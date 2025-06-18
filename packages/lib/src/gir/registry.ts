import { DefaultFormatter } from "../formatters/default.ts";
import { Formatter } from "../formatters/formatter.ts";
import { JSONFormatter } from "../formatters/json.ts";
import { DtsGenerator } from "../generators/dts.ts";
import { JsonGenerator } from "../generators/json.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { generify } from "../generics/generify.ts";
import { inject } from "../injections/inject.ts";
import { TwoKeyMap } from "../util.ts";
import { ClassVisitor } from "../validators/class.ts";
import { InterfaceVisitor } from "../validators/interface.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import { DtsModuleGenerator } from "../generators/dts-modules.ts";
import { DtsInlineGenerator } from "../generators/dts-inline.ts";
import type { ParsedGir } from "../types/parsed-gir.ts";
import { GirModule } from "../index.ts";

import type { OptionsGeneration, OptionsTransform } from "../types/index.ts";
import { FunctionParametersVisitor } from "../validators/function-parameters.ts";

export interface NSLoader {
    load(namespace: string, version: string): ParsedGir | null;
    loadAll(namespace: string): ParsedGir[];
}

type GeneratorConstructor<T> = {
     
    new (namespace: IntrospectedNamespace, options: OptionsGeneration, ...args: any[]): FormatGenerator<T>;
};

export class NSRegistry {
    mapping: TwoKeyMap<string, string, IntrospectedNamespace> = new TwoKeyMap();
    private formatters: Map<string, Formatter> = new Map();
    private generators: Map<string, GeneratorConstructor<unknown>> = new Map();
    c_mapping: Map<string, { version: string; name: string }[]> = new Map();
    transformations: GirVisitor[] = [];
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
        generator: { new (namespace: IntrospectedNamespace, options: OptionsGeneration): FormatGenerator<T> }
    ) {
        this.generators.set(output, generator);
    }

    async getGenerator(
        output: "json"
    ): Promise<{ new (namespace: IntrospectedNamespace, options: OptionsGeneration): JsonGenerator }>;
    async getGenerator(
        output: "dts"
    ): Promise<{ new (namespace: IntrospectedNamespace, options: OptionsGeneration): DtsGenerator }>;
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

        return namespace ?? null;
    }

    namespacesForPrefix(c_prefix: string): IntrospectedNamespace[] {
        return (this.c_mapping.get(c_prefix) ?? []).map(c_mapping =>
            this.assertNamespace(c_mapping.name, c_mapping.version)
        );
    }

    transform(options: OptionsTransform) {
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

        const enumParamsVisitor = new FunctionParametersVisitor();
        this.registerTransformation(enumParamsVisitor);

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

        return null;
    }

    assertDefaultVersionOf(name: string): string {
        const version = this.defaultVersionOf(name);

        if (version) {
            return version;
        }

        // This mirrors GJS' and GI's default behavior.
        // If we can't find a single version of an unspecified dependency, we throw an error.
        throw new Error(`No single version found for unspecified dependency: ${JSON.stringify(name)}.`);
    }

    assertNamespace(name: string, version: string): IntrospectedNamespace {
        const namespace = this.mapping.get(name, version) ?? null;

        if (!namespace) {
            throw new Error(`Namespace '${name}' not found.`);
        }

        return namespace;
    }

    register(namespace: GirModule): IntrospectedNamespace {
        this.mapping.set(namespace.namespace, namespace.version, namespace);

        namespace.c_prefixes.forEach(c_prefix => {
            const c_map = this.c_mapping.get(c_prefix) || [];

            c_map.push({ name: namespace.namespace, version: namespace.version });

            this.c_mapping.set(c_prefix, c_map);
        });

        this._transformNamespace(namespace);

        return namespace;
    }
}
