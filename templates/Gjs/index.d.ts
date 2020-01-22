import * as Gjs from "./Gjs";
<% for (let i = 0; i < girModuleKeys.length; i++) { -%>
    import * as <%= girModuleKeys[i] %> from "./<%= girModuleKeys[i] %>";
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
          <% for (let i = 0; i < girModuleKeys.length; i++) { -%>
            <%= girModuleKeys[i] %>: typeof <%= girModuleKeys[i] %>;
          <% } -%>
        }
        searchPath: string[];
    }
}

export { imports }
