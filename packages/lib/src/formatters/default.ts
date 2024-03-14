import { Formatter } from "./formatter.js";

export class DefaultFormatter extends Formatter {
    format(source: string): Promise<string> {
        return Promise.resolve(source);
    }
}
