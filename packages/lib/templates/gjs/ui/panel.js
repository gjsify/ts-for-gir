<% if(moduleType === 'esm') { %>
    export imports.ui.panel;
<% } else { %>  
    module.exports = imports.ui.panel;
<% } %>
  