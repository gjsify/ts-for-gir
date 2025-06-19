import { IntrospectedBase } from "./introspected-base.ts";

import type { IntrospectedBaseClass } from "./introspected-base-class.ts";

export abstract class IntrospectedClassMember<
    Parent extends IntrospectedBaseClass | null = IntrospectedBaseClass | null
> extends IntrospectedBase<Parent> {
    get namespace() {
        if (!this.parent) {
            throw new Error(`Failed to get namespace for ${this.name}`);
        }

        return this.parent.namespace;
    }
}