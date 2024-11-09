import { FormatGenerator } from "../generators/index.js";
import { GirVisitor } from "../visitor.js";
import { IntrospectedNamespace } from "./namespace.js";

import type { IntrospectedBaseClass } from "./nodes.js";
import type { OptionsLoad } from "../types/index.js";

export interface Metadata {
    deprecated?: boolean;
    deprecatedVersion?: string;
    deprecatedDoc?: string;
    introducedVersion?: string;
}

export interface BaseOptions {
    isPrivate?: boolean;
    isIntrospectable?: boolean;
    doc?: string | null;
}

export type Options<T> = BaseOptions & T;

 
export type AnyIntrospectedType = IntrospectedBase<any>;

export abstract class IntrospectedBase<Parent extends IntrospectedNamespace | AnyIntrospectedType | null> {
    name: string;
    doc?: string | null;
    metadata?: Metadata;
    deprecated?: boolean;
    resolve_names: string[] = [];
    private _emit = true;
    private _commentWarning?: string;
    private _isPrivate: boolean;
    private _isIntrospectable: boolean;
    private _parent: Parent;

    constructor(name: string, parent: Parent, options: BaseOptions = {}) {
        this.name = name;
        this._parent = parent;
        this._isPrivate = options.isPrivate ?? false;
        this._isIntrospectable = options.isIntrospectable ?? true;
        this.doc = options.doc ?? null;
    }

    get parent(): Parent {
        return this._parent;
    }

    /**
     * Set a warning to be emitted with this node. Often used to note type
     * conflicts or potential differences from GJS code.
     *
     * @param warning
     */
    setWarning(warning: string) {
        this._commentWarning = warning;
    }

    getWarning(): string | undefined {
        return this._commentWarning;
    }

    abstract get namespace(): IntrospectedNamespace;

    get isIntrospectable() {
        return this._isIntrospectable;
    }

    get isPrivate() {
        return this._isPrivate;
    }

    setPrivate(priv: boolean) {
        this._isPrivate = priv;
    }

    noEmit() {
        this._emit = false;
    }

    get emit() {
        return this._emit;
    }

    protected _copyBaseProperties(from: this): this {
        this.doc = from.doc;
        this.metadata = from.metadata;
        this.deprecated = from.deprecated;
        this.resolve_names = from.resolve_names;

        // Whether this node should be emitted.
        this._emit = from._emit;
        this._isPrivate = from._isPrivate;
        this._isIntrospectable = from.isIntrospectable;

        return this;
    }

    abstract copy(options?: { parent?: Parent }): IntrospectedBase<Parent>;

    abstract accept(visitor: GirVisitor): IntrospectedBase<Parent>;

    static fromXML(
         
        element: Record<string, any>,
         
        parent: IntrospectedNamespace | AnyIntrospectedType,
         
        options: OptionsLoad
    ): AnyIntrospectedType | null {
        throw new Error("GirBase cannot be instantiated");
    }

    abstract asString<T extends FormatGenerator<unknown>>(
        generator: T
    ): (T extends FormatGenerator<infer R> ? R : never) | null;
    abstract asString<T extends FormatGenerator<unknown>>(generator: T): unknown;
}

export abstract class IntrospectedNamespaceMember extends IntrospectedBase<IntrospectedNamespace> {
    constructor(name: string, namespace: IntrospectedNamespace, options: BaseOptions = {}) {
        super(name, namespace, options);
    }

    get namespace() {
        return this.parent;
    }

    static fromXML(
         
        element: Record<string, any>,
         
        parent: IntrospectedNamespace,
         
        options: OptionsLoad
    ): IntrospectedNamespaceMember | null {
        throw new Error("GirBase cannot be instantiated");
    }
}

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
