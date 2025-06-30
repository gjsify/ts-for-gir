// Legacy generators - these have been migrated to separate packages
// @deprecated Use @ts-for-gir/generator-typescript/ModuleGenerator instead
export { DtsGenerator as DtsAbstractGenerator } from "./dts.ts";
// @deprecated Use @ts-for-gir/generator-typescript/ModuleGenerator with Inline format instead
export { DtsInlineGenerator } from "./dts-inline.ts";
// @deprecated Use @ts-for-gir/generator-typescript/ModuleGenerator instead
export { DtsModuleGenerator as DtsGenerator } from "./dts-modules.ts";
export * from "./generator.ts";
// @deprecated Use @ts-for-gir/generator-json instead
export { JsonGenerator } from "./json.ts";
