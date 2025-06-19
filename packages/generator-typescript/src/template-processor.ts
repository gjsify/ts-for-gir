/**
 * The TemplateProcessor is used generate strings from templates files or template strings
 * For example, the signal methods are generated here
 */

import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import { join, dirname, relative, extname } from 'path'
import ejs from 'ejs'
import { __dirname } from './utils.ts'
import {
    Logger,
    APP_NAME,
    APP_USAGE,
    APP_SOURCE,
    APP_VERSION,
    PACKAGE_DESC,
    PACKAGE_KEYWORDS,
    DependencyManager,
    transformImportName,
    fileExists,
    NSRegistry,
} from '@ts-for-gir/lib'

import type { OptionsGeneration, Dependency, TemplateData } from '@ts-for-gir/lib'

const TEMPLATE_DIR = join(__dirname, './templates')

export class TemplateProcessor {
    protected log: Logger
    constructor(
        protected readonly data: TemplateData | undefined,
        protected readonly packageName: string,
        protected readonly registry: NSRegistry,
        protected readonly deps: Dependency[],
        protected readonly config: OptionsGeneration,
    ) {
        const dep = DependencyManager.getInstance(config)
        let outdir = config.outdir || './'
        // Make outdir relative to the root directory
        outdir = relative(config.root, outdir)
        const typeDir = outdir

        this.data = {
            ...this.data,
            APP_NAME,
            APP_USAGE,
            APP_SOURCE,
            APP_VERSION,
            PACKAGE_DESC: PACKAGE_DESC(packageName, this.data?.girModule?.libraryVersion),
            PACKAGE_KEYWORDS: PACKAGE_KEYWORDS(packageName),
            importName: transformImportName(packageName),
            dep,
            deps,
            typeDir,
            join,
            dirname,
        }
        this.log = new Logger(config.verbose, `TemplateProcessor (${this.packageName})`)
    }

    protected getAppendTemplateName(templateFilename: string) {
        let appendTemplateFilename = templateFilename

        if (appendTemplateFilename.endsWith('.d.ts')) {
            appendTemplateFilename = appendTemplateFilename.replace('.d.ts', '.append.d.ts')
        } else if (extname(appendTemplateFilename)) {
            const ext = extname(appendTemplateFilename)
            appendTemplateFilename = appendTemplateFilename.replace(ext, '.append' + ext)
        } else {
            appendTemplateFilename += '.append'
        }
        return appendTemplateFilename
    }

    /**
     * Loads and renders a template and gets the rendered templates back
     * @param templateFilename
     */
    public async load(
        templateFilename: string,
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<{ prepend: string; append: string }> {
        const fileContent = await this.read(templateFilename)
        const prepend = await this.render(fileContent, ejsOptions, overrideTemplateData)
        let append = ''

        const appendTemplateFilename = this.getAppendTemplateName(templateFilename)
        if (await this.exists(appendTemplateFilename)) {
            const appendFileContent = await this.read(appendTemplateFilename)
            append = await this.render(appendFileContent, ejsOptions, overrideTemplateData)
        }

        return { prepend, append }
    }

    /**
     * Loads and renders all templates in a directory and gets the rendered templates back
     * @param templateDirname
     * @param fileExtension
     * @param ejsOptions EJS options
     * @param overrideTemplateData Override template data if you want
     * @returns The rendered templates
     */
    public async loadAll(
        templateDirname: string,
        fileExtension: string,
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<{ [path: string]: string }> {
        const fileContents = await this.readAll(templateDirname, fileExtension)
        for (const file of Object.keys(fileContents)) {
            fileContents[file] = await this.render(fileContents[file], ejsOptions, overrideTemplateData)
        }
        return fileContents
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templateFilename The filename of the template
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputFilename The filename of the output file
     * @param content A (optional) string that should be appended to the rendered template
     * @param ejsOptions EJS options
     * @param overrideTemplateData Override template data if you want
     * @return The rendered template string
     */
    public async create(
        templateFilename: string,
        baseOutputPath: string,
        outputFilename: string,
        content = '',
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<string> {
        const { prepend, append } = await this.load(templateFilename, ejsOptions, overrideTemplateData)
        const code = prepend + '\n' + content + '\n' + append
        await this.write(code, baseOutputPath, outputFilename)
        return code
    }

    /**
     * Loads all templates with file extension in dir, render the templates and write the template to the filesystem
     * @param fileExtension The file extension of the templates
     * @param templateDirname The directory where the templates are located
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputDirname The child output directory of the base output directory where the templates should be written to
     * @param append A (optional) string that should be appended to the rendered template
     * @param ejsOptions EJS options
     * @param overrideTemplateData Override template data if you want
     * @return The rendered (and if possible prettified) templates
     */
    public async createAll(
        fileExtension: string,
        templateDirname: string,
        baseOutputPath: string,
        outputDirname: string,
        append = '',
        ejsOptions: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ) {
        const rendered = await this.loadAll(templateDirname, fileExtension, ejsOptions, overrideTemplateData)
        const result: { [path: string]: string } = {}
        for (const filename of Object.keys(rendered)) {
            const destPath = join(baseOutputPath, outputDirname, filename)
            result[destPath] = rendered[filename] + '\n' + append
            await this.write(result[destPath], baseOutputPath, join(outputDirname, filename))
        }

        return result
    }

    public getOutputPath(baseOutputPath: string, outputFilename: string): string {
        // Create a directory for each package if package.json mode is enabled otherwise use the output directory directly
        const filePath = this.config.package
            ? join(this.data?.importName || this.packageName, outputFilename)
            : outputFilename
        const outputPath = join(baseOutputPath, filePath)
        return outputPath
    }

    /**
     * Writes (and optionally formats) the `content` to the filesystem
     * @param content The content (normally the content of a rendered template file) that should be written to the filesystem
     * @param baseOutputPath The base output directory path where the templates should be written to
     * @param outputFilename The filename of the output file
     * @returns
     */
    public async write(content: string, baseOutputPath: string, outputFilename: string): Promise<string> {
        const outputPath = this.getOutputPath(baseOutputPath, outputFilename)

        if (!this.config.noPrettyPrint) {
            try {
                if (outputFilename.endsWith('.d.ts')) {
                    this.log.info('Formatting', outputPath)
                    content = await this.registry.getFormatter('dts').format(content)
                }
                // TODO: Fix me
                // if (outputFilename.endsWith('.json')) {
                //     this.log.info('Formatting', outputPath)
                //     content = await this.registry.getFormatter('json').format(content)
                // }
            } catch (error) {
                this.log.error('Failed to format output...', error)
            }
        }

        this.log.info('Writing to', outputPath)

        // write template result file
        await mkdir(dirname(outputPath), { recursive: true })
        await writeFile(outputPath, content, { encoding: 'utf8', flag: 'w' })

        return Promise.resolve(outputPath)
    }

    /**
     *
     * @param templateString The template content string that should be rendered
     * @param options EJS options
     * @param overrideTemplateData Override template data if you want
     * @returns
     */
    protected async render(
        templateString: string,
        options: Partial<ejs.Options> = {},
        overrideTemplateData: TemplateData = {},
    ): Promise<string> {
        try {
            const renderedTpl = await ejs.render(
                templateString,
                {
                    ...this.config,
                    ...this.data,
                    packageName: this.packageName,
                    ...overrideTemplateData,
                },
                {
                    async: true,
                    ...options,
                },
            )
            return renderedTpl
        } catch (error) {
            this.log.error(`Error on render "${templateString}":`, error)
            throw error
        }
    }

    /**
     * Checks if the template file or directory exists and returns the path if found
     * Tries first to load the file / directory from the environment-specific template folder and otherwise looks for it in the general template folder
     * @param templateFilename
     */
    public async exists(templateFilename: string): Promise<string | null> {
        const fullEnvironmentTemplatePath = join(TEMPLATE_DIR, templateFilename)
        const fullGeneralTemplatePath = join(TEMPLATE_DIR, templateFilename)
        if (await fileExists(fullEnvironmentTemplatePath)) {
            return fullEnvironmentTemplatePath
        }
        if (await fileExists(fullGeneralTemplatePath)) {
            return fullGeneralTemplatePath
        }
        return null
    }

    /**
     * Removes TypeScript directive comments from the first line of a template
     * @param content The template content
     * @return The template content without TypeScript directives in the first line
     */
    protected removeTypeScriptDirectives(content: string): string {
        const lines = content.split('\n')
        if (lines.length > 0 && (lines[0].includes('// @ts-nocheck') || lines[0].includes('// @ts-ignore'))) {
            lines.shift() // Remove the first line
            return lines.join('\n')
        }
        return content
    }

    /**
     * Reads a template file from filesystem and gets the raw string back
     * @param templateFilename
     * @return The raw template content
     */
    protected async read(templateFilename: string) {
        const path = await this.exists(templateFilename)
        if (path) {
            const content = await readFile(path, 'utf8')
            return this.removeTypeScriptDirectives(content)
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
        const path = await this.exists(templateDirname)
        if (path) {
            const files = (await readdir(path)).filter((file) => file.endsWith(fileExtension))
            if (files.length === 0) {
                throw new Error(`Template directory '${templateDirname}' is empty'`)
            }
            const results: { [path: string]: string } = {}
            for (const file of files) {
                const content = await readFile(join(path, file), 'utf8')
                results[file] = this.removeTypeScriptDirectives(content)
            }
            return results
        }
        throw new Error(`Template directory '${templateDirname}' not found'`)
    }
}

export default TemplateProcessor
