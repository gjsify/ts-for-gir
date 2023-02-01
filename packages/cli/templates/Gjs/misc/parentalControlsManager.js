<% if(moduleType === 'esm') { %>
    export imports.misc.parentalControlsManager;
<% } else { %>  
    module.exports = imports.misc.parentalControlsManager;
<% } %>
  