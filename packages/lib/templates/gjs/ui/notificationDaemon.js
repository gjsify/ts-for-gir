<% if(moduleType === 'esm') { %>
    export imports.ui.notificationDaemon;
<% } else { %>  
    module.exports = imports.ui.notificationDaemon;
<% } %>
  