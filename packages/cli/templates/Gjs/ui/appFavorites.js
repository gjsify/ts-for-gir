<% if(moduleType === 'esm') { %>
    export imports.ui.appFavorites;
<% } else { %>  
    module.exports = imports.ui.appFavorites;
<% } %>
  