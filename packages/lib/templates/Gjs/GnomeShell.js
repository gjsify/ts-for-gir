<% if(moduleType === 'esm') { %>
    export const misc = imports.misc;
    export const ui = imports.ui;
    export default {
      misc,
      ui
    }
  <% } else { %>  
    module.exports = {
      misc: imports.misc,
      ui: imports.ui
    }
  <% } %>
  