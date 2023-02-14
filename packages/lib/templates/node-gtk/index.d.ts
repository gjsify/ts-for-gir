/* eslint-disable @typescript-eslint/triple-slash-reference */

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in <%= APP_NAME %> itself or create a bug report on <%= APP_SOURCE %>
 */

<%_ for (const girModule of girModules) { _%>
    <%_ if (buildType === 'lib') { _%>
        <% if(noNamespace){ %>
import type * as <%= girModule.importName %> from './<%= girModule.packageName %>.js';
        <% } else { %>
import type <%= girModule.importName %> from "./<%= girModule.packageName %>.js";
        <% } %>
    <%_ } else if (buildType === 'types') { _%>
import type <%= girModule.importName %> from "./<%= girModule.packageName %>.js";
    <%_ } _%>
<%_ } _%>

<%_ if (buildType === 'types') { _%>
declare module 'node-gtk' {
<%_ } _%>
    export function require(ns: string, ver?: string): any;
    <%_ for (const girModule of girModules) { _%>
    export function require(ns: '<%= girModule.namespace %>', ver: '<%= girModule.version %>'): typeof <%= girModule.importName %>;
    <%_ } _%>
    export function startLoop(): void;
    export function registerClass(object: any): void

    declare const gi: {
        require: typeof require,
        startLoop: typeof startLoop,
        registerClass: typeof registerClass,
    }
    export default gi
<%_ if (buildType === 'types') { _%>
}
<%_ } _%>