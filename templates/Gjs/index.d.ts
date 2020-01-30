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
          <% for (const key in girModules) { -%>
          <%= girModules[key].name %>: typeof <%= girModules[key].namespaceName %>;
          <% } -%>
        }
        searchPath: string[];
    }
}

export { imports }
