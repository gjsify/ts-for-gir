import { GirNSRegistry } from "./gir/registry.js";
import { SanitizedIdentifiers } from "./gir/util.js";

import { GenerationOptions, Metadata } from "./types.js";

export * as dts from "./generators/dts-modules.js";

export * as json from "./generators/json.js";

export * from "./generators/index.js";

export * from "./types.js";

export * from "./gir.js";
export * from "./gir/nodes.js";

export { GirNSRegistry } from "./gir/registry.js";
export { Formatter } from "./formatters/formatter.js";

export function getSanitizedIdentifiers(): ReadonlyMap<string, string> {
  return SanitizedIdentifiers;
}

export function createRegistry(): GirNSRegistry {
  return new GirNSRegistry();
}

export interface GeneratedModule {
  meta: Metadata;
  formattedOutput: string;
}

export async function generateModule(
  options: GenerationOptions,
  registry: GirNSRegistry,
  name: string,
  version: string
): Promise<GeneratedModule | null> {
  const ns = registry.namespace(name, version);

  if (ns) {
    const Generator = registry.getGenerator(options.format);

    if (!Generator) {
      throw new Error(`Invalid output format selected: ${options.format}.`);
    }

    const generator = new Generator(ns, options);

    let generated: string | null = null;

    try {
      generated = await generator.stringifyNamespace(ns);
    } catch (error) {
      console.error(`Failed to generate ${ns.name} ${ns.version}...`);

      if (options.verbose) {
        console.error(error);
      }
    }

    if (!generated) {
      return null;
    }

    const meta: Metadata = {
      name: ns.name,
      api_version: ns.version,
      package_version: ns.package_version.join("."),
      imports: Object.fromEntries(ns.getImports())
    };

    const formatter = registry.getFormatter(options.format);
    const formatted = !options.noPrettyPrint ? formatter.format(generated) : generated;

    return {
      formattedOutput: formatted,
      meta
    };
  }

  return null;
}
