import {
    Logger,
    generateIndent,
    removeNamespace,
    removeClassModule,
    DependencyManager,
    PackageData,
    TypeExpression,
    NSRegistry,
    IntrospectedClass,
    IntrospectedRecord,
    IntrospectedInterface,
    IntrospectedBaseClass,
    IntrospectedField,
    GirDirection,
    TsDocTag,
    upperCamelCase,
    filterFunctionConflict,
    resolveDirectedType,
    TypeConflict,
    ConflictType,
    BinaryType,
    AnyType,
    StringType,
    AnyFunctionType,
    NumberType,
    ArrayType,
    FilterBehavior,
    VoidType,
    BooleanType,
    ThisType,
    ClassStructTypeIdentifier,
    promisifyNamespaceFunctions,
    OptionsGeneration,
    GirModule,
    IntrospectedFunction,
    IntrospectedCallback,
    IntrospectedSignal,
    IntrospectedProperty,
    IntrospectedConstant,
    IntrospectedClassCallback,
    IntrospectedClassFunction,
    IntrospectedConstructor,
    IntrospectedDirectAllocationConstructor,
    IntrospectedFunctionParameter,
    IntrospectedStaticClassFunction,
    IntrospectedVirtualClassFunction,
    IntrospectedNamespaceMember,
    IntrospectedAlias,
    IntrospectedEnum,
    IntrospectedSignalType,
    IntrospectedEnumMember,
    IntrospectedError,
    FormatGenerator,
    Generic,
    NativeType,
    isInvalid,
    filterConflicts,
    printGirDocComment,
    promisifyFunctions,
} from '@ts-for-gir/lib'

import { TemplateProcessor } from './template-processor.js'
import { PackageDataParser } from './package-data-parser.js'
import { NpmPackage } from './npm-package.js'

export class ModuleGenerator extends FormatGenerator<string[]> {
    log: Logger
    dependencyManager: DependencyManager
    packageData?: PackageDataParser

    config: OptionsGeneration
    moduleTemplateProcessor: TemplateProcessor

    /**
     * @param _config The config to use without the override config
     */
    constructor(namespace: GirModule, config: OptionsGeneration) {
        super(namespace, config)

        this.config = config

        this.log = new Logger(this.config.verbose, ModuleGenerator.name)
        this.dependencyManager = DependencyManager.getInstance(this.config)
        this.packageData = new PackageDataParser(this.config)
        const girModule = namespace
        let pkgData: PackageData | undefined
        if (this.packageData) {
            pkgData = this.packageData.get(girModule.packageName)
        }
        this.moduleTemplateProcessor = new TemplateProcessor(
            {
                name: girModule.namespace,
                namespace: girModule.namespace,
                version: girModule.version,
                importName: girModule.importName,
                girModule,
                pkgData,
                registry: this.dependencyManager,
            },
            girModule.packageName,
            girModule.transitiveDependencies,
            this.config,
            this.dependencyManager,
        )
    }

    generateClassCallback(node: IntrospectedClassCallback): string[] {
        return this.generateCallback(node)
    }
    generateConstructor(node: IntrospectedConstructor): string[] {
        const Parameters = this.generateParameters(node.parameters)

        return [`constructor(${Parameters});`]
    }
    generateDirectAllocationConstructor(node: IntrospectedDirectAllocationConstructor): string[] {
        const ConstructorFields = node.parameters.map((param) => param.asField().asString(this)).join('\n')

        return [
            `
    constructor(properties?: Partial<{
      ${ConstructorFields}
    }>);`,
        ]
    }
    protected generateParameters(parameters: IntrospectedFunctionParameter[]): string {
        return parameters
            .flatMap((p) => {
                return p.asString(this)
            })
            .join(', ')
    }

    generateConstructorFunction(node: IntrospectedConstructor): string[] {
        const { namespace, options } = this

        const Parameters = this.generateParameters(node.parameters)

        const invalid = isInvalid(node.name)
        const name = invalid ? `["${node.name}"]` : node.name
        const warning = node.getWarning()
        const genericTypes = this.generateGenericParameters(node.generics)

        return [
            `${warning ? `${warning}\n` : ''}`,
            ...this.addGirDocComment(node.doc),
            `static ${name}${genericTypes}(${Parameters}): ${node
                .return()
                .resolve(namespace, options)
                .rootPrint(namespace, options)};`,
        ]
    }
    generateRecord(node: IntrospectedRecord): string[] {
        const structFor = node.structFor

        if (structFor) {
            const resolvedIdentifier = structFor.resolveIdentifier(this.namespace, this.config)

            // Only create aliases for structs which resolve...
            if (resolvedIdentifier) {
                return this.generateAlias(
                    new IntrospectedAlias({
                        name: node.name,
                        namespace: node.namespace,
                        type: new ClassStructTypeIdentifier(structFor.name, structFor.namespace),
                    }),
                )
            }

            return []
        }

        return this.generateClass(node)
    }
    generateInterface(node: IntrospectedInterface): string[] {
        const isGObject = node.someParent((p) => p.namespace.namespace === 'GObject' && p.name === 'Object')
        const functions = filterFunctionConflict(node.namespace, node, node.members, [])
        const hasStaticFunctions = functions.some((f) => f instanceof IntrospectedStaticClassFunction)

        const hasNamespace = isGObject || hasStaticFunctions || node.callbacks.length > 0

        return [
            ...this.generateClassNamespaces(node),
            ...(hasNamespace ? this.generateInterfaceNamespace(node) : []),
            ...this.generateImplementationInterface(node),
            ...(hasNamespace ? this.generateInterfaceDeclaration(node) : []),
        ]
    }
    generateInterfaceNamespace(node: IntrospectedInterface): string[] {
        const isGObject = node.someParent((p) => p.namespace.namespace === 'GObject' && p.name === 'Object')
        const namespace = node.namespace
        const functions = filterFunctionConflict(node.namespace, node, node.members, [])
        const staticFunctions = functions.filter(
            (f): f is IntrospectedStaticClassFunction => f instanceof IntrospectedStaticClassFunction,
        )
        const staticFields = node.fields
            .filter((f) => f.isStatic)
            .map((f) =>
                f.copy({
                    isStatic: false,
                }),
            )
        const gtypeNamespace = namespace.namespace === 'GObject' ? '' : 'GObject.'
        return [
            `export interface ${node.name}Namespace {
      ${isGObject ? `$gtype: ${gtypeNamespace}GType<${node.name}>;` : ''}
      prototype: ${node.name};
      ${staticFields.length > 0 ? staticFields.flatMap((sf) => sf.asString(this)).join('\n') : ''}
      ${
          staticFunctions.length > 0
              ? staticFunctions
                    .flatMap((sf) => {
                        // TODO: We're passing "node" as the parent, even though that isn't technically accurate.
                        return sf.asClassFunction(node).asString(this)
                    })
                    .join('\n')
              : ''
      }    
      }`,
        ]
    }
    generateInterfaceDeclaration(node: IntrospectedInterface): string[] {
        return [
            `\n\nexport const ${node.name}: ${node.name}Namespace & {
        new (): ${node.name} // This allows \`obj instanceof ${node.name}\`
    }\n`,
        ]
    }
    generateError(node: IntrospectedError): string[] {
        const { namespace } = this
        const clazz = node.asClass()

        clazz.members = []
        clazz.members.push(...Array.from(node.functions.values()))

        const GLib = namespace.assertInstalledImport('GLib')
        const GLibError = GLib.assertClass('Error')

        clazz.superType = GLibError.getType()

        // Manually construct a GLib.Error constructor.
        clazz.mainConstructor = new IntrospectedConstructor({
            name: 'new',
            parent: clazz,
            parameters: [
                new IntrospectedFunctionParameter({
                    name: 'options',
                    type: NativeType.of('{ message: string, code: number}'),
                    direction: GirDirection.In,
                }),
            ],
            return_type: clazz.getType(),
        })

        return clazz.asString(this)
    }

    generateSignal(node: IntrospectedSignal, type: IntrospectedSignalType = IntrospectedSignalType.CONNECT): string[] {
        switch (type) {
            case IntrospectedSignalType.CONNECT:
                return node.asConnect(false).asString(this)
            case IntrospectedSignalType.CONNECT_AFTER:
                return node.asConnect(true).asString(this)
            case IntrospectedSignalType.EMIT:
                return node.asEmit().asString(this)
        }
    }

    generateStaticClassFunction(node: IntrospectedStaticClassFunction): string[] {
        return this.generateClassFunction(node)
    }
    generateVirtualClassFunction(node: IntrospectedVirtualClassFunction): string[] {
        return this.generateClassFunction(node)
    }

    generateExport(type: string, name: string, definition: string, indentCount = 0) {
        const exp = !this.config.noNamespace ? '' : 'export '
        const indent = generateIndent(indentCount)
        if (!definition.startsWith(':')) {
            definition = ' ' + definition
        }
        return `${indent}${exp}${type} ${name}${definition}`
    }

    generateProperty(tsProp: IntrospectedProperty, construct?: boolean, indentCount = 0) {
        const desc: string[] = []

        desc.push(...this.addGirDocComment(tsProp.doc, [], indentCount))

        const indent = generateIndent(indentCount)
        const name = this.generateMemberName(tsProp)

        const { readable, writable, constructOnly } = tsProp

        const hasGetter = readable
        const hasSetter = writable && !constructOnly

        let type = tsProp.type
        let getterAnnotation = ''
        let setterAnnotation = ''
        let getterSetterAnnotation = ''
        let printAsProperty = false

        if (type instanceof TypeConflict) {
            switch (type.conflictType) {
                case ConflictType.FUNCTION_NAME_CONFLICT:
                case ConflictType.FIELD_NAME_CONFLICT:
                    getterSetterAnnotation =
                        setterAnnotation = `// This accessor conflicts with a field or function name in a parent class or interface.\n`
                case ConflictType.ACCESSOR_PROPERTY_CONFLICT:
                    getterSetterAnnotation =
                        getterAnnotation = `// This accessor conflicts with a property or field in a parent class or interface.\n`
                    type = new BinaryType(type.unwrap(), AnyType)
                    // A child class cannot have an accessor declared if the parent has a property
                    printAsProperty = true
                    break
                case ConflictType.PROPERTY_ACCESSOR_CONFLICT:
                    type = new BinaryType(type.unwrap(), AnyType)
                    break
                case ConflictType.PROPERTY_NAME_CONFLICT:
                    getterSetterAnnotation =
                        setterAnnotation =
                        getterAnnotation =
                            "// This accessor conflicts with another accessor's type in a parent class or interface.\n"
                    type = new BinaryType(type.unwrap(), AnyType)
                    break
            }

            if (construct && !(type instanceof BinaryType)) {
                // For constructor properties we just convert to any.
                type = new BinaryType(type, AnyType)
            }
        }

        const Type = type.resolve(this.namespace, this.options).rootPrint(this.namespace, this.options) || 'any'

        if (construct) {
            return [`${name}: ${Type};`]
        }

        if (printAsProperty) {
            desc.push(`${getterSetterAnnotation}${indent} ${name}: ${Type};`)

            return desc
        }

        if (hasGetter && hasSetter) {
            desc.push(
                `${getterAnnotation}${indent}get ${name}(): ${Type};`,
                `${setterAnnotation}${indent}set ${name}(val: ${Type});`,
            )
        } else if (hasGetter) {
            desc.push(`${getterSetterAnnotation}${indent}get ${name}(): ${Type};`)
        } else {
            desc.push(`${getterSetterAnnotation}${indent}set ${name}(val: ${Type});`)
        }

        return desc
    }

    generateField(tsProp: IntrospectedField, indentCount = 0) {
        const desc: string[] = []
        const isStatic = tsProp.isStatic

        desc.push(...this.addGirDocComment(tsProp.doc, [], indentCount))

        const indent = generateIndent(indentCount)
        const name = this.generateMemberName(tsProp)
        const staticStr = isStatic ? 'static ' : ''
        const readonly = !tsProp.writable ? 'readonly ' : ''
        const affix = tsProp.optional ? '?' : ''

        // temporary solution, will be solved differently later
        let commentOut = ''
        let type = tsProp.type

        if (type instanceof TypeConflict) {
            if (type.conflictType === ConflictType.PROPERTY_ACCESSOR_CONFLICT) {
                commentOut = `\n// @ts-expect-error This property conflicts with an accessor in a parent class or interface.\n`

                type = type.unwrap()
            } else if (type.conflictType === ConflictType.FUNCTION_NAME_CONFLICT) {
                commentOut = `\n// This field conflicts with a function in a parent class or interface.\n`

                type = new BinaryType(type.unwrap(), AnyType)
            } else {
                type = type.unwrap()
            }
        }

        const typeStr = this.generateType(type)

        desc.push(`${indent}${commentOut}${staticStr}${readonly}${name}${affix}: ${typeStr}`)
        return desc
    }

    generateProperties(tsProps: IntrospectedProperty[], comment: string, indentCount = 0) {
        const def: string[] = []
        for (const tsProp of tsProps) {
            def.push(...this.generateProperty(tsProp, false, indentCount))
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    generateFields(tsProps: IntrospectedField[], comment: string, indentCount = 0) {
        const def: string[] = []
        for (const tsProp of tsProps) {
            def.push(...this.generateField(tsProp))
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    generateMemberName(tsVar: IntrospectedProperty | IntrospectedConstant | IntrospectedField) {
        const name = tsVar.name
        const invalid = isInvalid(name)
        const hasInvalidName = invalid && (tsVar instanceof IntrospectedProperty || tsVar instanceof IntrospectedField)
        const Name = hasInvalidName ? `"${name}"` : name

        if (!Name) {
            throw new Error('[generateVariable] "name" not set!')
        }

        const ComputedName = 'computed' in tsVar && tsVar.computed ? `[${name}]` : Name

        return `${ComputedName}`
    }

    /**
     * @param tsType The type expression
     * @param namespace Provides the namespace to import relative to, defaults to the current namespace
     * @returns A string for the type expression
     */
    generateType(tsType: TypeExpression) {
        return tsType.resolve(this.namespace, this.config).print(this.namespace, this.config)
    }

    generateDirectedType(tsType: TypeExpression, direction: GirDirection) {
        return (
            resolveDirectedType(tsType, direction)
                ?.resolve(this.namespace, this.config)
                ?.print(this.namespace, this.config) ??
            tsType.resolve(this.namespace, this.config).print(this.namespace, this.config)
        )
    }

    generateInParameters(inParams: IntrospectedFunctionParameter[]) {
        const inParamsDef: string[] = []

        for (const inParam of inParams) {
            inParamsDef.push(...this.generateParameter(inParam))
        }

        return inParamsDef
    }

    /**
     * Adds documentation comments
     * @see https://github.com/microsoft/tsdoc
     * @param lines
     * @param indentCount
     */
    addTSDocCommentLines(lines: string[], indentCount = 0): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        def.push(`${indent}/**`)
        for (const line of lines) {
            def.push(`${indent} * ${line}`)
        }
        def.push(`${indent} */`)
        return def
    }

    /**
     * Adds the documentation as comments
     * @see https://github.com/microsoft/tsdoc
     * @param girDoc
     * @param indentCount
     * @param overwriteDoc
     * @returns
     */
    addGirDocComment(tsDoc: string | null | undefined, tags: TsDocTag[] = [], indentCount = 0) {
        const desc: string[] = []
        const indent = generateIndent(indentCount)
        if (this.config.noComments) {
            return desc
        }

        const text = tsDoc ? this.namespace.transformation.transformGirDocText(tsDoc) : null

        if (text) {
            desc.push(`${indent}/**`)

            if (text) {
                const lines = text.split('\n')
                if (lines.length) {
                    for (const line of lines) {
                        desc.push(`${indent} * ${line}`)
                    }
                }
            }

            for (const tag of tags) {
                if (tag.paramName) {
                    desc.push(`${indent} * @${tag.tagName} ${tag.paramName} ${tag.text}`)
                } else {
                    desc.push(`${indent} * @${tag.tagName} ${tag.text}`)
                }
            }
            desc.push(`${indent} */`)
        }
        return desc
    }

    /**
     * Adds an info comment, is used for debugging the generated types
     * @param comment
     * @param indentCount
     * @returns
     */
    addInfoComment(comment?: string, indentCount = 0) {
        const def: string[] = []
        if (this.config.noComments) {
            return def
        }
        const indent = generateIndent(indentCount)
        if (comment) {
            def.push('')
            def.push(`${indent}// ${comment}`)
            def.push('')
        }
        return def
    }

    mergeDescs(descs: string[], comment?: string, indentCount = 1) {
        const def: string[] = []
        const indent = generateIndent(indentCount)

        for (const desc of descs) {
            def.push(`${indent}${desc}`)
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    generateParameter(tsParam: IntrospectedFunctionParameter) {
        const types = tsParam.type
        const name = tsParam.name
        const typeStr = this.generateDirectedType(types, GirDirection.In)
        const optional = tsParam.isOptional && !tsParam.isVarArgs
        const affix = optional ? '?' : ''
        const prefix = tsParam.isVarArgs ? '...' : ''

        return [`${prefix}${name}${affix}: ${typeStr}`]
    }

    /**
     *
     * @param tsGenerics
     * @param isOut If this generic parameters are out do only generate the type parameter names
     * @returns
     */
    generateGenericParameters(nodes: Generic[], withDefaults = true) {
        const { namespace, options } = this

        const list = nodes.map((generic) => {
            const Type = generic.type.rootPrint(namespace, options)

            if (generic.defaultType && withDefaults) {
                const defaultType = generic.defaultType.rootPrint(namespace, options)

                if (generic.constraint) {
                    const constraint = generic.constraint.rootPrint(namespace, options)
                    return `${Type} extends ${constraint} = ${defaultType}`
                }

                return `${Type} = ${defaultType}`
            } else if (generic.constraint && withDefaults) {
                const constraint = generic.constraint.rootPrint(namespace, options)
                return `${Type} extends ${constraint}`
            } else {
                return `${Type}`
            }
        })

        if (list.length > 0) {
            return `<${list.join(', ')}>`
        }

        return ''
    }

    generateFunctionReturn(
        tsFunction: IntrospectedFunction | IntrospectedClassFunction | IntrospectedClassCallback | IntrospectedCallback,
    ) {
        if (tsFunction.name === 'constructor') {
            return ''
        }

        const typeStr = this.generateDirectedType(tsFunction.return(), GirDirection.Out)

        const outputParameters = tsFunction.output_parameters

        if (outputParameters.length > 0) {
            const excludeActualReturnValueFromArray = typeStr === 'void' || typeStr === ''
            const returns = [
                ...(excludeActualReturnValueFromArray ? [] : [`${typeStr}`]),
                ...outputParameters
                    .map((op) => {
                        return (
                            resolveDirectedType(op.type, GirDirection.Out)?.resolve(this.namespace, this.options) ??
                            op.type.resolve(this.namespace, this.options)
                        )
                    })
                    .map((p) => p.rootPrint(this.namespace, this.options)),
            ]

            if (returns.length > 1) {
                return `[${returns.join(', ')}]`
            } else {
                return `${returns[0]}`
            }
        }

        return typeStr
    }

    generateClassFunction(node: IntrospectedClassFunction): string[] {
        return this.generateFunction(node)
    }

    generateFunction(
        tsFunction: IntrospectedClassFunction | IntrospectedFunction | IntrospectedCallback,
        indentCount = 0,
    ) {
        const def: string[] = []
        const indent = generateIndent(indentCount)

        let { name } = tsFunction
        const isStatic = tsFunction instanceof IntrospectedStaticClassFunction
        const isGlobal = !(tsFunction instanceof IntrospectedClassFunction)
        const isArrowType =
            tsFunction instanceof IntrospectedCallback || tsFunction instanceof IntrospectedClassCallback

        const { parameters: inParams } = tsFunction

        if (tsFunction.doc)
            def.push(
                ...this.addGirDocComment(
                    tsFunction.doc,
                    [
                        ...this.namespace.getTsDocInParamTags(tsFunction.parameters),
                        ...this.namespace.getTsDocReturnTags(tsFunction),
                    ],
                    indentCount,
                ),
            )

        const warning = tsFunction.getWarning()
        if (warning) def.push(warning)

        const staticStr = isStatic && tsFunction.name !== 'constructor' ? 'static ' : ''

        const globalStr = isGlobal ? 'function ' : ''
        const genericStr = this.generateGenericParameters(tsFunction.generics)

        // temporary solution, will be solved differently later
        const commentOut = ''

        let exportStr = ''
        // `tsType === 'function'` are a global methods which can be exported
        if (isGlobal) {
            exportStr = !this.config.noNamespace ? '' : 'export '
        }

        const returnType = this.generateFunctionReturn(tsFunction)

        let retSep = ''
        if (returnType) {
            if (isArrowType) {
                name = ''
                retSep = ' =>'
            } else {
                retSep = ':'
            }
        }

        // TODO: Check if this is necessary anywhere else...
        if (isInvalid(name) && !isGlobal) {
            name = `["${name}"]`
        }

        const inParamsDef: string[] = this.generateInParameters(inParams)

        def.push(
            `${indent}${commentOut}${exportStr}${staticStr}${globalStr}${name}${genericStr}(${inParamsDef.join(
                ', ',
            )})${retSep} ${returnType}`,
        )

        return def
    }

    generateFunctions(
        tsFunctions: IntrospectedFunction[] | IntrospectedClassFunction[],
        indentCount = 1,
        comment?: string,
    ) {
        const def: string[] = []

        for (const girFunction of tsFunctions) {
            def.push(...this.generateFunction(girFunction, indentCount))
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    generateCallback(
        tsCallback: IntrospectedCallback | IntrospectedClassCallback,
        indentCount = 0,
        classModuleName?: string,
    ) {
        const def: string[] = []

        def.push(...this.addGirDocComment(tsCallback.doc, [], indentCount))

        const indent = generateIndent(indentCount)
        const indentBody = generateIndent(indentCount + 1)
        const { parameters: inParams } = tsCallback
        const returnTypeStr = this.generateType(tsCallback.return())

        // Get name, remove namespace and remove module class name prefix
        let { name } = tsCallback
        const generics = tsCallback.generics
        name = removeNamespace(name, tsCallback.namespace.namespace)
        if (classModuleName) name = removeClassModule(name, classModuleName)
        const genericParameters = this.generateGenericParameters(generics)

        const inParamsDef: string[] = this.generateInParameters(inParams)

        const interfaceHead = `${name}${genericParameters}`

        def.push(this.generateExport('interface', `${interfaceHead}`, '{', indentCount))
        def.push(`${indentBody}(${inParamsDef.join(', ')}): ${returnTypeStr}`)
        def.push(indent + '}')

        return def
    }

    generateCallbackInterfaces(
        tsCallbacks: Array<IntrospectedCallback | IntrospectedClassCallback>,
        indentCount = 0,
        classModuleName: string,
        comment?: string,
    ) {
        const def: string[] = []

        for (const tsCallback of tsCallbacks) {
            def.push(...this.generateCallback(tsCallback, indentCount, classModuleName), '')
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    generateEnum(girEnum: IntrospectedEnum, indentCount = 0) {
        const desc: string[] = []
        const { name, namespace } = girEnum

        desc.push(...this.addGirDocComment(girEnum.doc, [], indentCount))

        // Enums can't have numerical keys
        const isInvalidEnum = Array.from(girEnum.members.keys()).some(
            (name) => name.match(/^[0-9]+$/) || name === 'NaN' || name === 'Infinity',
        )

        if (isInvalidEnum) {
            desc.push(...girEnum.asClass().asString(this))

            return desc
        }

        desc.push(``)
        desc.push(...this.addGirDocComment(girEnum.doc, [], indentCount))
        desc.push(`export namespace ${name} {`)
        const gtypeNamespace = namespace.namespace === 'GObject' ? '' : 'GObject.'
        desc.push(`    export const $gtype: ${gtypeNamespace}GType<${name}>;`)
        desc.push(`}`)
        desc.push(``)

        desc.push(this.generateExport('enum', name, '{', indentCount))
        if (girEnum.members) {
            for (const girEnumMember of girEnum.members.values()) {
                if (!girEnumMember) continue
                desc.push(...this.generateEnumMember(girEnumMember, indentCount + 1))
            }
        }
        desc.push('}')
        return desc
    }

    generateEnumMember(tsMember: IntrospectedEnumMember, indentCount = 1) {
        const desc: string[] = []

        desc.push(...this.addGirDocComment(tsMember.doc, [], indentCount))

        const invalid = isInvalid(tsMember.name)

        const indent = generateIndent(indentCount)
        if (invalid) {
            desc.push(`${indent}"${tsMember.name}",`)
        } else {
            desc.push(`${indent}${tsMember.name},`)
        }

        return desc
    }

    generateConst(tsConst: IntrospectedConstant, indentCount = 0) {
        const desc: string[] = []

        desc.push(...this.addGirDocComment(tsConst.doc, [], indentCount))

        const indent = generateIndent(indentCount)
        const exp = !this.config.noNamespace ? '' : 'export '

        const ComputedName = this.generateMemberName(tsConst)
        const typeStr = this.generateType(tsConst.type)

        desc.push(`${indent}${exp}const ${ComputedName}: ${typeStr}`)
        return desc
    }

    generateAlias(girAlias: IntrospectedAlias, indentCount = 0) {
        const { namespace, options } = this

        const desc: string[] = []

        const indent = generateIndent(indentCount)

        const genericList = girAlias.generics
            .map((g) => {
                if (g.type) {
                    return `${g.name} = ${g.type.resolve(namespace, options).rootPrint(namespace, options)}`
                }

                return `${g.name}`
            })
            .join(', ')

        const generics = genericList ? `<${genericList}>` : ''

        const exp = !this.config.noNamespace ? '' : 'export '

        desc.push(
            `${indent}${exp}type ${girAlias.name}${generics} = ${girAlias.type.print(this.namespace, this.config)}`,
        )
        return desc
    }

    generateConstructPropsInterface(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 0,
    ) {
        const def: string[] = []

        const isGObjectObject = girClass.name === 'Object' && girClass.namespace.namespace === 'GObject'
        if (
            !isGObjectObject &&
            !girClass.someParent(
                (p: IntrospectedBaseClass) => p.namespace.namespace === 'GObject' && p.name === 'Object',
            )
        ) {
            return def
        }

        const indent = generateIndent(indentCount)
        const exp = !this.config.noNamespace ? '' : 'export '
        let ext = ''
        const resolution = girClass.resolveParents()
        const superType = girClass.superType
        const superTypeIdentifier = superType
            ?.resolveIdentifier(this.namespace, this.config)
            ?.print(this.namespace, this.config)
        const genericTypes = this.generateGenericParameters(girClass.generics)

        // Remove namespace and class module name
        const constructPropInterfaceName = `ConstructorProps`

        // Only add the "extends" if the parent type will be generated (it has props)...
        if (superTypeIdentifier) {
            const interfaceExtends =
                'implements' in resolution
                    ? resolution
                          .implements()
                          .map((iface) =>
                              iface.identifier
                                  .resolveIdentifier(this.namespace, this.config)
                                  ?.print(this.namespace, this.config),
                          )
                          .filter((identifier): identifier is string => !!identifier)
                          .map((identifier) => {
                              const identifierParts = identifier.split('<')
                              const generics = identifierParts.length > 1 ? `<${identifierParts[1]}` : ''
                              return `${identifierParts[0]}.${constructPropInterfaceName}${generics}`
                          })
                    : []

            const superTypeIdentifierParts = superTypeIdentifier.split('<')
            const generics = superTypeIdentifierParts.length > 1 ? `<${superTypeIdentifierParts[1]}` : ''
            const superTypeExtends = `${superTypeIdentifierParts[0]}.${constructPropInterfaceName}${generics}`
            ext = `extends ${[superTypeExtends, ...interfaceExtends].join(', ')}`
        }

        def.push(...this.addInfoComment('Constructor properties interface', indentCount))

        // Include properties from parent interfaces...
        const { props } = girClass

        // START BODY

        const ConstructorProps = filterConflicts(girClass.namespace, girClass, props, FilterBehavior.PRESERVE)
            .flatMap((v) => v.asString(this, true))
            .join('\n    ')

        def.push(`${indent}${exp}interface ${constructPropInterfaceName}${genericTypes} ${ext} {`)
        def.push(ConstructorProps)
        def.push(`${indent}}`, '')

        // END BODY

        return def
    }

    generateClassStaticFields(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 1,
    ) {
        const def: string[] = []

        def.push(
            ...this.generateFields(
                filterConflicts(
                    girClass.namespace,
                    girClass,
                    girClass.fields.filter((field) => field.isStatic),
                ),
                `Static fields`,
                indentCount,
            ),
        )

        return def
    }

    generateClassMemberFields(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 1,
    ) {
        const def: string[] = []

        def.push(
            ...this.generateFields(
                filterConflicts(
                    girClass.namespace,
                    girClass,
                    girClass.fields.filter((field) => !field.isStatic),
                ),
                `Fields`,
                indentCount,
            ),
        )

        return def
    }

    generateClassFields(girClass: IntrospectedClass | IntrospectedRecord, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateClassStaticFields(girClass, indentCount),
            ...this.generateClassMemberFields(girClass, indentCount),
        )

        return def
    }

    generateClassProperties(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateProperties(
                filterConflicts(girClass.namespace, girClass, girClass.props),
                `Properties`,
                indentCount,
            ),
        )

        return def
    }

    generateClassStaticMethods(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 1,
    ) {
        const def: string[] = []
        def.push(
            ...this.generateFunctions(
                filterFunctionConflict(
                    girClass.parent,
                    girClass,
                    [...girClass.members].filter((member) => member instanceof IntrospectedStaticClassFunction),
                    [],
                ),
                indentCount,
                `Static methods`,
            ),
        )

        return def
    }

    generateClassMethods(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateFunctions(
                promisifyIfEnabled(
                    this.options,
                    filterFunctionConflict(
                        girClass.parent,
                        girClass,
                        [...girClass.members].filter(
                            (member) =>
                                !(member instanceof IntrospectedStaticClassFunction) &&
                                !(member instanceof IntrospectedVirtualClassFunction),
                        ),
                        [],
                    ),
                ),
                indentCount,
                `Methods`,
            ),
        )

        return def
    }

    generateClassConstructors(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 1,
    ) {
        const def: string[] = []

        // Constructors
        if (girClass.mainConstructor instanceof IntrospectedDirectAllocationConstructor)
            def.push(...this.generateDirectAllocationConstructor(girClass.mainConstructor))
        else if (girClass.mainConstructor instanceof IntrospectedConstructor)
            def.push(...this.generateConstructor(girClass.mainConstructor))
        else if (
            girClass.someParent(
                (p: IntrospectedBaseClass) => p.namespace.namespace === 'GObject' && p.name === 'Object',
            )
        )
            def.push(`\nconstructor(properties?: Partial<${girClass.name}.ConstructorProps>, ...args: any[]);\n`)

        // Don't inject a constructor hook if a stricter index signature is set,
        // as the types may not be compatible.
        //
        // TODO: Don't hardcode string index signatures
        if (!girClass.__ts__indexSignature || girClass.__ts__indexSignature.includes('[key: string]: any')) {
            // _init method
            def.push('_init(...args: any[]): void;\n')
        }

        def.push(
            ...filterFunctionConflict(girClass.parent, girClass, girClass.constructors, []).flatMap((constructor) =>
                this.generateConstructorFunction(constructor),
            ),
        )

        if (def.length) {
            def.unshift(...this.addInfoComment(`Constructors`, indentCount))
        }

        return def
    }

    /**
     * Instance methods, vfunc_ prefix
     * @param girClass
     */
    generateClassVirtualMethods(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 1,
    ) {
        const def: string[] = []

        def.push(
            ...this.generateFunctions(
                filterFunctionConflict(
                    girClass.parent,
                    girClass,
                    [...girClass.members.values()].filter((fn) => fn instanceof IntrospectedVirtualClassFunction),
                    [],
                ),
                indentCount,
                `Virtual methods`,
            ),
        )

        return def
    }

    generateClassSignalInterfaces(girClass: IntrospectedClass, indentCount = 0) {
        const def: string[] = []
        const tsSignals = girClass.signals

        // Generate individual signal callback interfaces only if we have signals
        if (tsSignals.length > 0) {
            def.push(
                ...this.generateCallbackInterfaces(
                    tsSignals.map((signal) => {
                        // Signal callbacks always have the source object as the first parameter

                        // For boolean return types, allow both boolean and void (void is treated as false)
                        // This makes signal handlers more flexible as users can omit return statements
                        let returnType = signal.return_type
                        if (signal.return_type.equals(BooleanType)) {
                            returnType = new BinaryType(BooleanType, VoidType)
                        }

                        return new IntrospectedClassCallback({
                            name: upperCamelCase(signal.name),
                            parameters: [
                                new IntrospectedFunctionParameter({
                                    name: '_source',
                                    type: girClass.getType(),
                                    direction: GirDirection.In,
                                }),
                                ...signal.parameters.map((p) => p.copy()),
                            ],
                            return_type: returnType,
                            parent: signal.parent,
                        })
                    }),
                    indentCount,
                    girClass.name,
                    'Signal callback interfaces',
                ),
            )
        }

        // Always generate SignalSignatures interface for proper inheritance
        def.push(...this.generateSignalSignatures(girClass, indentCount))

        return def
    }

    /**
     * Generate SignalSignatures interface for type-safe signal handling
     *
     * This creates a comprehensive mapping of signal names to their callback types,
     * enabling TypeScript to provide proper type checking and IntelliSense for
     * GObject signals, including:
     * - Base signals defined on the class
     * - Property notification signals (notify::property-name)
     * - Detailed signals for specific properties (signal-name::property-name)
     * - Proper inheritance from parent class signal signatures
     */
    generateSignalSignatures(girClass: IntrospectedClass, indentCount = 0): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)

        // Generate SignalSignatures interface to maintain type inheritance chain
        // Even classes without direct signals need this for proper parent type extension

        // Generate interface declaration
        def.push(`${indent}// Signal signatures`)
        def.push(`${indent}interface SignalSignatures`)

        // Build inheritance chain for signal signatures
        const parentSignatures: string[] = []

        // Inherit signal signatures from parent class
        const parentResolution = girClass.resolveParents().extends()
        if (parentResolution && parentResolution.node instanceof IntrospectedClass) {
            const parentClass = parentResolution.node as IntrospectedClass
            const parentTypeIdentifier = parentResolution.identifier
                .resolveIdentifier(this.namespace, this.config)
                ?.print(this.namespace, this.config)

            // Include parent signals unless it's a template workaround class
            // Template workarounds are synthetic classes that shouldn't be part of the inheritance chain
            const hasSignalMethods = parentClass.signals && parentClass.signals.length > 0
            const isNotTemplateWorkaround = !(
                this.namespace.namespace === 'Gimp' &&
                ['ParamObject', 'ParamItem', 'ParamArray'].includes(parentClass.name)
            )

            if (parentTypeIdentifier && (hasSignalMethods || isNotTemplateWorkaround)) {
                parentSignatures.push(`${parentTypeIdentifier}.SignalSignatures`)
            }
        }

        // Inherit signal signatures from implemented interfaces
        // Note: Most GObject interfaces don't define signals, but some specialized ones might
        const interfaceSignatures = girClass
            .resolveParents()
            .implements()
            .filter((iface) => iface.node instanceof IntrospectedInterface)
            .filter((iface) => {
                // Only include interfaces that actually define signals
                return (iface.node as any).signals && (iface.node as any).signals.length > 0
            })
            .map((iface) => {
                const interfaceTypeIdentifier = iface.identifier
                    .resolveIdentifier(this.namespace, this.config)
                    ?.print(this.namespace, this.config)
                return interfaceTypeIdentifier ? `${interfaceTypeIdentifier}.SignalSignatures` : null
            })
            .filter((sig): sig is string => !!sig)

        parentSignatures.push(...interfaceSignatures)

        // Apply inheritance or fallback to base GObject signals
        if (parentSignatures.length > 0) {
            def.push(` extends ${parentSignatures.join(', ')} {`)
        } else {
            // Handle root GObject.Object class to avoid circular references
            const isGObjectObject = girClass.name === 'Object' && girClass.namespace.namespace === 'GObject'

            if (isGObjectObject) {
                // GObject.Object is the root of the signal hierarchy
                def.push(` {`)
            } else {
                // All other classes inherit from GObject.Object's signal signatures as fallback
                const gobjectNamespace = this.namespace.assertInstalledImport('GObject')
                const gobjectObjectClass = gobjectNamespace.assertClass('Object')
                const gobjectRef = gobjectObjectClass
                    .getType()
                    .resolveIdentifier(this.namespace, this.config)
                    ?.print(this.namespace, this.config)

                const fallbackRef = gobjectRef ? `${gobjectRef}.SignalSignatures` : 'GObject.Object.SignalSignatures'
                def.push(` extends ${fallbackRef} {`)
            }
        }

        // Map class-specific signals to their callback types
        if (girClass.signals.length > 0) {
            girClass.signals.forEach((signal) => {
                const callbackName = upperCamelCase(signal.name)
                // Ensure valid TypeScript property names by quoting invalid identifiers
                const signalKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(signal.name) ? signal.name : `"${signal.name}"`
                def.push(`${indent}    ${signalKey}: ${callbackName};`)
            })
        }

        // Generate property notification signals (notify::property-name)
        // All GObject-derived classes support property change notifications through the "notify" signal

        // Collect all properties: direct properties + properties from implemented interfaces
        const allProperties = [...girClass.props]

        // Add properties from implemented interfaces using the existing implementedProperties method
        if (girClass instanceof IntrospectedClass) {
            const implementedProps = girClass.implementedProperties()
            allProperties.push(...implementedProps)
        }

        if (allProperties.length > 0) {
            // Determine if this class supports GObject property notifications
            const isGObjectObject = girClass.name === 'Object' && girClass.namespace.namespace === 'GObject'
            const hasNotifySignal = girClass.signals.some((signal) => signal.name === 'notify')
            const hasGObjectParent = girClass.someParent(
                (p: IntrospectedBaseClass) => p.namespace.namespace === 'GObject' && p.name === 'Object',
            )

            // Generate notify signals for GObject.Object and all classes that inherit from it
            if (isGObjectObject || hasNotifySignal || hasGObjectParent) {
                // Resolve the correct reference to the Notify signal type
                let notifyRef = 'Notify'
                if (!isGObjectObject) {
                    // For non-GObject classes, we need to reference the correct namespace
                    const gobjectNamespace = this.namespace.assertInstalledImport('GObject')
                    const gobjectObjectClass = gobjectNamespace.assertClass('Object')
                    const gobjectRef = gobjectObjectClass
                        .getType()
                        .resolveIdentifier(this.namespace, this.config)
                        ?.print(this.namespace, this.config)

                    notifyRef = gobjectRef ? `${gobjectRef}.Notify` : 'GObject.Object.Notify'
                }

                // Use Set to avoid duplicate property signals when the same property exists in multiple interfaces
                const uniqueProperties = new Set(allProperties.map((prop) => prop.name))

                uniqueProperties.forEach((propName) => {
                    // Standard property notification: notify::property-name
                    const notifySignalKey = `"notify::${propName}"`
                    def.push(`${indent}    ${notifySignalKey}: ${notifyRef};`)

                    // Generate kebab-case variant for properties containing hyphens
                    // This handles both camelCase->kebab-case and already hyphenated properties
                    if (propName.includes('-')) {
                        const notifySignalKeyDash = `"notify::-${propName}"`
                        def.push(`${indent}    ${notifySignalKeyDash}: ${notifyRef};`)
                    }
                })
            }
        }

        // Generate detailed signal variants for properties (e.g. changed::key-name for Gio.Settings)
        // Signals with the DETAILED flag can be connected to specific object properties or states
        if (allProperties.length > 0) {
            // Find signals that support detail parameters (marked with detailed="1" in GIR)
            const detailSignals = girClass.signals.filter((signal) => signal.detailed)

            detailSignals.forEach((detailSignal) => {
                // Use the same Set to avoid duplicates for detail signals as well
                const uniqueProperties = new Set(allProperties.map((prop) => prop.name))

                uniqueProperties.forEach((propName) => {
                    // Generate property-specific detail signal: signal-name::property-name
                    // This allows connecting to signals for specific properties only
                    const detailSignalKey = `"${detailSignal.name}::${propName}"`
                    const detailCallbackName = upperCamelCase(detailSignal.name)
                    def.push(`${indent}    ${detailSignalKey}: ${detailCallbackName};`)

                    // Generate kebab-case variant for properties containing hyphens
                    // This ensures compatibility with both naming conventions
                    if (propName.includes('-')) {
                        const detailSignalKeyDash = `"${detailSignal.name}::-${propName}"`
                        def.push(`${indent}    ${detailSignalKeyDash}: ${detailCallbackName};`)
                    }
                })
            })
        }

        def.push(`${indent}}`)
        def.push('')

        return def
    }

    generateSignals(girClass: IntrospectedClass) {
        // Create IntrospectedClassFunction instances for the signal methods
        // These represent the GObject signal methods that we want to generate
        const signalFunctions = [
            new IntrospectedClassFunction({
                name: 'connect',
                parent: girClass,
                parameters: [],
                return_type: NumberType,
            }),
            new IntrospectedClassFunction({
                name: 'connect_after',
                parent: girClass,
                parameters: [],
                return_type: NumberType,
            }),
            new IntrospectedClassFunction({
                name: 'emit',
                parent: girClass,
                parameters: [],
                return_type: VoidType,
            }),
        ]

        // Filter out signal methods that conflict with existing methods in the class or parent classes
        // For example, if a class already has a connect() method (like Camel.Service), we don't generate
        // the signal connect() method to avoid conflicts
        const filteredFunctions = filterConflicts(girClass.namespace, girClass, signalFunctions, FilterBehavior.DELETE)

        // Get the names of methods that should be kept (non-conflicting)
        const allowedNames = new Set(filteredFunctions.map((f) => f.name))

        // Generate only the non-conflicting type-safe signal methods
        const methods: string[] = []

        if (allowedNames.has('connect')) {
            methods.push(
                `connect<K extends keyof ${girClass.name}.SignalSignatures>(signal: K, callback: ${girClass.name}.SignalSignatures[K]): number;`,
            )
        }

        if (allowedNames.has('connect_after')) {
            methods.push(
                `connect_after<K extends keyof ${girClass.name}.SignalSignatures>(signal: K, callback: ${girClass.name}.SignalSignatures[K]): number;`,
            )
        }

        if (allowedNames.has('emit')) {
            // Fix: Use a conditional type to extract parameters from the signal signature
            // This ensures type compatibility with the base GObject.Object.emit method
            methods.push(
                `emit<K extends keyof ${girClass.name}.SignalSignatures>(signal: K, ...args: ${girClass.name}.SignalSignatures[K] extends (...args: infer P) => any ? P : never): void;`,
            )
        }

        return methods
    }

    generateClassSignals(girClass: IntrospectedClass) {
        const def: string[] = []

        const signalDescs = this.generateSignals(girClass)

        def.push(...this.mergeDescs(signalDescs, `Signals`, 1))

        return def
    }

    generateClassNamespaces(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 0) {
        const def: string[] = []
        const bodyDef: string[] = []
        if (!girClass) return def
        const indent = generateIndent(indentCount)

        const exp = !this.config.noNamespace ? '' : 'export '

        if (girClass instanceof IntrospectedClass) {
            // Signal interfaces
            bodyDef.push(...this.generateClassSignalInterfaces(girClass, indentCount + 1))
        }

        bodyDef.push(...this.generateClassCallbacks(girClass))

        // Properties interface for construction
        // TODO: Actually use this interface to build class' construction props interface
        bodyDef.push(...this.generateConstructPropsInterface(girClass, indentCount + 1))

        if (!bodyDef.length) {
            return []
        }

        // START BODY
        {
            def.push(`${indent}${exp}namespace ${girClass.name} {`)

            // Properties interface for construction
            def.push(...bodyDef)

            def.push(`${indent}}`, '')
        }
        // END BODY

        return def
    }

    generateClassCallbacks(girClass: IntrospectedClass | IntrospectedInterface | IntrospectedRecord) {
        if (girClass.callbacks.length === 0) return []

        return girClass.callbacks.flatMap((c) => this.generateClassCallback(c))
    }

    /**
     * In Typescript, interfaces and classes can have the same name,
     * so we use this to generate interfaces with the same name to implement multiple inheritance
     * @param girClass
     * @param namespace
     */
    generateImplementationInterface(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface) {
        const def: string[] = []

        if (!girClass) return def

        const genericParameters = this.generateGenericParameters(girClass.generics)
        const resolution = girClass.resolveParents()
        const superType = resolution.extends()
        const implementationNames = [
            ...(superType ? [superType.node.getType().print(this.namespace, this.config)] : []),
            ...('implements' in resolution
                ? resolution.implements().map((i) => i.node.getType().print(this.namespace, this.config))
                : []),
        ]
        const ext = implementationNames.length ? ` extends ${implementationNames.join(', ')}` : ''
        const interfaceHead = `${girClass.name}${genericParameters}${ext}`

        // START INTERFACE
        {
            def.push(this.generateExport('interface', interfaceHead, '{'))

            if (girClass.__ts__indexSignature) {
                def.push(`\n${girClass.__ts__indexSignature}\n`)
            }

            // START BODY
            {
                // Properties
                def.push(...this.generateClassProperties(girClass))

                // Fields
                def.push(...this.generateClassMemberFields(girClass))

                // Methods
                def.push(...this.generateClassMethods(girClass))

                // Virtual methods
                def.push(...this.generateClassVirtualMethods(girClass))
            }
            // END BODY

            // END INTERFACE
            def.push('}')
            def.push('')
        }

        return def
    }

    protected extends(node: IntrospectedBaseClass) {
        const { namespace: ns, options } = this
        if (node.superType) {
            const ResolvedType = node.superType.resolveIdentifier(ns, options)
            const Type = ResolvedType?.print(ns, options)

            if (Type) {
                return ` extends ${Type}`
            }

            throw new Error(
                `Unable to resolve type: ${node.superType.name} from ${node.superType.namespace} in ${node.namespace.namespace} ${node.namespace.version}, falling back to GObject.Object`,
            )
        }

        return ''
    }

    protected implements(node: IntrospectedClass) {
        const { namespace, options } = this

        const interfaces = node.interfaces.map((i) => {
            const identifier = i.resolveIdentifier(namespace, options)

            if (!identifier) {
                throw new Error(
                    `Unable to resolve type: ${i.name} from ${i.namespace} in ${node.namespace.namespace} ${node.namespace.version}`,
                )
            }

            return identifier
        })

        if (interfaces.length > 0) {
            return ` implements ${interfaces
                .map((i) => {
                    const Type = i.print(namespace, options)
                    return `${Type}`
                })
                .join(', ')}`
        }

        return ''
    }

    /**
     * Represents a record, GObject class or interface as a Typescript class
     * @param girClass
     * @param namespace
     */
    generateClass(girClass: IntrospectedClass | IntrospectedRecord) {
        const def: string[] = []

        def.push(...this.generateClassNamespaces(girClass))

        def.push(...this.addGirDocComment(girClass.doc, [], 0))

        const genericParameters = this.generateGenericParameters(girClass.generics)
        const ext = this.extends(girClass)
        const impl = girClass instanceof IntrospectedClass ? this.implements(girClass) : ''
        const classHead = `${girClass.name}${genericParameters}${ext}${impl}`

        // START CLASS
        {
            const isAbstract = girClass instanceof IntrospectedClass && girClass.isAbstract
            // TODO: I believe if a record has a constructor, we should not mark it as abstract
            const isOpaque = girClass instanceof IntrospectedRecord && girClass.isPrivate && !girClass.mainConstructor
            if (isAbstract || isOpaque) {
                def.push(this.generateExport('abstract class', classHead, '{'))
            } else {
                def.push(this.generateExport('class', classHead, '{'))
            }

            // $gtype compatibility
            const gtypeNamespace = this.namespace.namespace === 'GObject' ? '' : 'GObject.'
            def.push(`static $gtype: ${gtypeNamespace}GType<${girClass.name}>;`)

            if (girClass.__ts__indexSignature) {
                def.push(`\n${girClass.__ts__indexSignature}\n`)
            }

            // START BODY
            {
                // Static Properties
                def.push(...this.generateClassProperties(girClass))

                // Static and member Fields
                def.push(...this.generateClassFields(girClass))

                // Constructors
                def.push(...this.generateClassConstructors(girClass))

                if (girClass instanceof IntrospectedClass) {
                    // Signals
                    def.push(...this.generateClassSignals(girClass))
                }

                // Static Methods
                def.push(...this.generateClassStaticMethods(girClass))

                // Virtual methods
                def.push(...this.generateClassVirtualMethods(girClass))

                // Methods
                def.push(...this.generateClassMethods(girClass))

                if (girClass instanceof IntrospectedClass) {
                    const implementedProperties = girClass
                        .implementedProperties()
                        .map((prop) => prop.copy({ parent: girClass }))
                    const implementedMethods = girClass
                        .implementedMethods(implementedProperties)
                        .map((method) => method.copy({ parent: girClass }))

                    const generatedImplementedProperties = filterConflicts(
                        girClass.namespace,
                        girClass,
                        implementedProperties,
                    ).flatMap((m) => m.asString(this))

                    if (generatedImplementedProperties.length > 0)
                        def.push('\n// Inherited properties', ...generatedImplementedProperties)

                    const filteredImplMethods = promisifyIfEnabled(
                        this.options,
                        filterFunctionConflict(girClass.namespace, girClass, implementedMethods, []),
                    )
                    const generatedImplementedMethods = filteredImplMethods.flatMap((m) => m.asString(this))

                    if (generatedImplementedMethods.length > 0)
                        def.push('\n// Inherited methods', ...generatedImplementedMethods)
                }
            }
            // END BODY

            // END CLASS
            def.push('}')
            def.push('')
        }

        return def
    }

    async stringifyNamespace(node: GirModule): Promise<string | null> {
        return (await this.generateNamespace(node))?.join('\n') ?? null
    }

    async exportModuleIndexJS(): Promise<void> {
        const template = 'index.js'
        const target = `index.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportModuleIndexTS(): Promise<void> {
        const template = 'index.d.ts'
        const target = `index.d.ts`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportModuleJS(girModule: GirModule): Promise<void> {
        const template = 'module.js'
        const target = `${girModule.importName}.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportModuleAmbientTS(girModule: GirModule): Promise<void> {
        const template = 'module-ambient.d.ts'
        const target = `${girModule.importName}-ambient.d.ts`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleAmbientJS(girModule: GirModule): Promise<void> {
        const template = 'module-ambient.js'
        const target = `${girModule.importName}-ambient.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleImportTS(girModule: GirModule): Promise<void> {
        const template = 'module-import.d.ts'
        const target = `${girModule.importName}-import.d.ts`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleImportJS(girModule: GirModule): Promise<void> {
        const template = 'module-import.js'
        const target = `${girModule.importName}-import.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, target)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportModuleTS(): Promise<void> {
        const { namespace: girModule } = this
        const template = 'module.d.ts'
        const explicitTemplate = `${girModule.importName}.d.ts`
        const target = explicitTemplate
        const output = await this.generateModule(girModule)

        if (!output) {
            this.log.error('Failed to generate gir module')
            return
        }

        // Extra interfaces if a template with the module name  (e.g. '../templates/gobject-2-0.d.ts') is found
        // E.g. used for GObject-2.0 to help define GObject classes in js;
        // these aren't part of gi.
        if (await this.moduleTemplateProcessor.exists(explicitTemplate)) {
            const { append: appendExplicit, prepend: prependExplicit } =
                await this.moduleTemplateProcessor.load(explicitTemplate)
            output.unshift(prependExplicit)
            output.push(appendExplicit)
        }

        const { append, prepend } = await this.moduleTemplateProcessor.load(template)
        output.unshift(prepend)
        output.push(append)

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.write(output.join('\n'), this.config.outdir, target)
        } else {
            this.log.log(output.join('\n'))
        }
    }

    // TODO: @ewlsh Port `noAdvancedVariants` option from `DtsModuleGenerator` to `ModuleGenerator`?
    async generateModule(girModule: GirModule): Promise<string[]> {
        const out: string[] = []

        out.push(...this.addTSDocCommentLines([girModule.packageName]))

        out.push('')

        if (this.options.promisify) {
            promisifyNamespaceFunctions(girModule)
        }

        if (girModule.members) {
            for (const m of girModule.members.values()) {
                out.push(
                    ...(Array.isArray(m) ? m : [m])
                        .flatMap((m) => (m as IntrospectedNamespaceMember) ?? [])
                        .filter((m) => m.emit)
                        .flatMap((m) => m.asString(this as FormatGenerator<string[]>) ?? ''),
                )
            }
        }

        // Properties added to every GIRepositoryNamespace
        // https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L186-190
        out.push(
            ...this.generateConst(
                new IntrospectedConstant({
                    // TODO:
                    doc: printGirDocComment(
                        {
                            text: 'Name of the imported GIR library',
                            tags: [
                                {
                                    text: 'https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188',
                                    tagName: 'see',
                                    paramName: '',
                                },
                            ],
                        },
                        this.config,
                    ),
                    namespace: this.namespace,
                    value: null,
                    name: '__name__',
                    type: new NativeType('string'),
                    // isInjected: false,
                    // tsTypeName: 'constant',
                    // girTypeName: 'constant',
                }),
                0,
            ),
            ...this.generateConst(
                new IntrospectedConstant({
                    doc: printGirDocComment(
                        {
                            text: 'Version of the imported GIR library',
                            tags: [
                                {
                                    text: 'https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189',
                                    tagName: 'see',
                                    paramName: '',
                                },
                            ],
                        },
                        this.config,
                    ),
                    namespace: this.namespace,
                    name: '__version__',
                    type: new NativeType('string'),
                    value: null,
                }),
                0,
            ),
        )

        return Promise.resolve(out)
    }

    /**
     * Generates a namespace for the given GirModule.
     * @deprecated Use `generateModule` instead @ewlsh
     * @param girModule The GirModule to generate a namespace for.
     * @returns A promise that resolves to the generated namespace.
     */
    async generateNamespace(girModule: GirModule): Promise<string[]> {
        const out = await this.generateModule(girModule)

        if (!this.config.noNamespace) {
            return Promise.resolve(out)
        }

        out.unshift('')
        out.unshift(`export namespace ${girModule.namespace} {`)
        out.unshift('')

        out.push(`}`)
        out.push('')
        out.push(`export default ${girModule.namespace};`)

        return Promise.resolve(out)
    }

    async exportModule(_registry: NSRegistry, girModule: GirModule) {
        // Used for package.json and local ambient mode
        await this.exportModuleTS()

        if (this.config.package) {
            await this.exportModuleJS(girModule)

            await this.exportModuleIndexTS()
            await this.exportModuleIndexJS()

            await this.exportModuleAmbientTS(girModule)
            await this.exportModuleAmbientJS(girModule)

            await this.exportModuleImportTS(girModule)
            await this.exportModuleImportJS(girModule)

            const pkg = new NpmPackage(this.config, this.dependencyManager, girModule, girModule.transitiveDependencies)
            await pkg.exportNPMPackage()
        }
    }
}

function promisifyIfEnabled(
    options: OptionsGeneration,
    functions: IntrospectedClassFunction[],
): IntrospectedClassFunction[] {
    if (options.promisify) {
        // TODO: Remove this once the type is fixed

        return promisifyFunctions(functions)
    }

    return functions
}
