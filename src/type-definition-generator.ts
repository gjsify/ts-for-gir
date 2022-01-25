import type {
    GenerateConfig,
    InheritanceTable,
    GirClassElement,
    GirCallableParamElement,
    GirFunctionElement,
    GirCallbackElement,
    GirConstructorElement,
    GirSignalElement,
    GirPropertyElement,
    GirFieldElement,
    GirConstantElement,
    GirEnumElement,
    GirMemberElement,
    GirAliasElement,
    GirInterfaceElement,
    GirUnionElement,
    GirModulesGrouped,
    GirMethodElement,
    GirRecordElement,
    GirVirtualMethodElement,
    GirBitfieldElement,
    GirInstanceParameter,
} from './types/index.js'
import { Generator } from './generator.js'
import type { GirModule } from './gir-module.js'
import TemplateProcessor from './template-processor.js'
import { Environment } from './types/environment.js'
import { Logger } from './logger.js'
import { generateIndent, findFileInDirs, splitModuleName } from './utils.js'
import { inspect } from 'util'
import { STATIC_NAME_ALREADY_EXISTS } from './constants.js'
export default class TypeDefinitionGenerator implements Generator {
    protected log: Logger
    constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, TypeDefinitionGenerator.name)
    }

    /**
     * See https://github.com/microsoft/tsdoc
     * @param description
     */
    public generateTSDocComment(description: string): string[] {
        const def: string[] = []
        def.push('/**')
        def.push(` * ${description}`)
        def.push(' */')
        return def
    }

    /**
     *
     * @param namespace E.g. 'Gtk'
     * @param packageName E.g. 'Gtk-3.0'
     * @param asExternType Currently only used for node type imports
     */
    public generateModuleDependenciesImport(namespace: string, packageName: string, asExternType = false): string[] {
        const def: string[] = []
        if (this.config.buildType === 'lib') {
            const sas = this.config.useNamespace && packageName !== 'Gjs' ? '' : '* as '
            def.push(`import type ${sas}${namespace} from './${packageName}';`)
        } else if (this.config.buildType === 'types') {
            if (asExternType) {
                // def.push(`/// <reference types="${packageName}" />`)
                def.push(`import ${namespace} from "${packageName}"`)
            } else {
                def.push(`/// <reference path="${packageName}.d.ts" />`)
                def.push(`import type ${namespace} from './${packageName}';`)
            }
        }
        return def
    }

    public generateExport(type: string, name: string, definition: string, indentCount = 0) {
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        const indent = generateIndent(indentCount)
        if (!definition.startsWith(':')) {
            definition = ' ' + definition
        }
        return `${indent}${exp}${type} ${name}${definition}`
    }

    public generateProperty(girProp: GirPropertyElement | GirFieldElement, indentCount = 0) {
        if (!girProp._desc) {
            this.log.error('girProp', inspect(girProp))
            throw new Error('[generateProperty] Not all required properties set!')
        }

        const indent = generateIndent(indentCount)
        const varDesc = this.generateVariable(girProp)[0]
        const prefix = (girProp as GirPropertyElement)._desc?.readonly ? '' : 'readonly '

        return [`${indent}${prefix}${varDesc}`]
    }

    public generateVariable(girVar: GirPropertyElement | GirFieldElement | GirConstantElement) {
        if (!girVar._desc) {
            this.log.error('girVar', inspect(girVar))
            throw new Error('[generateVariable] Not all required properties set!')
        }

        const { name, type, optional } = girVar._desc

        if (!name) {
            throw new Error('[generateVariable] "name" not set!')
        }

        if (!type) {
            throw new Error('[generateVariable] "type" not set!')
        }

        const affix = optional ? '?' : ''

        return [`${name}${affix}: ${type}`]
    }

    /**
     * Generates signals from all properties of a base class
     * TODO: Build new GirSignalElements instead of generate the strings directly
     * @param girClass
     * @param callbackObjectName
     * @returns
     */
    public generateSignalMethodsFromProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []

        if (girClass._desc?.isDerivedFromGObject) {
            let namespacePrefix = 'GObject.'
            if (namespace === 'GObject') namespacePrefix = ''
            for (const prop of girClass._desc.propertyNames) {
                def.push(...this.generateGObjectSignalMethods(prop, girClass._desc.name, namespacePrefix))
            }
            def.push(...this.generateGeneralSignalMethods(this.config.environment))
        }
        return def
    }

    public generateInParameters(
        inParams: GirCallableParamElement[],
        instanceParameters: GirInstanceParameter[],
        namespace: string,
    ) {
        const inParamsDef: string[] = []

        // TODO: Should use of a constructor, and even of an instance, be discouraged?
        for (const instanceParameter of instanceParameters) {
            if (instanceParameter._desc) {
                const { name, structFor } = instanceParameter._desc
                const gobject = namespace === 'GObject' || namespace === 'GLib' ? '' : 'GObject.'
                const returnTypes = [structFor, 'Function', `${gobject}Type`]
                inParamsDef.push(`${name}: ${returnTypes.join(' | ')}`)
            }
        }

        for (const inParam of inParams) {
            inParamsDef.push(...this.generateParameter(inParam))
        }

        return inParamsDef
    }

    public generateSignalMethods(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        if (!girSignalFunc._desc || !girClass._desc) {
            this.log.error('girSignalFunc', inspect(girSignalFunc))
            throw new Error('[generateSignalMethods] Not all required properties set!')
        }

        const { name: sigName, inParams, instanceParameters, returnType } = girSignalFunc._desc
        const paramComma = inParams.length > 0 ? ', ' : ''
        const indent = generateIndent(indentCount)
        const def: string[] = []

        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(
            `${indent}connect(sigName: "${sigName}", callback: (($obj: ${
                girClass._desc.name
            }${paramComma}${inParamsDef.join(', ')}) => ${returnType})): number`,
        )
        if (this.config.environment === 'gjs') {
            def.push(
                `${indent}connect_after(sigName: "${sigName}", callback: (($obj: ${
                    girClass._desc.name
                }${paramComma}${inParamsDef.join(', ')}) => ${returnType})): number`,
            )
        }
        if (this.config.environment === 'node') {
            def.push(
                `${indent}on(sigName: "${sigName}", callback: (${inParamsDef.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${indent}once(sigName: "${sigName}", callback: (${inParamsDef.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${indent}off(sigName: "${sigName}", callback: (${inParamsDef.join(
                    ', ',
                )}) => void): NodeJS.EventEmitter`,
            )
        }
        def.push(`${indent}emit(sigName: "${sigName}"${paramComma}${inParamsDef.join(', ')}): void`)
        return def
    }

    public generateGObjectSignalMethods(
        propertyName: string,
        callbackObjectName: string,
        namespacePrefix: string,
        indentCount = 1,
    ): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        def.push(
            `${indent}connect(sigName: "notify::${propertyName}", callback: (($obj: ${callbackObjectName}, pspec: ${namespacePrefix}ParamSpec) => void)): number`,
            `${indent}connect_after(sigName: "notify::${propertyName}", callback: (($obj: ${callbackObjectName}, pspec: ${namespacePrefix}ParamSpec) => void)): number`,
        )
        def.push()
        if (this.config.environment === 'node') {
            def.push(
                `${indent}on(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${indent}once(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${indent}off(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }

        return def
    }

    public generateGeneralSignalMethods(environment: Environment, indentCount = 1): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        def.push(
            `${indent}connect(sigName: string, callback: any): number`,
            `${indent}connect_after(sigName: string, callback: any): number`,
            `${indent}emit(sigName: string, ...args: any[]): void`,
            `${indent}disconnect(id: number): void`,
        )

        if (environment === 'node') {
            def.push(
                `${indent}on(sigName: string, callback: any): NodeJS.EventEmitter`,
                `${indent}once(sigName: string, callback: any): NodeJS.EventEmitter`,
                `${indent}off(sigName: string, callback: any): NodeJS.EventEmitter`,
            )
        }
        return def
    }

    public generateElements(
        girElements: Array<
            | GirFunctionElement
            | GirConstructorElement
            | GirVirtualMethodElement
            | GirMethodElement
            | GirPropertyElement
            | GirFieldElement
            | GirMemberElement
            | GirSignalElement
        >,
        indentCount = 1,
        comment?: string,
    ) {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        if (comment && girElements.length > 0) {
            def.push(`${indent}/* ${comment} */`)
        }
        for (const girElement of girElements) {
            if (girElement._desc?.desc?.length) {
                for (const desc of girElement._desc.desc) {
                    def.push(`${indent}${desc}`)
                }
            }
        }
        return def
    }

    public generateParameter(girParam: GirCallableParamElement) {
        if (
            typeof girParam._desc?.name !== 'string' ||
            typeof girParam._desc.optional !== 'boolean' ||
            typeof girParam._desc.type !== 'string'
        ) {
            throw new Error('[generateParameter] Not all required properties set!')
        }
        return [`${girParam._desc.name}${girParam._desc.optional ? '?' : ''}: ${girParam._desc.type}`]
    }

    public generateOutParameterReturn(girParam: GirCallableParamElement) {
        const desc: string[] = []

        if (!girParam._desc) {
            this.log.warn('[generateOutParameterReturn] Not all required properties set!')
            return desc
        }

        const { type, name } = girParam._desc

        if (this.config.environment === 'gjs') {
            desc.push(`/* ${name} */ ${type}`)
        } else if (this.config.environment === 'node') {
            desc.push(`${name}: ${type}`)
        }
        return desc
    }

    public generateFunctionReturn(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
    ) {
        if (!girFunc._desc) {
            this.log.warn('[generateFunctionReturn] Not all required properties set!')
            return 'any'
        }

        const overrideReturnType = girFunc._desc.overrideReturnType
        const outParams = girFunc._desc.outParams
        const retTypeIsVoid = girFunc._desc.retTypeIsVoid
        const returnType = girFunc._desc.returnType
        let desc = returnType

        // TODO move gjs / node differences logic to transformation.ts
        if (this.config.environment === 'gjs') {
            if (overrideReturnType) {
                desc = overrideReturnType
            } else if (outParams.length + (retTypeIsVoid ? 0 : 1) > 1) {
                const outParamsDesc: string[] = []

                if (!retTypeIsVoid) {
                    outParamsDesc.push(`/* returnType */ ${returnType}`)
                }

                for (const outParam of outParams) {
                    outParamsDesc.push(...this.generateOutParameterReturn(outParam))
                }

                desc = outParamsDesc.join(', ')
                desc = `[ ${desc} ]`
            } else if (outParams.length === 1 && retTypeIsVoid) {
                desc = this.generateOutParameterReturn(outParams[0]).join(' ')
            }
        }
        // See point 6 on https://github.com/sammydre/ts-for-gjs/issues/21
        if (this.config.environment === 'node') {
            if (overrideReturnType) {
                desc = overrideReturnType
            } else if (outParams.length >= 1) {
                const outParamsDesc: string[] = []

                if (!retTypeIsVoid) {
                    outParamsDesc.push(`returnType: ${returnType}`)
                }

                for (const outParam of outParams) {
                    outParamsDesc.push(...this.generateOutParameterReturn(outParam))
                }

                desc = outParamsDesc.join(', ')
                desc = `{ ${desc} }`
            }
        }
        return desc
    }

    public generateFunction(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
        methodPatches: string[] = [],
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        const indent = generateIndent(indentCount)

        if (!girFunc._desc) {
            this.log.warn('[generateFunction] Not all required properties set!')
            return def
        }

        let exp = ''
        // `girFunc._tsType === 'function'` are a global methods which can be exported
        if (girFunc._tsType === 'function') {
            exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        }

        let prefix = girFunc._desc.prefix
        let name = girFunc._desc.name
        const isArrowType = girFunc._desc.isArrowType

        if (methodPatches?.length) {
            this.log.warn(`Patch found for method ${girFunc._fullSymName || name}`)
            // Replace method by commend
            if (methodPatches.length === 1) {
                def.push(...methodPatches.map((patch) => indent + patch))
            }
            // Patch method type
            if (methodPatches.length >= 2) {
                for (const [i, patchLine] of methodPatches.entries()) {
                    let descLine = ''
                    if (i === 1) {
                        descLine = `${indent}${exp}${prefix}${patchLine}`
                    } else {
                        descLine = `${indent}${patchLine}`
                    }
                    def.push(descLine)
                }
            }
            return def
        }

        const returnDesc = this.generateFunctionReturn(girFunc)

        let retSep: string
        if (isArrowType) {
            prefix = ''
            name = ''
            retSep = ' =>'
        } else {
            retSep = ':'
        }

        const { inParams, instanceParameters } = girFunc._desc
        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(`${indent}${exp}${prefix}${name}(${inParamsDef.join(', ')})${retSep} ${returnDesc}`)

        return def
    }

    public generateCallbackInterface(girCallback: GirCallbackElement, namespace: string, indentCount = 0) {
        const def: string[] = []

        if (!girCallback._desc || !girCallback._descInterface) {
            this.log.warn('[generateCallbackInterface] Not all required properties set!')
            return def
        }

        const indent = generateIndent(indentCount)
        const indentBody = generateIndent(indentCount + 1)

        const { inParams, instanceParameters, returnType } = girCallback._desc
        const { name } = girCallback._descInterface

        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(indent + this.generateExport('interface', name, '{', indentCount))
        def.push(`${indentBody}(${inParamsDef.join(', ')}): ${returnType}`)
        def.push(indent + '}')

        return def
    }

    public generateEnumeration(girEnum: GirEnumElement | GirBitfieldElement, indentCount = 0) {
        const desc: string[] = []

        if (!girEnum._desc) {
            this.log.warn('[generateEnumeration] Not all required properties set!')
            return desc
        }

        const { name } = girEnum._desc
        desc.push(this.generateExport('enum', name, '{', indentCount))
        if (girEnum.member) {
            for (const girEnumMember of girEnum.member) {
                const memberDescs = this.generateEnumerationMember(girEnumMember, indentCount + 1)
                for (const memberDesc of memberDescs) {
                    desc.push(`${memberDesc},`)
                }
            }
        }
        desc.push('}')
        return desc
    }

    public generateEnumerationMember(girEnumMember: GirMemberElement, indentCount = 1) {
        const desc: string[] = []
        if (!girEnumMember._desc) {
            this.log.warn('[generateEnumerationMember] Not all required properties set!')
            return desc
        }
        const indent = generateIndent(indentCount)
        desc.push(`${indent}${girEnumMember._desc.name}`)
        return desc
    }

    public generateConstant(girConst: GirConstantElement, indentCount = 0) {
        const desc: string[] = []

        if (!girConst._desc?.desc) {
            this.log.warn('[generateConstant] Not all required properties set!')
            return desc
        }

        const indent = generateIndent(indentCount)
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '

        for (const constDesc of girConst._desc.desc) {
            desc.push(`${indent}${exp}const ${constDesc}`)
        }

        return desc
    }

    public generateAlias(girAlias: GirAliasElement, indentCount = 0) {
        const desc: string[] = []

        if (!girAlias._desc) {
            this.log.warn('[generateAlias] Not all required properties set!')
            return desc
        }
        const indent = generateIndent(indentCount)

        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '

        desc.push(`${indent}${exp}type ${girAlias._desc.name} = ${girAlias._desc.type}`)
        return desc
    }

    public generateConstructPropsInterface(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 0,
    ) {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateConstructPropsInterface] Not all required properties set!')
        }

        if (!girClass._desc.isDerivedFromGObject) {
            return def
        }

        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        let ext = ' '

        if (girClass._desc.inheritConstructPropInterfaceName) {
            ext = `${indent}extends ${girClass._desc.inheritConstructPropInterfaceName} `
        }

        def.push(`${indent}${exp}interface ${girClass._desc.constructPropInterfaceName} ${ext}{`)

        // START BODY
        {
            def.push(
                ...this.generateElements(
                    girClass._desc.constructProps,
                    indentCount + 1,
                    `Constructor properties of ${girClass._module.packageName}.${girClass._fullSymName}`,
                ),
            )

            for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
                const constructProps = girClass._desc.implements[versionFullSymName]?.constructProps
                def.push(
                    ...this.generateElements(
                        constructProps,
                        indentCount + 1,
                        `Constructor properties of ${versionFullSymName}`,
                    ),
                )
            }
        }
        // END BODY
        def.push(`${indent}}`)

        return def
    }

    public generateClassFields(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassFields] Not all required properties set!')
        }

        def.push(
            ...this.generateElements(
                girClass._desc.fields,
                indentCount,
                `Fields of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            const girFields = girClass._desc.extends[versionFullSymName]?.fields
            def.push(...this.generateElements(girFields, indentCount, `Fields of ${versionFullSymName}`))
        }

        return def
    }

    public generateClassProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassProperties] Not all required properties set!')
        }

        def.push(
            ...this.generateElements(
                girClass._desc.properties,
                indentCount,
                `Properties of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.extends[versionFullSymName].properties,
                    indentCount,
                    `Properties of ${versionFullSymName}`,
                ),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.implements[versionFullSymName].properties,
                    indentCount,
                    `Properties of ${versionFullSymName}`,
                ),
            )
        }

        return def
    }

    public generateClassMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassMethods] Not all required methods set!')
        }

        def.push(
            ...this.generateElements(
                girClass._desc.methods,
                indentCount,
                `Methods of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.extends[versionFullSymName].methods,
                    indentCount,
                    `Methods of ${versionFullSymName}`,
                ),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.implements[versionFullSymName].methods,
                    indentCount,
                    `Methods of ${versionFullSymName}`,
                ),
            )
        }

        return def
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param name
     */
    public generateStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._desc) {
            throw new Error('[generateStaticFunctions] Not all required methods set!')
        }

        def.push(
            ...this.generateElements(
                girClass._desc.staticFunctions,
                indentCount,
                'Static methods and pseudo-constructors',
            ),
        )

        return def
    }

    /**
     * Instance methods, vfunc_ prefix
     * @param girClass
     */
    public generateClassVirtualMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateStaticFunctions] Not all required methods set!')
        }

        // Virtual methods currently not supported in node-gtk
        if (this.config.environment === 'node') {
            return def
        }

        def.push(
            ...this.generateElements(
                girClass._desc.virtualMethods,
                indentCount,
                `Virtual methods of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.extends[versionFullSymName].virtualMethods,
                    indentCount,
                    `Virtual methods of ${versionFullSymName}`,
                ),
            )
        }

        return def
    }

    public generateConstructorAndStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        indentCount = 1,
    ) {
        const indent = generateIndent(indentCount)
        const def: string[] = []

        if (!girClass._desc) {
            throw new Error('[generateConstructorAndStaticFunctions] Not all required methods set!')
        }

        // TODO: Generate a GirPropertyElement for this
        if (girClass._fullSymName && !STATIC_NAME_ALREADY_EXISTS.includes(girClass._fullSymName)) {
            // Records, classes and interfaces all have a static name
            def.push(`${indent}static name: string`)
        }

        // JS constructor(s)
        if (girClass._desc?.isDerivedFromGObject) {
            // TODO: Generate a GirMethodElements for this
            def.push(
                `${indent}constructor (config?: ${girClass._desc?.constructPropInterfaceName})`,
                `${indent}_init (config?: ${girClass._desc?.constructPropInterfaceName}): void`,
            )
        } else {
            const girConstructorFuncs = girClass._desc.constructors

            for (const girConstructorFunc of girConstructorFuncs) {
                if (!girConstructorFunc._desc?.desc) continue

                for (const desc of girConstructorFunc._desc.desc) {
                    def.push(`${indent}${desc}`)
                }

                // TODO: Generate a static GirMethodElement for this
                const jsStyleCtor = girConstructorFunc._desc.desc[0]
                    .replace('static new', 'constructor')
                    .replace(/:[^:]+$/, '')

                def.push(`${indent}${jsStyleCtor}`)
            }
        }

        def.push(...this.generateStaticFunctions(girClass))

        if (girClass._desc?.isDerivedFromGObject && girClass._module) {
            def.push(`${indent}static $gtype: ${girClass._module.packageName === 'GObject-2.0' ? '' : 'GObject.'}Type`)
        }

        return { def }
    }

    public generateClassSignals(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassSignals] Not all required methods set!')
        }

        def.push(
            ...this.generateElements(
                girClass._desc.signals,
                1,
                `Signals of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.extends[versionFullSymName].signals,
                    1,
                    `Signals of ${versionFullSymName}`,
                ),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
            def.push(
                ...this.generateElements(
                    girClass._desc.implements[versionFullSymName].signals,
                    1,
                    `Signals of ${versionFullSymName}`,
                ),
            )
        }

        return def
    }

    /**
     * Represents a record or GObject class or interface as a Typescript class
     * @param girClass
     * @param record
     */
    public generateClass(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []

        if (!girClass._desc) return def

        // Properties for construction
        def.push(...this.generateConstructPropsInterface(girClass))

        // START CLASS
        {
            if (girClass._desc.isAbstract) {
                def.push(this.generateExport('abstract class', girClass._desc.name, '{'))
            } else {
                def.push(this.generateExport('class', girClass._desc.name, '{'))
            }

            // START BODY
            {
                // Properties
                def.push(...this.generateClassProperties(girClass))

                // Fields
                def.push(...this.generateClassFields(girClass))

                // Methods
                def.push(...this.generateClassMethods(girClass))

                // Virtual methods
                def.push(...this.generateClassVirtualMethods(girClass))

                // Signals
                def.push(...this.generateClassSignals(girClass))

                // TODO: Generate GirSignalElements instead of generate the signal definition strings directly
                def.push(...this.generateSignalMethodsFromProperties(girClass, namespace))

                // TODO: Records have fields

                // Static side: default constructor
                def.push(...this.generateConstructorAndStaticFunctions(girClass).def)
            }
            // END BODY

            // END CLASS
            def.push('}')
        }

        return def
    }

    public async exportModuleJS(moduleTemplateProcessor: TemplateProcessor, girModule: GirModule): Promise<void> {
        const template = 'module.js'
        if (this.config.outdir) {
            await moduleTemplateProcessor.create(template, this.config.outdir, `${girModule.packageName}.js`)
        } else {
            const moduleContent = moduleTemplateProcessor.load(template)
            this.log.log(moduleContent)
        }
    }

    public async exportModuleTS(
        outStream: NodeJS.WritableStream,
        outputPath: string | null,
        girModule: GirModule,
    ): Promise<void> {
        const template = 'module.d.ts'
        const out: string[] = []

        const templateProcessor = new TemplateProcessor(
            {
                name: girModule.namespace,
                namespace: girModule.namespace,
                version: girModule.version,
                importName: girModule.importName,
            },
            girModule.packageName,
            this.config,
        )

        if (outputPath) {
            out.push(await templateProcessor.load(template))
        }

        out.push(...this.generateTSDocComment(`${girModule.packageName}`))

        out.push('')

        const deps: string[] = girModule.transitiveDependencies

        // Module dependencies as type references or imports
        if (this.config.environment === 'gjs') {
            out.push(...this.generateModuleDependenciesImport('Gjs', 'Gjs', false))
        }

        for (const depPackageName of deps) {
            // Don't reference yourself as a dependency
            if (girModule.packageName !== depPackageName) {
                const girFilename = `${depPackageName}.gir`
                const { namespace } = splitModuleName(depPackageName)
                const depFile = findFileInDirs(this.config.girDirectories, girFilename)
                if (depFile.exists) {
                    out.push(...this.generateModuleDependenciesImport(namespace, depPackageName, false))
                } else {
                    out.push(`// WARN: Dependency not found: '${depPackageName}'`)
                    this.log.warn(`Dependency gir file not found: '${girFilename}'`)
                }
            }
        }

        // START Namespace
        {
            if (this.config.buildType === 'types') {
                out.push('')
                out.push(`declare namespace ${girModule.namespace} {`)
            } else if (this.config.useNamespace) {
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
                for (const girConst of girModule.ns.constant) out.push(...this.generateConstant(girConst))

            if (girModule.ns.function)
                for (const girFunc of girModule.ns.function)
                    out.push(...this.generateFunction(girFunc, [], girModule.namespace, 0))

            if (girModule.ns.callback)
                for (const girCallback of girModule.ns.callback)
                    out.push(...this.generateCallbackInterface(girCallback, girModule.namespace))

            if (girModule.ns.interface)
                for (const girIface of girModule.ns.interface)
                    if (girIface._module) out.push(...this.generateClass(girIface, girIface._module.namespace))

            // Extra interfaces if a template with the module name  (e.g. '../templates/GObject-2.0.d.ts') is found
            // E.g. used for GObject-2.0 to help define GObject classes in js;
            // these aren't part of gi.
            if (templateProcessor.exists(`${girModule.packageName}.d.ts`)) {
                const templatePatches = await templateProcessor.load(`${girModule.packageName}.d.ts`)
                out.push(templatePatches)
            }

            if (girModule.ns.class)
                for (const gitClass of girModule.ns.class)
                    if (gitClass._module) out.push(...this.generateClass(gitClass, gitClass._module.namespace))

            if (girModule.ns.record)
                for (const girRecord of girModule.ns.record)
                    if (girRecord._module) out.push(...this.generateClass(girRecord, girRecord._module.namespace))

            if (girModule.ns.union)
                for (const girUnion of girModule.ns.union)
                    if (girUnion._module) out.push(...this.generateClass(girUnion, girUnion._module.namespace))

            if (girModule.ns.alias)
                // GType is not a number in GJS
                for (const girAlias of girModule.ns.alias)
                    if (girModule.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                        out.push(...this.generateAlias(girAlias))

            if (girModule.packageName === 'GObject-2.0') out.push('export interface Type {', '    name: string', '}')
        }
        // END Namespace
        if (this.config.useNamespace) {
            out.push(`}`)
        }

        if (this.config.buildType !== 'types' && this.config.useNamespace) {
            out.push(`export default ${girModule.namespace};`)
        }

        let outResult = out.join('\n')

        if (outputPath && this.config.pretty) {
            outResult = templateProcessor.prettifySource(outResult, outputPath) || outResult
        }

        // End of file
        outStream.write(outResult)
    }

    public async exportModule(girModule: GirModule) {
        const moduleTemplateProcessor = new TemplateProcessor(
            {
                name: girModule.namespace,
                namespace: girModule.namespace,
                version: girModule.version,
                importName: girModule.importName,
            },
            girModule.packageName,
            this.config,
        )
        // TODO await this.exportModuleDTS(...)
        await this.exportModuleJS(moduleTemplateProcessor, girModule)
    }

    public async exportGjs(girModules: GirModule[], girModulesGrouped: GirModulesGrouped[]) {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor(
            { girModules: girModules, girModulesGrouped },
            'gjs',
            this.config,
        )

        // Types
        await templateProcessor.create('Gjs.d.ts', this.config.outdir, 'Gjs.d.ts')
        await templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')

        // Lib
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('index.js', this.config.outdir, 'index.js')
            const template = 'Gjs.js'
            await templateProcessor.create(template, this.config.outdir, 'Gjs.js')
        }
    }

    public async exportGjsCastLib(inheritanceTable: InheritanceTable) {
        if (!this.config.outdir) return

        const inheritanceTableKeys = Object.keys(inheritanceTable)
        const templateProcessor = new TemplateProcessor({ inheritanceTableKeys, inheritanceTable }, 'gjs', this.config)
        await templateProcessor.create('cast.ts', this.config.outdir, 'cast.ts')
    }

    public async exportNodeGtk(girModules: GirModule[], girModulesGrouped: GirModulesGrouped[]) {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor({ girModules, girModulesGrouped }, 'node', this.config)

        await templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('index.js', this.config.outdir, 'index.js')
        }
    }

    public async start(
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
        inheritanceTable: InheritanceTable,
    ) {
        for (const girModule of girModules) {
            if (this.config.buildType === 'lib') {
                await this.exportModule(girModule)
            }
        }

        if (this.config.environment === 'node') {
            // node-gtk internal stuff
            await this.exportNodeGtk(girModules, girModulesGrouped)
        }

        if (this.config.environment === 'gjs') {
            // GJS internal stuff
            await this.exportGjs(girModules, girModulesGrouped)
            await this.exportGjsCastLib(inheritanceTable)
        }
    }
}
