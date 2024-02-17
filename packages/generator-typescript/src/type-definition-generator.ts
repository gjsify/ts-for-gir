import { Generator } from '@ts-for-gir/generator-base'
import {
    Logger,
    generateIndent,
    removeNamespace,
    removeClassModule,
    girElementIsIntrospectable,
    typesContainsOptional,
    typesContainsNullable,
    Dependency,
    DependencyManager,
    NO_TSDATA,
    WARN_NOT_FOUND_DEPENDENCY_GIR_FILE,
    WARN_IGNORE_MULTIPLE_CALLBACKS,
    WARN_IGNORE_MULTIPLE_FUNC_DESC,
    PackageData,
} from '@ts-for-gir/lib'
import { TemplateProcessor } from './template-processor.js'
import { PackageDataParser } from './package-data-parser.js'

import type {
    GenerateConfig,
    GirClassElement,
    GirCallableParamElement,
    GirSignalElement,
    GirEnumElement,
    GirAliasElement,
    GirInterfaceElement,
    GirUnionElement,
    GirModulesGrouped,
    GirRecordElement,
    GirBitfieldElement,
    GirInstanceParameter,
    GirModule,
    TsGenericParameter,
    TsType,
    TsDoc,
    TsFunction,
    TsCallback,
    TsSignal,
    TsMember,
    TsVar,
    TsProperty,
    TsParameter,
} from '@ts-for-gir/lib'

export class TypeDefinitionGenerator implements Generator {
    protected log: Logger
    protected dependencyManager: DependencyManager
    protected packageData?: PackageDataParser

    /** Override config, used to override the config temporarily to generate both ESM and CJS for NPM packages */
    protected overrideConfig: Partial<GenerateConfig> = {}

    /** Get the current config, including the override config */
    protected get config(): GenerateConfig {
        return { ...this._config, ...this.overrideConfig }
    }

    /**
     * @param _config The config to use without the override config
     */
    constructor(protected readonly _config: GenerateConfig) {
        this.log = new Logger(this.config.environment, this.config.verbose, TypeDefinitionGenerator.name)
        this.dependencyManager = DependencyManager.getInstance(this.config)
        if (this.config.package) {
            this.packageData = new PackageDataParser(this.config)
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

    protected generateExport(type: string, name: string, definition: string, indentCount = 0) {
        const exp = !this.config.noNamespace ? '' : 'export '
        const indent = generateIndent(indentCount)
        if (!definition.startsWith(':')) {
            definition = ' ' + definition
        }
        return `${indent}${exp}${type} ${name}${definition}`
    }

    protected generateProperty(tsProp: TsProperty, onlyStatic: boolean, namespace: string, indentCount = 0) {
        if (!tsProp) {
            throw new Error('[generateProperty] Not all required properties set!')
        }

        const desc: string[] = []
        const isStatic = tsProp.isStatic

        if ((isStatic && !onlyStatic) || (!isStatic && onlyStatic)) {
            return desc
        }

        if (!tsProp.hasUnresolvedConflict) {
            desc.push(...this.addGirDocComment(tsProp.doc, indentCount))
        }

        const indent = generateIndent(indentCount)
        const varDesc = this.generateVariable(tsProp, namespace, 0, false)
        const staticStr = isStatic ? 'static ' : ''
        const readonly = tsProp.readonly ? 'readonly ' : ''

        // temporary solution, will be solved differently later
        const commentOut = tsProp.hasUnresolvedConflict ? '// Has conflict: ' : ''

        desc.push(`${indent}${commentOut}${staticStr}${readonly}${varDesc}`)
        return desc
    }

    protected generateProperties(
        tsProps: TsProperty[],
        onlyStatic: boolean,
        namespace: string,
        comment: string,
        indentCount = 0,
    ) {
        const def: string[] = []
        for (const tsProp of tsProps) {
            def.push(...this.generateProperty(tsProp, onlyStatic, namespace, indentCount))
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    protected generateVariableCallbackType(tsType: TsType, namespace: string) {
        // The type of a callback is a functions definition

        let typeStr = 'any'

        const { callbacks } = tsType

        if (!callbacks.length) return typeStr

        if (callbacks.length > 1) {
            this.log.warn(WARN_IGNORE_MULTIPLE_CALLBACKS)
        }

        const girCallback = callbacks[0]

        if (!girCallback._tsData) {
            throw new Error(NO_TSDATA('generateVariableCallbackType'))
        }

        const funcDesc = this.generateFunction(girCallback._tsData, false, namespace, 0)

        if (girCallback._tsData && funcDesc?.length) {
            if (funcDesc.length > 1) {
                this.log.warn(WARN_IGNORE_MULTIPLE_FUNC_DESC)
            }
            typeStr = funcDesc[0]
        }

        return typeStr
    }

    protected generateVariable(tsVar: TsProperty | TsVar, namespace: string, indentCount = 0, allowCommentOut = true) {
        const indent = generateIndent(indentCount)
        const name = tsVar.name
        // Constants are not optional
        const optional = tsVar.tsTypeName !== 'constant' && typesContainsOptional(tsVar.type)

        if (!name) {
            throw new Error('[generateVariable] "name" not set!')
        }

        const affix = optional ? '?' : ''
        const typeStr = this.generateTypes(tsVar.type, namespace)

        // temporary solution, will be solved differently later
        const commentOut = allowCommentOut && tsVar.hasUnresolvedConflict ? '// Has conflict: ' : ''

        return `${indent}${commentOut}${name}${affix}: ${typeStr}`
    }

    protected generateType(tsType: TsType, namespace: string, generateNullable = true) {
        let typeName = removeNamespace(tsType.type, namespace)

        if (tsType.callbacks.length) {
            typeName = this.generateVariableCallbackType(tsType, namespace)
        }

        if (!typeName) {
            throw new Error('[generateVariable] "typeName" not set!')
        }

        let prefix = tsType.isArray ? '[]' : ''
        if (generateNullable && tsType.nullable) {
            prefix += ' | null'
        }

        // We just use the generic values here
        const genericStr = this.generateGenericValues(tsType, namespace)

        return `${typeName}${genericStr}${prefix}`
    }

    protected generateTypes(tsTypes: TsType[], namespace: string) {
        let def = ''
        for (const tsType of tsTypes) {
            const separator = tsType.leftSeparator || '|'
            const typeStr = this.generateType(tsType, namespace, false)
            if (!def) {
                def = typeStr
            } else {
                def += ` ${separator} ${typeStr}`
            }
        }
        const hasNullable = typesContainsNullable(tsTypes)
        if (hasNullable) {
            if (tsTypes.length > 1) {
                def = `(${def}) | null`
            } else {
                def += ' | null'
            }
        }
        return def
    }

    protected generateGenericValues(tsType: TsType, namespace: string) {
        // We just use the generic values here
        const genericValues = tsType.generics.map((g) => removeNamespace(g.value || '', namespace)).filter((g) => !!g)
        const genericStr = tsType.generics.length ? `<${genericValues.join(', ')}>` : ''
        return genericStr
    }

    /**
     * Generates signals from all properties of a base class
     * TODO: Build new `GirSignalElement`s in `gir-module.ts` instead of generate the strings directly
     * @param girClass
     * @param namespace
     * @param indentCount
     * @returns
     */
    protected generateClassPropertySignals(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []

        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassPropertySignals'))
        }

        if (girClass._tsData?.isDerivedFromGObject) {
            if (girClass._tsData.propertySignalMethods.length > 0) {
                def.push(
                    ...this.addInfoComment(
                        `Class property signals of ${girClass._module?.packageName}.${girClass._fullSymName}`,
                        indentCount,
                    ),
                )
                for (const tsSignalMethod of girClass._tsData.propertySignalMethods) {
                    if (!tsSignalMethod) {
                        continue
                    }
                    def.push(...this.generateFunction(tsSignalMethod, false, namespace, indentCount))
                }
            }
        }
        return def
    }

    protected generateInParameters(
        inParams: GirCallableParamElement[],
        instanceParameters: GirInstanceParameter[],
        namespace: string,
    ) {
        const inParamsDef: string[] = []

        // TODO: Should use of a constructor, and even of an instance, be discouraged?
        for (const instanceParameter of instanceParameters) {
            if (instanceParameter._tsData) {
                let { structFor } = instanceParameter._tsData
                const { name } = instanceParameter._tsData
                const gobject = namespace === 'GObject' || namespace === 'GLib' ? '' : 'GObject.'

                structFor = removeNamespace(structFor, namespace)

                const returnTypes = [structFor, 'Function', `${gobject}GType`]
                inParamsDef.push(`${name}: ${returnTypes.join(' | ')}`)
            }
        }

        for (const inParam of inParams) {
            if (inParam._tsData) inParamsDef.push(...this.generateParameter(inParam._tsData, namespace))
        }

        return inParamsDef
    }

    protected generateSignals(
        girSignals: GirSignalElement[],
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []

        for (const girSignal of girSignals) {
            if (girSignal._tsData?.tsMethods?.length) {
                for (const tsSignalMethod of girSignal._tsData?.tsMethods) {
                    if (!tsSignalMethod) {
                        continue
                    }
                    def.push(...this.generateFunction(tsSignalMethod, false, namespace, indentCount))
                }
            }
        }
        return def
    }

    /**
     * Adds documentation comments
     * @see https://github.com/microsoft/tsdoc
     * @param lines
     * @param indentCount
     */
    protected addTSDocCommentLines(lines: string[], indentCount = 0): string[] {
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
    protected addGirDocComment(tsDoc: TsDoc | undefined, indentCount = 0, overwriteDoc?: Partial<TsDoc>) {
        const desc: string[] = []
        const indent = generateIndent(indentCount)
        if (this.config.noComments) {
            return desc
        }

        const text = overwriteDoc?.text || tsDoc?.text
        const tags = overwriteDoc?.tags || tsDoc?.tags || []

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
    protected addInfoComment(comment?: string, indentCount = 0) {
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
    protected addInlineInfoComment(comment?: string, indentCount = 0) {
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

    protected mergeDescs(descs: string[], comment?: string, indentCount = 1) {
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

    protected generateParameter(tsParam: TsParameter, namespace: string) {
        if (typeof tsParam?.name !== 'string') {
            throw new Error(NO_TSDATA('generateParameter'))
        }

        const types = tsParam.type
        const name = tsParam.name
        const typeStr = this.generateTypes(types, namespace)
        const optional = typesContainsOptional(types) && !tsParam.isRest
        const affix = optional ? '?' : ''
        const prefix = tsParam.isRest ? '...' : ''

        return [`${prefix}${name}${affix}: ${typeStr}`]
    }

    /**
     *
     * @param tsGenerics
     * @param isOut If this generic parameters are out do only generate the type parameter names
     * @returns
     */
    protected generateGenericParameters(tsGenerics?: TsGenericParameter[], isOut = false) {
        const desc: string[] = []
        if (!tsGenerics?.length) {
            return ''
        }

        for (const tsGeneric of tsGenerics) {
            if (!tsGeneric.name) {
                continue
            }
            let genericStr = `${tsGeneric.name}`
            if (!isOut && tsGeneric.extends) {
                genericStr += ` extends ${tsGeneric.extends}`
            }
            if (!isOut && tsGeneric.value) {
                genericStr += ` = ${tsGeneric.value}`
            }
            desc.push(genericStr)
        }

        return `<${desc.join(', ')}>`
    }

    protected generateOutParameterReturn(girParam: GirCallableParamElement, namespace: string) {
        const desc: string[] = []

        if (!girParam._tsData) {
            this.log.warn(NO_TSDATA('generateOutParameterReturn'))
            return desc
        }

        const { name } = girParam._tsData
        const typeStr = this.generateTypes(girParam._tsData.type, namespace)

        desc.push(`/* ${name} */ ${typeStr}`)
        return desc
    }

    protected generateFunctionReturn(tsFunction: TsFunction | TsCallback | TsSignal, namespace: string) {
        if (tsFunction.name === 'constructor') {
            return ''
        }

        const overrideReturnType = tsFunction.overrideReturnType
        const outParams = tsFunction.outParams
        const retTypeIsVoid = tsFunction.retTypeIsVoid
        const isPromise = tsFunction.isPromise || false
        const typeStr = this.generateTypes(tsFunction.returnTypes, namespace)

        let desc = typeStr

        if (overrideReturnType) {
            desc = removeNamespace(overrideReturnType, namespace)
        }
        // TODO: Transform the outParams to `tsFunction.returnTypes` to move this logic to `gir-module.ts`
        else if (outParams.length + (retTypeIsVoid ? 0 : 1) > 1) {
            const outParamsDesc: string[] = []

            if (!retTypeIsVoid) {
                outParamsDesc.push(`/* returnType */ ${typeStr}`)
            }

            for (const outParam of outParams) {
                outParamsDesc.push(...this.generateOutParameterReturn(outParam, namespace))
            }

            desc = outParamsDesc.join(', ')
            desc = `[ ${desc} ]`
        } else if (outParams.length === 1 && retTypeIsVoid) {
            desc = this.generateOutParameterReturn(outParams[0], namespace).join(' ')
        }

        if (isPromise) {
            desc = `globalThis.Promise<${desc}>`
        }

        return desc
    }

    protected generateFunction(
        tsFunction: TsFunction | TsCallback | TsSignal | undefined,
        /** If true only generate static functions otherwise generate only non static functions */
        onlyStatic: boolean,
        namespace: string,
        indentCount = 1,
        overloads = true,
    ) {
        const def: string[] = []
        const indent = generateIndent(indentCount)

        if (!tsFunction) {
            this.log.warn(NO_TSDATA('generateFunction'))
            return def
        }

        let { name } = tsFunction
        const { isStatic } = tsFunction

        const { isArrowType, isGlobal, inParams, instanceParameters } = tsFunction

        if ((isStatic && !onlyStatic) || (!isStatic && onlyStatic)) {
            return def
        }

        if (tsFunction.doc && !tsFunction.hasUnresolvedConflict)
            def.push(...this.addGirDocComment(tsFunction.doc, indentCount))

        const staticStr = isStatic && tsFunction.name !== 'constructor' ? 'static ' : ''

        const globalStr = isGlobal ? 'function ' : ''
        const genericStr = this.generateGenericParameters(tsFunction.generics)

        // temporary solution, will be solved differently later
        const commentOut = tsFunction.hasUnresolvedConflict ? '// Has conflict: ' : ''

        let exportStr = ''
        // `tsType === 'function'` are a global methods which can be exported
        if (isGlobal) {
            exportStr = !this.config.noNamespace ? '' : 'export '
        }

        const returnType = this.generateFunctionReturn(tsFunction, namespace)

        let retSep = ''
        if (returnType) {
            if (isArrowType) {
                name = ''
                retSep = ' =>'
            } else {
                retSep = ':'
            }
        }

        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(
            `${indent}${commentOut}${exportStr}${staticStr}${globalStr}${name}${genericStr}(${inParamsDef.join(
                ', ',
            )})${retSep} ${returnType}`,
        )

        // Add overloaded methods
        if (overloads && tsFunction.overloads.length > 0) {
            def.push(...this.addInfoComment(`Overloads of ${name}`, indentCount))
            for (const func of tsFunction.overloads) {
                def.push(...this.generateFunction(func, onlyStatic, namespace, indentCount, false))
            }
        }

        return def
    }

    protected generateFunctions(
        tsFunctions: TsFunction[],
        onlyStatic: boolean,
        namespace: string,
        indentCount = 1,
        comment?: string,
    ) {
        const def: string[] = []

        for (const girFunction of tsFunctions) {
            def.push(...this.generateFunction(girFunction, onlyStatic, namespace, indentCount))
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    protected generateCallbackInterface(
        tsCallback: TsCallback | TsSignal,
        namespace: string,
        indentCount = 0,
        classModuleName?: string,
    ) {
        const def: string[] = []

        if (!tsCallback?.tsCallbackInterface) {
            this.log.warn(NO_TSDATA('generateCallbackInterface'))
            return def
        }

        def.push(...this.addGirDocComment(tsCallback.doc, indentCount, tsCallback.tsCallbackInterface.overwriteDoc))

        const indent = generateIndent(indentCount)
        const indentBody = generateIndent(indentCount + 1)
        const { inParams, instanceParameters } = tsCallback
        const returnTypeStr = this.generateTypes(tsCallback.returnTypes, namespace)

        // Get name, remove namespace and remove module class name prefix
        let { name } = tsCallback.tsCallbackInterface
        const { generics } = tsCallback.tsCallbackInterface
        name = removeNamespace(name, namespace)
        if (classModuleName) name = removeClassModule(name, classModuleName)
        const genericParameters = this.generateGenericParameters(generics)

        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        const interfaceHead = `${name}${genericParameters}`

        def.push(this.generateExport('interface', `${interfaceHead}`, '{', indentCount))
        def.push(`${indentBody}(${inParamsDef.join(', ')}): ${returnTypeStr}`)
        def.push(indent + '}')

        return def
    }

    protected generateCallbackInterfaces(
        tsCallbacks: Array<TsCallback | TsSignal>,
        namespace: string,
        indentCount = 0,
        classModuleName: string,
        comment?: string,
    ) {
        const def: string[] = []

        for (const tsCallback of tsCallbacks) {
            def.push(...this.generateCallbackInterface(tsCallback, namespace, indentCount, classModuleName), '')
        }

        if (def.length > 0) {
            def.unshift(...this.addInfoComment(comment, indentCount))
        }

        return def
    }

    protected generateEnumeration(girEnum: GirEnumElement | GirBitfieldElement, indentCount = 0) {
        const desc: string[] = []

        if (!girElementIsIntrospectable(girEnum)) {
            return desc
        }

        if (!girEnum._tsData) {
            this.log.warn(NO_TSDATA('generateEnumeration'))
            return desc
        }

        desc.push(...this.addGirDocComment(girEnum._tsData.doc, indentCount))

        const { name } = girEnum._tsData
        desc.push(this.generateExport('enum', name, '{', indentCount))
        if (girEnum.member) {
            for (const girEnumMember of girEnum.member) {
                if (!girEnumMember._tsData) continue
                desc.push(...this.generateEnumerationMember(girEnumMember._tsData, indentCount + 1))
            }
        }
        desc.push('}')
        return desc
    }

    protected generateEnumerationMember(tsMember: TsMember, indentCount = 1) {
        const desc: string[] = []

        if (!tsMember) {
            this.log.warn(NO_TSDATA('generateEnumerationMember'))
            return desc
        }

        desc.push(...this.addGirDocComment(tsMember.doc, indentCount))

        const indent = generateIndent(indentCount)
        desc.push(`${indent}${tsMember.name},`)
        return desc
    }

    protected generateConstant(tsConst: TsVar, namespace: string, indentCount = 0) {
        const desc: string[] = []

        if (!tsConst.hasUnresolvedConflict) {
            desc.push(...this.addGirDocComment(tsConst.doc, indentCount))
        }

        const indent = generateIndent(indentCount)
        const exp = !this.config.noNamespace ? '' : 'export '
        const varDesc = this.generateVariable(tsConst, namespace, 0)
        desc.push(`${indent}${exp}const ${varDesc}`)
        return desc
    }

    protected generateAlias(girAlias: GirAliasElement, namespace: string, indentCount = 0) {
        const desc: string[] = []

        if (!girElementIsIntrospectable(girAlias)) {
            return ''
        }

        if (!girAlias._tsData) {
            this.log.warn(NO_TSDATA('generateAlias'))
            return desc
        }
        const indent = generateIndent(indentCount)

        const exp = !this.config.noNamespace ? '' : 'export '
        const type = removeNamespace(girAlias._tsData.type, namespace)

        desc.push(`${indent}${exp}type ${girAlias._tsData.name} = ${type}`)
        return desc
    }

    protected generateConstructPropsInterface(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []

        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateConstructPropsInterface'))
        }

        if (!girClass._tsData.isDerivedFromGObject) {
            return def
        }

        const indent = generateIndent(indentCount)
        const exp = !this.config.noNamespace ? '' : 'export '
        let ext = ''

        if (girClass._tsData.inheritConstructPropInterfaceNames.length) {
            const constructPropInterfaceNames = girClass._tsData.inheritConstructPropInterfaceNames.map((n) =>
                removeNamespace(n, namespace),
            )
            ext = `extends ${constructPropInterfaceNames.join(', ')} `
        }

        // Remove namespace and class module name
        const constructPropInterfaceName = removeClassModule(
            removeNamespace(girClass._tsData.constructPropInterfaceName, namespace),
            girClass._tsData.name,
        )

        def.push(...this.addInfoComment('Constructor properties interface', indentCount))

        // START BODY
        {
            def.push(`${indent}${exp}interface ${constructPropInterfaceName} ${ext}{`)
            def.push(
                ...this.generateProperties(
                    girClass._tsData.constructProps.map((cp) => cp._tsData).filter((cp) => !!cp) as TsProperty[],
                    false,
                    namespace,
                    `Own constructor properties of ${girClass._module.packageName}.${girClass._fullSymName}`,
                    indentCount + 1,
                ),
            )
            def.push(`${indent}}`, '')
        }
        // END BODY

        return def
    }

    protected generateClassFields(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        onlyStatic: boolean,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassFields'))
        }

        def.push(
            ...this.generateProperties(
                girClass._tsData.fields.map((f) => f._tsData).filter((f) => !!f) as TsProperty[],
                onlyStatic,
                namespace,
                `Own fields of ${girClass._module.packageName}.${girClass._fullSymName}`,
                indentCount,
            ),
        )

        return def
    }

    protected generateClassProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        onlyStatic: boolean,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []

        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassProperties'))
        }

        def.push(
            ...this.generateProperties(
                girClass._tsData.properties.map((p) => p._tsData).filter((p) => !!p) as TsProperty[],
                onlyStatic,
                namespace,
                `Own properties of ${girClass._module.packageName}.${girClass._fullSymName}`,
                indentCount,
            ),
        )

        def.push(
            ...this.generateProperties(
                girClass._tsData.conflictProperties,
                onlyStatic,
                namespace,
                `Conflicting properties`,
                indentCount,
            ),
        )

        return def
    }

    protected generateClassMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        onlyStatic: boolean,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassMethods'))
        }

        def.push(
            ...this.generateFunctions(
                girClass._tsData.methods.map((girFunc) => girFunc._tsData).filter((tsFunc) => !!tsFunc) as TsFunction[],
                onlyStatic,
                namespace,
                indentCount,
                `Owm ${onlyStatic ? 'static ' : ''}methods of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        def.push(
            ...this.generateFunctions(
                girClass._tsData.conflictMethods,
                onlyStatic,
                namespace,
                indentCount,
                `Conflicting ${onlyStatic ? 'static ' : ''}methods`,
            ),
        )

        return def
    }

    protected generateClassConstructors(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassConstructors'))
        }

        // Constructors
        def.push(
            ...this.generateFunctions(
                girClass._tsData.constructors
                    .map((girFunc) => girFunc._tsData)
                    .filter((tsFunc) => !!tsFunc) as TsFunction[],
                true,
                namespace,
                indentCount,
            ),
        )
        // _init method
        def.push(
            ...this.generateFunctions(
                girClass._tsData.constructors
                    .map((girFunc) => girFunc._tsData)
                    .filter((tsFunc) => !!tsFunc) as TsFunction[],
                false,
                namespace,
                indentCount,
            ),
        )
        // Pseudo constructors
        def.push(
            ...this.generateFunctions(
                girClass._tsData.staticFunctions
                    .map((girFunc) => girFunc._tsData)
                    .filter((tsFunc) => !!tsFunc) as TsFunction[],
                true,
                namespace,
                indentCount,
            ),
        )

        if (def.length) {
            def.unshift(
                ...this.addInfoComment(
                    `Constructors of ${girClass._module.packageName}.${girClass._fullSymName}`,
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
    protected generateClassVirtualMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassVirtualMethods'))
        }

        def.push(
            ...this.generateFunctions(
                girClass._tsData.virtualMethods
                    .map((girFunc) => girFunc._tsData)
                    .filter((tsFunc) => !!tsFunc) as TsFunction[],
                false,
                namespace,
                indentCount,
                `Own virtual methods of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        return def
    }

    protected generateClassSignalInterfaces(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []
        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('generateClassSignalInterface'))
        }

        const tsSignals = girClass._tsData.signals
            .map((signal) => signal._tsData)
            .filter((signal) => !!signal) as TsSignal[]

        def.push(
            ...this.generateCallbackInterfaces(
                tsSignals,
                namespace,
                indentCount,
                girClass._tsData.name,
                'Signal callback interfaces',
            ),
        )

        return def
    }

    protected generateClassSignals(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassSignals'))
        }

        const signalDescs = this.generateSignals(girClass._tsData.signals, girClass, namespace, 0)

        def.push(
            ...this.mergeDescs(
                signalDescs,
                `Own signals of ${girClass._module.packageName}.${girClass._fullSymName}`,
                1,
            ),
        )

        return def
    }

    protected generateClassModules(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []
        const bodyDef: string[] = []
        if (!girClass._tsData) return def
        const indent = generateIndent(indentCount)

        const exp = !this.config.noNamespace ? '' : 'export '

        // Signal interfaces
        bodyDef.push(...this.generateClassSignalInterfaces(girClass, namespace, indentCount + 1))

        // Properties interface for construction
        bodyDef.push(...this.generateConstructPropsInterface(girClass, namespace, indentCount + 1))

        if (!bodyDef.length) {
            return []
        }

        // START BODY
        {
            def.push(`${indent}${exp}module ${girClass._tsData.name} {`)

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
    protected generateImplementationInterface(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []

        if (!girClass._tsData) return def

        const genericParameters = this.generateGenericParameters(girClass._tsData.generics)
        const implementationNames = girClass._tsData.parents
            .filter((implementation) => implementation.type !== 'parent')
            .map((implementation) => implementation.localParentName)
        const ext = implementationNames.length ? ` extends ${implementationNames.join(', ')}` : ''
        const interfaceHead = `${girClass._tsData.name}${genericParameters}${ext}`

        // START INTERFACE
        {
            def.push(this.generateExport('interface', interfaceHead, '{'))

            // START BODY
            {
                // Properties
                def.push(...this.generateClassProperties(girClass, false, namespace))

                // Fields
                def.push(...this.generateClassFields(girClass, false, namespace))

                // Methods
                def.push(...this.generateClassMethods(girClass, false, namespace))

                // Virtual methods
                def.push(...this.generateClassVirtualMethods(girClass, namespace))

                // Signals
                def.push(...this.generateClassSignals(girClass, namespace))

                // TODO: Generate `GirSignalElement`s instead of generate the signal definition strings directly
                def.push(...this.generateClassPropertySignals(girClass, namespace))
            }
            // END BODY

            // END INTERFACE
            def.push('}')
            def.push('')
        }

        return def
    }

    /**
     * Represents a record, GObject class or interface as a Typescript class
     * @param girClass
     * @param namespace
     */
    protected generateClass(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []

        if (!girClass._tsData) return def

        def.push(...this.generateClassModules(girClass, namespace))

        def.push(...this.generateImplementationInterface(girClass, namespace))

        def.push(...this.addGirDocComment(girClass._tsData.doc, 0))

        const genericParameters = this.generateGenericParameters(girClass._tsData.generics)
        const parentName = girClass._tsData.parents.find((parent) => parent.type === 'parent')?.localParentName
        const ext = parentName ? ` extends ${parentName}` : ''
        const classHead = `${girClass._tsData.name}${genericParameters}${ext}`

        // START CLASS
        {
            if (girClass._tsData.isAbstract) {
                def.push(this.generateExport('abstract class', classHead, '{'))
            } else {
                def.push(this.generateExport('class', classHead, '{'))
            }

            // START BODY
            {
                // Static Properties
                def.push(...this.generateClassProperties(girClass, true, namespace))

                // Static Fields
                def.push(...this.generateClassFields(girClass, true, namespace))

                // Constructors
                def.push(...this.generateClassConstructors(girClass, namespace))

                // Static Methods
                def.push(...this.generateClassMethods(girClass, true, namespace))
            }
            // END BODY

            // END CLASS
            def.push('}')
            def.push('')
        }

        return def
    }

    protected async exportModuleJS(moduleTemplateProcessor: TemplateProcessor, girModule: GirModule): Promise<void> {
        const template = 'module.js'
        let target = `${girModule.importName}.js`

        if (this.overrideConfig.moduleType) {
            if (this.overrideConfig.moduleType === 'cjs') {
                target = `${girModule.importName}.cjs`
            } else {
                target = `${girModule.importName}.mjs`
            }
        }

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleAmbientTS(
        moduleTemplateProcessor: TemplateProcessor,
        girModule: GirModule,
    ): Promise<void> {
        const template = 'module-ambient.d.ts'
        let target = `${girModule.importName}-ambient.d.ts`

        if (this.overrideConfig.moduleType) {
            if (this.overrideConfig.moduleType === 'cjs') {
                target = `${girModule.importName}-ambient.d.cts`
            } else {
                target = `${girModule.importName}-ambient.d.mts`
            }
        }

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleAmbientJS(
        moduleTemplateProcessor: TemplateProcessor,
        girModule: GirModule,
    ): Promise<void> {
        const template = 'module-ambient.js'
        let target = `${girModule.importName}-ambient.js`

        if (this.overrideConfig.moduleType) {
            if (this.overrideConfig.moduleType === 'cjs') {
                target = `${girModule.importName}-ambient.cjs`
            } else {
                target = `${girModule.importName}-ambient.mjs`
            }
        }

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleImportTS(
        moduleTemplateProcessor: TemplateProcessor,
        girModule: GirModule,
    ): Promise<void> {
        const template = 'module-import.d.ts'
        let target = `${girModule.importName}-import.d.ts`

        if (this.overrideConfig.moduleType) {
            if (this.overrideConfig.moduleType === 'cjs') {
                target = `${girModule.importName}-import.d.cts`
            } else {
                target = `${girModule.importName}-import.d.mts`
            }
        }

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleImportJS(
        moduleTemplateProcessor: TemplateProcessor,
        girModule: GirModule,
    ): Promise<void> {
        const template = 'module-import.js'
        let target = `${girModule.importName}-import.js`

        if (this.overrideConfig.moduleType) {
            if (this.overrideConfig.moduleType === 'cjs') {
                target = `${girModule.importName}-import.cjs`
            } else {
                target = `${girModule.importName}-import.mjs`
            }
        }

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                target,
                undefined,
                undefined,
                undefined,
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModuleTS(moduleTemplateProcessor: TemplateProcessor, girModule: GirModule): Promise<void> {
        const template = 'module.d.ts'
        let explicitTemplate = `${girModule.importName}.d.ts`

        let target = `${girModule.importName}.d.ts`

        if (this.overrideConfig.moduleType) {
            if (this.overrideConfig.moduleType === 'cjs') {
                target = `${girModule.importName}.d.cts`
            } else {
                target = `${girModule.importName}.d.mts`
            }
        }

        // Remove `node-` prefix for node environment
        if (this.config.environment === 'node' && explicitTemplate.startsWith('node-')) {
            explicitTemplate = explicitTemplate.substring(5)
        }
        const out: string[] = []

        out.push(...this.addTSDocCommentLines([girModule.packageName]))

        out.push('')

        // if (this.config.environment === 'gjs') {
        //     out.push(...this.generateModuleDependenciesImport('Gjs')
        // }

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

            if (girModule.ns.enumeration)
                for (const girEnum of girModule.ns.enumeration) out.push(...this.generateEnumeration(girEnum))

            if (girModule.ns.bitfield)
                for (const girBitfield of girModule.ns.bitfield) out.push(...this.generateEnumeration(girBitfield))

            if (girModule.ns.constant)
                for (const girConst of girModule.ns.constant) {
                    if (!girConst._tsData) continue
                    out.push(...this.generateConstant(girConst._tsData, girModule.namespace, 0))
                }

            if (girModule.ns.function)
                for (const girFunc of girModule.ns.function) {
                    if (!girFunc._tsData) {
                        // this.log.warn(NO_TSDATA('exportModuleTS functions'))
                        continue
                    }
                    out.push(...this.generateFunction(girFunc._tsData, false, girModule.namespace, 0))
                }

            if (girModule.ns.callback)
                for (const girCallback of girModule.ns.callback) {
                    if (!girCallback._tsData) continue
                    out.push(...this.generateCallbackInterface(girCallback._tsData, girModule.namespace))
                }

            if (girModule.ns.interface)
                for (const girIface of girModule.ns.interface)
                    if (girIface._module) {
                        out.push(...this.generateClass(girIface, girIface._module.namespace))
                    }

            // Extra interfaces if a template with the module name  (e.g. '../templates/gobject-2-0.d.ts') is found
            // E.g. used for GObject-2.0 to help define GObject classes in js;
            // these aren't part of gi.
            if (moduleTemplateProcessor.exists(explicitTemplate)) {
                const { append, prepend } = await moduleTemplateProcessor.load(explicitTemplate, {}, this.config)
                // TODO push prepend and append to the right position
                out.push(append + prepend)
            }

            if (girModule.ns.class)
                for (const gitClass of girModule.ns.class)
                    if (gitClass._module) {
                        out.push(...this.generateClass(gitClass, gitClass._module.namespace))
                    }

            if (girModule.ns.record)
                for (const girRecord of girModule.ns.record)
                    if (girRecord._module) {
                        out.push(...this.generateClass(girRecord, girRecord._module.namespace))
                    }

            if (girModule.ns.union)
                for (const girUnion of girModule.ns.union)
                    if (girUnion._module) {
                        out.push(...this.generateClass(girUnion, girUnion._module.namespace))
                    }

            if (girModule.ns.alias)
                // GType is not a number in GJS
                for (const girAlias of girModule.ns.alias)
                    if (girModule.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                        out.push(...this.generateAlias(girAlias, girModule.namespace, 1))

            if (this.config.environment === 'gjs') {
                // Properties added to every GIRepositoryNamespace
                // https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L186-190
                out.push(
                    ...this.generateConstant(
                        {
                            doc: {
                                text: 'Name of the imported GIR library',
                                tags: [
                                    {
                                        text: 'https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188',
                                        tagName: 'see',
                                        paramName: '',
                                    },
                                ],
                            },
                            name: '__name__',
                            type: [
                                {
                                    type: 'string',
                                    optional: false,
                                    nullable: false,
                                    callbacks: [],
                                    generics: [],
                                    isArray: false,
                                    isFunction: false,
                                    isCallback: false,
                                },
                            ],
                            isInjected: false,
                            tsTypeName: 'constant',
                            girTypeName: 'constant',
                        },
                        girModule.namespace,
                        0,
                    ),
                    ...this.generateConstant(
                        {
                            doc: {
                                text: 'Version of the imported GIR library',
                                tags: [
                                    {
                                        text: 'https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189',
                                        tagName: 'see',
                                        paramName: '',
                                    },
                                ],
                            },
                            name: '__version__',
                            type: [
                                {
                                    type: 'string',
                                    optional: false,
                                    nullable: false,
                                    callbacks: [],
                                    generics: [],
                                    isArray: false,
                                    isFunction: false,
                                    isCallback: false,
                                },
                            ],
                            isInjected: false,
                            tsTypeName: 'constant',
                            girTypeName: 'constant',
                        },
                        girModule.namespace,
                        0,
                    ),
                )
            }
        }
        // END Namespace
        if (!this.config.noNamespace) {
            out.push(`}`)
            out.push('')
            out.push(`export default ${girModule.namespace};`)
        }

        const outResult = out.join('\n') // End of file

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(template, this.config.outdir, target, true, outResult, {}, this.config)
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + '\n' + outResult + prepend)
        }
    }

    protected async exportNPMPackage(moduleTemplateProcessor: TemplateProcessor, girModuleImportName: string) {
        await this.exportNPMPackageJson(moduleTemplateProcessor)
        await this.exportNPMReadme(moduleTemplateProcessor, girModuleImportName)
        await this.exportTSConfig(moduleTemplateProcessor)
        await this.exportTypeDoc(moduleTemplateProcessor)
    }

    protected async exportNPMPackageJson(moduleTemplateProcessor: TemplateProcessor) {
        const template = 'package.json'
        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
                undefined,
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportNPMReadme(moduleTemplateProcessor: TemplateProcessor, girModuleImportName: string) {
        // E.g. `README-GJS.md` or `README-GTK-4.0.md`
        let template = girModuleImportName ? `README-${girModuleImportName.toUpperCase()}.md` : 'README.md'
        const outputFilename = 'README.md'

        if (!moduleTemplateProcessor.exists(template)) {
            template = 'README.md'
        }

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                outputFilename,
                undefined,
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportTSConfig(moduleTemplateProcessor: TemplateProcessor) {
        const template = 'tsconfig.json'
        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
                undefined,
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportTypeDoc(moduleTemplateProcessor: TemplateProcessor) {
        const template = 'typedoc.json'
        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
                undefined,
                undefined,
                {},
                this.config,
            )
        } else {
            const { append, prepend } = await moduleTemplateProcessor.load(template, {}, this.config)
            this.log.log(append + prepend)
        }
    }

    protected async exportModule(
        girModule: GirModule,
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
    ) {
        let pkgData: PackageData | undefined
        if (this.packageData) {
            pkgData = this.packageData.get(girModule.packageName)
        }
        const moduleTemplateProcessor = new TemplateProcessor(
            {
                name: girModule.namespace,
                namespace: girModule.namespace,
                version: girModule.version,
                importName: girModule.importName,
                girModule,
                girModules,
                girModulesGrouped,
                pkgData,
            },
            girModule.packageName,
            girModule.transitiveDependencies,
            this.config,
        )

        await this.exportModuleTS(moduleTemplateProcessor, girModule)
        if (this.config.buildType === 'lib') {
            await this.exportModuleJS(moduleTemplateProcessor, girModule)
        }

        if (this.config.environment === 'gjs') {
            await this.exportModuleAmbientTS(moduleTemplateProcessor, girModule)

            if (this.config.buildType === 'lib') {
                await this.exportModuleAmbientJS(moduleTemplateProcessor, girModule)
            }
        }
        await this.exportModuleImportTS(moduleTemplateProcessor, girModule)
        if (this.config.buildType === 'lib') {
            await this.exportModuleImportJS(moduleTemplateProcessor, girModule)
        }

        if (this.config.package) {
            this.setOverrideConfigForOtherModuleType()
            await this.exportModuleTS(moduleTemplateProcessor, girModule)
            if (this.config.buildType === 'lib') {
                await this.exportModuleJS(moduleTemplateProcessor, girModule)
            }
            this.resetOverrideConfig()
        }

        if (this.config.package) {
            await this.exportNPMPackage(moduleTemplateProcessor, girModule.importName)
        }
    }

    /**
     * We build both module types if we build an NPM package,
     * so we need to switch the module type and use the default noNamespace value for the module type
     */
    protected setOverrideConfigForOtherModuleType() {
        if (this.config.moduleType === 'esm') {
            this.overrideConfig.moduleType = 'cjs'
            this.overrideConfig.noNamespace = true
        } else {
            this.overrideConfig.moduleType = 'esm'
            this.overrideConfig.noNamespace = false
        }
    }

    protected resetOverrideConfig() {
        this.overrideConfig = {}
    }

    protected async exportGjs(
        dependencies: Dependency[],
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
    ) {
        if (!this.config.outdir) return
        const packageName = 'Gjs'

        const templateProcessor = new TemplateProcessor(
            { girModules: girModules, girModulesGrouped },
            packageName,
            dependencies,
            this.config,
        )

        // TS
        await templateProcessor.create('gjs.d.ts', this.config.outdir, 'gjs.d.ts')
        await templateProcessor.create('gettext.d.ts', this.config.outdir, 'gettext.d.ts')
        await templateProcessor.create('system.d.ts', this.config.outdir, 'system.d.ts')
        await templateProcessor.create('cairo.d.ts', this.config.outdir, 'cairo.d.ts')

        // JS
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('gjs.js', this.config.outdir, 'gjs.js')
            await templateProcessor.create('gettext.js', this.config.outdir, 'gettext.js')
            await templateProcessor.create('system.js', this.config.outdir, 'system.js')
            await templateProcessor.create('cairo.js', this.config.outdir, 'cairo.js')
        }

        // If you build an NPM package, we also build the Gjs module for the other module type
        if (this.config.package) {
            this.setOverrideConfigForOtherModuleType()
            // TS
            await templateProcessor.create(
                'gjs.d.ts',
                this.config.outdir,
                this.overrideConfig.moduleType === 'cjs' ? 'gjs.d.cts' : 'gjs.d.mts',
                undefined,
                undefined,
                undefined,
                this.config,
            )
            await templateProcessor.create(
                'gettext.d.ts',
                this.config.outdir,
                this.overrideConfig.moduleType === 'cjs' ? 'gettext.d.cts' : 'gettext.d.mts',
                undefined,
                undefined,
                undefined,
                this.config,
            )
            await templateProcessor.create(
                'system.d.ts',
                this.config.outdir,
                this.overrideConfig.moduleType === 'cjs' ? 'system.d.cts' : 'system.d.mts',
                undefined,
                undefined,
                undefined,
                this.config,
            )
            await templateProcessor.create(
                'cairo.d.ts',
                this.config.outdir,
                this.overrideConfig.moduleType === 'cjs' ? 'cairo.d.cts' : 'cairo.d.mts',
                undefined,
                undefined,
                undefined,
                this.config,
            )

            // JS
            if (this.config.buildType === 'lib') {
                await templateProcessor.create(
                    'gjs.js',
                    this.config.outdir,
                    this.overrideConfig.moduleType === 'cjs' ? 'gjs.cjs' : 'gjs.mjs',
                    undefined,
                    undefined,
                    undefined,
                    this.config,
                )
                await templateProcessor.create(
                    'gettext.js',
                    this.config.outdir,
                    this.overrideConfig.moduleType === 'cjs' ? 'gettext.cjs' : 'gettext.mjs',
                    undefined,
                    undefined,
                    undefined,
                    this.config,
                )
                await templateProcessor.create(
                    'system.js',
                    this.config.outdir,
                    this.overrideConfig.moduleType === 'cjs' ? 'system.cjs' : 'system.mjs',
                    undefined,
                    undefined,
                    undefined,
                    this.config,
                )
                await templateProcessor.create(
                    'cairo.js',
                    this.config.outdir,
                    this.overrideConfig.moduleType === 'cjs' ? 'cairo.cjs' : 'cairo.mjs',
                    undefined,
                    undefined,
                    undefined,
                    this.config,
                )
            }
            this.resetOverrideConfig()
        }

        // Import ambient types
        await templateProcessor.create('ambient.d.ts', this.config.outdir, 'ambient.d.ts')
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('ambient.js', this.config.outdir, 'ambient.js')
        }

        // DOM types
        await templateProcessor.create('dom.d.ts', this.config.outdir, 'dom.d.ts')
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('dom.js', this.config.outdir, 'dom.js')
        }

        // Import ambient path alias
        if (this.config.generateAlias) {
            if (this.config.package) {
                // Write tsconfig.alias.json to the root of the package
                await templateProcessor.create('tsconfig.alias.json', this.config.outdir, 'tsconfig.alias.json', true)
            } else {
                // Write tsconfig.alias.json to the root of the project
                await templateProcessor.create('tsconfig.alias.json', './', 'tsconfig.alias.json', false)
            }
        }

        // Package
        if (this.config.package) {
            await this.exportNPMPackage(templateProcessor, 'Gjs')
        }
    }

    protected async exportNodeGtk(
        dependencies: Dependency[],
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
    ) {
        if (!this.config.outdir) return
        const packageName = 'node-gtk'

        const templateProcessor = new TemplateProcessor(
            { girModules, girModulesGrouped },
            packageName,
            dependencies,
            this.config,
        )

        // TS
        await templateProcessor.create('node-gtk.d.ts', this.config.outdir, 'node-gtk.d.ts')

        // JS
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('node-gtk.js', this.config.outdir, 'node-gtk.js')
        }

        // If you build an NPM package, we also build the node-gtk module for the other module type
        if (this.config.package) {
            this.setOverrideConfigForOtherModuleType()
            // TS
            await templateProcessor.create(
                'node-gtk.d.ts',
                this.config.outdir,
                this.overrideConfig.moduleType === 'cjs' ? 'node-gtk.d.cts' : 'node-gtk.d.mts',
                undefined,
                undefined,
                undefined,
                this.overrideConfig,
            )
            // JS
            if (this.config.buildType === 'lib') {
                await templateProcessor.create(
                    'node-gtk.js',
                    this.config.outdir,
                    this.overrideConfig.moduleType === 'cjs' ? 'node-gtk.cjs' : 'node-gtk.mjs',
                    undefined,
                    undefined,
                    undefined,
                    this.overrideConfig,
                )
            }
            this.resetOverrideConfig()
        }

        // Import ambient types
        await templateProcessor.create('ambient.d.ts', this.config.outdir, 'node-ambient.d.ts')
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('ambient.js', this.config.outdir, 'node-ambient.js')
        }

        // Package
        if (this.config.package) {
            await this.exportNPMPackage(templateProcessor, 'node-gtk')
        }
    }

    public async start(girModules: GirModule[], girModulesGrouped: GirModulesGrouped[] = []) {
        this.dependencyManager.addAll(girModules)

        if (this.config.package && this.packageData) {
            await this.packageData.start()
        }

        for (const girModule of girModules) {
            await this.exportModule(girModule, girModules, girModulesGrouped)
        }

        if (this.config.environment === 'node') {
            // node-gtk internal stuff
            await this.exportNodeGtk(this.dependencyManager.core(), girModules, girModulesGrouped)
        }

        if (this.config.environment === 'gjs') {
            // GJS internal stuff
            await this.exportGjs(this.dependencyManager.core(), girModules, girModulesGrouped)
        }
    }
}
