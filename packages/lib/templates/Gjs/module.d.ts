<%# This template is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ... %>
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `<%= APP_NAME %>` or create a bug report on <%= APP_SOURCE %>
 */

<%# Disabled, this declares the module but this seems to be not working %>
<%_ if(false) { %>
    declare module "gi://<%- name %>?version=<%- version %>" {
        export default <%= name %>;
    }
    declare module "gi://<%- name %>" {
        export default <%= name %>;
    }
<%_ } _%>