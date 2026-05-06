import { TemplateEngine } from "@ts-for-gir/lib";
import { EMBEDDED_TEMPLATES } from "./generated/templates-bundle.ts";

// Embed all 43 EJS templates from `@ts-for-gir/templates` as an in-memory map
// so the GJS bundle can render them without resolving the templates package
// at runtime.
//
// Why embedding is the only reliable path today:
//
//   * Templates are looked up by names *computed at runtime* (e.g.
//     `class.d.ts`, `interface.d.ts`, `enumeration.d.ts` depending on which
//     GIR node is being rendered). The path is therefore not statically
//     resolvable, so `@gjsify/esbuild-plugin-gjsify`'s build-time
//     `readFileSync(new URL(…, import.meta.url))` inliner cannot substitute
//     the file contents — it only handles literal-path reads.
//
//   * `TemplateEngine.resolveTemplateDirectory()` falls back to
//     `require.resolve("@ts-for-gir/templates/package.json")` to find the
//     installed package directory. In a flat `node_modules/` layout (`npm
//     install -g`, `gjsify dlx` cache) `@gjsify/module`'s `createRequire`
//     finds it by walking parent directories. Under Yarn PnP — where this
//     bundle is built — the package lives inside `.pnp.cjs`'s virtual
//     resolver, which `@gjsify/module` cannot read, so the fallback fails
//     and the bundle would be unusable in workspace dev runs.
//
// Embedding makes the bundle self-contained for both layouts. A future
// `@gjsify/module` PnP-aware resolver (or a `gjsify install`-managed
// runtime resolution helper) could let us drop the embed for the
// dlx-distributed case; tracked as an Open TODO in gjsify STATUS.md.
TemplateEngine.registerEmbedded(EMBEDDED_TEMPLATES);
