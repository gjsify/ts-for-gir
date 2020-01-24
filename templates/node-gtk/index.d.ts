/* eslint-disable @typescript-eslint/triple-slash-reference */
<% for (const key in girModules) { -%>
    <% if (buildType === 'lib') { -%>
        import * as <%= girModules[key].name %> from './<%= key %>';
    <% } -%>
    <% if (buildType === 'types') { -%>
/// <reference path="<%= key %>.d.ts" />
    <% } -%>
<% } -%>

<% if (buildType === 'types') { -%>
declare module 'node-gtk' {
<% } -%>
    export function require(ns: string, ver?: string): any;
    <% for (const key in girModules) { -%>
        export function require(ns: '<%= girModules[key].name %>'): typeof <%= girModules[key].name %>;
        export function require(ns: '<%= girModules[key].name %>', ver?: '<%= girModules[key].version %>'): typeof <%= girModules[key].name %>;
    <% } -%>
    export function startLoop(): void;
<% if (buildType === 'types') { -%>
}
<% } -%>
