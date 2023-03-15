<% if(moduleType === 'esm') { %>
    export imports.ui.animation;
<% } else { %>  
    module.exports = imports.ui.animation;
<% } %>
  