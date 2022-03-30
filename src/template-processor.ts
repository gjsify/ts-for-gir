/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Logger } from './logger.js'
import { APP_NAME, APP_USAGE, APP_SOURCE } from './constants.js'
import type { GenerateConfig } from './types/index.js'
import prettier from 'prettier'
import { __dirname, getEnvironmentDir } from './utils.js'
import { WARN_PRETTIFY_ERROR } from './messages.js'

const TEMPLATE_DIR = Path.join(__dirname, '../templates')

export class TemplateProcessor {
    protected environmentTemplateDir: string
    protected log: Logger
    constructor(
        protected readonly data: ejs.Data | undefined,
        protected readonly packageName: string,
        protected readonly config: GenerateConfig,
    ) {
        this.data = {
            ...this.data,
            APP_NAME,
            APP_USAGE,
            APP_SOURCE,
        }
        this.environmentTemplateDir = getEnvironmentDir(config.environment, TEMPLATE_DIR)
        this.log = new Logger(config.environment, config.verbose, this.packageName)
    }

    /**
     * Loads and renders a template and gets the rendered string back
     * @param templateFilename
     */
    public async load(templateFilename: string): Promise<string> {
        const fileContent = await this.read(templateFilename)
        return await this.render(fileContent)
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename
     * @param outputDir
     * @param outputFilename
     * @return The rendered (and if possible prettified) code string
     */
    public async create(
        templateFilename: string,
        outputDir: string,
        outputFilename: string,
        append = '',
    ): Promise<string> {
        const fileContent = await this.load(templateFilename)
        const renderedCode = await this.render(fileContent)
        const destPath = this.getDestPath(outputDir, outputFilename)
        const prettifiedCode = this.config.pretty ? this.prettifySource(renderedCode, destPath) : null
        const code = (prettifiedCode || renderedCode) + append
        await this.write(code, outputDir, outputFilename)
        return code
    }

    protected getDestPath(outputDir: string, outputFilename: string) {
        const outputEnvDir = getEnvironmentDir(this.config.environment, outputDir)
        const destPath = Path.join(outputEnvDir, outputFilename)
        return destPath
    }

    protected async write(content: string, outputDir: string, outputFilename: string): Promise<string> {
        const destPath = this.getDestPath(outputDir, outputFilename)

        // write template result file
        mkdirSync(outputDir, { recursive: true })
        writeFileSync(destPath, content, { encoding: 'utf8', flag: 'w' })

        return Promise.resolve(destPath)
    }

    protected async render(templateString: string, additionalData: Partial<ejs.Options> = {}): Promise<string> {
        try {
            const renderedCode = ejs.render(templateString, {
                async: true,
                ...this.config,
                ...this.data,
                ...additionalData,
            })
            return Promise.resolve(renderedCode)
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
        if (existsSync(fullEnvironmentTemplatePath)) {
            return fullEnvironmentTemplatePath
        }
        if (existsSync(fullGeneralTemplatePath)) {
            return fullGeneralTemplatePath
        }
        return null
    }

    public prettifySource(source: string, filepath: string) {
        let prettyCode: string | null = null
        this.log.info(`   Prettify ${Path.basename(filepath)}...`)
        let parser: prettier.LiteralUnion<prettier.BuiltInParserName, string> | prettier.CustomParser | undefined =
            undefined
        if (filepath.endsWith('.ts')) {
            parser = 'typescript'
        } else if (filepath.endsWith('.js')) {
            parser = 'espree'
        }
        try {
            prettyCode = prettier.format(source, { parser })
        } catch (error) {
            this.log.warn(WARN_PRETTIFY_ERROR(filepath))
            this.log.warn(error)
        }

        return prettyCode
    }

    public async prettify(path: string, changeFile = false): Promise<string | null> {
        let hasError = false
        let prettyCode: string | null = null
        const filename = Path.basename(path)
        this.log.info(`   Prettify ${filename}...`)
        try {
            const source = readFileSync(Path.resolve('.', path), 'utf8')
            prettyCode = this.prettifySource(source, path)
        } catch (error) {
            this.log.warn(error)
            hasError = true
        }

        if (hasError) {
            if (!prettyCode) {
                this.log.warn(WARN_PRETTIFY_ERROR(path))
            }
        } else {
            if (prettyCode && changeFile) {
                await this.write(prettyCode, Path.dirname(path), Path.basename(path))
            }
        }

        return prettyCode
    }

    /**
     * Reads a template file from filesystem and gets the raw string back
     * @param templateFilename
     * @return The raw template content
     */
    protected async read(templateFilename: string) {
        const path = this.exists(templateFilename)
        if (path) {
            return Promise.resolve(readFileSync(path, 'utf8'))
        }
        throw new Error(`Template '${templateFilename}' not found'`)
    }
}

export default TemplateProcessor
