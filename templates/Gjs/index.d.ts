import * as Gjs from "./Gjs";
<% for (const key in girModules) { -%>
import * as <%= girModules[key].namespaceName %> from "./<%= key %>";
<% } -%>


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          <% for (const key in girModGrouped) { -%>
          <%= girModGrouped[key].name %>: <%= girModGrouped[key].types %>;
          <% } -%>
        }
        searchPath: string[];
    }
}

export { imports }
