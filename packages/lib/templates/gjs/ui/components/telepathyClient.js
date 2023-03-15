<% if(moduleType === 'esm') { %>
    export imports.ui.components.telepathyClient;
<% } else { %>  
    module.exports = imports.ui.components.telepathyClient;
<% } %>
  