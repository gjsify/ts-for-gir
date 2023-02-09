<% if(moduleType === 'esm') { %>
    export imports.ui.calendar;
<% } else { %>  
    module.exports = imports.ui.calendar;
<% } %>
