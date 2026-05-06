import { TemplateEngine } from "@ts-for-gir/lib";
import { EMBEDDED_TEMPLATES } from "./generated/templates-bundle.ts";

// Register all 43 EJS templates from @ts-for-gir/templates as an in-memory map.
//
// The template engine reads templates by name computed at runtime (e.g.
// "class.d.ts" or "enumeration.d.ts" depending on which GIR node is being
// rendered). The path is therefore not statically resolvable, so gjsify's
// build-time `readFileSync(new URL(…, import.meta.url))` inliner cannot
// substitute the file contents — the only way to make templates available to
// the GJS bundle without shipping a sibling templates/ directory is to embed
// them up-front via a generated module. The Node.js bundle uses the same map
// for symmetry; falling back to the filesystem still works in dev mode (when
// no templates are registered).
TemplateEngine.registerEmbedded(EMBEDDED_TEMPLATES);
