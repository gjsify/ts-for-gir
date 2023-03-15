<% if(moduleType === 'esm') { %>
    export imports.ui.layout;
<% } else { %>  
    module.exports = imports.ui.layout;
<% } %>
  