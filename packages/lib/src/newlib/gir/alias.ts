import {  TypeExpression } from "../gir.js";
import {GirBase, GirOptions, GirMetadata} from './base.js';

import { AliasElement } from "@gi.ts/parser";
import { GirNamespace, isIntrospectable } from "./namespace.js";
import { sanitizeIdentifierName, getAliasType, parseDoc, parseMetadata } from "./util.js";
import { FormatGenerator, GenericDescriptor } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";

export class GirAlias extends GirBase {
  readonly type: TypeExpression;
  readonly generics: GenericDescriptor[];

  constructor({
    name,
    type,
    generics = [],
    ...args
  }: GirOptions<{
    name: string;
    type: TypeExpression;
    generics?: GenericDescriptor[];
  }>) {
    super(name, { ...args });

    this.type = type;
    this.generics = generics;
  }

  accept(visitor: GirVisitor): GirAlias {
    const node = this.copy({
      type: visitor.visitType?.(this.type)
    });

    return visitor.visitAlias?.(node) ?? node;
  }

  copy(options?: { parent?: undefined; type?: TypeExpression }): GirAlias {
    const { name, type } = this;

    return new GirAlias({ name, type: options?.type ?? type })._copyBaseProperties(this);
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateAlias"]> {
    return generator.generateAlias(this);
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    _parent,
    m: AliasElement
  ): GirAlias | null {
    if (!m.$.name) {
      console.error(`Alias in ${modName} lacks name.`);
      return null;
    }

    const alias = new GirAlias({
      name: sanitizeIdentifierName(ns.name, m.$.name),
      type: getAliasType(modName, ns, m),
      isIntrospectable: isIntrospectable(m)
    });

    if (options.loadDocs) {
      alias.doc = parseDoc(m);
      alias.metadata = parseMetadata(m);
    }

    return alias;
  }
}
