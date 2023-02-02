<% if(moduleType === 'esm') { %>
    export imports.ui.mpris;
<% } else { %>  
    module.exports = imports.ui.mpris;
<% } %>
  