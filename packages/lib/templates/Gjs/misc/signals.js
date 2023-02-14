<% if(moduleType === 'esm') { %>
    export imports.misc.signals;
<% } else { %>  
    module.exports = imports.misc.signals;
<% } %>
  