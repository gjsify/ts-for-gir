import {
  TypeExpression,
} from "../gir.ts";

import type {
  GirFunctionElement,
} from "../index.ts";

import { IntrospectedEnum } from "./enum.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { IntrospectedBaseClass } from "./introspected-base-class.ts";

import type { OptionsLoad } from "../types/index.ts";

import { IntrospectedFunctionParameter } from "./parameter.ts";
import { IntrospectedClassFunction } from "./class-function.ts";
import { IntrospectedFunction } from "./function.ts";

export class IntrospectedStaticClassFunction extends IntrospectedClassFunction {
  asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateStaticClassFunction"]> {
      return generator.generateStaticClassFunction(this) as ReturnType<T["generateStaticClassFunction"]>;
  }

  copy({
      parent = this.parent,
      interfaceParent,
      parameters,
      outputParameters,
      returnType
  }: {
      parent?: IntrospectedBaseClass | IntrospectedEnum;
      interfaceParent?: IntrospectedBaseClass | IntrospectedEnum | undefined;
      parameters?: IntrospectedFunctionParameter[] | undefined;
      outputParameters?: IntrospectedFunctionParameter[] | undefined;
      returnType?: TypeExpression | undefined;
  } = {}): IntrospectedStaticClassFunction {
      const fn = new IntrospectedStaticClassFunction({
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

  accept(visitor: GirVisitor): IntrospectedStaticClassFunction {
      const node = this.copy({
          parent: this.parent,
          parameters: this.parameters.map(p => {
              return p.accept(visitor);
          }),
          outputParameters: this.output_parameters.map(p => {
              return p.accept(visitor);
          }),
          returnType: visitor.visitType?.(this.return_type)
      });

      return visitor.visitStaticClassFunction?.(node) ?? node;
  }

  asClassFunction(parent: IntrospectedBaseClass): IntrospectedClassFunction {
      const { name, output_parameters, parameters, return_type, doc, isIntrospectable } = this;

      const fn = new IntrospectedClassFunction({
          parent,
          name,
          output_parameters,
          parameters,
          return_type,
          doc,
          isIntrospectable
      });

      fn.returnTypeDoc = this.returnTypeDoc;
      fn.generics = [...this.generics];

      return fn;
  }

  static fromXML(
      m: GirFunctionElement,
      parent: IntrospectedBaseClass | IntrospectedEnum,
      options: OptionsLoad
  ): IntrospectedStaticClassFunction {
      const fn = IntrospectedFunction.fromXML(m, parent.namespace, options);

      return fn.asStaticClassFunction(parent);
  }
}
