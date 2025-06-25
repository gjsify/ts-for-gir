import type { GirMemberElement, OptionsLoad, PartOfClass, PartOfModule } from "../types/index.ts";
import type { IntrospectedBaseOptions } from "../types/introspected.ts";
import { IntrospectedBase } from "./introspected-base.ts";
import type { IntrospectedNamespace } from "./namespace.ts";

export abstract class IntrospectedNamespaceMember extends IntrospectedBase<IntrospectedNamespace> {
	constructor(name: string, namespace: IntrospectedNamespace, options: IntrospectedBaseOptions = {}) {
		super(name, namespace, options);
	}

	get namespace() {
		return this.parent;
	}

	static fromXML(
		_element: PartOfClass | PartOfModule | GirMemberElement,

		_parent: IntrospectedNamespace,

		_options: OptionsLoad,
	): IntrospectedNamespaceMember | null {
		throw new Error("GirBase cannot be instantiated");
	}
}
