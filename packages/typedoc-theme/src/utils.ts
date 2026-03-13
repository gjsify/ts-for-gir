import { type DeclarationReflection, type ProjectReflection, type Reflection, ReflectionKind } from "typedoc";

/** Minimal shape of the girMetadata field injected by GirMetadataSerializer. */
interface GirReflectionMeta {
	girKind: string;
	resolveNames?: string[];
	recordMetadata?: { isForeign: boolean; structFor?: string };
	enumMetadata?: { isFlags: boolean };
}

/** Safely access girMetadata from any reflection. */
export function getGirMetadata(refl: Reflection): GirReflectionMeta | undefined {
	return (refl as unknown as { girMetadata?: GirReflectionMeta }).girMetadata;
}

/** Top-level GIR kinds that get a full type-info row on their page. */
const TOP_LEVEL_KINDS = new Set(["class", "interface", "record", "enum", "bitfield", "callback", "alias"]);

/**
 * Returns { label, modifier } for top-level GIR types (class, record, enum, …),
 * or null for member-level kinds (method, signal, property, …).
 */
export function girKindInfo(meta: GirReflectionMeta): { label: string; modifier: string } | null {
	if (!TOP_LEVEL_KINDS.has(meta.girKind)) return null;
	switch (meta.girKind) {
		case "class":
			return { label: "GObject Class", modifier: "class" };
		case "interface":
			return { label: "GObject Interface", modifier: "interface" };
		case "record": {
			const rec = meta.recordMetadata;
			if (rec?.structFor) return { label: "Class Struct", modifier: "record" };
			if (rec?.isForeign) return { label: "Foreign C Struct", modifier: "record" };
			return { label: "C Struct", modifier: "record" };
		}
		case "enum":
			return { label: "GEnum", modifier: "enum" };
		case "bitfield":
			return { label: "GFlags", modifier: "flags" };
		case "callback":
			return { label: "GCallback", modifier: "callback" };
		case "alias":
			return { label: "Type Alias", modifier: "alias" };
		default:
			return null;
	}
}

/**
 * Returns a badge label for member-level GIR kinds that need visual distinction,
 * or null if no badge is needed.
 */
export function girMemberBadge(girKind: string): string | null {
	if (girKind === "signal") return "Signal";
	if (girKind === "virtual-method") return "Virtual";
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

/**
 * Get hierarchy roots from a project.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function getHierarchyRoots(project: ProjectReflection): DeclarationReflection[] {
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
			queue.push(...children);
		}
	}

	return roots;
}
