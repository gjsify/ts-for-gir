/* eslint-disable @typescript-eslint/triple-slash-reference */
<% for (const girModule of girModules) { -%>
    <% if (buildType === 'lib') { -%>
        import * as <%= girModule.name %> from './<%= girModule.packageName %>';
    <% } -%>
    <% if (buildType === 'types') { -%>
/// <reference path="<%= girModule.packageName %>.d.ts" />
    <% } -%>
<% } -%>

<% if (buildType === 'types') { -%>
declare module 'node-gtk' {
<% } -%>
    export function require(ns: string, ver?: string): any;
    <% for (const girModule of girModules) { -%>
        export function require(ns: '<%= girModule.name %>'): typeof <%= girModule.name %>;
        export function require(ns: '<%= girModule.name %>', ver?: '<%= girModule.version %>'): typeof <%= girModule.name %>;
    <% } -%>
    export function startLoop(): void;
<% if (buildType === 'types') { -%>
}
<% } -%>
