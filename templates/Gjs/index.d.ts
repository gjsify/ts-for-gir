import type * as Gjs from "./Gjs";
// TODO add support for multiple versions
<%_ for (const girModule of girModules) { _%>
import type * as <%= girModule.importName %> from "./<%= girModule.packageName %>";
<%_ } _%>


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
      [key: string]: any;
      gi: {
        [key: string]: any;
      }
      versions: {
        [key: string]: any;
      }
      searchPath: string[];
    }
    // TODO add support for multiple versions
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          // <%_ for (const girModule of girModules) { _%>
          // <%= girModule.namespace %>: typeof <%= girModule.importName %>
          // <%_ } _%>
          <%_ for (const girModuleGroup of girModulesGrouped) { _%>
          <%= girModuleGroup.namespace %>: <% for (const [i, girModule] of girModuleGroup.modules) {%> typeof <%= girModule.module.importName %> <% if (i !== girModuleGroup.modules.length - 1) { %> | <%}%> <%}%>
          <%_ } _%>
        }
        versions: {
          // <%_ for (const girModule of girModules) { _%>
          //   <%= girModule.namespace %>: string
          // <%_ } _%>
          <%_ for (const girModuleGroup of girModulesGrouped) { _%>
            <%= girModuleGroup.namespace %>: <% for (const [i, girModule] of girModuleGroup.modules) {%> typeof <%= girModule.module.version %> <% if (i !== girModuleGroup.modules.length - 1) { %> | <%}%> <%}%>
          <%_ } _%>
        }
        searchPath: string[];
    }
}

export { imports }
