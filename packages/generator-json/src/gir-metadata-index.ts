import { type GirModule, IntrospectedBaseClass, IntrospectedClass } from "@ts-for-gir/lib";

/**
 * A flat lookup index mapping TypeDoc reflection names to GIR introspected objects.
 *
 * Keys follow the pattern used by TypeDoc's `getFullName(".")` with the module prefix stripped:
 * - Namespace members: `"Widget"`, `"init"`
 * - Class members: `"Widget.show"`, `"Widget.visible"`
 * - Signals: `"Widget.destroy"` (signal name)
 */
export type GirLookupIndex = Map<string, unknown>;

/**
 * Build a lookup index from a GirModule that maps TypeDoc reflection names
 * to GIR introspected objects.
 */
export function buildGirLookupIndex(module: GirModule): GirLookupIndex {
	const index: GirLookupIndex = new Map();

	for (const [name, member] of module.members) {
		const members = Array.isArray(member) ? member : [member];

		for (const m of members) {
			index.set(name, m);

			if (m instanceof IntrospectedBaseClass) {
				indexClassMembers(index, name, m);
			}
		}
	}

	return index;
}

function indexClassMembers(index: GirLookupIndex, className: string, cls: IntrospectedBaseClass): void {
	for (const fn of cls.members) {
		index.set(`${className}.${fn.name}`, fn);
	}

	for (const prop of cls.props) {
		index.set(`${className}.${prop.name}`, prop);
	}

	for (const field of cls.fields) {
		// Don't overwrite if a property with same name already exists
		const key = `${className}.${field.name}`;
		if (!index.has(key)) {
			index.set(key, field);
		}
	}

	for (const ctor of cls.constructors) {
		index.set(`${className}.${ctor.name}`, ctor);
	}

	for (const cb of cls.callbacks) {
		index.set(`${className}.${cb.name}`, cb);
	}

	if (cls instanceof IntrospectedClass) {
		for (const signal of cls.signals) {
			// Use a signal-specific prefix to avoid collisions with methods
			index.set(`signal:${className}.${signal.name}`, signal);
		}
	}
}
