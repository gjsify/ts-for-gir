import {  TypeExpression } from "../gir.js";
import {GirBase, GirOptions, GirMetadata} from './base.js';
import { ConstantElement } from "@gi.ts/parser";

import { GirNamespace } from "./namespace.js";
import { getType, parseDoc, parseMetadata, sanitizeIdentifierName } from "./util.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";

export class GirConst extends GirBase {
  type: TypeExpression;
  value: string | null;

  constructor({
    name,
    type,
    value
  }: {
    name: string;
    type: TypeExpression;
    value: string | null;
    isIntrospectable?: boolean;
  }) {
    super(name);

    this.type = type;
    this.value = value;
  }

  accept(visitor: GirVisitor): GirConst {
    const node = this.copy({
      type: visitor.visitType?.(this.type)
    });

    return visitor.visitConst?.(node) ?? node;
  }

  copy(
    options: {
      parent?: undefined;
      type?: TypeExpression;
    } = {}
  ): GirConst {
    const { type, name, value } = this;

    return new GirConst({
      name,
      type: options.type ?? type,
      value
    })._copyBaseProperties(this);
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    _parent,
    constant: ConstantElement
  ): GirConst {
    const c = new GirConst({
      name: sanitizeIdentifierName(ns.name, constant.$.name),
      type: getType(modName, ns, constant),
      value: constant.$.value ?? null
    });

    if (options.loadDocs) {
      c.doc = parseDoc(constant);
      c.metadata = parseMetadata(constant);
    }

    return c;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateConst"]> {
    return generator.generateConst(this);
  }
}
