/* eslint-disable @typescript-eslint/triple-slash-reference */
<% for (let i = 0; i < girModuleKeys.length; i++) { -%>
    <% if (buildType === 'lib') { -%>
        import * as <%= girModuleKeys[i] %> from './<%= girModuleKeys[i] %>';
    <% } -%>
    <% if (buildType === 'types') { -%>
/// <reference path="<%= girModuleKeys[i] %>.d.ts" />
    <% } -%>
<% } -%>

<% if (buildType === 'types') { -%>
declare module 'node-gtk' {
<% } -%>
    export function require(ns: string, ver?: string): any;
    <% for (let i = 0; i < girModuleKeys.length; i++) { -%>
        export function require(ns: '<%= girModuleKeys[i] %>'): typeof <%= girModuleKeys[i] %>;
        export function require(ns: '<%= girModuleKeys[i] %>', ver?: '<%= girModuleVersions[i] %>'): typeof <%= girModuleKeys[i] %>;
    <% } -%>
    export function startLoop(): void;
<% if (buildType === 'types') { -%>
}
<% } -%>
