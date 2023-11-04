import { TypeExpression } from "../gir.js";
import {IntrospectedBase, Options} from './base.js';
import { GirFieldElement, GirPropertyElement } from "../../index.js";

import { getType, parseDoc, parseMetadata } from "./util.js";
import { IntrospectedNamespace, isIntrospectable } from "./namespace.js";
import { FormatGenerator } from "../generators/generator.js";
import { LoadOptions } from "../types.js";
import { GirVisitor } from "../visitor.js";
import { IntrospectedBaseClass } from "./class.js";
import { IntrospectedEnum } from "./enum.js";

export class Field extends IntrospectedBase {
  type: TypeExpression;

  // TODO: Make these properties readonly
  optional: boolean = false;
  computed: boolean;
  isStatic: boolean;
  writable: boolean;
  isNative: boolean = false;

  copy(options?: { parent?: IntrospectedBase; type?: TypeExpression; isStatic?: boolean }): Field {
    const { type, name, optional, computed, isStatic, writable } = this;

    return new Field({
      name,
      type: options?.type ?? type,
      optional,
      computed,
      isStatic: options?.isStatic ?? isStatic,
      writable
    })._copyBaseProperties(this);
  }

  constructor({
    name,
    type,
    computed = false,
    optional = false,
    isStatic = false,
    writable = true,
    ...args
  }: Options<{
    name: string;
    type: TypeExpression;
    computed?: boolean;
    optional?: boolean;
    isStatic?: boolean;
    writable?: boolean;
  }>) {
    super(name, { ...args });

    this.type = type;
    this.computed = computed;
    this.optional = optional;
    this.isStatic = isStatic;
    this.writable = writable;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateField"]> {
    return generator.generateField(this);
  }

  accept(visitor: GirVisitor): Field {
    const node = this.copy({
      type: visitor.visitType?.(this.type) ?? this.type
    });

    return visitor.visitField?.(node) ?? node;
  }

  static fromXML(
    namespace: string,
    ns: IntrospectedNamespace,
    _options: LoadOptions,
    _parent,
    field: GirFieldElement
  ): Field {
    let name = field.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const f = new Field({
      name: _name,
      type: getType(namespace, ns, field),
      isPrivate: field.$.private === "1",
      isIntrospectable: isIntrospectable(field)
    });

    return f;
  }
}

export class JSField extends Field {
  isNative = true;
}

export class GirProperty extends IntrospectedBase {
  type: TypeExpression;

  readonly writable: boolean = false;
  readonly readable: boolean = true;
  readonly constructOnly: boolean;

  parent: IntrospectedBaseClass | IntrospectedEnum;

  copy(options?: { name?: string; parent?: IntrospectedBaseClass | IntrospectedEnum; type?: TypeExpression }): GirProperty {
    const { name, writable, readable, type, constructOnly, parent } = this;

    return new GirProperty({
      name: options?.name ?? name,
      writable,
      readable,
      type: options?.type ?? type,
      constructOnly,
      parent: options?.parent ?? parent
    })._copyBaseProperties(this);
  }

  accept(visitor: GirVisitor): GirProperty {
    const node = this.copy({
      parent: this.parent,
      type: visitor.visitType?.(this.type) ?? this.type
    });

    return visitor.visitProperty?.(node) ?? node;
  }

  constructor({
    name,
    type,
    writable,
    readable,
    constructOnly,
    parent,
    ...args
  }: Options<{
    name: string;
    type: TypeExpression;
    writable: boolean;
    readable: boolean;
    constructOnly: boolean;
    parent: IntrospectedBaseClass | IntrospectedEnum;
  }>) {
    super(name, { ...args });

    this.type = type;
    this.writable = writable;
    this.readable = readable;
    this.constructOnly = constructOnly;
    this.parent = parent;
  }

  asString<T extends FormatGenerator<any>>(
    generator: T,
    construct?: boolean
  ): ReturnType<T["generateProperty"]> {
    return generator.generateProperty(this, construct);
  }

  toCamelCase() {
    const [part, ...parts] = this.name.split("_");

    if (parts.length === 0) {
      return this.copy({
        name: part,
        parent: this.parent
      });
    }

    const camelCase = `${part}${parts.map(s => `${s[0].toUpperCase()}${s.slice(1)}`).join("")}`;

    return this.copy({
      name: camelCase,
      parent: this.parent
    });
  }

  static fromXML(
    namespace: string,
    ns: IntrospectedNamespace,
    options: LoadOptions,
    parent: IntrospectedBaseClass | IntrospectedEnum,
    prop: GirPropertyElement
  ): GirProperty {
    let name = prop.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const property = new GirProperty({
      name: _name,
      writable: prop.$?.writable === "1",
      readable: prop.$?.readable !== "0",
      constructOnly: prop.$?.["construct-only"] === "1",
      type: getType(namespace, ns, prop),
      parent,
      isIntrospectable: isIntrospectable(prop),
    });

    if (options.loadDocs) {
      property.doc = parseDoc(prop);
      property.metadata = parseMetadata(prop);
    }

    return property;
  }
}
