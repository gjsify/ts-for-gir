/**
 * A logger that displays information in different colors on the console.
 * In addition, the environment or the module currently being processed is also included as prepended to the logging string
 */

import { blue, gray, green, red, yellow, yellowBright } from "colorette";

export class Logger {
	private readonly verbose: boolean;
	private readonly moduleName: string;
	constructor(verbose: boolean, moduleName: string) {
		this.verbose = verbose;
		this.moduleName = moduleName;
	}
	private static prepend(txt: string, prepend: string): string {
		if (typeof txt === "string") {
			txt = `${prepend}${txt}`;
		}
		return txt;
	}
	/**
	 * Returns something like '[node][Gda-5.0] Could not find type 'Gda.SqlExpr' for 'expr''
	 * @param txt
	 * @param logLevel
	 */
	private prependInfo(txt: string, logLevel?: "WARN:" | "ERROR:" | "INFO:" | "DEBUG:"): string {
		if (logLevel || this.moduleName.length > 0) {
			txt = Logger.prepend(txt, " ");
		}
		if (logLevel) {
			if (this.moduleName.length > 0) {
				txt = Logger.prepend(txt, ` ${logLevel}`);
			} else {
				txt = Logger.prepend(txt, logLevel);
			}
		}
		if (this.moduleName.length > 0) {
			txt = Logger.prepend(txt, `[${this.moduleName}]`);
		}

		return txt;
	}

	public log(...args: unknown[]): void {
		if (!this.verbose) {
			return;
		}
		console.log(...args);
	}
	public dir(...args: unknown[]): void {
		if (!this.verbose) {
			return;
		}
		args.forEach((arg) => {
			console.dir(arg);
		});
		return;
	}
	public info(txt: string, ...args: unknown[]): void {
		if (!this.verbose) {
			return;
		}
		console.info(blue(txt), ...args);
	}
	public warn(txt: string, ...args: unknown[]): void {
		if (!this.verbose) {
			return;
		}
		txt = this.prependInfo(txt, "WARN:");
		console.warn(yellow(txt), ...args);
	}
	public debug(txt: string, ...args: unknown[]): void {
		if (!this.verbose) {
			return;
		}
		txt = this.prependInfo(txt, "DEBUG:");
		console.debug(yellowBright(txt), ...args);
	}
	public error(txt: string, ...args: unknown[]): void {
		txt = this.prependInfo(txt, "ERROR:");
		this.danger(txt, ...args);
	}
	public success(txt: string, ...args: unknown[]): void {
		if (!this.verbose) {
			return;
		}
		this.log(green(txt), ...args);
	}
	public danger(txt: string, ...args: unknown[]): void {
		console.error(red(txt), ...args);
	}
	public muted(txt: string, ...args: unknown[]): void {
		this.log(gray(txt), ...args);
	}
	public white(txt: string, ...args: unknown[]): void {
		this.log(txt, ...args);
	}
	public yellow(txt: string, ...args: unknown[]): void {
		this.log(yellow(txt), ...args);
	}
	public gray(txt: string, ...args: unknown[]): void {
		this.log(gray(txt), ...args);
	}
}
