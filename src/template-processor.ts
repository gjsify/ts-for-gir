/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Environment } from './types/environment.js'
import { Transformation } from './transformation.js'
import { Logger } from './logger.js'
import {
    GenerateConfig,
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
} from './types/index.js'
import { ESLint } from 'eslint'
import { fileURLToPath } from 'url'
import { inspect } from 'util'

const lint = new ESLint({ ignore: false, fix: true, useEslintrc: true, extensions: ['.ts', '.d.ts'] })

// Get __dirname on ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const TEMPLATE_DIR = Path.join(__dirname, '../templates')

export class TemplateProcessor {
    protected environmentTemplateDir: string
    protected log: Logger
    protected transformation: Transformation
    protected packageName: string
    constructor(
        protected readonly data: ejs.Data | undefined,
        packageName: string,
        protected readonly config: GenerateConfig,
    ) {
        this.packageName = packageName
        this.transformation = new Transformation(this.packageName, config)
        this.environmentTemplateDir = Transformation.getEnvironmentDir(config.environment, TEMPLATE_DIR)
        this.log = new Logger(config.environment, config.verbose, this.packageName)
    }

    public generateIndent(indents = 1, spaceForIndent = 4): string {
        return ' '.repeat(indents * spaceForIndent)
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
            const sas = this.config.exportDefault && packageName !== 'Gjs' ? '' : '* as '
            def.push(`import type ${sas}${namespace} from './${packageName}';`)
        } else {
            if (asExternType) {
                // def.push(`/// <reference types="${packageName}" />`)
                def.push(`import "${packageName}"`)
            } else {
                // def.push(`/// <reference path="${packageName}.d.ts" />`)
                def.push(`import type { ${namespace} } from './${packageName}';`)
            }
        }
        return def
    }

    public generateExport(type: string, name: string, definition: string) {
        const exp = this.config.exportDefault ? '' : 'export '
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

        const indent = this.generateIndent(indentCount)
        const varDesc = this.generateVariable(girProp)[0]
        const prefix = girProp._desc.readonly ? '' : 'readonly '

        return [`${indent}${prefix}${varDesc}`]
    }

    // public generateConstant() {}

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
        const indent = this.generateIndent(indentCount)
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
        const indent = this.generateIndent(indentCount)
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
        const indent = this.generateIndent(indentCount)
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
        const indent = this.generateIndent(indentCount)

        const def: string[] = []
        // If girFunc._desc.type == 'function' are global methods which can be exported
        const exp = !this.config.exportDefault && girFunc._desc.type === 'function' ? 'export ' : ''
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
        const indent = this.generateIndent(indentCount)
        const indentBody = this.generateIndent(indentCount + 1)

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
        const indent = this.generateIndent(indentCount)
        return [`${indent}${girEnumMember._desc.name}`]
    }

    public generateConstant(girConst: GirConstantElement) {
        if (!girConst._desc) {
            this.log.error('girConst', inspect(girConst))
            throw new Error('[generateConstant] Not all required properties set!')
        }
        const desc: string[] = []
        if (girConst._desc.desc)
            for (const constDesc of girConst._desc.desc) {
                desc.push(`export const ${constDesc}`)
            }

        return desc
    }

    public generateAlias(girAlias: GirAliasElement) {
        if (!girAlias._desc) {
            this.log.error('girAlias', inspect(girAlias))
            throw new Error('[generateConstant] Not all required properties set!')
        }
        const desc: string[] = []
        const exp = this.config.exportDefault ? '' : 'export '

        desc.push(`${exp}type ${girAlias._desc.name} = ${girAlias._desc.type}`)
        return desc
    }

    public generateConstructPropsInterface(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement,
        namespace: string,
    ) {
        if (!girClass._desc) {
            throw new Error('[generateConstructPropsInterface] Not all required properties set!')
        }

        const def: string[] = []

        if (girClass._desc.isDerivedFromGObject) {
            let ext = ' '

            if (girClass._desc.inheritConstructPropInterfaceName) {
                ext = `extends ${girClass._desc.inheritConstructPropInterfaceName} `
            }

            def.push(`export interface ${girClass._desc.constructPropInterfaceName} ${ext}{`)

            // START BODY
            {
                const baseConstructProps = girClass._desc.constructProps[namespace]?.base
                const implConstructProps = girClass._desc.constructProps[namespace]?.impl

                if (baseConstructProps?.length) {
                    for (const girProp of baseConstructProps) {
                        if (!girProp._desc?.desc) {
                            continue
                        }
                        for (const curDesc of girProp._desc.desc) {
                            def.push(`    ${curDesc}`)
                        }
                    }
                }

                if (implConstructProps?.length) {
                    if (girClass._desc.constructPropInterfaceName) {
                        def.push(`    /* Constructor properties of ${girClass._desc.constructPropInterfaceName} */`)
                    }
                    for (const girProp of implConstructProps) {
                        if (!girProp._desc?.desc) {
                            continue
                        }
                        for (const curDesc of girProp._desc.desc) {
                            def.push(`    ${curDesc}`)
                        }
                    }
                }
            }
            // END BODY

            def.push('}')
        }
        return {
            def,
        }
    }

    /**
     * Loads and renders a template and gets the rendered string back
     * @param templateFilename
     */
    public async load(templateFilename: string): Promise<string> {
        const fileContent = this.read(templateFilename)
        return await this.render(fileContent)
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename
     * @param outputDir
     * @param outputFilename
     * @return The rendered (and if possible prettified) code string
     */
    public async create(templateFilename: string, outputDir: string, outputFilename: string): Promise<string> {
        const fileContent = await this.load(templateFilename)
        const renderedCode = await this.render(fileContent)
        const destPath = await this.write(renderedCode, outputDir, outputFilename)
        const prettifiedCode = this.config.pretty ? await this.prettify(destPath, true) : null
        return prettifiedCode || renderedCode
    }

    protected async write(content: string, outputDir: string, outputFilename: string): Promise<string> {
        const outputEnvDir = Transformation.getEnvironmentDir(this.config.environment, outputDir)
        const destPath = Path.join(outputEnvDir, outputFilename)

        // write template result file
        await fs.promises.mkdir(outputDir, { recursive: true })
        await fs.promises.writeFile(destPath, content, { encoding: 'utf8', flag: 'w' })

        return destPath
    }

    protected async render(templateString: string, additionalData: Partial<ejs.Options> = {}): Promise<string> {
        try {
            const renderedCode = await Promise.resolve(
                ejs.render(templateString, {
                    async: true,
                    ...this.config,
                    ...this.data,
                    ...additionalData,
                }),
            )
            return renderedCode
        } catch (error) {
            this.log.error(error)
            return ''
        }
    }

    /**
     * Checks if the template file exists and returns the path if found
     * Tries first to load the file from the environment-specific template folder and otherwise looks for it in the general template folder
     * @param templateFilename
     */
    public exists(templateFilename: string): string | null {
        const fullEnvironmentTemplatePath = Path.join(this.environmentTemplateDir, templateFilename)
        const fullGeneralTemplatePath = Path.join(TEMPLATE_DIR, templateFilename)
        if (fs.existsSync(fullEnvironmentTemplatePath)) {
            return fullEnvironmentTemplatePath
        }
        if (fs.existsSync(fullGeneralTemplatePath)) {
            return fullGeneralTemplatePath
        }
        return null
    }

    public async prettify(path: string, changeFile = false): Promise<string | null> {
        let hasError = false
        let reports: ESLint.LintResult[] | undefined
        let prettifiedCode: string | null = null
        const filename = Path.basename(path)
        this.log.info(`   Prettify ${filename}...`)
        try {
            reports = await lint.lintFiles([path])
        } catch (error) {
            this.log.warn(error)
            hasError = true
        }

        if (reports && reports[0].errorCount > 0) {
            hasError = true
        }

        prettifiedCode = (reports && reports[0]?.output) || null

        if (hasError) {
            if (!prettifiedCode) {
                this.log.warn(`Can't prettify file: "${path}", please check errors or your .eslintrc.js config file`)
                if (reports) {
                    // this.log.dir(report)
                    reports?.forEach((result) => {
                        if (result.messages) {
                            for (const message of result.messages) {
                                // You can also log more than just the message if you need more information
                                this.log.warn(message.message)
                            }
                        }
                    })
                }
            }
        } else {
            if (prettifiedCode && changeFile) {
                await this.write(prettifiedCode, Path.dirname(path), Path.basename(path))
            }
        }

        return prettifiedCode
    }

    /**
     * Reads a template file from filesystem and gets the raw string back
     * @param templateFilename
     * @return The raw template content
     */
    protected read(templateFilename: string): string {
        const path = this.exists(templateFilename)
        if (path) {
            return fs.readFileSync(path, 'utf8')
        }
        throw new Error(`Template '${templateFilename}' not found'`)
    }
}

export default TemplateProcessor
