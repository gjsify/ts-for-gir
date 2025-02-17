import { IntrospectedNamespace } from "../gir/namespace.js";
import { TypeIdentifier, OrType, NullableType } from "../gir.js";
import { NSRegistry } from "../gir/registry.js";

const shellTemplate = (version: string) => ({
    namespace: "Shell",
    version,
    modifier(namespace: IntrospectedNamespace, registry: NSRegistry) {
        // Get the GLSLEffect class which contains the add_glsl_snippet method
        const GLSLEffect = namespace.assertClass("GLSLEffect");
        
        // Find the add_glsl_snippet method
        const addGlslSnippet = GLSLEffect.members.find(m => m.name === "add_glsl_snippet");
        
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
                type: new NullableType(
                    new OrType(
                        new TypeIdentifier("SnippetHook", "Shell"),
                        new TypeIdentifier("SnippetHook", "Cogl")
                    )
                )
            });
            
            // Replace the original parameter
            addGlslSnippet.parameters[0] = updatedParameter;
        }
    }
});

/** Shell 14 was introduced with GNOME 45 */
export const shell14 = shellTemplate("14");

/** Shell 15 was introduced with GNOME 48 */
export const shell15 = shellTemplate("15");
