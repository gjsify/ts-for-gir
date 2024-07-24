<%_ const Cairo = await dep.get('cairo', '1.0') _%>

<%_ if(!package){ -%>
declare module 'cairo' {
<% } -%>

// Cairo 1.0
<%- Cairo ? Cairo.importDef : '' %>

// TODO: Add overrides here

// See
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairoModule.js
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairo.js
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/cairo.md

// image_surface_create -> ImageSurface
// Context.constructor(surface: cairo.ImageSurface)
// ...

// Re-export Cairo 1.0
export default <%- Cairo ? Cairo.namespace : '' %>;

<%_ if(!package){ -%>
}
<% } -%>