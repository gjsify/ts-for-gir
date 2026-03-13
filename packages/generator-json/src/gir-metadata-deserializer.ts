import { DeclarationReflection, type DeserializerComponent } from "typedoc";

import type { GirNamespaceMetadata, GirReflectionMetadata } from "./gir-metadata-types.ts";

/**
 * TypeDoc deserializer component that restores GIR-specific metadata
 * from JSON output back onto Reflection instances during merge mode.
 *
 * This is the counterpart to {@link GirMetadataSerializer} — it reads
 * the `girMetadata` and `girNamespaceMetadata` fields from the JSON
 * and attaches them as custom properties on the deserialized reflections.
 */
export class GirMetadataDeserializer implements DeserializerComponent {
	readonly priority = -1;

	supports(model: unknown, obj: unknown): boolean {
		if (!(model instanceof DeclarationReflection)) return false;
		if (typeof obj !== "object" || obj === null) return false;
		return "girMetadata" in obj || "girNamespaceMetadata" in obj;
	}

	fromObject(model: unknown, obj: unknown): void {
		if (!(model instanceof DeclarationReflection)) return;
		const jsonObj = obj as Record<string, unknown>;

		if (jsonObj.girMetadata) {
			(model as DeclarationReflection & { girMetadata?: GirReflectionMetadata }).girMetadata =
				jsonObj.girMetadata as GirReflectionMetadata;
		}

		if (jsonObj.girNamespaceMetadata) {
			(model as DeclarationReflection & { girNamespaceMetadata?: GirNamespaceMetadata }).girNamespaceMetadata =
				jsonObj.girNamespaceMetadata as GirNamespaceMetadata;
		}
	}
}
