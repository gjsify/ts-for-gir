<% if(moduleType === 'esm') { %>
    export imports.ui.components;
<% } else { %>  
    module.exports = imports.ui.components;
<% } %>
  