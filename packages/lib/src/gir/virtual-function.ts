import {
  UnknownType,
  TypeExpression,
} from "../gir.ts";

import type { IntrospectedOptions } from "../types/index.ts";

import type {
  GirVirtualMethodElement,
} from "../index.ts";


import { IntrospectedEnum } from "./enum.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedBaseClass } from "./introspected-base-class.ts";

import type { OptionsLoad } from "../types/index.ts";

import { IntrospectedFunctionParameter } from "./parameter.ts";
import { IntrospectedClassFunction } from "./class-function.ts";
import { IntrospectedFunction } from "./function.ts";

export class IntrospectedVirtualClassFunction extends IntrospectedClassFunction<IntrospectedBaseClass> {
  constructor({
      name,
      parameters = [],
      output_parameters = [],
      return_type = UnknownType,
      parent,
      doc,
      ...args
  }: IntrospectedOptions<{
      name: string;
      parameters: IntrospectedFunctionParameter[];
      output_parameters?: IntrospectedFunctionParameter[];
      return_type?: TypeExpression;
      parent: IntrospectedBaseClass;
      doc?: string | null;
  }>) {
      super({
          parent,
          name: name.startsWith("vfunc_") ? name : `vfunc_${name}`,
          parameters,
          output_parameters,
          return_type,
          doc,
          ...args
      });
  }

  copy({
      parent = this.parent,
      interfaceParent,
      parameters,
      outputParameters,
      returnType
  }: {
      parent?: IntrospectedBaseClass;
      interfaceParent?: IntrospectedBaseClass | IntrospectedEnum | undefined;
      parameters?: IntrospectedFunctionParameter[] | undefined;
      outputParameters?: IntrospectedFunctionParameter[] | undefined;
      returnType?: TypeExpression | undefined;
  }): IntrospectedVirtualClassFunction {
      const fn = new IntrospectedVirtualClassFunction({
          name: this.name,
          parent,
          output_parameters: outputParameters ?? this.output_parameters,
          parameters: parameters ?? this.parameters,
          return_type: returnType ?? this.return_type
      });

      fn.generics = [...this.generics];
      fn.returnTypeDoc = this.returnTypeDoc;

      if (interfaceParent) {
          fn.interfaceParent = interfaceParent;
      }

      return fn._copyBaseProperties(this);
  }

  return(): TypeExpression {
      return this.return_type;
  }

  accept(visitor: GirVisitor): IntrospectedVirtualClassFunction {
      const node = this.copy({
          parameters: this.parameters.map(p => {
              return p.accept(visitor);
          }),
          outputParameters: this.output_parameters.map(p => {
              return p.accept(visitor);
          }),
          returnType: visitor.visitType?.(this.return_type)
      });
      return visitor.visitVirtualClassFunction?.(node) ?? node;
  }

  static fromXML(
      m: GirVirtualMethodElement,
      parent: IntrospectedBaseClass,
      options: OptionsLoad
  ): IntrospectedVirtualClassFunction {
      const fn = IntrospectedFunction.fromXML(m, parent.namespace, options);

      return fn.asVirtualClassFunction(parent);
  }

  asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateVirtualClassFunction"]> {
      return generator.generateVirtualClassFunction(this) as ReturnType<T["generateVirtualClassFunction"]>;
  }
}
