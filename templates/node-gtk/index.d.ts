/* eslint-disable @typescript-eslint/triple-slash-reference */
<% for (let i = 0; i < girModuleKeys.length; i++) { -%>
    <% if (buildtype === 'lib') { -%>
        import * as <%= girModuleKeys[i] %> from './<%= girModuleKeys[i] %>';
    <% } -%>
    <% if (buildtype === 'typeDefinition') { -%>
        /// <reference path="<%= girModuleKeys[i] %>.d.ts" />
    <% } -%>
<% } -%>

<% if (buildtype === 'typeDefinition') { -%>
declare module 'node-gtk' {
<% } -%>
    export function require(ns: string, ver?: string): any;
    <% for (let i = 0; i < girModuleKeys.length; i++) { -%>
        export function require(ns: '<%= girModuleKeys[i] %>'): typeof <%= girModuleKeys[i] %>;
        export function require(ns: '<%= girModuleKeys[i] %>', ver?: '<%= girModuleVersions[i] %>'): typeof <%= girModuleKeys[i] %>;
    <% } -%>
    export function startLoop(): void;
<% if (buildtype === 'typeDefinition') { -%>
}
<% } -%>
