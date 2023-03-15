<% if(moduleType === 'esm') { %>
    export imports.misc.dbusUtils;
<% } else { %>  
    module.exports = imports.misc.dbusUtils;
<% } %>
  