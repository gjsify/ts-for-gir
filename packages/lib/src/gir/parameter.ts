import { GirDirection } from '@gi.ts/parser'
import type { FormatGenerator } from '../generators/generator.ts'
import { ArrayType, type TypeExpression } from '../gir.ts'

import type { GirCallableParamElement } from '../index.ts'
import type { IntrospectedOptions, OptionsLoad } from '../types/index.ts'
import { getType, parseDoc, parseMetadata } from '../utils/gir-parsing.ts'
import { isIntrospectable } from '../utils/girs.ts'
import { isInvalid, sanitizeMemberName } from '../utils/naming.ts'
import type { GirVisitor } from '../visitor.ts'
import type { IntrospectedConstructor } from './constructor.ts'
import type { IntrospectedDirectAllocationConstructor } from './direct-allocation-constructor.ts'
import type { IntrospectedFunction } from './function.ts'
import { IntrospectedBase } from './introspected-base.ts'
import { IntrospectedBaseClass, type IntrospectedClassFunction } from './introspected-classes.ts'
import { IntrospectedField } from './property.ts'
import type { IntrospectedSignal } from './signal.ts'

export class IntrospectedFunctionParameter extends IntrospectedBase<
    | IntrospectedClassFunction
    | IntrospectedFunction
    | IntrospectedSignal
    | IntrospectedConstructor
    | IntrospectedDirectAllocationConstructor
    | null
> {
    readonly type: TypeExpression
    readonly direction: GirDirection
    readonly isVarArgs: boolean = false
    readonly isOptional: boolean = false
    readonly isNullable: boolean = false

    constructor({
        name,
        direction,
        type,
        parent,
        doc,
        isVarArgs = false,
        isOptional = false,
        isNullable = false,
        ...args
    }: IntrospectedOptions<{
        name: string
        parent?:
            | IntrospectedClassFunction
            | IntrospectedFunction
            | IntrospectedSignal
            | IntrospectedConstructor
            | IntrospectedDirectAllocationConstructor
            | null
        type: TypeExpression
        direction: GirDirection
        doc?: string | null
        isVarArgs?: boolean
        isOptional?: boolean
        isNullable?: boolean
    }>) {
        super(name, parent ?? null, { ...args })

        this.type = type
        this.direction = direction
        this.doc = doc
        this.isVarArgs = isVarArgs
        this.isOptional = isOptional
        this.isNullable = isNullable
    }

    get namespace() {
        if (!this.parent) throw new Error(`Failed to get namespace for ${this.name}`)

        return this.parent.namespace
    }

    asField() {
        const { name, parent, isOptional: optional, type } = this

        if (!(parent?.parent instanceof IntrospectedBaseClass)) {
            throw new Error("Can't convert parameter of non-class function to field")
        }

        return new IntrospectedField({ name, parent: parent.parent, optional, type })
    }

    copy(
        options: {
            parent?:
                | IntrospectedClassFunction
                | IntrospectedFunction
                | IntrospectedSignal
                | IntrospectedConstructor
                | IntrospectedDirectAllocationConstructor
                | null
            type?: TypeExpression
            isOptional?: boolean
            isNullable?: boolean
        } = {
            parent: this.parent,
        },
    ): IntrospectedFunctionParameter {
        const { type, parent, direction, isVarArgs, isOptional, isNullable, name, doc } = this

        return new IntrospectedFunctionParameter({
            parent: options.parent ?? parent,
            name,
            direction,
            isVarArgs,
            isOptional: options.isOptional ?? isOptional,
            isNullable: options.isNullable ?? isNullable,
            type: options.type ?? type,
            doc,
        })._copyBaseProperties(this)
    }

    accept(visitor: GirVisitor): IntrospectedFunctionParameter {
        const node = this.copy({
            type: visitor.visitType?.(this.type),
        })

        return visitor.visitParameter?.(node) ?? node
    }

    asString<T>(generator: FormatGenerator<T>): T {
        return generator.generateParameter(this)
    }

    static fromXML<
        Parent extends IntrospectedSignal | IntrospectedClassFunction | IntrospectedFunction | IntrospectedConstructor,
    >(
        parameter: GirCallableParamElement & { $: { name: string } },
        parent: Parent,
        options: OptionsLoad,
    ): IntrospectedFunctionParameter {
        const ns = parent.namespace
        let name = sanitizeMemberName(parameter.$.name)

        if (isInvalid(name)) {
            name = `_${name}`
        }

        let isVarArgs = false
        let isOptional = false
        let isNullable = false

        let type: TypeExpression
        let direction: GirDirection

        if (
            !parameter.$.direction ||
            parameter.$.direction === GirDirection.In ||
            parameter.$.direction === GirDirection.Inout ||
            parameter.$.direction === GirDirection.InOut
        ) {
            if (name === '...') {
                isVarArgs = true
                name = 'args'
            }

            // Default to "in" direction
            direction = parameter.$.direction || GirDirection.In

            const optional = parameter.$.optional === '1'
            const nullable = parameter.$.nullable === '1'

            if (optional) {
                isOptional = true
            }

            if (nullable) {
                isNullable = true
            }

            type = getType(ns, parameter)
        } else if (parameter.$.direction === GirDirection.Out) {
            direction = parameter.$.direction
            type = getType(ns, parameter)
        } else {
            throw new Error(`Unknown parameter direction: ${parameter.$.direction as string}`)
        }

        const fp = new IntrospectedFunctionParameter({
            isVarArgs,
            type: isVarArgs ? new ArrayType(type) : type,
            direction,
            parent: parent ?? undefined,
            isOptional,
            isNullable,
            name,
            isIntrospectable: isIntrospectable(parameter),
        })

        if (options.loadDocs) {
            fp.doc = parseDoc(parameter)
            fp.metadata = parseMetadata(parameter)
        }

        return fp
    }
}
