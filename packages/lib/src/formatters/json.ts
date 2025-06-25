import { Formatter } from "./formatter.ts";

export class JSONFormatter extends Formatter {
	format(source: string): Promise<string> {
		return Promise.resolve(JSON.stringify(JSON.parse(source), null, 4));
	}
}
