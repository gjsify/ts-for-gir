import type { FormatGenerator } from "../generators/generator.ts";
import { type Generic, type TypeExpression, UnknownType } from "../gir.ts";
import type { GirConstructorElement, GirFunctionElement } from "../index.ts";
import type { IntrospectedOptions, OptionsLoad } from "../types/index.ts";
import type { GirVisitor } from "../visitor.ts";
import { IntrospectedClassMember } from "./introspected-class-member.ts";
import type { IntrospectedBaseClass } from "./introspected-classes.ts";
import { IntrospectedClassFunction } from "./introspected-classes.ts";
import type { IntrospectedFunctionParameter } from "./parameter.ts";

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
		this.parameters = parameters.map((p) => p.copy({ parent: this }));
	}

	copy({
		parent,
		parameters,
		return_type,
	}: {
		parent?: IntrospectedBaseClass;
		parameters?: IntrospectedFunctionParameter[];
		return_type?: TypeExpression;
	} = {}): IntrospectedConstructor {
		const constr = new IntrospectedConstructor({
			name: this.name,
			parent: parent ?? this.parent ?? null,
			return_type: return_type ?? this.return_type,
			parameters: parameters ?? this.parameters,
		})._copyBaseProperties(this);

		constr.generics = [...this.generics];

		return constr;
	}

	static fromXML(
		m: GirConstructorElement,
		parent: IntrospectedBaseClass,
		options: OptionsLoad,
	): IntrospectedConstructor {
		const fn = IntrospectedClassFunction.fromXML(m as GirFunctionElement, parent, options);

		// Convert the class function to a constructor
		// Always force constructors to have the correct return type.
		return new IntrospectedConstructor({
			name: fn.name,
			parent,
			parameters: fn.parameters,
			return_type: parent.getType(),
			isIntrospectable: fn.isIntrospectable,
		});
	}

	accept(visitor: GirVisitor): IntrospectedConstructor {
		const node = this.copy({
			parameters: this.parameters.map((p) => {
				return p.accept(visitor);
			}),
			return_type: visitor.visitType?.(this.return_type),
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
