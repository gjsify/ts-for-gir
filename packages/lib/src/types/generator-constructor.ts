import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { OptionsGeneration } from "./options-generation.ts";
import type { FormatGenerator } from "../generators/generator.ts";

export type GeneratorConstructor<T> = {     
  new (namespace: IntrospectedNamespace, options: OptionsGeneration, ...args: any[]): FormatGenerator<T>;
};