<% if(moduleType === 'esm') { %>
    export imports.ui.iconGrid;
<% } else { %>  
    module.exports = imports.ui.iconGrid;
<% } %>
  