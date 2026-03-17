import { type DeclarationReflection, type ProjectReflection, type Reflection, ReflectionKind } from "typedoc";

// ---------------------------------------------------------------------------
// TSDoc-based GIR metadata access
// ---------------------------------------------------------------------------

/** Read the @gir-type block tag value from a reflection's TSDoc comment. */
export function getGirTypeFromComment(refl: Reflection): string | undefined {
	const comment = (refl as DeclarationReflection).comment;
	if (!comment) return undefined;
	const tag = comment.getTag("@gir-type" as `@${string}`);
	if (!tag) return undefined;
	return (
		tag.content
			.map((part) => part.text)
			.join("")
			.trim() || undefined
	);
}

/** Check if a reflection has the @signal modifier tag (also checks signatures for declarations). */
export function hasSignalTag(refl: Reflection): boolean {
	const comment = (refl as DeclarationReflection).comment;
	if (comment?.modifierTags.has("@signal" as `@${string}`)) return true;
	// For declarations with overloaded signatures, check if any signature has the tag
	const signatures = (refl as DeclarationReflection).signatures;
	if (signatures) {
		return signatures.some((sig) => sig.comment?.modifierTags.has("@signal" as `@${string}`) ?? false);
	}
	return false;
}

/** Check if a reflection has the @virtual modifier tag. */
export function hasVirtualTag(refl: Reflection): boolean {
	const comment = (refl as DeclarationReflection).comment;
	return comment?.modifierTags.has("@virtual" as `@${string}`) ?? false;
}

/** Maps simplified @gir-type TSDoc values to display info for the header. */
const GIR_TYPE_INFO: Record<string, { label: string; modifier: string }> = {
	Class: { label: "Class", modifier: "class" },
	Interface: { label: "Interface", modifier: "interface" },
	Struct: { label: "Struct", modifier: "record" },
	"Foreign Struct": { label: "Foreign Struct", modifier: "record" },
	"Class Struct": { label: "Class Struct", modifier: "record" },
	Enum: { label: "Enum", modifier: "enum" },
	Flags: { label: "Flags", modifier: "flags" },
	Callback: { label: "Callback", modifier: "callback" },
	Alias: { label: "Alias", modifier: "alias" },
};

/** Get display info for a @gir-type value. */
export function girKindInfoFromTag(girType: string): { label: string; modifier: string } | null {
	return GIR_TYPE_INFO[girType] ?? null;
}

/**
 * Returns true when the GIR kind label adds information beyond the TypeScript kind.
 * When they are equivalent concepts, parenthetical display is unnecessary.
 */
const KIND_EQUIVALENCES: Record<string, string[]> = {
	Class: ["Class"],
	Interface: ["Interface"],
	Enumeration: ["Enum"],
	"Type alias": ["Alias"],
};

export function shouldShowGirParenthetical(tsKind: string, girLabel: string): boolean {
	const equivSet = KIND_EQUIVALENCES[tsKind];
	return !equivSet || !equivSet.includes(girLabel);
}

/** Minimal shape of the girMetadata field injected by GirMetadataSerializer (fallback). */
interface GirReflectionMeta {
	girKind: string;
}

/** Safely access girMetadata from any reflection (fallback for data not in TSDoc). */
function getGirMetadata(refl: Reflection): GirReflectionMeta | undefined {
	return (refl as unknown as { girMetadata?: GirReflectionMeta }).girMetadata;
}

/**
 * Returns a badge label for member-level GIR annotations.
 * Prefers TSDoc tags (@virtual, @signal), falls back to girMetadata JSON,
 * and finally uses the vfunc_ naming convention as a last resort for
 * inherited virtual methods that lose their metadata.
 */
export function girMemberBadgeFromComment(refl: Reflection): { label: string; cssModifier: string } | null {
	// TSDoc-first: check modifier tags
	if (hasSignalTag(refl)) return { label: "Signal", cssModifier: "signal" };
	if (hasVirtualTag(refl)) return { label: "Virtual", cssModifier: "virtual-method" };
	// Fallback: girMetadata JSON (e.g. signals generated as raw strings without TSDoc)
	const gir = getGirMetadata(refl);
	if (gir?.girKind === "signal") return { label: "Signal", cssModifier: "signal" };
	if (gir?.girKind === "virtual-method") return { label: "Virtual", cssModifier: "virtual-method" };
	// Convention fallback: in GJS, vfunc_ prefix always denotes a virtual method
	if (refl.name.startsWith("vfunc_")) return { label: "Virtual", cssModifier: "virtual-method" };
	return null;
}

/**
 * Get a display name for a reflection.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function getDisplayName(refl: Reflection): string {
	const version = (refl as ProjectReflection).packageVersion;
	const suffix = version ? ` - v${version}` : "";
	return (refl.name === "default" ? "default" : refl.name) + suffix;
}

/**
 * Build a className string from a record of boolean conditions.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function classNames(names: Record<string, boolean | null | undefined>, extraCss?: string) {
	const parts = Object.keys(names).filter((key) => names[key]);
	if (extraCss) parts.push(extraCss);
	return parts.length ? parts.join(" ") : undefined;
}

/**
 * Walk up the parent chain to find the owning Module reflection.
 * Returns undefined for project-level pages.
 */
export function findOwningModule(reflection: Reflection): Reflection | undefined {
	let current: Reflection | undefined = reflection;
	while (current) {
		if (!current.isProject() && current.parent?.isProject()) {
			return current;
		}
		current = current.parent;
	}
	return undefined;
}

const hierarchyRootsCache = new WeakMap<ProjectReflection, DeclarationReflection[]>();

/**
 * Get hierarchy roots from a project (cached).
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function getHierarchyRoots(project: ProjectReflection): DeclarationReflection[] {
	const cached = hierarchyRootsCache.get(project);
	if (cached) return cached;

	const roots: DeclarationReflection[] = [];
	const queue: Reflection[] = [project];

	for (let i = 0; i < queue.length; i++) {
		const refl = queue[i];
		if (refl.kindOf(ReflectionKind.Class)) {
			const decl = refl as DeclarationReflection;
			if (decl.typeHierarchy) {
				roots.push(decl);
			}
		}

		const children = (refl as DeclarationReflection).children;
		if (children) {
			for (const child of children) queue.push(child);
		}
	}

	hierarchyRootsCache.set(project, roots);

	return roots;
}
