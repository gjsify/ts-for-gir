<% if(moduleType === 'esm') { %>
    export imports.ui.components.autorunManager;
<% } else { %>  
    module.exports = imports.ui.components.autorunManager;
<% } %>
  