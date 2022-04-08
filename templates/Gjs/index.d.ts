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

    export namespace console {
      /**
       * Logs a critical message if the condition is not truthy.
       * {@see console.error()} for additional information.
       *
       * @param condition a boolean condition which, if false, causes
       *   the log to print
       * @param data formatting substitutions, if applicable
       * @returns
       */
      export function assert(condition: boolean, ...data: any[]): void
  
      /**
       * Resets grouping and clears the terminal on systems supporting ANSI
       * terminal control sequences.
       *
       * In file-based stdout or systems which do not support clearing,
       * console.clear() has no visual effect.
       *
       */
       export function clear(): void
  
      /**
       * Logs a message with severity equal to {@see GLib.LogLevelFlags.DEBUG}.
       *
       * @param  {...any} data formatting substitutions, if applicable
       */
      export function debug(...data: any[]): void
  
      /**
       * Logs a message with severity equal to {@see GLib.LogLevelFlags.CRITICAL}.
       * Does not use {@see GLib.LogLevelFlags.ERROR} to avoid asserting and
       * forcibly shutting down the application.
       *
       * @param data formatting substitutions, if applicable
       */
      export function error(...data: any[]): void
  
      /**
       * Logs a message with severity equal to {@see GLib.LogLevelFlags.INFO}.
       *
       * @param data formatting substitutions, if applicable
       */
      export function info(...data: any[]): void
  
      /**
       * Logs a message with severity equal to {@see GLib.LogLevelFlags.MESSAGE}.
       *
       * @param data formatting substitutions, if applicable
       */
      export function log(...data: any[]): void
  
      // 1.1.7 table(tabularData, properties)
      export function table(tabularData: any, _properties: never): void
  
      /**
       * @param data formatting substitutions, if applicable
       */
      export function trace(...data: any[]): void
  
      /**
       * @param data formatting substitutions, if applicable
       */
      export function warn(...data: any[]): void
  
      /**
       * @param item an item to format generically
       * @param [options] any additional options for the formatter. Unused
       *   in our implementation.
       */
      export function dir(item: object, options: never): void
  
      /**
       * @param data formatting substitutions, if applicable
       */
      export function dirxml(...data: any[]): void
  
      // 1.2 Counting functions
      // https://console.spec.whatwg.org/#counting
  
      /**
       * Logs how many times console.count(label) has been called with a given
       * label.
       * {@see console.countReset()} for resetting a count.
       *
       * @param label unique identifier for this action
       */
      export function count(label: string): void
  
      /**
       * @param label the unique label to reset the count for
       */
      export function countReset(label: string): void
  
      // 1.3 Grouping functions
      // https://console.spec.whatwg.org/#grouping
  
      /**
       * @param data formatting substitutions, if applicable
       */
      export function group(...data: any[]): void
  
      /**
       * Alias for console.group()
       *
       * @param  {...any} data formatting substitutions, if applicable
       */
      export function groupCollapsed(...data: any[]): void
  
      /**
       */
       export function groupEnd(): void
  
      // 1.4 Timing functions
      // https://console.spec.whatwg.org/#timing
  
      /**
       * @param label unique identifier for this action, pass to
       *   console.timeEnd() to complete
       */
      export function time(label: string): void
  
      /**
       * Logs the time since the last call to console.time(label) where label is
       * the same.
       *
       * @param label unique identifier for this action, pass to
       *   console.timeEnd() to complete
       * @param data string substitutions, if applicable
       */
      export function timeLog(label: string, ...data: any[]): void
  
      /**
       * Logs the time since the last call to console.time(label) and completes
       * the action.
       * Call console.time(label) again to re-measure.
       *
       * @param label unique identifier for this action
       */
      export function timeEnd(label: string): void
  
      // Non-standard functions which are de-facto standards.
      // Similar to Node, we define these as no-ops for now.
  
      /**
       * @deprecated Not implemented in GJS
       *
       * @param _label unique identifier for this action, pass to
       *   console.profileEnd to complete
       */
      export function profile(_label: string): void
  
      /**
       * @deprecated Not implemented in GJS
       *
       * @param _label unique identifier for this action
       */
      export function profileEnd(_label: string): void
  
      /**
       * @deprecated Not implemented in GJS
       *
       * @param _label unique identifier for this action
       */
      export function timeStamp(_label: string): void
  
      // GJS-specific extensions for integrating with GLib structured logging
  
      /**
       * @param logDomain the GLib log domain this Console should print
       *   with. Defaults to 'Gjs-Console'.
       */
      export function setLogDomain(logDomain: string): void
  
      export const logDomain: string
    }

    interface BooleanConstructor {
        $gtype: GObject20.GType<boolean>;
    }

    interface NumberConstructor {
        $gtype: GObject20.GType<number>;
    }

    interface StringConstructor {
        $gtype: GObject20.GType<string>;
    }

    const ARGV: string[]

    // Timers
    // See https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/esm/_timers.js

    /**
     * @version Gjs 1.71.1
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait before running callback
     * @param args arguments to pass to callback
     */
     function setTimeout(callback: (...args: any[]) => any, delay: number, ...args: any[]): GLib20.Source

     /**
      * @version Gjs 1.71.1
      * @param callback a callback function
      * @param delay the duration in milliseconds to wait between calling callback
      * @param args arguments to pass to callback
      */
    function setInterval(callback: (...args: any[]) => any, delay: number, ...args: any[]): GLib20.Source
 
     /**
      * @version Gjs 1.71.1
      * @param timeout the timeout to clear
      */
    function clearTimeout(timeout: GLib20.Source): void
 
     /**
      * @version Gjs 1.71.1
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