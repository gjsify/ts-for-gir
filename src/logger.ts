/**
 * A logger that displays information in different colors on the console.
 * In addition, the environment or the module currently being processed is also included as prepended to the logging string
 */

import chalk from 'chalk'
import { Environment } from './types'

export class Logger {
    constructor(
        private readonly environment: Environment | '',
        private readonly verbose: boolean,
        private readonly moduleName: string,
    ) {}
    private static prepend(args: any[], prepend: string): any[] {
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
            args = Logger.prepend(args, ' ')
        }
        if (logLevel) {
            if (this.moduleName.length > 0 || this.environment.length > 0) {
                args = Logger.prepend(args, ' ' + logLevel)
            } else {
                args = Logger.prepend(args, logLevel)
            }
        }
        if (this.moduleName.length > 0) {
            args = Logger.prepend(args, `[${this.moduleName}]`)
        }
        if (this.environment.length > 0) {
            args = Logger.prepend(args, `[${this.environment}]`)
        }

        return args
    }

    public log(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        return console.log(...args)
    }
    public dir(...args: any[]): void {
        if (!this.verbose) {
            return
        }
        args.forEach((arg) => {
            console.dir(arg)
        })
        return
    }
    public info(...args: any[]): void {
        if (!this.verbose) {
            return
        }
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

    // Static versions (Here it must be ensured that Verbose is activated)
    public static log(...args: any[]): void {
        return console.log(...args)
    }
    public static dir(...args: any[]): void {
        args.forEach((arg) => {
            console.dir(arg)
        })
        return
    }
    public static info(...args: any[]): void {
        args = this.prepend(args, 'INFO: ')
        return console.info(chalk.blue(...args))
    }
    public static warn(...args: any[]): void {
        args = this.prepend(args, 'WARN: ')
        return console.warn(chalk.yellow(...args))
    }
    public static debug(...args: any[]): void {
        args = this.prepend(args, 'DEBUG: ')
        return console.debug(chalk.yellowBright(...args))
    }
    public static error(...args: any[]): void {
        args = this.prepend(args, 'ERROR: ')
        return this.danger(args)
    }
    public static success(...args: any[]): void {
        console.log(chalk.green(...args))
    }
    public static danger(...args: any[]): void {
        console.log(chalk.red(...args))
    }
}
