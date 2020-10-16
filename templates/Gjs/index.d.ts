import * as Gjs from "./Gjs";
<%_ for (const girModule of girModules) { _%>
import * as <%= girModule.importName %> from "./<%= girModule.packageName %>";
<%_ } _%>


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          <%_ for (const girModule of girModules) { _%>
          <%= girModule.name %>: typeof <%= girModule.importName %>
          <%_ } _%>
        }
        versions: {
          <%_ for (const girModule of girModules) { _%>
            <%= girModule.name %>: string
            <%_ } _%>
        }
        searchPath: string[];
    }
}

export { imports }
