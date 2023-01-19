<% if(moduleType === 'esm') { %>
    export imports.ui.components.automountManager;
<% } else { %>  
    module.exports = imports.ui.components.automountManager;
<% } %>
  