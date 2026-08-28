import type { IntrospectedNamespace } from "../gir/namespace.ts";
import type { NSRegistry } from "../gir/registry.ts";
import { makeUnion, NullType, TypeIdentifier } from "../gir.ts";
import { mutterApiVersionsFrom } from "../mutter-api-versions.ts";

const shellTemplate = (version: string) => ({
	namespace: "Shell",
	version,
	modifier(namespace: IntrospectedNamespace, _registry: NSRegistry) {
		// `getClass`, not `assertClass`: this is a targeted fixup for ONE method
		// on ONE class, and the class is not guaranteed to be there. GNOME 51
		// dropped `Shell.GLSLEffect` outright, so asserting it aborted the whole
		// generation the moment Shell-51 entered the version list — an OPTIONAL
		// injection (registered with `$_`) that made a missing class fatal.
		// Nothing to widen is not an error; it is the injection having no work.
		const GLSLEffect = namespace.getClass("GLSLEffect");
		if (!GLSLEffect) {
			return;
		}

		// Find the add_glsl_snippet method
		const addGlslSnippet = GLSLEffect.members.find((m) => m.name === "add_glsl_snippet");

		// Change
		// ```ts
		// add_glsl_snippet(hook: SnippetHook | null, declarations: string, code: string, is_replace: boolean): void;
		// ```
		// to
		// ```ts
		// add_glsl_snippet(hook: SnippetHook | Cogl.SnippetHook | null, declarations: string, code: string, is_replace: boolean): void;
		// ```

		if (addGlslSnippet) {
			// Create a new parameter with updated type using copy()
			const updatedParameter = addGlslSnippet.parameters[0].copy({
				type: makeUnion(
					new TypeIdentifier("SnippetHook", "Shell"),
					new TypeIdentifier("SnippetHook", "Cogl"),
					NullType,
				),
			});

			// Replace the original parameter
			addGlslSnippet.parameters[0] = updatedParameter;
		}
	},
});

// Version exports — one injection per known Mutter API version from 14 on.
// Older Shell GIRs have no `GLSLEffect`, which the modifier asserts. See
// MUTTER_API_VERSIONS for why the list of cycles lives in one shared place.
export const shellTemplates = mutterApiVersionsFrom("14").map(shellTemplate);
