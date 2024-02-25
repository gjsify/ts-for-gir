import { Generator } from '@ts-for-gir/generator-base'
import {
    Logger,
    generateIndent,
    removeNamespace,
    removeClassModule,
    Dependency,
    DependencyManager,
    NO_TSDATA,
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
} from '@ts-for-gir/lib'
import { TemplateProcessor } from './template-processor.js'
import { PackageDataParser } from './package-data-parser.js'
import { writeFile, mkdir } from 'fs/promises'
import { dirname } from 'path'
import {
    GenerateConfig,
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
} from '@ts-for-gir/lib'

function printGirDocComment(tsDoc: TsDoc, config: GenerateConfig) {
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

    config: GenerateConfig
    moduleTemplateProcessor: TemplateProcessor

    /**
     * @param _config The config to use without the override config
     */
    constructor(namespace: GirModule, config: GenerateConfig) {
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
                registry: this.dependencyManager.registry,
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
        return [
            `${warning ? `${warning}\n` : ''}`,
            ...this.addGirDocComment(node.doc),
            `static ${name}(${Parameters}): ${node
                .return()
                .resolve(namespace, options)
                .rootPrint(namespace, options)};`,
        ]
    }
    generateRecord(node: IntrospectedRecord): string[] {
        return this.generateClass(node)
    }
    generateInterface(node: IntrospectedInterface): string[] {
        return this.generateImplementationInterface(node)
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
        const isStatic = false //tsProp.isStatic

        // if ((isStatic && !onlyStatic) || (!isStatic && onlyStatic)) {
        //     return desc
        // }

        desc.push(...this.addGirDocComment(tsProp.doc, [], indentCount))

        const indent = generateIndent(indentCount)
        const varDesc = this.generateVariable(tsProp)
        const staticStr = isStatic ? 'static ' : ''
        const readonly = !tsProp.writable ? 'readonly ' : ''

        // temporary solution, will be solved differently later
        const commentOut = ''

        desc.push(`${indent}${commentOut}${staticStr}${readonly}${varDesc}`)
        return desc
    }

    generateField(tsProp: IntrospectedField, indentCount = 0) {
        const desc: string[] = []
        const isStatic = false //tsProp.isStatic

        // if ((isStatic && !onlyStatic) || (!isStatic && onlyStatic)) {
        //     return desc
        // }

        desc.push(...this.addGirDocComment(tsProp.doc, [], indentCount))

        const indent = generateIndent(indentCount)
        const varDesc = this.generateVariable(tsProp, 0)
        const staticStr = isStatic ? 'static ' : ''
        const readonly = !tsProp.writable ? 'readonly ' : ''

        // temporary solution, will be solved differently later
        const commentOut = ''

        desc.push(`${indent}${commentOut}${staticStr}${readonly}${varDesc}`)
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

    // generateVariableCallbackType(tsType: TypeExpression, namespace: string) {
    //     // The type of a callback is a functions definition

    //     let typeStr = 'any'

    //     const { callbacks } = tsType

    //     if (!callbacks.length) return typeStr

    //     if (callbacks.length > 1) {
    //         this.log.warn(WARN_IGNORE_MULTIPLE_CALLBACKS)
    //     }

    //     const girCallback = callbacks[0]

    //     if (!girCallback) {
    //         throw new Error(NO_TSDATA('generateVariableCallbackType'))
    //     }

    //     const funcDesc = this.generateFunction(girCallback, false, namespace, 0)

    //     if (girCallback && funcDesc?.length) {
    //         if (funcDesc.length > 1) {
    //             this.log.warn(WARN_IGNORE_MULTIPLE_FUNC_DESC)
    //         }
    //         typeStr = funcDesc[0]
    //     }

    //     return typeStr
    // }

    generateVariable(tsVar: IntrospectedProperty | IntrospectedConstant | IntrospectedField, indentCount = 0) {
        const indent = generateIndent(indentCount)
        const name = tsVar.name
        // Constants are not optional
        const optional = false
        const invalid = isInvalid(name)
        const Name =
            invalid && (tsVar instanceof IntrospectedProperty || tsVar instanceof IntrospectedField)
                ? `"${name}"`
                : name

        if (!Name) {
            throw new Error('[generateVariable] "name" not set!')
        }

        const ComputedName = 'computed' in tsVar && tsVar.computed ? `[${name}]` : Name

        const affix = optional ? '?' : ''
        const typeStr = this.generateTypes(tsVar.type)

        // temporary solution, will be solved differently later
        // TODO: const commentOut = allowCommentOut && tsVar.hasUnresolvedConflict ? '// Has conflict: ' : ''
        const commentOut = ''

        return `${indent}${commentOut}${ComputedName}${affix}: ${typeStr}`
    }

    generateType(tsType: TypeExpression) {
        return tsType.print(this.namespace, this.config)
    }

    generateTypes(tsTypes: TypeExpression) {
        return tsTypes.print(this.namespace, this.config)
    }

    // TODO:
    // generateGenericValues(tsType: TypeExpression, namespace: string) {
    //     // We just use the generic values here
    //     const genericValues = tsType.generics.map((g) => removeNamespace(g.value || '', namespace)).filter((g) => !!g)
    //     const genericStr = tsType.generics.length ? `<${genericValues.join(', ')}>` : ''
    //     return genericStr
    // }

    // /**
    //  * Generates signals from all properties of a base class
    //  * TODO: Build new `GirSignalElement`s in `gir-module.ts` instead of generate the strings directly
    //  * @param girClass
    //  * @param namespace
    //  * @param indentCount
    //  * @returns
    //  */
    // generateClassPropertySignals(
    //     girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
    //     namespace: string,
    //     indentCount = 1,
    // ) {
    //     const def: string[] = []

    //     const isDerivedFromGObject = girClass.someParent(
    //         (p: IntrospectedBaseClass) => p.namespace.name === 'GObject' && p.name === 'Object',
    //     )

    //     if (isDerivedFromGObject) {
    //         if (girClass.propertySignalMethods.length > 0) {
    //             def.push(
    //                 ...this.addInfoComment(
    //                     `Class property signals of ${girClass._module?.packageName}.${girClass.name}`,
    //                     indentCount,
    //                 ),
    //             )
    //             for (const tsSignalMethod of girClass.propertySignalMethods) {
    //                 if (!tsSignalMethod) {
    //                     continue
    //                 }
    //                 def.push(...this.generateFunction(tsSignalMethod, false, namespace, indentCount))
    //             }
    //         }
    //     }
    //     return def
    // }

    generateInParameters(inParams: IntrospectedFunctionParameter[]) {
        const inParamsDef: string[] = []

        // TODO: Should use of a constructor, and even of an instance, be discouraged?
        // for (const instanceParameter of instanceParameters) {
        //     if (instanceParameter) {
        //         let { structFor } = instanceParameter
        //         const { name } = instanceParameter
        //         const gobject = namespace === 'GObject' || namespace === 'GLib' ? '' : 'GObject.'

        //         structFor = removeNamespace(structFor, namespace)

        //         const returnTypes = [structFor, 'Function', `${gobject}GType`]
        //         inParamsDef.push(`${name}: ${returnTypes.join(' | ')}`)
        //     }
        // }

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
        if (typeof tsParam?.name !== 'string') {
            throw new Error(NO_TSDATA('generateParameter'))
        }

        const types = tsParam.type
        const name = tsParam.name
        const typeStr = this.generateTypes(types)
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

    // generateOutParameterReturn(girParam: GirCallableParamElement, namespace: string) {
    //     const desc: string[] = []

    //     if (!girParam) {
    //         this.log.warn(NO_TSDATA('generateOutParameterReturn'))
    //         return desc
    //     }

    //     const { name } = girParam
    //     const typeStr = this.generateTypes(girParam.type, namespace)

    //     desc.push(`/* ${name} */ ${typeStr}`)
    //     return desc
    // }

    generateFunctionReturn(
        tsFunction: IntrospectedFunction | IntrospectedClassFunction | IntrospectedClassCallback | IntrospectedCallback,
    ) {
        if (tsFunction.name === 'constructor') {
            return ''
        }

        const typeStr = this.generateType(tsFunction.return())

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

        // if ((isStatic && !onlyStatic) || (!isStatic && onlyStatic)) {
        //     return def
        // }

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

        const inParamsDef: string[] = this.generateInParameters(inParams)

        def.push(
            `${indent}${commentOut}${exportStr}${staticStr}${globalStr}${name}${genericStr}(${inParamsDef.join(
                ', ',
            )})${retSep} ${returnType}`,
        )

        // Add overloaded methods
        // if (overloads && tsFunction.overloads.length > 0) {
        //     def.push(...this.addInfoComment(`Overloads of ${name}`, indentCount))
        //     for (const func of tsFunction.overloads) {
        //         def.push(...this.generateFunction(func, onlyStatic, namespace, indentCount, false))
        //     }
        // }

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
        const returnTypeStr = this.generateTypes(tsCallback.return())

        // Get name, remove namespace and remove module class name prefix
        let { name } = tsCallback
        const generics = tsCallback.generics
        name = removeNamespace(name, tsCallback.namespace.name)
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

        if (!girEnum) {
            this.log.warn(NO_TSDATA('generateEnumeration'))
            return desc
        }

        desc.push(...this.addGirDocComment(girEnum.doc, [], indentCount))

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

        // if (!tsConst.hasUnresolvedConflict) {
        desc.push(...this.addGirDocComment(tsConst.doc, [], indentCount))
        // }

        const indent = generateIndent(indentCount)
        const exp = !this.config.noNamespace ? '' : 'export '
        const varDesc = this.generateVariable(tsConst, 0)
        desc.push(`${indent}${exp}const ${varDesc}`)
        return desc
    }

    generateAlias(girAlias: IntrospectedAlias, indentCount = 0) {
        const desc: string[] = []

        const indent = generateIndent(indentCount)

        const exp = !this.config.noNamespace ? '' : 'export '

        desc.push(`${indent}${exp}type ${girAlias.name} = ${girAlias.type.print(this.namespace, this.config)}`)
        return desc
    }

    generateConstructPropsInterface(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 0,
    ) {
        const def: string[] = []

        if (!girClass.someParent((p: IntrospectedBaseClass) => p.namespace.name === 'GObject' && p.name === 'Object')) {
            return def
        }

        const indent = generateIndent(indentCount)
        const exp = !this.config.noNamespace ? '' : 'export '
        let ext = ''
        const resolution = girClass.resolveParents()
        const superType = resolution.node
        const iSuperTypes = 'implements' in resolution ? resolution.implements() : []

        if (superType || iSuperTypes.length > 0) {
            ext = `extends ${[
                superType.getType().print(this.namespace, this.config),
                ...iSuperTypes.map((i) => i.node.getType().print(this.namespace, this.config)),
            ].join(', ')} `
        }

        // Remove namespace and class module name
        const constructPropInterfaceName = removeClassModule(
            removeNamespace(`${girClass.name}ConstructorProps`, girClass.namespace.name),
            girClass.name,
        )

        def.push(...this.addInfoComment('Constructor properties interface', indentCount))

        // START BODY
        if (girClass.mainConstructor) {
            def.push(`${indent}${exp}interface ${constructPropInterfaceName} ${ext}{`)
            def.push(
                ...this.generateFields(
                    girClass.mainConstructor.parameters.map((param) => param.asField()),
                    `Own constructor properties of ${girClass.namespace.packageName}.${girClass.name}`,
                    indentCount + 1,
                ),
            )
            def.push(`${indent}}`, '')
        }
        // END BODY

        return def
    }

    generateClassFields(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateFields(
                girClass.fields,
                `Own fields of ${girClass.namespace.packageName}.${girClass.name}`,
                indentCount,
            ),
        )

        return def
    }

    generateClassProperties(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateProperties(
                girClass.props,
                `Own properties of ${girClass.namespace.packageName}.${girClass.name}`,
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
                [...girClass.members].filter((member) => member instanceof IntrospectedStaticClassFunction),
                indentCount,
                `Owm methods of ${girClass.namespace.packageName}.${girClass.name}`,
            ),
        )

        return def
    }

    generateClassMethods(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
        const def: string[] = []

        def.push(
            ...this.generateFunctions(
                [...girClass.members].filter(
                    (member) =>
                        !(member instanceof IntrospectedStaticClassFunction) &&
                        !(member instanceof IntrospectedVirtualClassFunction),
                ),
                indentCount,
                `Owm methods of ${girClass.namespace.packageName}.${girClass.name}`,
            ),
        )

        return def
    }

    generateClassConstructors(
        girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
        indentCount = 1,
    ) {
        const def: string[] = []
        // if (!girClass || !girClass.name || !girClass._module) {
        //     throw new Error(NO_TSDATA('generateClassConstructors'))
        // }

        // Constructors
        if (girClass.mainConstructor instanceof IntrospectedDirectAllocationConstructor)
            def.push(...this.generateDirectAllocationConstructor(girClass.mainConstructor))
        else if (girClass.mainConstructor instanceof IntrospectedConstructor)
            def.push(...this.generateConstructor(girClass.mainConstructor))

        // _init method
        def.push(...girClass.constructors.flatMap((constructor) => this.generateConstructorFunction(constructor)))
        // // Pseudo constructors
        // def.push(
        //     ...this.generateFunctions(
        //         girClass.staticFunctions
        //             .map((girFunc) => girFunc)
        //             .filter((tsFunc) => !!tsFunc) as IntrospectedFunction[],
        //         true,
        //         namespace,
        //         indentCount,
        //     ),
        // )

        if (def.length) {
            def.unshift(
                ...this.addInfoComment(
                    `Constructors of ${girClass.namespace.packageName}.${girClass.name}`,
                    indentCount,
                ),
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
                [...girClass.members.values()].filter((fn) => fn instanceof IntrospectedVirtualClassFunction),
                indentCount,
                `Own virtual methods of ${girClass.namespace.packageName}.${girClass.name}`,
            ),
        )

        return def
    }

    generateClassSignalInterfaces(girClass: IntrospectedClass, indentCount = 0) {
        const def: string[] = []
        if (!girClass) {
            throw new Error(NO_TSDATA('generateClassSignalInterface'))
        }

        const tsSignals = girClass.signals.map((signal) => signal).filter((signal) => !!signal)

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

    // generateClassSignals(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface) {
    //     const def: string[] = []
    //     if (!girClass || !girClass.name || !girClass._module) {
    //         throw new Error(NO_TSDATA('generateClassSignals'))
    //     }

    //     const signalDescs = this.generateSignals(girClass, girClass, 0)

    //     def.push(
    //         ...this.mergeDescs(signalDescs, `Own signals of ${girClass.namespace.packageName}.${girClass.name}`, 1),
    //     )

    //     return def
    // }

    generateClassModules(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 0) {
        const def: string[] = []
        const bodyDef: string[] = []
        if (!girClass) return def
        const indent = generateIndent(indentCount)

        const exp = !this.config.noNamespace ? '' : 'export '

        if ('signals' in girClass) {
            // Signal interfaces
            bodyDef.push(...this.generateClassSignalInterfaces(girClass, indentCount + 1))
        }

        // Properties interface for construction
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
        const implementationNames =
            'implements' in resolution
                ? resolution.implements().map((i) => i.node.getType().print(this.namespace, this.config))
                : []
        const ext = implementationNames.length ? ` extends ${implementationNames.join(', ')}` : ''
        const interfaceHead = `${girClass.name}${genericParameters}${ext}`

        // START INTERFACE
        {
            def.push(this.generateExport('interface', interfaceHead, '{'))

            // START BODY
            {
                // Properties
                def.push(...this.generateClassProperties(girClass))

                // Fields
                def.push(...this.generateClassFields(girClass))

                // Methods
                // TODO def.push(...this.generateClassStaticMethods(girClass))

                // Methods
                def.push(...this.generateClassMethods(girClass))

                // Virtual methods
                def.push(...this.generateClassVirtualMethods(girClass))

                // Signals
                // TODO: def.push(...this.generateClassSignals(girClass))

                // TODO: Generate `GirSignalElement`s instead of generate the signal definition strings directly
                // TODO: def.push(...this.generateClassPropertySignals(girClass))
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
                `Unable to resolve type: ${node.superType.name} from ${node.superType.namespace} in ${node.namespace.name} ${node.namespace.version}`,
            )
        }

        return ''
    }

    /**
     * Represents a record, GObject class or interface as a Typescript class
     * @param girClass
     * @param namespace
     */
    generateClass(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface) {
        const def: string[] = []

        def.push(...this.generateClassModules(girClass))

        // def.push(...this.generateImplementationInterface(girClass))

        def.push(...this.addGirDocComment(girClass.doc, [], 0))

        const genericParameters = this.generateGenericParameters(girClass.generics)
        const ext = this.extends(girClass)
        const classHead = `${girClass.name}${genericParameters}${ext}`

        // START CLASS
        {
            if (girClass instanceof IntrospectedClass && girClass.isAbstract) {
                def.push(this.generateExport('abstract class', classHead, '{'))
            } else {
                def.push(this.generateExport('class', classHead, '{'))
            }

            // START BODY
            {
                // Static Properties
                def.push(...this.generateClassProperties(girClass))

                // Static Fields
                def.push(...this.generateClassFields(girClass))

                // Constructors
                def.push(...this.generateClassConstructors(girClass))

                // Methods
                def.push(...this.generateClassStaticMethods(girClass))

                // Static Methods
                def.push(...this.generateClassMethods(girClass))
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

        // const template = 'module.d.ts'
        // const explicitTemplate = `${girModule.importName}.d.ts`

        const target = `${girModule.importName}.d.ts`

        const formatter = this.dependencyManager.registry.getFormatter('dts')

        let contents!: string
        try {
            contents = this.config.noPrettyPrint ? output.join('\n') : await formatter.format(output.join('\n'))
        } catch (error) {
            console.error(error)
            contents = output.join('\n')
        }

        if (this.config.outdir) {
            const outputPath = this.moduleTemplateProcessor.getOutputPath(this.config.outdir, target)
            console.log(outputPath, target)
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
    protected generateModuleDependenciesImport(packageName: string): string[] {
        const def: string[] = []
        const dep = this.dependencyManager.get(packageName)

        // if (this.config.package) {
        //     if (this.config.buildType === 'types') {
        //         // See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
        //         def.push(`/// <reference types="${this.config.npmScope}/${dep.importName}" />`)
        //     }
        // } else {
        //     if (this.config.buildType === 'types') {
        //         // See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
        //         def.push(`/// <reference path="${dep.importName}.d.ts" />`)
        //     }
        // }

        def.push(dep.importDef)

        return def
    }

    async generateNamespace(girModule: GirModule): Promise<string[] | null> {
        const moduleTemplateProcessor = this.moduleTemplateProcessor
        const template = 'module.d.ts'
        const explicitTemplate = `${girModule.importName}.d.ts`

        // let target = `${girModule.importName}.d.ts`

        //         target = `${girModule.importName}.d.mts`

        const out: string[] = []

        out.push(...this.addTSDocCommentLines([girModule.packageName]))

        out.push('')
        //     out.push(...this.generateModuleDependenciesImport('Gjs')

        // Module dependencies as type references or imports
        // TODO: Move to template
        for (const dependency of girModule.transitiveDependencies) {
            // Don't reference yourself as a dependency
            if (girModule.packageName !== dependency.packageName) {
                if (dependency.exists) {
                    out.push(...this.generateModuleDependenciesImport(dependency.packageName))
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

            if (girModule.members)
                for (const m of girModule.members.values())
                    out.push(
                        ...(Array.isArray(m) ? m : [m]).flatMap(
                            (m) => (m as IntrospectedNamespaceMember).asString(this as FormatGenerator<string[]>) ?? [],
                        ),
                    )

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

    async exportNPMPackage(girModuleImportName: string) {
        await this.exportNPMPackageJson()
        await this.exportNPMReadme(girModuleImportName)
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
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportNPMReadme(girModuleImportName: string) {
        // E.g. `README-GJS.md` or `README-GTK-4.0.md`
        let template = girModuleImportName ? `README-${girModuleImportName.toUpperCase()}.md` : 'README.md'
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
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    async exportModule(registry: NSRegistry, girModule: GirModule) {
        // let pkgData: PackageData | undefined
        // if (this.packageData) {
        //     pkgData = this.packageData.get(girModule.packageName)
        // }
        // const moduleTemplateProcessor = new TemplateProcessor(
        //     {
        //         name: girModule.namespace,
        //         namespace: girModule.namespace,
        //         version: girModule.version,
        //         importName: girModule.importName,
        //         girModule,
        //         girModules,
        //         girModulesGrouped,
        //         pkgData,
        //     },
        //     girModule.packageName,
        //     girModule.transitiveDependencies,
        //     this.config,
        // )

        await this.exportModuleTS()
        await this.exportModuleJS(girModule)

        await this.exportModuleAmbientTS(girModule)
        await this.exportModuleAmbientJS(girModule)

        await this.exportModuleImportTS(girModule)
        await this.exportModuleImportJS(girModule)

        await this.exportNPMPackage(girModule.importName)
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
    constructor(readonly config: GenerateConfig) {
        this.log = new Logger(this.config.verbose, TypeDefinitionGenerator.name)
        this.dependencyManager = DependencyManager.getInstance(this.config)
        this.packageData = new PackageDataParser(this.config)
    }

    /**
     *
     * @param namespace E.g. 'Gtk'
     * @param packageName E.g. 'Gtk-3.0'
     * @param asExternType Currently only used for node type imports
     */
    generateModuleDependenciesImport(packageName: string): string[] {
        const def: string[] = []
        const dep = this.dependencyManager.get(packageName)

        // if (this.config.package) {
        //     if (this.config.buildType === 'types') {
        //         // See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
        //         def.push(`/// <reference types="${this.config.npmScope}/${dep.importName}" />`)
        //     }
        // } else {
        //     if (this.config.buildType === 'types') {
        //         // See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
        //         def.push(`/// <reference path="${dep.importName}.d.ts" />`)
        //     }
        // }

        def.push(dep.importDef)

        return def
    }

    async exportGjs(dependencies: Dependency[], registry: NSRegistry) {
        if (!this.config.outdir) return
        const packageName = 'Gjs'

        const templateProcessor = new TemplateProcessor(registry, packageName, dependencies, this.config)

        await templateProcessor.create('gjs.d.ts', this.config.outdir, 'gjs.d.ts')
        await templateProcessor.create('gjs.js', this.config.outdir, 'gjs.js')

        await templateProcessor.create('gettext.d.ts', this.config.outdir, 'gettext.d.ts')
        await templateProcessor.create('gettext.js', this.config.outdir, 'gettext.js')

        await templateProcessor.create('system.d.ts', this.config.outdir, 'system.d.ts')
        await templateProcessor.create('system.js', this.config.outdir, 'system.js')

        await templateProcessor.create('cairo.d.ts', this.config.outdir, 'cairo.d.ts')
        await templateProcessor.create('cairo.js', this.config.outdir, 'cairo.js')

        // Import ambient types
        await templateProcessor.create('ambient.d.ts', this.config.outdir, 'ambient.d.ts')
        await templateProcessor.create('ambient.js', this.config.outdir, 'ambient.js')

        // DOM types
        await templateProcessor.create('dom.d.ts', this.config.outdir, 'dom.d.ts')
        await templateProcessor.create('dom.js', this.config.outdir, 'dom.js')

        // Import ambient path alias
        if (this.config.generateAlias) {
            // Write tsconfig.alias.json to the root of the package
            await templateProcessor.create('tsconfig.alias.json', this.config.outdir, 'tsconfig.alias.json', true)
        }

        // Package
        await this.module.exportNPMPackage('Gjs')
    }

    public async generate(registry: NSRegistry, module: GirModule) {
        this.module = new ModuleGenerator(module, this.config)
        await this.module.exportModule(registry, module)
    }

    public async start() {
        // this.dependencyManager.addAll(girModules)

        if (this.packageData) {
            await this.packageData.start()
        }
    }

    public async finish(registry: NSRegistry) {
        // GJS internal stuff
        await this.exportGjs(this.dependencyManager.core(), registry)
    }
}
