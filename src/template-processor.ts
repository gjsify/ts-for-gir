import fs from 'fs'
import Path from 'path'
import ejs from 'ejs'
import { Environment } from './types/environment'
import { Conversation } from './conversations'

const CLIEngine = require('eslint').CLIEngine
const lint = new CLIEngine({ ignore: false, fix: true, useEslintrc: true })

const TEMPLATE_DIR = __dirname + '/../templates'

export class TemplateProcessor {
    private templateDir: string
    constructor(protected readonly data: any, private readonly environment: Environment) {
        this.templateDir = Conversation.getEnvironmentDir(environment, TEMPLATE_DIR)
    }

    /**
     * Loads and renders a template and gets the rendered string back
     * @param templatePath
     */
    public load(templatePath: string): string {
        const fileContent = this.read(templatePath)
        return this.render(fileContent)
    }

    /**
     * Loads an template, render the template and write the template to the filesystem
     * @param templatePath
     * @param targetDir
     * @param targetFilename
     * @return The rendered (and if possible prettified) code string
     */
    public create(templatePath: string, targetDir: string, targetFilename: string): string {
        const fileContent = this.load(templatePath)
        const renderedCode = this.render(fileContent)
        const destPath = this.write(renderedCode, targetDir, targetFilename)
        const prettifiedCode = this.prettify(destPath)
        if (prettifiedCode) {
            this.write(prettifiedCode, targetDir, targetFilename)
        }
        return prettifiedCode || renderedCode
    }

    public render(templateString: string, additionalData: any = {}): string {
        const renderedCode = ejs.render(templateString, { ...this.data, ...additionalData })
        return renderedCode
    }

    /**
     * Reads a template file from filesystem and gets the unrendered string back
     * @param path
     * @return The path where the file was saved
     */
    public read(path: string): string {
        const fullTemplatePath = Path.join(this.templateDir, path)
        return fs.readFileSync(fullTemplatePath, 'utf8')
    }

    public write(content: string, targetDir: string, targetFilename: string): string {
        targetDir = Conversation.getEnvironmentDir(this.environment, targetDir)
        const destPath = Path.join(targetDir, targetFilename)

        // write template result file
        !fs.existsSync(targetDir) && fs.mkdirSync(targetDir, { recursive: true })
        fs.writeFileSync(destPath, content, { encoding: 'utf8', flag: 'w' })

        return destPath
    }

    protected prettify(path: string): string | null {
        const report = lint.executeOnFiles([path])
        if (report.results[0].output) {
            const targetCode = report.results[0].output
            return targetCode
        } else {
            // console.warn(report.results[0].messages);
            console.warn(`Can't prettify file: "${path}"`)
        }
        return null
    }
}

export default TemplateProcessor
