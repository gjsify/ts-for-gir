import { Formatter } from "./formatter.ts";

export class DefaultFormatter extends Formatter {
    format(source: string): Promise<string> {
        return Promise.resolve(source);
    }
}
