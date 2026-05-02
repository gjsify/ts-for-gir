import { TemplateEngine } from "@ts-for-gir/lib";
import { EMBEDDED_TEMPLATES } from "./generated/templates-bundle.ts";

// Register embedded templates so TemplateEngine can resolve them without
// requiring @ts-for-gir/templates to be present on the filesystem at runtime.
// Long-term: revert to dynamic loading once gjsify supports require.resolve.
TemplateEngine.registerEmbedded(EMBEDDED_TEMPLATES);

