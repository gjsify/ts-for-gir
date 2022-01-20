/* eslint-disable @typescript-eslint/triple-slash-reference */

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in <%= APP_NAME %> itself or create a bug report on <%= APP_SOURCE %>
 */

<%_ for (const girModule of girModules) { _%>
    <%_ if (buildType === 'lib') { _%>
        <% if(exportNamespace){ %>
import <%= girModule.importName %> from "./<%= girModule.packageName %>";
        <% } else { %>  
import * as <%= girModule.importName %> from './<%= girModule.packageName %>';
        <% } %>
    <%_ } else if (buildType === 'types') { _%>
import type <%= girModule.importName %> from "./<%= girModule.packageName %>";
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
<%_ if (buildType === 'types') { _%>
}
<%_ } _%>