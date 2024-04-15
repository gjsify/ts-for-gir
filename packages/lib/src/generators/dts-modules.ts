import { IntrospectedNamespace, promisifyNamespaceFunctions } from "../gir/namespace.js";

import { GenerationOptions } from "../types.js";

import { override as overrideGLib } from "./dts/glib.js";
import { override as overrideGObject } from "./dts/gobject.js";
import { DtsGenerator } from "./dts.js";
import { IntrospectedNamespaceMember } from "../gir/base.js";

export class DtsModuleGenerator extends DtsGenerator {
    constructor(namespace: IntrospectedNamespace, options: GenerationOptions) {
        super(namespace, options);
    }

    generateNamespace(node: IntrospectedNamespace): Promise<string | null> {
        const { namespace, options } = this;

        if (options.verbose) {
            console.debug(`Resolving the types of ${namespace.namespace}...`);
        }

        let suffix = "";

        if (!options.noAdvancedVariants && node.namespace === "GLib") {
            suffix = `\n${overrideGLib(node)}\n`;
        } else if (node.namespace === "GObject") {
            suffix = `\n${overrideGObject(node)}\n`;
        }

        try {
            const { namespace: name, version } = node.dependency;

            const header = `
/**
 * ${name} ${version}
 * 
 * Generated from ${node.package_version.join(".")}
 */
`;
            const base = `

`;

            if (options.promisify) {
                promisifyNamespaceFunctions(node);
            }

            const content = Array.from(node.members.values())
                .map(m => {
                    return `${(Array.isArray(m) ? m : [m])
                        .map(m => {
                            const content = (m as IntrospectedNamespaceMember).asString(this);

                            return m.emit ? content : "";
                        })
                        .join("\n")}`;
                })
                .join("\n");

            // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
            const imports = [];

            const metadata = `
        /**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string;
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string;
`;

            const moduleIdentifier = `gi://${name}`;
            const versionedNamespaceIdentifier = `${name}${node.dependency.version.split(".")[0].replace(/[^A-z0-9_]/g, "_")}`;
            const versionedModuleIdentifier = `${moduleIdentifier}?version=${node.dependency.version}`;

            const [versionedModuleHeader, versionedModuleSuffix] = [
                `declare module "${versionedModuleIdentifier}" {
          namespace ${versionedNamespaceIdentifier} {`,
                `};

        export default ${versionedNamespaceIdentifier};
      }`
            ];
            const moduleDefinition = `declare module "${moduleIdentifier}" {
        export * from "${versionedModuleIdentifier}";
      }`;

            const output = [
                header,
                versionedModuleHeader,
                imports,
                base,
                content,
                suffix,
                metadata,
                versionedModuleSuffix,
                moduleDefinition
            ].join("\n\n");

            if (options.verbose) {
                console.debug(`Printing ${namespace.namespace}...`);
            }

            return Promise.resolve(output);
        } catch (err) {
            console.error(`Failed to generate namespace: ${node.namespace}`);
            console.error(err);

            return Promise.resolve(null);
        }
    }

    async stringifyNamespace(node: IntrospectedNamespace): Promise<string | null> {
        return this.generateNamespace(node);
    }
}
