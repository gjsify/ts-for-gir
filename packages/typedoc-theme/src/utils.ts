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
 * Insert word break opportunities into a string.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function wbr(str: string): string {
	// Simplified version — returns the string as-is for JSX text content.
	// The client-side JS handles word breaks in navigation.
	return str;
}

/**
 * Get hierarchy roots from a project.
 * Reimplemented from TypeDoc's internal lib.tsx.
 */
export function getHierarchyRoots(project: ProjectReflection): DeclarationReflection[] {
	const start: DeclarationReflection[] = [];
	const queue: Reflection[] = [project];

	while (queue.length) {
		const refl = queue.shift() as Reflection;
		if (refl.kindOf(ReflectionKind.Class) && (refl as DeclarationReflection).typeHierarchy) {
			start.push(refl as DeclarationReflection);
		}

		if ("children" in refl && Array.isArray((refl as DeclarationReflection).children)) {
			queue.push(...((refl as DeclarationReflection).children ?? []));
		}
	}

	return start;
}
