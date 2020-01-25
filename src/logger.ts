import chalk from 'chalk'
export class Logger {
    constructor(private verbose: boolean) {}
    log(...args: any[]): void {
        if (this.verbose) console.log(...args)
    }
    info(...args: any[]): void {
        if (this.verbose) console.info(chalk.blue(...args))
    }
    warn(...args: any[]): void {
        if (this.verbose) console.warn(chalk.yellow(...args))
    }
    success(...args: any[]): void {
        if (this.verbose) console.log(chalk.green(...args))
    }
    error(...args: any[]): void {
        console.log(chalk.red(...args))
    }
}
