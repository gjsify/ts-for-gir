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

/** Shape of the girMetadata field injected by GirMetadataSerializer (fallback for data not in TSDoc). */
interface GirReflectionMeta {
	girKind: string;
	introducedVersion?: string;
	deprecated?: boolean;
	deprecatedVersion?: string;
	propertyMetadata?: { readable: boolean; writable: boolean; constructOnly: boolean };
	signalMetadata?: {
		signalName: string;
		detailed: boolean;
		action?: boolean;
		when?: "first" | "last" | "cleanup";
	};
}

/** Safely access girMetadata from any reflection (fallback for data not in TSDoc). */
function getGirMetadata(refl: Reflection): GirReflectionMeta | undefined {
	return (refl as unknown as { girMetadata?: GirReflectionMeta }).girMetadata;
}

/** Check if a reflection has a specific modifier tag (checks signatures too). */
function hasModifierTag(refl: Reflection, tag: string): boolean {
	const comment = (refl as DeclarationReflection).comment;
	if (comment?.modifierTags.has(tag as `@${string}`)) return true;
	const signatures = (refl as DeclarationReflection).signatures;
	if (signatures) {
		return signatures.some((sig) => sig.comment?.modifierTags.has(tag as `@${string}`) ?? false);
	}
	return false;
}

/**
 * Returns all applicable GIR badge labels for a reflection.
 * Prefers TSDoc modifier tags, falls back to girMetadata JSON.
 */
export function girMemberBadgesFromReflection(refl: Reflection): Array<{ label: string; cssModifier: string }> {
	const badges: Array<{ label: string; cssModifier: string }> = [];
	const gir = getGirMetadata(refl);

	// 1. Signal / Virtual kind badges (TSDoc-first, girMetadata fallback)
	const isSignal = hasSignalTag(refl) || gir?.girKind === "signal";
	const isVirtual = hasVirtualTag(refl) || gir?.girKind === "virtual-method" || refl.name.startsWith("vfunc_");
	if (isSignal) badges.push({ label: "Signal", cssModifier: "signal" });
	if (isVirtual) badges.push({ label: "Virtual", cssModifier: "virtual-method" });

	// 2. Signal-specific metadata badges (TSDoc-first: @detailed, @action, @run-first/last/cleanup)
	if (isSignal) {
		const detailed = hasModifierTag(refl, "@detailed") || gir?.signalMetadata?.detailed;
		const action = hasModifierTag(refl, "@action") || gir?.signalMetadata?.action;
		const runFirst = hasModifierTag(refl, "@run-first");
		const runLast = hasModifierTag(refl, "@run-last");
		const runCleanup = hasModifierTag(refl, "@run-cleanup");
		const when = runFirst ? "first" : runLast ? "last" : runCleanup ? "cleanup" : gir?.signalMetadata?.when;

		if (detailed) badges.push({ label: "Detailed", cssModifier: "signal-detailed" });
		if (action) badges.push({ label: "Action", cssModifier: "signal-action" });
		if (when) {
			const w = when.charAt(0).toUpperCase() + when.slice(1);
			badges.push({ label: `Run ${w}`, cssModifier: "signal-when" });
		}
	}

	// 3. Property flag badges (TSDoc-first: @construct-only, @read-only, @write-only)
	const constructOnly = hasModifierTag(refl, "@construct-only") || gir?.propertyMetadata?.constructOnly;
	const readOnly =
		hasModifierTag(refl, "@read-only") || (gir?.propertyMetadata?.readable && !gir.propertyMetadata.writable);
	const writeOnly =
		hasModifierTag(refl, "@write-only") || (gir?.propertyMetadata?.writable && !gir.propertyMetadata.readable);

	if (constructOnly) badges.push({ label: "Construct Only", cssModifier: "construct-only" });
	else if (readOnly) badges.push({ label: "Read-Only", cssModifier: "read-only" });
	else if (writeOnly) badges.push({ label: "Write-Only", cssModifier: "write-only" });

	// 4. Deprecated badge (with version from girMetadata)
	if (refl.isDeprecated()) {
		const version = gir?.deprecatedVersion;
		badges.push({ label: version ? `Deprecated ${version}` : "Deprecated", cssModifier: "deprecated" });
	}

	// 5. Since version badge (from girMetadata — @since is a block tag, not a modifier)
	if (gir?.introducedVersion) {
		badges.push({ label: `Since ${gir.introducedVersion}`, cssModifier: "since" });
	}

	return badges;
}

/**
 * Get a display name for a reflection.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function getDisplayName(refl: Reflection): string {
	return refl.name === "default" ? "default" : refl.name;
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

/** Shape of girNamespaceMetadata attached by GirMetadataDeserializer in merge mode. */
export interface GirNamespaceMetadata {
	namespace: string;
	version: string;
	packageName: string;
	cPrefixes: string[];
	libraryVersion: string;
	dependencies: Array<{ namespace: string; version: string }>;
	packageVersion?: string;
	displayName?: string;
	description?: string;
	logoUrl?: string;
	iconFile?: string;
	websiteUrl?: string;
	cDocsUrl?: string;
	license?: string;
	category?: string;
}

/** Safely access girNamespaceMetadata from a module-level reflection. */
export function getGirNamespaceMetadata(reflection: Reflection): GirNamespaceMetadata | undefined {
	const mod = findOwningModule(reflection) ?? reflection;
	return (mod as unknown as { girNamespaceMetadata?: GirNamespaceMetadata }).girNamespaceMetadata;
}

// ---------------------------------------------------------------------------
// Companion namespace detection
// ---------------------------------------------------------------------------

const COMPANION_OWNER_KINDS = ReflectionKind.Class | ReflectionKind.Interface | ReflectionKind.Enum;

/**
 * Find the companion namespace for a class or interface reflection.
 * A companion namespace shares the same name within the same parent scope.
 */
export function findCompanionNamespace(refl: DeclarationReflection): DeclarationReflection | undefined {
	if (!refl.kindOf(COMPANION_OWNER_KINDS)) return undefined;
	const parent = refl.parent;
	if (!parent || !("children" in parent)) return undefined;
	const siblings = (parent as DeclarationReflection).children;
	if (!siblings) return undefined;
	return siblings.find((child) => child !== refl && child.kindOf(ReflectionKind.Namespace) && child.name === refl.name);
}

/**
 * Check if a namespace reflection is a companion to a class or interface with the same name.
 */
export function isCompanionNamespace(nsRefl: DeclarationReflection): boolean {
	if (!nsRefl.kindOf(ReflectionKind.Namespace)) return false;
	const parent = nsRefl.parent;
	if (!parent || !("children" in parent)) return false;
	const siblings = (parent as DeclarationReflection).children;
	if (!siblings) return false;
	return siblings.some(
		(child) => child !== nsRefl && child.kindOf(COMPANION_OWNER_KINDS) && child.name === nsRefl.name,
	);
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
