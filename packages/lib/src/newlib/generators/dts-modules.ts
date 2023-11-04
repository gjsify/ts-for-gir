import { GirNamespace, promisifyNamespaceFunctions } from "../gir/namespace.js";

import {
  GirBase } from "../gir.js";
import { GenerationOptions } from "../types.js";

import { override as overrideGLib } from "./dts/glib.js";
import { override as overrideGObject } from "./dts/gobject.js";
import { override as overrideGio } from "./dts/gio.js";
import { DtsGenerator, versionImportFormat } from "./dts.js";

export class DtsModuleGenerator extends DtsGenerator {
  constructor(namespace: GirNamespace, options: GenerationOptions) {
    super(namespace, options);
  }


  async generateNamespace(node: GirNamespace): Promise<string | null> {
    const { namespace, options } = this;

    if (options.verbose) {
      console.debug(`Resolving the types of ${namespace.name}...`);
    }

    let suffix = "";

    if (!options.noAdvancedVariants && node.name === "GLib") {
      suffix = `\n${overrideGLib(node)}\n`;
    } else if (node.name === "GObject") {
      suffix = `\n${overrideGObject(node)}\n`;
    } else if (node.name === "Gio") {
      suffix = `\n${overrideGio(node)}\n`;
    }

    try {
      const { name } = node;

      const header = `
/**
 * ${name} ${node.version}
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
            .map(m => (m.emit ? (m as GirBase).asString(this) : ""))
            .join(`\n`)}`;
        })
        .join(`\n`);

      const pathSuffix = options.outputFormat === "folder" ? "/index.d.ts" : ".d.ts";
      const referenceType = options.importPrefix.startsWith(".") ? "path" : "types";
      const references = [
        ...(node.__dts__references ?? []),
        ...Array.from(node.getImports()).map(
          ([i, version]) =>
            `/// <reference ${referenceType}="${options.importPrefix}${
              options.versionedImports ? versionImportFormat(options.versionFormat ?? '{namespace-lower}{version-slug}', i, version) : ""
            }${referenceType === "path" ? pathSuffix : ""}" />`
        )
      ].join(`\n`);

      // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
      const imports = Array.from(node.getImports())
        .map(
          ([i, version]) =>
            `import ${i} from 'gi://${i}${options.versionedImports ? `?version=${version}` : ""}';`
        )
        .join(`\n`);

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
      const versionedNamespaceIdentifier = `${name}${node.version.split('.')[0].replace(/[^A-z0-9_]/g, '_')}`;
      const versionedModuleIdentifier = `${moduleIdentifier}?version=${node.version}`;

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
        references,
        header,
        versionedModuleHeader,
        imports,
        base,
        content,
        suffix,
        metadata,
        versionedModuleSuffix,
        moduleDefinition
      ].join(`\n\n`);

      if (options.verbose) {
        console.debug(`Printing ${namespace.name}...`);
      }

      return output;
    } catch (err) {
      console.error(`Failed to generate namespace: ${node.name}`);
      console.error(err);

      return null;
    }
  }

  async stringifyNamespace(node: GirNamespace): Promise<string | null> {
    return this.generateNamespace(node);
  }
}
