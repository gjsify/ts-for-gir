import { DefaultFormatter } from "../formatters/default.js";
import { Formatter } from "../formatters/formatter.js";
import { JSONFormatter } from "../formatters/json.js";
import { FormatGenerator } from "../generators/generator.js";
import { generify } from "../generics/generify.js";
import { inject } from "../injections/inject.js";
import { GenerationOptions, TransformOptions } from "../types.js";
import { TwoKeyMap } from "../util.js";
import { ClassVisitor } from "../validators/class.js";
import { InterfaceVisitor } from "../validators/interface.js";
import { GirVisitor } from "../visitor.js";
import { IntrospectedNamespace } from "./namespace.js";
import { GirModule } from "../index.js";
import { GirXML } from "@gi.ts/parser";

export interface NSLoader {
    load(namespace: string, version: string): GirXML | null;
    loadAll(namespace: string): GirXML[];
}

type GeneratorConstructor<T> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (namespace: IntrospectedNamespace, options: GenerationOptions, ...args: any[]): FormatGenerator<T>;
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
        generator: { new (namespace: IntrospectedNamespace, options: GenerationOptions): FormatGenerator<T> }
    ) {
        this.generators.set(output, generator);
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
        const namespace = this.mapping.get(name, version) ?? null;

        if (!namespace) {
            throw new Error(`Namespace '${name}' not found.`);
        }

        return namespace;
    }

    register(namespace: GirModule): IntrospectedNamespace {
        this.mapping.set(namespace.name, namespace.version, namespace);

        namespace.c_prefixes.forEach(c_prefix => {
            const c_map = this.c_mapping.get(c_prefix) || [];

            c_map.push({ name: namespace.name, version: namespace.version });

            this.c_mapping.set(c_prefix, c_map);
        });

        this._transformNamespace(namespace);

        return namespace;
    }
}
