import type {
    TypeIdentifier,
} from "../gir.ts";
import type {
    IntrospectedClassFunction,
} from "../gir/introspected-classes.ts";
import type { IntrospectedConstructor } from "../gir/constructor.ts";
import type { IntrospectedClassCallback } from "../gir/introspected-classes.ts";
import type { IntrospectedProperty, IntrospectedField } from "../gir/property.ts";
import type { IntrospectedBaseClass } from "../gir/introspected-classes.ts";
import type { IntrospectedInterface } from "../gir/introspected-classes.ts";
import type { IntrospectedClass } from "../gir/introspected-classes.ts";
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