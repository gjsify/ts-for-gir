/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in <%= APP_NAME %> itself or create a bug report on <%= APP_SOURCE %>
 */

import type * as Gjs from "./Gjs";
<%_ for (const girModule of girModules) { _%>
  <%_ if(useNamespace){ _%>
import type <%= girModule.importName %> from "./<%= girModule.packageName %>";
    <%_ } else { _%>  
import type * as <%= girModule.importName %> from "./<%= girModule.packageName %>";
    <%_ } _%>
<%_ } _%>

declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    // Timers
    // See https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/esm/_timers.js

    /**
     * Since Gjs >= 1.71.1
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait before running callback
     * @param args arguments to pass to callback
     */
     function setTimeout(callback: (...args: any[]) => any, delay: number, ...args: any[]): GLib20.Source

     /**
      * Since Gjs >= 1.71.1
      * @param callback a callback function
      * @param delay the duration in milliseconds to wait between calling callback
      * @param args arguments to pass to callback
      */
    function setInterval(callback: (...args: any[]) => any, delay: number, ...args: any[]): GLib20.Source
 
     /**
      * Since Gjs >= 1.71.1
      * @param timeout the timeout to clear
      */
    function clearTimeout(timeout: GLib20.Source): void
 
     /**
      * Since Gjs >= 1.71.1
      * @param timeout the timeout to clear
      */
    function clearInterval(timeout: GLib20.Source): void

    const imports: typeof Gjs & {
        gi: {
          <%_ for (const girModuleGroup of girModulesGrouped) { _%>
            <%= girModuleGroup.namespace %>: <%_ for (const [i, girModule] of girModuleGroup.modules.entries()) { _%>
              typeof <%= girModule.module.importName %>
              <%_ if (i !== girModuleGroup.modules.length - 1) { _%>
                |
              <%_ } _%>
            <%_ } _%>
          <%_ } _%>
        }
        versions: {
          <%_ for (const girModuleGroup of girModulesGrouped) { _%>
            <%= girModuleGroup.namespace %>: <%_ for (const [i, girModule] of girModuleGroup.modules.entries()) { _%>
              '<%= girModule.module.version %>'
              <%_ if (i !== girModuleGroup.modules.length - 1) { _%>
                |
              <%_ } _%>
            <%_ } _%>
          <%_ } _%>
        }
        searchPath: string[];
    }
}

export { imports }
export default imports