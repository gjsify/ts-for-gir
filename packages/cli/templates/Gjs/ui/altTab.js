<% if(moduleType === 'esm') { %>
    export imports.ui.altTab;
<% } else { %>  
    module.exports = imports.ui.altTab;
<% } %>
  