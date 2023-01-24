<% if(moduleType === 'esm') { %>
    export imports.ui.dnd;
<% } else { %>  
    module.exports = imports.ui.dnd;
<% } %>
  