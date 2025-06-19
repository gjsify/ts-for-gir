import { Logger } from "../logger.ts";
import {
    TypeIdentifier,
    Generic,
    GenericType,
} from "../gir.ts";
import { TypeExpression } from "../gir.ts";
import { IntrospectedNamespaceMember } from "./introspected-namespace-member.ts";
import type { IntrospectedOptions, ClassDefinition, InterfaceResolution, ClassResolution, RecordResolution } from "../types/index.ts";

import {
    type GirInterfaceElement,
    type GirClassElement,
    type GirRecordElement,
} from "../index.ts";

import {
    IntrospectedClassFunction,
} from "./class-function.ts";
import { IntrospectedConstructor } from "./constructor.ts";
import { IntrospectedDirectAllocationConstructor } from "./direct-allocation-constructor.ts";
import { IntrospectedClassCallback } from "./callback.ts";
import { IntrospectedProperty, IntrospectedField } from "./property.ts";
import { IntrospectedNamespace } from "./namespace.ts";
import { FormatGenerator } from "../generators/generator.ts";
import { GirVisitor } from "../visitor.ts";
import { GenericNameGenerator } from "./generics.ts";

import type { OptionsLoad } from "../types/index.ts";

const log = new Logger(true, "gir/class");

export abstract class IntrospectedBaseClass extends IntrospectedNamespaceMember {
    /**
     * Used to add a TypeScript index signature to a class
     *
     * NOTE: This should probably be migrated into the TypeScript generator itself.
     */
    __ts__indexSignature?: string;
    superType: TypeIdentifier | null;

    mainConstructor: null | IntrospectedConstructor | IntrospectedDirectAllocationConstructor;
    constructors: IntrospectedConstructor[];
    members: IntrospectedClassFunction[];
    props: IntrospectedProperty[];
    fields: IntrospectedField[];
    callbacks: IntrospectedClassCallback[];

    // Generics support
    generics: Generic[] = [];

    constructor(
        options: IntrospectedOptions<{
            name: string;
            namespace: IntrospectedNamespace;
        }> &
            Partial<ClassDefinition>
    ) {
        const {
            name,
            namespace,
            superType = null,
            mainConstructor = null,
            constructors = [],
            members = [],
            props = [],
            fields = [],
            callbacks = [],
            ...args
        } = options;

        super(name, namespace, { ...args });

        this.superType = superType;

        this.mainConstructor = mainConstructor?.copy({ parent: this }) ?? null;
        this.constructors = [...constructors.map(c => c.copy({ parent: this }))];
        this.members = [...members.map(m => m.copy({ parent: this }))];
        this.props = [...props.map(p => p.copy({ parent: this }))];
        this.fields = [...fields.map(f => f.copy({ parent: this }))];
        this.callbacks = [...callbacks.map(c => c.copy({ parent: this }))];
    }

    abstract accept(visitor: GirVisitor): IntrospectedBaseClass;

    abstract copy(options?: {
        parent?: undefined;
        constructors?: IntrospectedConstructor[];
        members?: IntrospectedClassFunction[];
        props?: IntrospectedProperty[];
        fields?: IntrospectedField[];
        callbacks?: IntrospectedClassCallback[];
    }): IntrospectedBaseClass;

    getGenericName = GenericNameGenerator.new();

    abstract resolveParents(): RecordResolution | InterfaceResolution | ClassResolution;
    abstract someParent(predicate: (b: IntrospectedBaseClass) => boolean): boolean;
    abstract findParent(predicate: (b: IntrospectedBaseClass) => boolean): IntrospectedBaseClass | undefined;
    abstract findParentMap<K>(predicate: (b: IntrospectedBaseClass) => K | undefined): K | undefined;

    addGeneric(definition: {
        deriveFrom?: TypeIdentifier;
        default?: TypeExpression;
        constraint?: TypeExpression;
        propagate?: boolean;
    }) {
        const param = new Generic(
            new GenericType(this.getGenericName(), definition.constraint),
            definition.default,
            definition.deriveFrom,
            definition.constraint,
            definition.propagate
        );

        this.generics.push(param);
    }

    getType(): TypeIdentifier {
        return new TypeIdentifier(this.name, this.namespace.namespace);
    }

    static fromXML(
         
        element: GirClassElement | GirInterfaceElement | GirRecordElement,
         
        ns: IntrospectedNamespace,
         
        options: OptionsLoad
    ): IntrospectedBaseClass {
        throw new Error("fromXML is not implemented on GirBaseClass");
    }

    abstract asString<T = string>(generator: FormatGenerator<T>): T;
}

