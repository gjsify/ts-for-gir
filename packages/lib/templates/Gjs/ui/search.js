<% if(moduleType === 'esm') { %>
    export imports.ui.search;
<% } else { %>  
    module.exports = imports.ui.search;
<% } %>
  