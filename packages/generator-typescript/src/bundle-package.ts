import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  APP_NAME,
  APP_VERSION,
  type GirModule,
  Logger,
  type OptionsGeneration,
} from "@ts-for-gir/lib";

/** One resolved `exports` entry. `import`/`default` are absent when no runtime file was written. */
type ExportTarget = { types: string; import?: string; default?: string };

/**
 * Writes the single `package.json` (and README) of a `--bundle` run.
 *
 * The `exports` map is derived from the files that were ACTUALLY written, not from the shape a
 * namespace is expected to have. The per-namespace subpaths are already conditional today — the
 * widget vocabulary only exists for namespaces that declare a `GtkWidget` descendant, and the
 * `gjs` package carries six extra files no other namespace has — so a map built from the
 * expected shape is a second source of truth that drifts silently: a subpath that resolves to a
 * missing file fails at the consumer, long after generation reported success.
 */
export class BundlePackage {
  config: OptionsGeneration;
  girModules: GirModule[];
  log: Logger;

  constructor(config: OptionsGeneration, girModules: GirModule[]) {
    this.config = config;
    this.girModules = girModules;
    this.log = new Logger(config.verbose, BundlePackage.name);
  }

  async export(): Promise<void> {
    const { bundle, outdir } = this.config;
    if (!bundle || !outdir) return;

    const exports = await this.collectExports(outdir);
    const namespaceCount = Object.keys(exports).filter((key) => !key.includes("/")).length - 1;

    const manifest: Record<string, unknown> = {
      name: bundle,
      version: APP_VERSION,
      description: `GJS TypeScript type definitions for ${namespaceCount} namespaces, generated as one self-contained package`,
      type: "module",
      // No "." entry, and no "main"/"types": a barrel over every namespace would pull the whole
      // set into any program that touches one of them, which is exactly what the per-namespace
      // subpaths exist to avoid. Importing the bare package name fails, and it fails clearly.
      exports,
      ...this.libraryVersions(),
      keywords: ["gjs", "gir", "types", "typescript", "gnome"],
      author: APP_NAME,
      license: "MIT",
      bugs: { url: "https://github.com/gjsify/ts-for-gir/issues" },
      homepage: "https://github.com/gjsify/ts-for-gir#readme",
    };

    // Merged last so provenance can also correct a computed field (a channel build numbers its
    // own `version`); `name` and `exports` are refused in `validate()`, before generation runs.
    Object.assign(manifest, this.config.bundleMeta ?? {});

    await writeFile(join(outdir, "package.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    await writeFile(join(outdir, "README.md"), this.readme(bundle, namespaceCount), "utf8");

    this.log.log(
      `Bundle ${bundle}: ${namespaceCount} namespaces, ${Object.keys(exports).length} subpaths`,
    );
  }

  /**
   * `<dir>/index.d.ts` marks a generated namespace; every other `.d.ts` beside it becomes a
   * subpath. Three names are re-spelled to the subpaths the per-namespace packages have always
   * published (`@girs/gtk-4.0/ambient`), so moving a project onto a bundle changes the package
   * name and nothing else.
   */
  private async collectExports(outdir: string): Promise<Record<string, ExportTarget | string>> {
    const exports: Record<string, ExportTarget | string> = {
      "./package.json": "./package.json",
    };

    const entries = await readdir(outdir, { withFileTypes: true });
    const dirs = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();

    for (const dir of dirs) {
      const files = new Set(await readdir(join(outdir, dir)));
      if (!files.has("index.d.ts")) continue;

      exports[`./${dir}`] = this.target(files, dir, "index");

      for (const file of [...files].sort()) {
        if (!file.endsWith(".d.ts") || file === "index.d.ts") continue;
        const stem = file.slice(0, -".d.ts".length);
        const subpath =
          stem === `${dir}-ambient`
            ? "ambient"
            : stem === `${dir}-import`
              ? "import"
              : stem === `${dir}-vocabulary`
                ? "vocabulary"
                : stem;
        exports[`./${dir}/${subpath}`] = this.target(files, dir, stem);
      }
    }

    return exports;
  }

  private target(files: Set<string>, dir: string, stem: string): ExportTarget {
    const target: ExportTarget = { types: `./${dir}/${stem}.d.ts` };
    if (files.has(`${stem}.js`)) {
      target.import = `./${dir}/${stem}.js`;
      target.default = `./${dir}/${stem}.js`;
    }
    return target;
  }

  /**
   * Only versions the library states about itself, matching the per-namespace manifests: a
   * namespace version wearing a release's clothes (`4.0.0` for Gdk-4.0, which ships inside GTK
   * 4.2x) reads as a skew against the installed library that does not exist.
   */
  private libraryVersions(): { libraryVersions?: Record<string, string> } {
    const versions: Record<string, string> = {};
    for (const module of this.girModules) {
      if (module.libraryVersion?.declaredByLibrary) {
        versions[module.importName] = String(module.libraryVersion);
      }
    }
    return Object.keys(versions).length > 0 ? { libraryVersions: versions } : {};
  }

  private readme(bundle: string, namespaceCount: number): string {
    return `# ${bundle}

GJS TypeScript type definitions for ${namespaceCount} namespaces, generated by
[ts-for-gir](https://github.com/gjsify/ts-for-gir) as **one self-contained package**.

Every namespace is a subpath, and the namespaces reference each other inside the package — so
the whole set is installed, resolved and versioned as a unit, and no namespace can end up
resolving against a differently-versioned copy from the registry.

\`\`\`ts
import "${bundle}/gtk-4.0";
import "${bundle}/adw-1";

import Gtk from "gi://Gtk?version=4.0";
\`\`\`

There is no barrel: importing \`${bundle}\` on its own is not supported, because a single entry
point over every namespace would pull the whole set into any program that touches one of them.

To keep the classic \`@girs/*\` import specifiers in an existing project, map them once:

\`\`\`jsonc
// tsconfig.json
"paths": { "@girs/*": ["./node_modules/${bundle}/*"] }
\`\`\`
`;
  }
}
