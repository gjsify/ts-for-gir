<% if(exportDefault){ %>
    import <%= name %> from 'gi://<%= name %>?version=<%= version %>';
    export default <%= name %>;
  <% } else{ %>  
    imports.gi.versions.<%= name %> = '<%= version %>'
    module.exports = imports.gi.<%= name %>
<% } %>

