<%# This EJS template is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ... %>
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `<%= APP_NAME %>` or create a bug report on <%= APP_SOURCE %>
 */

<%_ if(package){ _%>
import './<%= importName %>-ambient.d.ts';
<%_ } _%>
import './<%= importName %>-import.d.ts';