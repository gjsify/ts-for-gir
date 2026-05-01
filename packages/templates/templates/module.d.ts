<%_ if (!package && !externalDeps) { _%>
<%_ girModule.transitiveDependencies.forEach(dependency => { _%>
<%_ if (girModule.packageName !== dependency.packageName) { _%>
<%_ if (dependency.exists) { _%>
/// <reference path="./<%- dependency.importName %>.d.ts" />
<%_ if (dependency.packageName === 'cairo-1.0') { _%>
/// <reference path="./cairo.d.ts" />
<%_ } _%>
<%_ } _%>
<%_ } _%>
<%_ }) _%>
<%_ } _%>

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `<%- APP_NAME %>` or create a bug report on <%- APP_SOURCE %>
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

<%_ if (!package) { _%>
declare module 'gi://<%- girModule.namespace %>?version=<%- girModule.version %>' {

<%_ } _%>
<%_ if (package) { _%>
<%_ const Gjs = await dep.getGjs() _%>
import '<%- Gjs.importPath %>';

<%_ } _%>
// Module dependencies
<%_ girModule.transitiveDependencies.forEach(dependency => { _%>
<%_ if (girModule.packageName !== dependency.packageName) { _%>
<%_ if (dependency.exists || externalDeps) { _%>
<%_ if (dependency.exists && girModule.hasSymbol(dependency.namespace)) { _%>
<%_ if (noNamespace) { _%>
import * as <%- dependency.namespace %>__ from '<%- dependency.importPath %>';
<%_ } else { _%>
import <%- dependency.namespace %>__ from '<%- dependency.importPath %>';
<%_ } _%>
<%_ } else { _%>
<%- dependency.importDef %>
<%_ } _%>
<%_ } else { _%>
// WARN: Dependency not found: '<%- dependency.packageName %>'
<%_ } _%>
<%_ } _%>
<%_ }) _%>
<%_ if (!noNamespace) { _%>

export namespace <%- girModule.namespace %> {
<%_ } _%>
