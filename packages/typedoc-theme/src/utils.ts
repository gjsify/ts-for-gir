import { type DeclarationReflection, type ProjectReflection, type Reflection, ReflectionKind } from "typedoc";

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
