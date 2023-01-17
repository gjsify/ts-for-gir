/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import { existsSync } from 'fs'
import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import Path from 'path'
import ejs from 'ejs'
import { Logger } from './logger.js'
import { APP_NAME, APP_USAGE, APP_SOURCE } from './constants.js'
import type { GenerateConfig } from './types/index.js'
import prettier from 'prettier'
import { __dirname, getEnvironmentDir, getDestPath } from './utils.js'
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
     * Loads and renders a template and gets the rendered templates back
     * @param templateFilename
     */
    public async load(templateFilename: string): Promise<string> {
        const fileContent = await this.read(templateFilename)
        return await this.render(fileContent)
    }

    /**
     * Loads and renders all templates in a directory and gets the rendered templates back
     * @param templateDirname
     */
    public async loadAll(templateDirname: string, fileExtension: string): Promise<{ [path: string]: string }> {
        const fileContents = await this.readAll(templateDirname, fileExtension)
        for (const file of Object.keys(fileContents)) {
            fileContents[file] = await this.render(fileContents[file])
        }
        return fileContents
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename
     * @param outputDir
     * @param outputFilename
     * @param append
     * @return The rendered (and if possible prettified) template string
     */
    public async create(
        templateFilename: string,
        outputDir: string,
        outputFilename: string,
        append = '',
    ): Promise<string> {
        const renderedTpl = await this.load(templateFilename)
        const destPath = getDestPath(this.config.environment, outputDir, outputFilename)
        const prettifiedCode = this.config.pretty ? this.prettifySource(renderedTpl, destPath) : null
        const code = (prettifiedCode || renderedTpl) + append
        await this.write(code, outputDir, outputFilename)
        return code
    }

    /**
     * Loads all templates with file extension in dir, render the templates and write the template to the filesystem
     * @param fileExtension
     * @param templateDirname
     * @param outputDir
     * @param outputDirname
     * @return The rendered (and if possible prettified) templates
     */
    public async createAll(
        fileExtension: string,
        templateDirname: string,
        outputDir: string,
        outputDirname: string,
        append = '',
    ) {
        const renderedTpls = await this.loadAll(templateDirname, fileExtension)
        const result: { [path: string]: string } = {}
        for (const filename of Object.keys(renderedTpls)) {
            const destPath = getDestPath(this.config.environment, outputDir, outputDirname, filename)
            const prettifiedCode = this.config.pretty ? this.prettifySource(renderedTpls[filename], destPath) : null
            result[destPath] = (prettifiedCode || renderedTpls[filename]) + append
            await this.write(result[destPath], outputDir, Path.join(outputDirname, filename))
        }

        return result
    }

    protected async write(content: string, outputDir: string, outputFilename: string): Promise<string> {
        const destPath = getDestPath(this.config.environment, outputDir, outputFilename)

        // write template result file
        await mkdir(Path.dirname(destPath), { recursive: true })
        await writeFile(destPath, content, { encoding: 'utf8', flag: 'w' })

        return Promise.resolve(destPath)
    }

    protected async render(templateString: string, additionalData: Partial<ejs.Options> = {}): Promise<string> {
        try {
            const renderedTpl = ejs.render(templateString, {
                async: true,
                ...this.config,
                ...this.data,
                ...additionalData,
            })
            return Promise.resolve(renderedTpl)
        } catch (error) {
            this.log.error('Error on render', error)
            return ''
        }
    }

    /**
     * Checks if the template file or directory exists and returns the path if found
     * Tries first to load the file / directory from the environment-specific template folder and otherwise looks for it in the general template folder
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
            this.log.warn('Error on prettifySource', error)
        }

        return prettyCode
    }

    public async prettify(path: string, changeFile = false): Promise<string | null> {
        let hasError = false
        let prettyCode: string | null = null
        const filename = Path.basename(path)
        this.log.info(`   Prettify ${filename}...`)
        try {
            const source = await readFile(Path.resolve('.', path), 'utf8')
            prettyCode = this.prettifySource(source, path)
        } catch (error) {
            this.log.warn('Error on prettify', error)
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
            return await readFile(path, 'utf8')
        }
        throw new Error(`Template '${templateFilename}' not found'`)
    }

    /**
     * Reads all template files from a directory and gets the raw strings back
     * @param templateDirname
     * @param fileExtension
     * @return The raw template contents
     * @throws Error if the template directory does not exist
     * @throws Error if the template directory is empty
     */
    protected async readAll(templateDirname: string, fileExtension: string) {
        const path = this.exists(templateDirname)
        if (path) {
            const files = (await readdir(path)).filter((file) => file.endsWith(fileExtension))
            if (files.length === 0) {
                throw new Error(`Template directory '${templateDirname}' is empty'`)
            }
            const results: { [path: string]: string } = {}
            for (const file of files) {
                results[file] = await readFile(Path.join(path, file), 'utf8')
            }
            return results
        }
        throw new Error(`Template directory '${templateDirname}' not found'`)
    }
}

export default TemplateProcessor
