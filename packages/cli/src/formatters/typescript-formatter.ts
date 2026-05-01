/**
 * TypeScript formatter — pass-through.
 *
 * The generator's templates and string-builders emit the desired output
 * shape directly; we no longer round-trip through Prettier. This shrinks
 * the generation pipeline (no AST parse + reprint per file), drops a
 * heavy bundler-hostile dependency for non-Node consumers, and makes
 * generated output deterministic without an external formatter.
 */

import { Formatter } from "@ts-for-gir/lib";

export class TypeScriptFormatter extends Formatter {
	format(input: string): Promise<string> {
		return Promise.resolve(input);
	}
}
