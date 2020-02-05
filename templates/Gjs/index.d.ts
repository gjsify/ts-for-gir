import * as Gjs from "./Gjs";
<% for (const girModule of girModules) { -%>
import * as <%= girModule.namespaceName %> from "./<%= girModule.fullName %>";
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
          <% for (const girModule of girModules) { -%>
          <%= girModule.name %>: typeof <%= girModule.namespaceName %>;
          <% } -%>
        }
        searchPath: string[];
    }
}

export { imports }
