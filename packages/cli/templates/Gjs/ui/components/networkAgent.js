<% if(moduleType === 'esm') { %>
    export imports.ui.components.networkAgent;
<% } else { %>  
    module.exports = imports.ui.components.networkAgent;
<% } %>
  