import {
  UnknownType,
  TypeExpression,
  Generic,
} from "../gir.ts";

import { IntrospectedClassMember } from "./introspected-class-member.ts";
import type { IntrospectedOptions } from "../types/index.ts";

import type {
  GirFunctionElement,
  GirConstructorElement,
} from "../index.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedBaseClass } from "./introspected-base-class.ts";
import { IntrospectedClassFunction } from "./class-function.ts";
import type { IntrospectedFunctionParameter } from "./parameter.ts";

import type { OptionsLoad } from "../types/index.ts";

export class IntrospectedConstructor extends IntrospectedClassMember {
  readonly parameters: IntrospectedFunctionParameter[] = [];
  readonly return_type: TypeExpression = UnknownType;

  generics: Generic[] = [];

  constructor({
      name,
      parameters = [],
      return_type,
      parent,
      ...args
  }: IntrospectedOptions<{
      name: string;
      parent: IntrospectedBaseClass | null;
      parameters?: IntrospectedFunctionParameter[];
      return_type: TypeExpression;
  }>) {
      super(name, parent, { ...args });
      this.return_type = return_type;
      this.parameters = parameters.map(p => p.copy({ parent: this }));
  }

  copy({
      parent,
      parameters,
      return_type
  }: {
      parent?: IntrospectedBaseClass;
      parameters?: IntrospectedFunctionParameter[];
      return_type?: TypeExpression;
  } = {}): IntrospectedConstructor {
      const constr = new IntrospectedConstructor({
          name: this.name,
          parent: parent ?? this.parent ?? null,
          return_type: return_type ?? this.return_type,
          parameters: parameters ?? this.parameters
      })._copyBaseProperties(this);

      constr.generics = [...this.generics];

      return constr;
  }

  static fromXML(
      m: GirConstructorElement,
      parent: IntrospectedBaseClass,
      options: OptionsLoad
  ): IntrospectedConstructor {
      return IntrospectedClassFunction.fromXML(m as GirFunctionElement, parent, options).asConstructor();
  }

  accept(visitor: GirVisitor): IntrospectedConstructor {
      const node = this.copy({
          parameters: this.parameters.map(p => {
              return p.accept(visitor);
          }),
          return_type: visitor.visitType?.(this.return_type)
      });

      return visitor.visitConstructor?.(node) ?? node;
  }

  return() {
      return this.return_type;
  }

  asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateConstructor"]> {
      return generator.generateConstructor(this) as ReturnType<T["generateConstructor"]>;
  }
}
