import { GirDirection } from '@gi.ts/parser'
import type { FormatGenerator } from '../generators/generator.ts'
import type { GirVisitor } from '../visitor.ts'
import { IntrospectedClassMember } from './introspected-class-member.ts'
import type { IntrospectedBaseClass } from './introspected-classes.ts'
import { IntrospectedFunctionParameter } from './parameter.ts'
import type { IntrospectedField } from './property.ts'

export class IntrospectedDirectAllocationConstructor extends IntrospectedClassMember {
    parameters: IntrospectedFunctionParameter[]

    constructor(parameters: IntrospectedFunctionParameter[], parent: IntrospectedBaseClass | null) {
        super('new', parent, { isPrivate: false, isIntrospectable: true })

        this.parameters = parameters.map((parameter) => parameter.copy({ parent: this }))
    }

    static fromFields(fields: IntrospectedField[], parent: IntrospectedBaseClass) {
        const building = new IntrospectedDirectAllocationConstructor([], parent)

        building.parameters = fields
            .filter((field) => {
                return !field.isStatic && !field.isPrivate && !field.type.isPointer
            })
            .map(
                (field) =>
                    new IntrospectedFunctionParameter({
                        parent: building,
                        type: field.type,
                        name: field.name,
                        direction: GirDirection.In,
                    }),
            )

        return building
    }

    asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T['generateDirectAllocationConstructor']> {
        return generator.generateDirectAllocationConstructor(this) as ReturnType<
            T['generateDirectAllocationConstructor']
        >
    }

    copy(options?: {
        parent?: IntrospectedBaseClass | undefined
        parameters?: IntrospectedFunctionParameter[]
    }): IntrospectedDirectAllocationConstructor {
        const copy = new IntrospectedDirectAllocationConstructor(
            options?.parameters ?? this.parameters,
            options?.parent ?? this.parent,
        )

        copy._copyBaseProperties(this)

        return copy
    }

    accept(visitor: GirVisitor): IntrospectedDirectAllocationConstructor {
        const node = this.copy({
            parameters: this.parameters.map((parameters) => {
                return parameters.accept(visitor)
            }),
        })

        return visitor.visitDirectAllocationConstructor?.(node) ?? node
    }
}
