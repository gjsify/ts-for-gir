<% if(moduleType === 'esm') { %>
    export imports.ui.components.polkitAgent;
<% } else { %>  
    module.exports = imports.ui.components.polkitAgent;
<% } %>
  