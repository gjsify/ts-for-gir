// TODO: See ./cairo-1.0.d.ts
declare const Cairo: any;

export default Cairo;

<% if(moduleType === 'cjs') { %>
  // TODO declare named exports here, cairo doesn't have named exports for its esm module but for cjs we can use `const { Context } = imports.cairo` for that, see `./cairo.js`
<% } %>
