import { Formatter } from "./formatter.js";

export class JSONFormatter extends Formatter {
  format(source: string): string {
    return JSON.stringify(JSON.parse(source), null, 4);
  }
}
