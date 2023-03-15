<% if(moduleType === 'esm') { %>
    export imports.ui.ripples;
<% } else { %>  
    module.exports = imports.ui.ripples;
<% } %>
  