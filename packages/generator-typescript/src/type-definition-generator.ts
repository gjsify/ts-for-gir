import { Generator } from '@ts-for-gir/generator-base'
import {
    Logger,
    generateIndent,
    removeNamespace,
    removeClassModule,
    Dependency,
    DependencyManager,
    WARN_NOT_FOUND_DEPENDENCY_GIR_FILE,
    //WARN_IGNORE_MULTIPLE_CALLBACKS,
    //WARN_IGNORE_MULTIPLE_FUNC_DESC,
    PackageData,
    TypeExpression,
    NSRegistry,
    IntrospectedClass,
    IntrospectedRecord,
    IntrospectedInterface,
    IntrospectedBaseClass,
    IntrospectedField,
    GirDirection,
    TsDoc,
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
    ClassStructTypeIdentifier,
    promisifyNamespaceFunctions,
} from '@ts-for-gir/lib'
import { TemplateProcessor } from './template-processor.js'
import { PackageDataParser } from './package-data-parser.js'
import { writeFile, mkdir } from 'fs/promises'
import { dirname } from 'path'
import {
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
} from '@ts-for-gir/lib'

function printGirDocComment(tsDoc: TsDoc, config: OptionsGeneration) {
    const desc: string[] = []
    if (config.noComments) {
        return desc.join('\n')
    }

    const text = tsDoc.text

    if (text) {
        if (text) {
            const lines = text.split('\n')
            if (lines.length) {
                for (const line of lines) {
                    desc.push(`${line}`)
                }
            }
        }

        for (const tag of tsDoc.tags) {
            if (tag.paramName) {
                desc.push(`@${tag.tagName} ${tag.paramName} ${tag.text}`)
            } else {
                desc.push(`@${tag.tagName} ${tag.text}`)
            }
        }
    }
    return desc.join('\n')
}

class ModuleGenerator extends FormatGenerator<string[]> {
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

        this.log = new Logger(this.config.verbose, TypeDefinitionGenerator.name)
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
            ...this.generateClassModules(node),
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
        return [
            `export interface ${node.name}Namespace {
      ${isGObject ? `$gtype: ${namespace.namespace !== 'GObject' ? 'GObject.' : ''}GType<${node.name}>;` : ''}
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
        return [`\n\nexport const ${node.name}: ${node.name}Namespace;\n`]
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
        if (this.config.noDebugComments) {
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

    /**
     * Adds an inline info comment, is used for debugging the generated types
     * @param comment
     * @param indentCount
     * @returns
     */
    addInlineInfoComment(comment?: string, indentCount = 0) {
        const def: string[] = []
        if (this.config.noDebugComments) {
            return def
        }
        const indent = generateIndent(indentCount)
        if (comment) {
            def.push(`${indent}/* ${comment} */`)
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

        desc.push(...this.addGirDocComment(girEnum.doc, [], indentCount))

        // Enums can't have numerical keys
        const isInvalidEnum = Array.from(girEnum.members.keys()).some(
            (name) => name.match(/^[0-9]+$/) || name === 'NaN' || name === 'Infinity',
        )

        if (isInvalidEnum) {
            desc.push(...girEnum.asClass().asString(this))

            return desc
        }

        const { name } = girEnum
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
                `Static fields of ${girClass.namespace.namespace}.${girClass.name}`,
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
                `Own fields of ${girClass.namespace.namespace}.${girClass.name}`,
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
                `Own properties of ${girClass.namespace.namespace}.${girClass.name}`,
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
                `Own static methods of ${girClass.namespace.namespace}.${girClass.name}`,
            ),
        )

        return def
    }

    generateClassMethods(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateFunctions(
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
                indentCount,
                `Own methods of ${girClass.namespace.namespace}.${girClass.name}`,
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
            def.unshift(
                ...this.addInfoComment(`Constructors of ${girClass.namespace.namespace}.${girClass.name}`, indentCount),
            )
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
                `Own virtual methods of ${girClass.namespace.namespace}.${girClass.name}`,
            ),
        )

        return def
    }

    generateClassSignalInterfaces(girClass: IntrospectedClass, indentCount = 0) {
        const def: string[] = []
        const tsSignals = girClass.signals

        def.push(
            ...this.generateCallbackInterfaces(
                tsSignals.map((signal) => {
                    return new IntrospectedClassCallback({
                        name: upperCamelCase(signal.name),
                        parameters: signal.parameters,
                        return_type: signal.return_type,
                        parent: signal.parent,
                    })
                }),
                indentCount,
                girClass.name,
                'Signal callback interfaces',
            ),
        )

        return def
    }

    generateSignals(girClass: IntrospectedClass) {
        const namespace = girClass.namespace
        // TODO Move these to a cleaner place.

        const Connect = new IntrospectedClassFunction({
            name: 'connect',
            parent: girClass,
            parameters: [
                new IntrospectedFunctionParameter({
                    name: 'id',
                    type: StringType,
                    direction: GirDirection.In,
                }),
                new IntrospectedFunctionParameter({
                    name: 'callback',
                    type: AnyFunctionType,
                    direction: GirDirection.In,
                }),
            ],
            return_type: NumberType,
        })

        const ConnectAfter = new IntrospectedClassFunction({
            name: 'connect_after',
            parent: girClass,
            parameters: [
                new IntrospectedFunctionParameter({
                    name: 'id',
                    type: StringType,
                    direction: GirDirection.In,
                }),
                new IntrospectedFunctionParameter({
                    name: 'callback',
                    type: AnyFunctionType,
                    direction: GirDirection.In,
                }),
            ],
            return_type: NumberType,
        })

        const Emit = new IntrospectedClassFunction({
            name: 'emit',
            parent: girClass,
            parameters: [
                new IntrospectedFunctionParameter({
                    name: 'id',
                    type: StringType,
                    direction: GirDirection.In,
                }),
                new IntrospectedFunctionParameter({
                    name: 'args',
                    isVarArgs: true,
                    type: new ArrayType(AnyType),
                    direction: GirDirection.In,
                }),
            ],
            return_type: VoidType,
        })

        let defaultSignals = [] as IntrospectedClassFunction[]
        let hasConnect, hasConnectAfter, hasEmit

        if (girClass.signals.length > 0) {
            hasConnect = girClass.members.some((m) => m.name === 'connect')
            hasConnectAfter = girClass.members.some((m) => m.name === 'connect_after')
            hasEmit = girClass.members.some((m) => m.name === 'emit')

            if (!hasConnect) {
                defaultSignals.push(Connect)
            }
            if (!hasConnectAfter) {
                defaultSignals.push(ConnectAfter)
            }
            if (!hasEmit) {
                defaultSignals.push(Emit)
            }

            defaultSignals = filterConflicts(namespace, girClass, defaultSignals, FilterBehavior.DELETE)

            hasConnect = !defaultSignals.some((s) => s.name === 'connect')
            hasConnectAfter = !defaultSignals.some((s) => s.name === 'connect_after')
            hasEmit = !defaultSignals.some((s) => s.name === 'emit')
        }

        const SignalsList = [
            // TODO Relocate these.
            ...defaultSignals.flatMap((s) => s.asString(this)),
            ...girClass.signals
                .map((s) => {
                    const methods = [] as string[]

                    if (!hasConnect) methods.push(...s.asString(this, IntrospectedSignalType.CONNECT))
                    if (!hasConnectAfter) methods.push(...s.asString(this, IntrospectedSignalType.CONNECT_AFTER))
                    if (!hasEmit) methods.push(...s.asString(this, IntrospectedSignalType.EMIT))

                    return methods
                })
                .flat(),
        ]

        return SignalsList
    }

    generateClassSignals(girClass: IntrospectedClass) {
        const def: string[] = []

        const signalDescs = this.generateSignals(girClass)

        def.push(...this.mergeDescs(signalDescs, `Own signals of ${girClass.namespace.namespace}.${girClass.name}`, 1))

        return def
    }

    generateClassModules(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 0) {
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
            def.push(`${indent}${exp}module ${girClass.name} {`)

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

            this.log.error(
                `Unable to resolve type: ${node.superType.name} from ${node.superType.namespace} in ${node.namespace.namespace} ${node.namespace.version}, falling back to GObject.Object`,
            )
            return ` extends GObject.Object`
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

        def.push(...this.generateClassModules(girClass))

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
            def.push(
                `static $gtype: ${this.namespace.namespace !== 'GObject' ? 'GObject.' : ''}GType<${girClass.name}>;`,
            )

            if (girClass.__ts__indexSignature) {
                def.push(`\n${girClass.__ts__indexSignature}\n`)
            }

            // START BODY
            {
                // Static Properties
                def.push(...this.generateClassProperties(girClass))

                // Static Fields
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

                    const filteredImplMethods = filterFunctionConflict(
                        girClass.namespace,
                        girClass,
                        implementedMethods,
                        [],
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

    async exportModuleJS(girModule: GirModule): Promise<void> {
        const template = 'module.js'
        const target = `${girModule.importName}.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportModuleAmbientTS(girModule: GirModule): Promise<void> {
        const template = 'module-ambient.d.ts'
        const target = `${girModule.importName}-ambient.d.ts`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleAmbientJS(girModule: GirModule): Promise<void> {
        const template = 'module-ambient.js'
        const target = `${girModule.importName}-ambient.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleImportTS(girModule: GirModule): Promise<void> {
        const template = 'module-import.d.ts'
        const target = `${girModule.importName}-import.d.ts`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleImportJS(girModule: GirModule): Promise<void> {
        const template = 'module-import.js'
        const target = `${girModule.importName}-import.js`

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportModuleTS(): Promise<void> {
        const { namespace: girModule } = this
        const output = await this.generateNamespace(girModule)

        if (!output) {
            this.log.error('Failed to generate')
            return
        }

        const target = `${girModule.importName}.d.ts`

        const formatter = this.dependencyManager.getFormatter('dts')

        let contents!: string
        try {
            contents = this.config.noPrettyPrint ? output.join('\n') : await formatter.format(output.join('\n'))
        } catch (error) {
            this.log.error('Failed to format output...', error)
            contents = output.join('\n')
        }

        if (this.config.outdir) {
            const outputPath = this.moduleTemplateProcessor.getOutputPath(this.config.outdir, target)

            if (this.config.verbose) {
                this.log.debug(`Outputting ${target} to ${outputPath}`)
            }

            // write template result file
            await mkdir(dirname(outputPath), { recursive: true })
            await writeFile(outputPath, contents, { encoding: 'utf8', flag: 'w' })
        } else {
            this.log.log(contents)
        }
    }

    /**
     *
     * @param namespace E.g. 'Gtk'
     * @param packageName E.g. 'Gtk-3.0'
     * @param asExternType Currently only used for node type imports
     */
    protected async generateModuleDependenciesImport(packageName: string): Promise<string[]> {
        const def: string[] = []
        const dep = await this.dependencyManager.get(packageName)

        if (this.namespace.hasSymbol(dep.namespace)) {
            if (this.config.noNamespace) {
                def.push(`import * as ${dep.namespace}__ from '${dep.importPath}';`)
            } else {
                def.push(`import ${dep.namespace}__ from '${dep.importPath}';`)
            }
        } else {
            def.push(dep.importDef)
        }

        return def
    }

    async generateNamespace(girModule: GirModule): Promise<string[] | null> {
        const moduleTemplateProcessor = this.moduleTemplateProcessor
        const template = this.config.noNamespace ? 'module-noNamespace.d.ts' : 'module.d.ts'
        const explicitTemplate = `${girModule.importName}.d.ts`

        const out: string[] = []

        out.push(...this.addTSDocCommentLines([girModule.packageName]))

        out.push('')

        // Module dependencies as type references or imports
        // TODO: Move to template
        for (const dependency of girModule.transitiveDependencies) {
            // Don't reference yourself as a dependency
            if (girModule.packageName !== dependency.packageName) {
                if (dependency.exists) {
                    out.push(...(await this.generateModuleDependenciesImport(dependency.packageName)))
                } else {
                    out.push(`// WARN: Dependency not found: '${dependency.packageName}'`)
                    this.log.warn(WARN_NOT_FOUND_DEPENDENCY_GIR_FILE(dependency.filename))
                }
            }
        }

        // START Namespace
        {
            if (!this.config.noNamespace) {
                out.push('')
                out.push(`export namespace ${girModule.namespace} {`)
            }

            // Newline
            out.push('')

            promisifyNamespaceFunctions(girModule)

            if (girModule.members)
                for (const m of girModule.members.values()) {
                    out.push(
                        ...(Array.isArray(m) ? m : [m])
                            .flatMap((m) => (m as IntrospectedNamespaceMember) ?? [])
                            .filter((m) => m.emit)
                            .flatMap((m) => m.asString(this as FormatGenerator<string[]>) ?? ''),
                    )
                }

            // Extra interfaces if a template with the module name  (e.g. '../templates/gobject-2-0.d.ts') is found
            // E.g. used for GObject-2.0 to help define GObject classes in js;
            // these aren't part of gi.
            if (moduleTemplateProcessor.exists(explicitTemplate)) {
                const { append, prepend } = await this.moduleTemplateProcessor.load(explicitTemplate, {}, this.config)
                // TODO push prepend and append to the right position
                out.push(append + prepend)
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
        }
        // END Namespace
        if (!this.config.noNamespace) {
            out.push(`}`)
            out.push('')
            out.push(`export default ${girModule.namespace};`)
        }

        const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)

        return [prepend, ...out, append]
    }

    async exportModule(_registry: NSRegistry, girModule: GirModule) {
        await this.exportModuleTS()
        await this.exportModuleJS(girModule)

        await this.exportModuleAmbientTS(girModule)
        await this.exportModuleAmbientJS(girModule)

        await this.exportModuleImportTS(girModule)
        await this.exportModuleImportJS(girModule)

        const pkg = new NpmPackage(this.config, this.dependencyManager, girModule, girModule.transitiveDependencies)

        await pkg.exportNPMPackage()
    }
}

export class TypeDefinitionGenerator implements Generator {
    log: Logger
    dependencyManager: DependencyManager
    packageData?: PackageDataParser

    module!: ModuleGenerator

    /**
     * @param _config The config to use without the override config
     */
    constructor(readonly config: OptionsGeneration) {
        this.log = new Logger(this.config.verbose, TypeDefinitionGenerator.name)
        this.dependencyManager = DependencyManager.getInstance(this.config)
        this.packageData = new PackageDataParser(this.config)
    }

    async exportGjs() {
        const { config, dependencyManager } = this

        if (!config.outdir) return

        const gjs = dependencyManager.getGjs()

        const templateProcessor = new TemplateProcessor(
            {
                registry: dependencyManager,
            },
            gjs.packageName,
            await dependencyManager.core(),
            config,
        )

        await templateProcessor.create('gjs.d.ts', config.outdir, 'gjs.d.ts')
        await templateProcessor.create('gjs.js', config.outdir, 'gjs.js')

        await templateProcessor.create('gettext.d.ts', config.outdir, 'gettext.d.ts')
        await templateProcessor.create('gettext.js', config.outdir, 'gettext.js')

        await templateProcessor.create('system.d.ts', config.outdir, 'system.d.ts')
        await templateProcessor.create('system.js', config.outdir, 'system.js')

        await templateProcessor.create('cairo.d.ts', config.outdir, 'cairo.d.ts')
        await templateProcessor.create('cairo.js', config.outdir, 'cairo.js')

        // Import ambient types
        await templateProcessor.create('ambient.d.ts', config.outdir, 'ambient.d.ts')
        await templateProcessor.create('ambient.js', config.outdir, 'ambient.js')

        // DOM types
        await templateProcessor.create('dom.d.ts', config.outdir, 'dom.d.ts')
        await templateProcessor.create('dom.js', config.outdir, 'dom.js')

        const pkg = new NpmPackage(config, dependencyManager, gjs, await dependencyManager.core())

        // Package
        await pkg.exportNPMPackage()
    }

    public async generate(registry: NSRegistry, module: GirModule) {
        const moduleGenerator = new ModuleGenerator(module, this.config)
        await moduleGenerator.exportModule(registry, module)
    }

    public async start() {
        if (this.packageData) {
            await this.packageData.start()
        }
    }

    public async finish() {
        // GJS internal stuff
        await this.exportGjs()
    }
}

class NpmPackage<Wrapped extends Dependency | GirModule> {
    config: OptionsGeneration
    moduleTemplateProcessor: TemplateProcessor
    dependencyManager: DependencyManager
    log: Logger
    packageName: string

    constructor(
        config: OptionsGeneration,
        dependencyManager: DependencyManager,
        dependencyOrModule: Wrapped,
        deps: Dependency[],
    ) {
        this.config = config

        this.packageName = dependencyOrModule.packageName

        this.log = new Logger(this.config.verbose, TypeDefinitionGenerator.name)

        this.dependencyManager = dependencyManager

        this.moduleTemplateProcessor = new TemplateProcessor(
            {
                name: dependencyOrModule.namespace,
                namespace: dependencyOrModule.namespace,
                version: dependencyOrModule.version,
                importName: dependencyOrModule.importName,
                registry: this.dependencyManager,
                girModule: dependencyOrModule instanceof GirModule ? dependencyOrModule : undefined,
            },
            dependencyOrModule.packageName,
            deps,
            this.config,
        )
    }

    async exportNPMPackage() {
        await this.exportNPMPackageJson()
        await this.exportNPMReadme()
        await this.exportTSConfig()
        await this.exportTypeDoc()
    }

    async exportNPMPackageJson() {
        const template = 'package.json'
        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportNPMReadme() {
        const girModuleImportName = this.packageName.toUpperCase()
        // E.g. `README-GJS.md` or `README-GTK-4.0.md`
        let template = girModuleImportName ? `README-${girModuleImportName}.md` : 'README.md'
        const outputFilename = 'README.md'

        if (!this.moduleTemplateProcessor.exists(template)) {
            template = 'README.md'
        }

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                outputFilename,
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportTSConfig() {
        const template = 'tsconfig.json'
        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportTypeDoc() {
        const template = 'typedoc.json'
        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }
}
