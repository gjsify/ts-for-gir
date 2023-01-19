<% if(moduleType === 'esm') { %>
    export imports.ui.main;
<% } else { %>  
    module.exports = imports.ui.main;
<% } %>
  