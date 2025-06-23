import type { IntrospectedEnum } from '../gir/enum.ts'
import type { IntrospectedFunction } from '../gir/function.ts'
import type { IntrospectedBaseClass, IntrospectedClassFunction } from '../gir/introspected-classes.ts'

import { NullableType, TypeIdentifier } from '../gir.ts'
import { GirVisitor } from '../visitor.ts'

export class FunctionParametersVisitor extends GirVisitor {
    /**
     * Marks all enum parameters of a function as nullable,
     * because GJS allows null values for enum parameters and treats them as a 0 value.
     * See issue [#207](https://github.com/gjsify/ts-for-gir/issues/207).
     */
    private makeEnumParamsNullable(node: IntrospectedFunction): IntrospectedFunction
    private makeEnumParamsNullable<T extends IntrospectedBaseClass | IntrospectedEnum>(
        node: IntrospectedClassFunction<T>,
    ): IntrospectedClassFunction<T>
    private makeEnumParamsNullable(
        node: IntrospectedFunction | IntrospectedClassFunction,
    ): IntrospectedFunction | IntrospectedClassFunction {
        return node.copy({
            parameters: node.parameters.map((param) => {
                const type = param.type.deepUnwrap()
                if (type instanceof TypeIdentifier) {
                    // Get the namespace where this type should be defined
                    const ns = node.namespace.assertInstalledImport(type.namespace)

                    // Check if the type is an enum
                    const isEnumType = !!ns.getEnum(type.name)

                    // If it is, make the parameter nullable
                    if (isEnumType) {
                        return param.copy({
                            type: new NullableType(param.type),
                        })
                    }
                }
                return param
            }),
        })
    }

    visitFunction = (node: IntrospectedFunction): IntrospectedFunction => {
        return this.makeEnumParamsNullable(node)
    }

    visitClassFunction = <T extends IntrospectedBaseClass | IntrospectedEnum>(
        node: IntrospectedClassFunction<T>,
    ): IntrospectedClassFunction<T> => {
        return this.makeEnumParamsNullable(node)
    }
}
