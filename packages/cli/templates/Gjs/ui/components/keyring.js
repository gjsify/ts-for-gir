<% if(moduleType === 'esm') { %>
    export imports.ui.components.keyring;
<% } else { %>  
    module.exports = imports.ui.components.keyring;
<% } %>
  