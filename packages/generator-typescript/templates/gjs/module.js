<%# This template is used for the generated `.js` file of each GIR module like Gtk-4.0, GObject-2.0, ... %>
  // @ts-expect-error
  import <%= name %> from 'gi://<%= name %>?version=<%= version %>';
  export { <%= name %> };
  export default <%= name %>;