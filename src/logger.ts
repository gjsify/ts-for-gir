import chalk from 'chalk'
export class Logger {
    /**
     * Singleton instance
     * See https://refactoring.guru/design-patterns/singleton/typescript/example
     */
    private static instance: Logger
    private verbose = true
    private constructor(verbose?: boolean) {
        if (typeof verbose === 'boolean') {
            this.verbose = verbose
        }
    }
    private static prependLogLevel(args: any[], prepend: string): any[] {
        if (typeof args[0] === 'string') {
            args[0] = `${prepend} ${args[0]}`
        }
        return args
    }
    public static getInstance(verbose?: boolean): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger(verbose)
        }

        return Logger.instance
    }
    log(...args: any[]): void {
        if (this.verbose) console.log(...args)
    }
    info(...args: any[]): void {
        if (this.verbose) console.info(chalk.blue(...args))
    }
    warn(...args: any[]): void {
        if (this.verbose) {
            args = Logger.prependLogLevel(args, 'WARN:')
            console.warn(chalk.yellow(...args))
        }
    }
    error(...args: any[]): void {
        if (this.verbose) {
            args = Logger.prependLogLevel(args, 'ERROR:')
            return this.danger(args)
        }
    }
    success(...args: any[]): void {
        if (this.verbose) console.log(chalk.green(...args))
    }
    danger(...args: any[]): void {
        console.log(chalk.red(...args))
    }
}
