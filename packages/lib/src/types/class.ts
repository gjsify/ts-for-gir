import type {
    TypeIdentifier,
} from "../gir.ts";
import type {
    IntrospectedClassFunction,
    IntrospectedConstructor,
} from "../gir/function.ts";
import type { IntrospectedClassCallback } from "../gir/callback.ts";
import type { IntrospectedProperty, IntrospectedField } from "../gir/property.ts";
import type { IntrospectedBaseClass } from "../gir/introspected-base-class.ts";
import type { IntrospectedInterface } from "../gir/interface.ts";
import type { IntrospectedClass } from "../gir/introspected-class.ts";
import type { IntrospectedRecord } from "../gir/record.ts";

export interface ClassDefinition {
  superType: TypeIdentifier;
  interfaces: TypeIdentifier[];
  mainConstructor: IntrospectedConstructor;
  constructors: IntrospectedConstructor[];
  members: IntrospectedClassFunction[];
  props: IntrospectedProperty[];
  fields: IntrospectedField[];
  callbacks: IntrospectedClassCallback[];
}

export interface ResolutionNode {
  identifier: TypeIdentifier;
  node: IntrospectedBaseClass;
}

export interface InterfaceResolution extends ResolutionNode, Iterable<InterfaceResolution | ClassResolution> {
  extends(): InterfaceResolution | ClassResolution | undefined;
  node: IntrospectedInterface;
}

export interface ClassResolution extends ResolutionNode, Iterable<ClassResolution> {
  extends(): ClassResolution | undefined;
  implements(): InterfaceResolution[];
  node: IntrospectedClass;
}

export interface RecordResolution extends ResolutionNode, Iterable<RecordResolution> {
  extends(): RecordResolution | undefined;
  node: IntrospectedRecord;
}