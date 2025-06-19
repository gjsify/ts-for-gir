import type { IntrospectedClassMember } from "../gir/introspected-class-member.ts";
import type { IntrospectedClassFunction } from "../gir/class-function.ts";
import type { IntrospectedProperty } from "../gir/property.ts";

export type ClassMember = IntrospectedClassMember | IntrospectedClassFunction | IntrospectedProperty;
