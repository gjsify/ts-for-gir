import type { FormatGenerator } from "../generators/generator.ts";
import type { GirBitfieldElement, GirEnumElement } from "../index.ts";
import type { OptionsLoad } from "../types/index.ts";

import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { sanitizeMemberName } from "../utils/naming.ts";
import { IntrospectedEnum } from "./enum.ts";
import { GirEnumMember } from "./enum-member.ts";
import { IntrospectedStaticClassFunction } from "./introspected-classes.ts";
import type { IntrospectedNamespace } from "./namespace.ts";

// TODO: Move to utils
function isEnumElement(e: unknown): e is GirEnumElement {
	return typeof e === "object" && e != null && "function" in e;
}

export class IntrospectedError extends IntrospectedEnum {
	functions: Map<string, IntrospectedStaticClassFunction> = new Map();

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateError"]> {
		return generator.generateError(this) as ReturnType<T["generateError"]>;
	}

	copy({ members }: { parent?: undefined; members?: Map<string, GirEnumMember> } = {}): IntrospectedEnum {
		const { namespace, name, flags } = this;

		const en = new IntrospectedError(name, namespace);

		for (const [key, member] of (members ?? this.members).entries()) {
			en.members.set(key, member.copy());
		}

		for (const [key, func] of this.functions.entries()) {
			en.functions.set(key, func.copy({ parent: en }));
		}

		en.flags = flags;

		return en._copyBaseProperties(this);
	}

	static fromXML(
		element: GirEnumElement | GirBitfieldElement,
		ns: IntrospectedNamespace,
		options: OptionsLoad,
	): IntrospectedEnum {
		const err = new IntrospectedError(sanitizeMemberName(element.$.name), ns);

		if (element.$["glib:type-name"]) {
			err.resolve_names.push(element.$["glib:type-name"]);

			ns.registerResolveName(element.$["glib:type-name"], ns.namespace, err.name);
		}

		if (element.$["c:type"]) {
			err.resolve_names.push(element.$["c:type"]);

			ns.registerResolveName(element.$["c:type"], ns.namespace, err.name);
		}

		if (options.loadDocs) {
			err.doc = parseDoc(element);
			err.metadata = parseMetadata(element);
		}

		if (element.member) {
			element.member.forEach((m) => {
				const member = GirEnumMember.fromXML(m, err, options);
				err.members.set(member.name, member);
			});
		}

		if (isEnumElement(element) && element.function) {
			element.function.forEach((f) => {
				const func = IntrospectedStaticClassFunction.fromXML(f, err, options);
				err.functions.set(func.name, func);
			});
		}

		return err;
	}
}
