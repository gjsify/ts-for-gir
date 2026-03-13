import { type DeclarationReflection, type ProjectReflection, type Reflection, ReflectionKind } from "typedoc";

/**
 * Get a display name for a reflection.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function getDisplayName(refl: Reflection): string {
	let version = "";
	if ((refl as ProjectReflection).packageVersion) {
		version = ` - v${(refl as ProjectReflection).packageVersion}`;
	}

	if (refl.name === "default") {
		return `default${version}`;
	}

	return refl.name + version;
}

/**
 * Build a className string from a record of boolean conditions.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function classNames(names: Record<string, boolean | null | undefined>, extraCss?: string) {
	const css = Object.keys(names)
		.filter((key) => names[key])
		.concat(extraCss || "")
		.join(" ")
		.trim()
		.replace(/\s+/g, " ");
	return css.length ? css : undefined;
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

	while (queue.length) {
		const refl = queue.shift();
		if (!refl) continue;
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
