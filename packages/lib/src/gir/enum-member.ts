import type { FormatGenerator } from "../generators/generator.ts";
import type { GirMemberElement } from "../index.ts";
import type { OptionsLoad } from "../types/index.ts";
import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import type { GirVisitor } from "../visitor.ts";
import type { IntrospectedEnum } from "./enum.ts";
import { IntrospectedBase } from "./introspected-base.ts";

export class GirEnumMember extends IntrospectedBase<IntrospectedEnum> {
	value: string;
	c_identifier: string;
	/**
	 * The nick GObject registered for this member — GIR's `glib:nick`.
	 *
	 * This is the string a `g_object_set()` on an enum property accepts, and the
	 * only string form GTK will answer to; the C identifier is not. The parser has
	 * modelled the attribute since the beginning and nothing read it, so every
	 * consumer that needed a nick derived one from the member name instead.
	 *
	 * The derivation is right by luck rather than by construction: measured across
	 * the 705 GIR files in `girs/`, 40 940 of 59 789 members carry `glib:nick` and
	 * 889 of those do NOT equal `name.toLowerCase().replace(/_/g, "-")`. Gtk-4.0
	 * and Adw-1 happen to be among the zero-disagreement namespaces (799 of 807 and
	 * 120 of 120 carry the attribute, none contradicting), which is exactly how a
	 * derived nick survives review and then breaks somewhere else. So the attribute
	 * is the answer wherever it exists and the derivation is the fallback for the
	 * members GIR leaves without one.
	 */
	nick: string;

	constructor(name: string, value: string, parent: IntrospectedEnum, c_identifier: string, nick: string) {
		super(name, parent);
		this.value = value;
		this.c_identifier = c_identifier;
		this.nick = nick;
	}

	get namespace() {
		return this.parent.namespace;
	}

	accept(visitor: GirVisitor): GirEnumMember {
		const node = this.copy();
		return visitor.visitEnumMember?.(node) ?? node;
	}

	copy(): GirEnumMember {
		const { value, name, parent, c_identifier, nick } = this;

		return new GirEnumMember(name, value, parent, c_identifier, nick)._copyBaseProperties(this);
	}

	static fromXML(element: GirMemberElement, parent: IntrospectedEnum, options: OptionsLoad): GirEnumMember {
		const upper = element.$.name.toUpperCase();
		const c_identifier = element.$["c:identifier"];
		// The fallback reads the ORIGINAL member name, not `upper`: GIR writes
		// `baseline_fill` and the nick GObject registered is `baseline-fill`.
		const nick = element.$["glib:nick"] ?? element.$.name.toLowerCase().replace(/_/g, "-");

		const enumMember = new GirEnumMember(upper, element.$.value, parent, c_identifier, nick);

		if (options.loadDocs) {
			enumMember.doc = parseDoc(element);
			enumMember.metadata = parseMetadata(element);
		}

		return enumMember;
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateEnumMember"]> {
		return generator.generateEnumMember(this) as ReturnType<T["generateEnumMember"]>;
	}
}
