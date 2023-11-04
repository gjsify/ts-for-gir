import { Formatter } from "./formatter.js";

export class DefaultFormatter extends Formatter {
  format(source: string): string {
    return source;
  }
}
