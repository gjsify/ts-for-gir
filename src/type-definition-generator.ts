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
} from './types/index.js'
import { Generator } from './generator.js'
import type { GirModule } from './gir-module.js'
import TemplateProcessor from './template-processor.js'
import { Environment } from './types/environment.js'
import { Logger } from './logger.js'
import { generateIndent } from './utils.js'
import { inspect } from 'util'

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

    public generateExport(type: string, name: string, definition: string) {
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        if (!definition.startsWith(':')) {
            definition = ' ' + definition
        }
        return `${exp}${type} ${name}${definition}`
    }

    public generateProperty(girProp: GirPropertyElement, indentCount = 0) {
        if (!girProp._desc) {
            this.log.error('girProp', inspect(girProp))
            throw new Error('[generateProperty] Not all required properties set!')
        }

        const indent = generateIndent(indentCount)
        const varDesc = this.generateVariable(girProp)[0]
        const prefix = girProp._desc.readonly ? '' : 'readonly '

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

    public generateSignalMethods(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirInterfaceElement | GirUnionElement,
        indentCount = 1,
    ) {
        if (!girSignalFunc._desc || !girClass._desc) {
            this.log.error('girSignalFunc', inspect(girSignalFunc))
            throw new Error('[generateSignalMethods] Not all required properties set!')
        }

        const { name: sigName, paramsDef, returnType } = girSignalFunc._desc
        const paramComma = paramsDef.length > 0 ? ', ' : ''
        const indent = generateIndent(indentCount)
        const def: string[] = []

        def.push(
            `${indent}connect(sigName: "${sigName}", callback: (($obj: ${
                girClass._desc.name
            }${paramComma}${paramsDef.join(', ')}) => ${returnType})): number`,
        )
        if (this.config.environment === 'gjs') {
            def.push(
                `${indent}connect_after(sigName: "${sigName}", callback: (($obj: ${
                    girClass._desc.name
                }${paramComma}${paramsDef.join(', ')}) => ${returnType})): number`,
            )
        }
        if (this.config.environment === 'node') {
            def.push(
                `${indent}on(sigName: "${sigName}", callback: (${paramsDef.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${indent}once(sigName: "${sigName}", callback: (${paramsDef.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${indent}off(sigName: "${sigName}", callback: (${paramsDef.join(', ')}) => void): NodeJS.EventEmitter`,
            )
        }
        def.push(`${indent}emit(sigName: "${sigName}"${paramComma}${paramsDef.join(', ')}): void`)
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
        if (!girParam._desc) {
            throw new Error('[generateOutParameter] Not all required properties set!')
        }
        const desc: string[] = []
        const { type, name } = girParam._desc

        if (this.config.environment === 'gjs') {
            desc.push(`/* ${name} */ ${type}`)
        } else if (this.config.environment === 'node') {
            desc.push(`${name}: ${type}`)
        }
        return desc
    }

    public generateFunctionReturn(girFunc: GirFunctionElement | GirConstructorElement) {
        if (!girFunc._desc) {
            this.log.error('girFunc', inspect(girFunc))
            throw new Error('[generateFunctionReturn] Not all required properties set!')
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
                if (!retTypeIsVoid) {
                    outParams.unshift(`/* returnType */ ${returnType}`)
                }
                desc = outParams.join(', ')
                desc = `[ ${desc} ]`
            } else if (outParams.length === 1 && retTypeIsVoid) {
                desc = outParams[0]
            }
        }
        // See point 6 on https://github.com/sammydre/ts-for-gjs/issues/21
        if (this.config.environment === 'node') {
            if (overrideReturnType) {
                desc = overrideReturnType
            } else if (outParams.length >= 1) {
                if (!retTypeIsVoid) {
                    outParams.unshift(`returnType: ${returnType}`)
                }
                desc = outParams.join(', ')
                desc = `{ ${desc} }`
            }
        }
        return desc
    }

    public generateFunction(
        girFunc: GirFunctionElement | GirConstructorElement,
        methodPatches?: string[],
        indentCount = 1,
    ) {
        if (!girFunc._desc) {
            this.log.error('girFunc', inspect(girFunc))
            throw new Error('[generateFunction] Not all required properties set!')
        }
        const indent = generateIndent(indentCount)

        const def: string[] = []
        let exp = ''
        // girFunc._desc.type === 'function' is a global methods which can be exported
        if (girFunc._desc.type === 'function') {
            exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        }

        let prefix = girFunc._desc.prefix
        let name = girFunc._desc.name
        const arrowType = girFunc._desc.arrowType
        const paramsDef = girFunc._desc.paramsDef

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
        if (arrowType) {
            prefix = ''
            name = ''
            retSep = ' =>'
        } else {
            retSep = ':'
        }

        def.push(`${indent}${exp}${prefix}${name}(${paramsDef.join(', ')})${retSep} ${returnDesc}`)

        return def
    }

    public generateCallbackInterface(girCallback: GirCallbackElement, indentCount = 0) {
        if (!girCallback._desc || !girCallback._descInterface) {
            this.log.error('girCallback', inspect(girCallback))
            throw new Error('[generateCallbackInterface] Not all required properties set!')
        }
        const indent = generateIndent(indentCount)
        const indentBody = generateIndent(indentCount + 1)

        const def: string[] = []
        const { paramsDef, returnType } = girCallback._desc
        const { name } = girCallback._descInterface

        def.push(indent + this.generateExport('interface', name, '{'))
        def.push(`${indentBody}(${paramsDef.join(', ')}): ${returnType}`)
        def.push(indent + '}')

        return def
    }

    public generateEnumeration(girEnum: GirEnumElement) {
        if (!girEnum._desc) {
            this.log.error('girEnum', inspect(girEnum))
            throw new Error('[generateEnumeration] Not all required properties set!')
        }
        const desc: string[] = []
        const { name } = girEnum._desc
        desc.push(this.generateExport('enum', name, '{'))
        if (girEnum.member) {
            for (const girEnumMember of girEnum.member) {
                const memberDescs = this.generateEnumerationMember(girEnumMember)
                for (const memberDesc of memberDescs) {
                    desc.push(`${memberDesc},`)
                }
            }
        }
        desc.push('}')
        return desc
    }

    public generateEnumerationMember(girEnumMember: GirMemberElement, indentCount = 1) {
        if (!girEnumMember._desc) {
            this.log.error('girEnumMember', inspect(girEnumMember))
            throw new Error('[generateEnumerationMember] Not all required properties set!')
        }
        const indent = generateIndent(indentCount)
        return [`${indent}${girEnumMember._desc.name}`]
    }

    public generateConstant(girConst: GirConstantElement) {
        const desc: string[] = []
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '

        if (girConst._desc?.desc) {
            for (const constDesc of girConst._desc.desc) {
                desc.push(`${exp}const ${constDesc}`)
            }
        }

        return desc
    }

    public generateAlias(girAlias: GirAliasElement) {
        if (!girAlias._desc) {
            this.log.error('girAlias', inspect(girAlias))
            throw new Error('[generateConstant] Not all required properties set!')
        }
        const desc: string[] = []
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '

        desc.push(`${exp}type ${girAlias._desc.name} = ${girAlias._desc.type}`)
        return desc
    }

    private _generateConstructPropsInterface(versionFullSymName: string, girProperties: GirPropertyElement[]) {
        const def: string[] = []

        if (girProperties.length > 0) {
            def.push(`    /* Constructor properties of ${versionFullSymName} */`)
            for (const girProperty of girProperties) {
                if (girProperty._desc?.desc) {
                    for (const curDesc of girProperty._desc.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        return def
    }

    public generateConstructPropsInterface(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateConstructPropsInterface] Not all required properties set!')
        }

        if (!girClass._desc.isDerivedFromGObject) {
            return def
        }

        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        let ext = ' '

        if (girClass._desc.inheritConstructPropInterfaceName) {
            ext = `extends ${girClass._desc.inheritConstructPropInterfaceName} `
        }

        def.push(`${exp}interface ${girClass._desc.constructPropInterfaceName} ${ext}{`)

        // START BODY
        {
            def.push(
                ...this._generateConstructPropsInterface(
                    girClass._module.packageName + '.' + girClass._fullSymName,
                    girClass._desc.constructProps,
                ),
            )

            for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
                const constructProps = girClass._desc.implements[versionFullSymName]?.constructProps
                def.push(...this._generateConstructPropsInterface(versionFullSymName, constructProps))
            }
        }
        // END BODY
        def.push('}')

        return def
    }

    private _generateClassFields(versionFullSymName: string, girFields: GirFieldElement[]) {
        const def: string[] = []

        if (girFields.length > 0) {
            def.push(`    /* Fields of ${versionFullSymName} */`)
            for (const girField of girFields) {
                if (girField._desc?.desc) {
                    for (const curDesc of girField._desc.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        return def
    }

    public generateClassFields(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassFields] Not all required properties set!')
        }

        def.push(
            ...this._generateClassFields(
                girClass._module.packageName + '.' + girClass._fullSymName,
                girClass._desc.fields,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            const girFields = girClass._desc.extends[versionFullSymName]?.fields
            def.push(...this._generateClassFields(versionFullSymName, girFields))
        }

        return def
    }

    private _generateClassProperties(versionFullSymName: string, girProperties: GirPropertyElement[]) {
        const def: string[] = []
        if (girProperties.length > 0) {
            def.push(`    /* Properties of ${versionFullSymName} */`)
            for (const girProperty of girProperties) {
                if (girProperty._desc?.desc) {
                    for (const curDesc of girProperty._desc.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        return def
    }

    public generateClassProperties(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassProperties] Not all required properties set!')
        }

        def.push(
            ...this._generateClassProperties(
                girClass._module.packageName + '.' + girClass._fullSymName,
                girClass._desc.properties,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            def.push(
                ...this._generateClassProperties(
                    versionFullSymName,
                    girClass._desc.extends[versionFullSymName].properties,
                ),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
            def.push(
                ...this._generateClassProperties(
                    versionFullSymName,
                    girClass._desc.implements[versionFullSymName].properties,
                ),
            )
        }

        return def
    }

    private _generateClassMethods(versionFullSymName: string, girMethods: GirMethodElement[]) {
        const def: string[] = []
        if (girMethods.length > 0) {
            def.push(`    /* Methods of ${versionFullSymName} */`)
            for (const girMethod of girMethods) {
                if (girMethod._desc?.desc) {
                    for (const curDesc of girMethod._desc.desc) {
                        def.push(`    ${curDesc}`)
                    }
                }
            }
        }
        return def
    }

    public generateClassMethods(girClass: GirClassElement | GirUnionElement | GirInterfaceElement) {
        const def: string[] = []
        if (!girClass._desc || !girClass._fullSymName || !girClass._module) {
            throw new Error('[generateClassMethods] Not all required methods set!')
        }

        def.push(
            ...this._generateClassMethods(
                girClass._module.packageName + '.' + girClass._fullSymName,
                girClass._desc.methods,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._desc.extends)) {
            def.push(
                ...this._generateClassMethods(versionFullSymName, girClass._desc.extends[versionFullSymName].methods),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._desc.implements)) {
            def.push(
                ...this._generateClassMethods(
                    versionFullSymName,
                    girClass._desc.implements[versionFullSymName].methods,
                ),
            )
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
