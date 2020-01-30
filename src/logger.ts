import chalk from 'chalk'
import { Environment } from './types'

export class Logger {
    /**
     * Singleton instances used to return one singleton for each configuration
     * See https://refactoring.guru/design-patterns/singleton/typescript/example
     */
    private static instances: { [key: string]: Logger } = {}
    private constructor(
        private readonly environment: Environment | '',
        private readonly verbose: boolean,
        private readonly moduleName: string,
    ) {}
    private static generateInstanceKey(environment: Environment | '' = '', verbose = true, moduleName = ''): string {
        return environment + String(verbose) + moduleName
    }
    public static getInstance(environment: Environment | '' = '', verbose = true, moduleName = ''): Logger {
        const instanceKey = Logger.generateInstanceKey(environment, verbose, moduleName)
        if (!Logger.instances[instanceKey]) {
            Logger.instances[instanceKey] = new Logger(environment, verbose, moduleName)
        }

        return Logger.instances[instanceKey]
    }
    private prepend(args: any[], prepend: string): any[] {
        if (typeof args[0] === 'string') {
            args[0] = `${prepend}${args[0]}`
        }
        return args
    }
    /**
     * Returns something like '[node][Gda-5.0] Could not find type 'Gda.SqlExpr' for 'expr''
     * @param args
     * @param logLevel
     */
    private prependInfos(args: any[], logLevel?: 'WARN:' | 'ERROR:' | 'INFO:' | 'DEBUG:'): any[] {
        if (logLevel || this.moduleName.length > 0 || this.environment.length > 0) {
            args = this.prepend(args, ' ')
        }
        if (logLevel) {
            if (this.moduleName.length > 0 || this.environment.length > 0) {
                args = this.prepend(args, ' ' + logLevel)
            } else {
                args = this.prepend(args, logLevel)
            }
        }
        if (this.moduleName.length > 0) {
            args = this.prepend(args, `[${this.moduleName}]`)
        }
        if (this.environment.length > 0) {
            args = this.prepend(args, `[${this.environment}]`)
        }

        return args
    }

    public log(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        return console.log(...args)
    }
    public info(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        args = this.prependInfos(args, 'INFO:')
        return console.info(chalk.blue(...args))
    }
    public warn(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        args = this.prependInfos(args, 'WARN:')
        return console.warn(chalk.yellow(...args))
    }
    public debug(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        args = this.prependInfos(args, 'DEBUG:')
        return console.debug(chalk.yellowBright(...args))
    }
    public error(...args: any[]): void {
        args = this.prependInfos(args, 'ERROR:')
        return this.danger(args)
    }
    public success(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        console.log(chalk.green(...args))
    }
    public danger(...args: any[]): void {
        console.log(chalk.red(...args))
    }
}
