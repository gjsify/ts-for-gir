<% if(moduleType === 'esm') { %>
    export imports.ui.messageTray;
<% } else { %>  
    module.exports = imports.ui.messageTray;
<% } %>
  